# Mesfin Getachew & Associates — Website (Next.js)

## Run it locally
```
npm install
npm run dev
```
Then open http://localhost:3000

## Build for production
```
npm run build
npm run start
```

## Replace the founder's photo
The About page currently shows a placeholder monogram at:
`public/images/mesfin-getachew.svg`

Replace it with the real photo:
1. Add the photo file to `public/images/`, e.g. `mesfin-getachew.jpg`
2. In `src/components/AboutTabs.tsx`, change the `src` on the `<Image .../>` tag
   from `/images/mesfin-getachew.svg` to your new file path.

## Add gallery photos
Event photos go in `public/images/gallery/`. The Gallery tab in
`src/components/AboutTabs.tsx` currently renders animated placeholder cards —
swap them for `<Image>` tags pointing at your uploaded files.

## Structure
- `src/app/page.tsx` — Home
- `src/app/about/page.tsx` + `src/components/AboutTabs.tsx` — About Us
  (About the Company / Our Team / Gallery / Prominent Clients — switchable via
  the animated dropdown in the header, or the pill-tabs on the page itself)
- `src/app/practice-areas/page.tsx` — Practice Area
- `src/app/publications/page.tsx` — Publications
- `src/app/contact/page.tsx` — Contact (demo form, wire up an API route or
  email service to actually receive submissions)
- `src/components/LegalBackdrop.tsx` — the animated legal-motif background
  (scales of justice, columns, drifting particles) used on every page
- Fonts: Fraunces (display/serif) + Manrope (body) — self-hosted via
  `@fontsource-variable`, only two typefaces used across the whole site
