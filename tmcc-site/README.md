# The Missed Call Company — Website

A premium, dynamic marketing site built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed to deploy to **Vercel** in minutes.

It features a cinematic hero with scroll parallax, animated signal rings, count-up statistics, a sticky scroll process section, scroll-reveal cards throughout, a scroll-progress bar, and a fully responsive layout — built to feel premium and trustworthy, never generic.

---

## What's inside

```
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx          The full page (composes all sections)
  globals.css       Base styles, brand variables, fonts, reduced-motion support
components/
  Navbar.tsx        Sticky nav that solidifies on scroll
  Hero.tsx          Hero with parallax + animated headline + signal rings
  Stats.tsx         Count-up statistics on scroll
  Services.tsx      The six services as reveal cards
  Process.tsx       "How it works" with a sticky left column
  Manifesto.tsx     Full-width editorial quote band with parallax
  WhyUs.tsx         Differentiation section
  Pricing.tsx       Three pricing tiers
  CTA.tsx           Final call-to-action
  Footer.tsx        Footer
  Logo.tsx          The brand SVG logo
  ScrollProgress.tsx  Top scroll-progress bar
  Reveal.tsx        Reusable scroll-reveal wrapper
```

---

## Run it locally (optional)

You'll need [Node.js](https://nodejs.org) (version 18.18 or newer) installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000

---

## Deploy to Vercel (the easy way)

### Option A — GitHub + Vercel (recommended)

1. Create a free account at [github.com](https://github.com) and a new **empty repository** (e.g. `missed-call-company`).
2. Push this folder to that repository:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/missed-call-company.git
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com), sign up with your GitHub account.
4. Click **Add New → Project**, select your repository, and click **Deploy**.
5. Vercel auto-detects Next.js — just click Deploy. Your site is live in ~1 minute.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel
```
Follow the prompts. Run `vercel --prod` to push to production.

### Connect your domain

In the Vercel dashboard: **Project → Settings → Domains → Add** `missedcallcompany.com`, then point your domain's nameservers (or add the records Vercel shows) at your registrar. Vercel handles HTTPS automatically.

---

## Editing the content

All copy lives in plain text inside the component files — open any file in `components/` and edit the text between the tags.

- **Prices** → `components/Pricing.tsx` (the `tiers` array)
- **Services** → `components/Services.tsx` (the `services` array)
- **Stats** → `components/Stats.tsx` (the `stats` array)
- **Process steps** → `components/Process.tsx` (the `steps` array)
- **Email address** → search the project for `hello@missedcallcompany.com` and replace
- **Brand colours** → `tailwind.config.ts` (navy / gold / cream)

### Adding real testimonials
The `Manifesto.tsx` section currently holds a brand statement. Once you have real client results, you can swap it for a genuine testimonial with a name and clinic.

---

## Notes

- Fonts (Cormorant Garamond + Sora) load from Google Fonts — no setup needed.
- Animations respect `prefers-reduced-motion` for accessibility.
- Fully responsive at 375px, 768px, 1024px and 1440px.
- The hero "Book a call" buttons link to `#contact`; the contact section opens an email to `hello@missedcallcompany.com`. Swap these for a Calendly/booking link when ready (search for `#contact` and `mailto:`).

Built to match the brand pack: navy `#141C2B`, gold `#C8993A`, cream `#FAF6EE`.
