# Live Connect — Next.js port

Faithful Next.js (App Router, TypeScript) port of the original static `index.html` Live Connect portfolio template. Bootstrap 4 CSS and the original jQuery plugins (slicknav, owl carousel, venobox, wow, smooth-scroll, simple-text-rotator) are served from `public/` and loaded via `next/script`. The PHP contact handler is replaced by a `/api/contact` route that sends mail via nodemailer.

## Setup

```powershell
npm install
copy .env.example .env.local   # then edit .env.local
npm run dev
```

Open http://localhost:3000.

## Environment variables

See `.env.example`. The contact form will respond with a 500 until valid SMTP credentials are set. The Google Maps API key is optional — if absent, the map widget on the contact section won't render but the rest of the page is unaffected.

## Layout

- `app/layout.tsx` — `<html>`/`<head>`/`<body>`, CSS `<link>` tags, all jQuery + plugin scripts.
- `app/page.tsx` — converted markup from the original `index.html` body.
- `app/api/contact/route.ts` — replacement for `contact.php`.
- `public/css`, `public/img`, `public/fonts`, `public/js/vendor` — copied verbatim from the original site.
- `public/js/main.js` — original site script, with a small patch so the preloader and Google Map still initialize when loaded after `window.load` has already fired.
- `public/js/contact.js` — unchanged; reads the form's `action` attribute (now `/api/contact`).
