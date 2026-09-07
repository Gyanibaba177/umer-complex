# Umer Child & Mother Care Complex — Website

Next.js 14 + TypeScript + Tailwind + Framer Motion landing page.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Before you publish — please edit these

1. **WhatsApp number & message** — `lib/site-config.ts`
   - `WHATSAPP_NUMBER`: your real number, country code first, digits only (e.g. `923001234567`)
   - `WHATSAPP_DEFAULT_MESSAGE`, `CLINIC_ADDRESS`, `CLINIC_PHONE`, `CLINIC_EMAIL`, `CLINIC_HOURS`

2. **Stats** — `components/TrustStrip.tsx` (years of service, number of doctors, etc. — currently placeholders)

3. **Doctors** — `components/Doctors.tsx` (add real names, specialties and, if you like, photos instead of initials)

4. **Logo** — `public/logo.jpeg` (already using your uploaded logo; swap the file if you want the vertical version instead)

5. **Map** — `components/Contact.tsx` currently searches Google Maps for the complex name. For a pinned exact location, replace the map `src` with an embed link from Google Maps (Share → Embed a map).

## Deploy

The easiest free option is [Vercel](https://vercel.com): push this folder to a GitHub repo, import it on Vercel, and it deploys automatically — no paid plan needed.
