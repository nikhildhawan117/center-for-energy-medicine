# The Center for Energy Medicine — Website Rebuild

A modern rebuild of **thecenterforenergymedicine.com** (Dr. Aruna Bakhru's integrative
medicine practice site), reconstructed from the Internet Archive's Wayback Machine
capture after the original WordPress site was taken down.

Built with **Next.js 16** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## What's inside

| Page | Route | Source |
|------|-------|--------|
| Home | `/` | Hero, welcome, product grid, book promo, Q&A, latest articles |
| About | `/about` | Doctor bio + credentials |
| Articles | `/articles` | Index of all 64 archived blog posts |
| Article | `/articles/[slug]` | Full post pages, statically generated |
| Forms & Policies | `/forms` | Office policies + 25 downloadable PDF forms/handouts |
| Testimonials | `/testimonials` | Patient stories |
| Contact | `/contact` | Contact form (mailto), phone, emergency note |

- All article text (64 posts) was extracted from the archived HTML and is stored in
  `src/content/posts.ts`.
- Original images were recovered from the archive into `public/images/`.
- Original PDF forms were recovered into `public/forms/`.
- Page copy (bio, testimonials, policies) lives in `src/content/site.ts` — edit text
  there without touching components.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel

This project is Vercel-ready with zero config:

1. Push this folder to a GitHub repo (or drag the folder into a new repo).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — accept the defaults and click **Deploy**.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

No environment variables are required. The contact form composes an email via the
visitor's mail client (`mailto:`); point `SITE.email` in `src/content/site.ts` at the
real office inbox, and swap in a form backend (Formspree, Resend, etc.) if you want
server-side delivery later.

## Project layout

```
src/
  app/                # Routes (page.tsx per route)
    articles/[slug]/  # Blog post pages (generateStaticParams)
  components/         # Header, Footer, Hero
  content/
    site.ts           # All page copy, nav, testimonials, policies
    posts.ts          # 64 archived articles (generated)
public/
  images/             # Recovered images from the archive
  forms/              # Recovered PDF forms & handouts
```

## Notes

- Content was recovered from Wayback Machine captures (2016–2026). Some very old
  pages predate the final site design; copy was lightly cleaned for readability.
- The original site's shop links pointed at third-party distributors (Shaklee, Young
  Living, Thorne). Product tiles currently link back to the site root — update the
  `href`s in `PRODUCTS` (`src/content/site.ts`) with the correct distributor links.
