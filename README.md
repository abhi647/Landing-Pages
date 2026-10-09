# Seven Billion Analytics Landing Page

A lively, responsive reporting-assessment landing page built as a HubSpot-compatible
coded page template. It is dependency-free apart from hosted Google Fonts.

## Run locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## HubSpot

The repository root is the theme root:

- `index.html` — coded page template with HubSpot template annotations
- `theme.json` and `fields.json` — theme metadata and brand-color fields
- `styles.css` — responsive presentation
- `mobile.css` — mobile-menu behavior
- `script.js` — reveal motion, metric counters, and mobile navigation

Upload the folder with the HubSpot CLI:

```bash
hs upload . seven-billion-reporting
```

In Design Manager, create a page from **Seven Billion — Reporting Accelerator**.
Replace the demonstration form handler with your existing HubSpot form before publishing.
