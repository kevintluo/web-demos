# Harbour Bean Café: demo site

Concept site for a fictional café in Steveston, Richmond BC. It shows the **Standard package** (up to 5 pages).

Open `index.html` directly, or serve the folder (e.g. `python -m http.server`) for the full experience.

## Pages
- **Home** (`index.html`): full-screen photo hero with two calls to action, a category strip, the café's story with stats, three featured items with prices, opening hours and location
- **Menu** (`menu.html`): four sections (coffee, tea, bakery, brunch) with dotted price leaders and a sticky jump bar
- **Gallery** (`gallery.html`): a grid of 9 photos with a click-to-enlarge lightbox that closes with Esc or a tap outside
- **Contact** (`contact.html`): reservation form, hours, phone and email, embedded Google Map

## Features
- Fully responsive, with a mobile hamburger menu
- Reservation form with browser validation and a thank-you message, front-end only (nothing is sent)
- Date picker blocks past dates
- Social icons for Instagram, Facebook and TikTok
- Accessibility: skip link, alt text on every image, labelled form fields, `aria-current` nav, keyboard-friendly lightbox using the native `<dialog>`, and white text on copper buttons at 4.5:1 or better
- Search-friendly page titles and meta descriptions

## Tech
HTML, Tailwind CSS (CDN) and vanilla JS, with no build step. The shared theme is in `assets/tw.js` and the behaviour in `assets/main.js`.

Photos are from Unsplash (free to use). The business, copy, address and phone number are fictional (the phone number uses the 555 range).

Concept project by Kevin L.
