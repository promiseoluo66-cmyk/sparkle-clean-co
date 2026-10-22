// Sparkle Clean Co. - demo site script (plain JavaScript, no libraries).

// STEP TO CONNECT REAL ENQUIRIES:
// Paste the URL from a free form service here, e.g. "https://formspree.io/f/yourFormId".
// While this is empty, the form runs in demo mode and sends nothing.
const FORM_ENDPOINT = "";

const $ = (s, r = document) => r.querySelector(s);

// Footer year
$("#year").textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = $("#menuBtn");
const nav = $("#nav");
function setMenu(open) {
  nav.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
}
menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); menuBtn.focus(); }
});
window.matchMedia("(min-width: 960px)").addEventListener("change", (m) => { if (m.matches) setMenu(false); });

// Form
const form = $("#quoteForm");
const status = $("#status");
const details = $("#details");
const count = $("#count");
const dateInput = $("#date");

function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}
dateInput.min = todayISO();

details.addEventListener("input", () => { count.textContent = details.value.length + " / 600"; });

// Service cards pre-select the matching service
document.querySelectorAll("[data-service]").forEach((a) => {
  a.addEventListener("click", () => { $("#service").value = a.dataset.service; });
});

const rules = {
  name: (v) => (v.trim().length >= 2 ? "" : "Enter your full name."),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Enter a valid email address, like name@example.com."),
  phone: (v) => (!v.trim() || /^[+\d][\d\s().-]{6,19}$/.test(v.trim()) ? "" : "Use only digits, spaces, + or - in the phone number, or leave it blank."),
  service: (v) => (v ? "" : "Choose the service you need."),
  date: (v) => (!v || v >= todayISO() ? "" : "Choose today or a future date."),
  details: (v) => (v.trim().length >= 10 ? "" : "Add a few more details (at least 10 characters)."),
  consent: (v, el) => (el.checked ? "" : "Tick the box so we know we may reply to you."),
};

function check(field) {
  const el = form.elements[field];
  const msg = rules[field](el.value, el);
  const out = $("#e-" + field);
  out.textContent = msg;
  if (msg) el.setAttribute("aria-invalid", "true"); else el.removeAttribute("aria-invalid");
  return !msg;
}

Object.keys(rules).forEach((f) => {
  const el = form.elements[f];
  el.addEventListener("blur", () => { if (el.value || el.type === "checkbox" ? el.dataset.touched : false) check(f); });
  el.addEventListener("input", () => { el.dataset.touched = "1"; if (el.getAttribute("aria-invalid")) check(f); });
  el.addEventListener("change", () => { el.dataset.touched = "1"; if (el.getAttribute("aria-invalid")) check(f); });
});

function show(text, bad) {
  status.textContent = text;
  status.classList.toggle("bad", !!bad);
  status.focus();
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.textContent = "";
  const results = Object.keys(rules).map((f) => [f, check(f)]);
  const firstBad = results.find(([, ok]) => !ok);
  if (firstBad) {
    form.elements[firstBad[0]].focus();
    show("Please fix the highlighted fields and try again.", true);
    return;
  }
  if (!FORM_ENDPOINT) {
    show("This portfolio demo form has been validated, but no enquiry was sent. Connect a form endpoint to receive real submissions.");
    return;
  }
  const btn = form.querySelector("button[type=submit]");
  btn.disabled = true;
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    });
    if (!res.ok) throw new Error("Request failed");
    show("Thank you. Your quote request was sent.");
    form.reset();
    count.textContent = "0 / 600";
  } catch (err) {
    show("Your request could not be sent. Please check your connection and try again.", true);
  } finally {
    btn.disabled = false;
  }
});
