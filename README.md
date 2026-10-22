# Sparkle Clean Co. - portfolio demo landing page

A concept website for a **fictional** cleaning company, built by RapidPixel as a portfolio demo. It is **not** a real business and shows no real contact details, reviews or results.

The goal of the page is to get visitors to fill in the quote form.

## Portfolio project summary

| | |
|---|---|
| **Project** | Sparkle Clean Co. - Cleaning Business Landing Page Demo |
| **Type** | Self-initiated concept project (not paid client work) |
| **Built by** | RapidPixel |
| **Live demo** | https://promiseoluo66-cmyk.github.io/sparkle-clean-co/ |
| **Repository** | https://github.com/promiseoluo66-cmyk/sparkle-clean-co |
| **Cost** | Free to build and host. No paid tools or services. |

### Technologies used

- HTML
- CSS
- JavaScript (plain, no libraries)
- GitHub Pages (free hosting)

### Features implemented

- Responsive, mobile-first landing page
- Mobile navigation menu that opens and closes
- Service sections (four cleaning services) and a "why choose us" section
- Three-step process section
- Quote-request form
- Client-side form validation with clear error messages
- Honest demo-mode submission message

### Important: the form does not send real enquiries yet

The quote form only checks the answers in the browser. **No enquiry is sent, stored or emailed.** After a valid submission it says so on screen. Real delivery needs a form service connected later (see "Connect real enquiries later" below).

### Status

- **Checked (22 Oct 2026):** the live demo URL loads and serves the full page content (header, hero, services, process, quote form, footer).
- **Still to test by hand:** phone and desktop layout, the mobile menu, every link and button, and the form (empty submit, invalid email, valid demo submit).

### Portfolio entry (copy and paste)

**Sparkle Clean Co. - Cleaning Business Landing Page Demo**

A concept landing page for a fictional cleaning company, built to show a clean, mobile-friendly layout with a quote-request form. It includes service sections, a simple process section, and client-side form validation. This is a self-initiated demo, not client work. The form currently runs in demo mode and does not send real enquiries; it is built so a free form service can be connected later.

Built with HTML, CSS and JavaScript, hosted free on GitHub Pages.

Live demo: https://promiseoluo66-cmyk.github.io/sparkle-clean-co/

## Files

| File | What it does |
|---|---|
| `index.html` | The page content: header, hero, services, why choose us, process, quote form, footer |
| `style.css` | All styling. Colours and spacing are variables at the top (`:root`) |
| `script.js` | Mobile menu, form checking, and the demo/real submission switch |
| `README.md` | This guide |

## Preview on your computer

Download the files, keep them in one folder, and open `index.html` in a browser. No installation needed.

## Publish free with GitHub Pages

1. Open the repository on GitHub and go to **Settings**.
2. Tap **Pages** in the left menu.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch **main** and folder **/ (root)**, then tap **Save**.
5. Wait a minute or two. GitHub shows the site address at the top of the Pages screen.

The repository must be public for free Pages hosting.

## How the form behaves now (demo mode)

GitHub Pages cannot receive form data by itself. So right now the form:

- checks every field (required fields, email format, date, message length, consent box)
- shows errors next to fields that need fixing
- shows this message when everything is valid: *"This portfolio demo form has been validated, but no enquiry was sent. Connect a form endpoint to receive real submissions."*

Nothing is sent anywhere and no email is delivered.

## Connect real enquiries later

1. Create a free account with a form service that gives you a form URL (for example Formspree, or a similar one). Check its current free limits and privacy terms yourself.
2. Open `script.js` and paste your URL between the quotes in `const FORM_ENDPOINT = "";`.
3. Save and commit. The form will then send entries to that service.

Do not publish secret keys. A form URL is meant to be public, but never paste passwords or API secrets into these files.

## Test the form after connecting it

1. Submit it empty and check that errors appear.
2. Enter an invalid email and check the error.
3. Submit a valid test entry and check that it appears in your form service and that the email notification arrives.
4. Test on a real phone.

## Known limitations and checks still to do

- The hero uses a drawn illustration, not a photo, so there are no image links that can break.
- Fonts are system fonts, so the look varies slightly between devices.
- A browser could not be run during the build. Check the page yourself at about 320-390px wide and on desktop, open and close the mobile menu, test every link and button, and look at the browser console for errors.
- No real enquiry delivery exists until a form endpoint is connected and tested.
