# Live-Hindustan Clone — Next.js (App Router)

![Project Screenshot](https://github.com/user-attachments/assets/f9a7a68a-5519-4c7c-808d-7782531488f7)

A small news-portal clone built with Next.js (App Router), Tailwind CSS (v4), and a local mock data layer for fast, testable development.

## Quick start

Install dependencies and run the dev server:

```bash
npm install
npm run dev
# or
pnpm install
pnpm dev
# or
yarn
yarn dev
```

Open http://localhost:3000 to view the app. Edit the home UI at `app/page.tsx`; changes auto-reload.

## Available scripts

- npm run dev — start development server
- npm run build — build for production
- npm run start — run the production build locally
- npm run lint — run linters (if configured)

## Project notes

- Routing: Uses Next.js App Router (app/) with Server and Client Components.
- Data: Mock API lives in `lib/api.ts` and simulates latency to exercise loading states.
- Images: External images configured in `next.config.ts` (remotePatterns) and components include fallbacks for missing images.
- Styling: Tailwind v4 utilities and a global stylesheet adjusted for consistent light-mode visuals.
- SSG: Article pages are pre-rendered via `generateStaticParams` for better performance and SEO.

## Learn more

- Next.js docs: https://nextjs.org/docs  
- Tailwind CSS: https://tailwindcss.com  
- Deploy on Vercel: https://vercel.com/new
# AST
