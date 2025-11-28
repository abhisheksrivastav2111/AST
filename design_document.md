# Design Document - News Site ACT

## Overview
Concise news-portal clone built with Next.js (App Router), Tailwind v4, and a local deterministic mock data layer. Focus is on fast iteration, predictable server-rendered pages, and robust UI behavior for edge cases.

## 1. Wireframe & Layout Decisions

### Layout Structure
- Header (Navbar): Sticky top navigation; mobile hamburger toggle. Brand color: LiveHindustan red (#b91c1c).
- Hero Section: Large featured article with image + gradient overlay for readable headline.
- Main Content Area (Grid): Desktop shows a multi-column grid (primary 8 / sidebar 4). Mobile collapses to a single column.
- Sidebar: "Trending Now" or highlights on desktop; stacked under content on mobile.
- Footer: Standard links and copyright.

### Responsiveness
- Mobile: Single-column stack — Hero → article list → sidebar content.
- Desktop: 12-column grid (8/4 split). Breakpoints tuned via Tailwind v4 utilities.

## 2. Data-Fetching Strategy

### Next.js App Router (Server Components)
- Home Page (/): Server Component calls `await getArticles()` from the mock API. Server-side rendering with explicit caching policies as needed. Artificial latency in mocks validates loading states.
- Article Page (/news/[id]): Pre-rendered using `generateStaticParams` (SSG) to optimize SEO and first paint.
- Category pages: Server Components fetch filtered lists via `getArticles(category)`.

### Mock Data Layer (lib/api.ts)
- Deterministic dataset (MOCK_ARTICLES) with diverse categories and Hindi/English content.
- Artificial delays per helper to simulate network conditions:
  - getArticles: 500ms
  - getArticleById: 300ms
  - getCategories: 200ms
  - getTrendingArticles: 400ms
- Filtering:
  - category mapping (e.g., tech → technology, cricket → sports, nation → politics)
  - case-insensitive search across title, summary, content
- Utility exports:
  - getArticles(category?, query?)
  - getArticleById(id)
  - getCategories() — preserves original order and builds safe slugs
  - getTrendingArticles() — returns top items (first 5)

## 3. Code Structure

### Components (app imports these from /components)
- Navbar.tsx — Client Component; manages mobile menu state (useState). Guards to avoid hydration mismatch.
- Hero.tsx — Featured story layout with overlay, responsive image handling.
- HeroSlider.tsx — Optional carousel for rotating top stories.
- NewsCard.tsx — Reusable article tile: title, summary, image fallback logic, category & timestamp.
- Sidebar.tsx — Trending list; uses getTrendingArticles for server-side rendering.
- TrendingTikers.tsx — Small UI for live-updating ticker-style headlines.
- Footer.tsx — Site footer links and meta.

### Pages (app/)
- app/page.tsx — Home Server Component: fetches articles, categories, and top story.
- app/[category]/page.tsx — Category listing using server fetch and slug mapping.
- app/news/[id]/page.tsx — Article page rendered from getArticleById; route params generated at build via generateStaticParams.
- Static pages: about, contact, privacy, terms — simple server components or static files.

## 4. Data Model
Shared TypeScript shape:
```typescript
interface Article {
  id: string;
  title: string;
  summary: string;
  content: string; // HTML allowed
  imageUrl?: string; // optional
  category: string;
  publishedAt: string; // ISO
  author: string;
  source?: string;
}
```

## 5. Challenges & Solutions
- Image handling: Configure next.config.ts remotePatterns for external hosts (placehold.co / picsum). Components include robust client-side fallbacks when imageUrl is missing or fails.
- Hydration mismatches: Keep interactive pieces (Navbar) as Client Components and render static markup server-side where possible.
- Category normalization: Provide mapping layer inside mock API so route slugs (tech, cricket) map to canonical category names used in data.
- Tailwind v4: Use CSS variables and Tailwind v4 utilities; remove legacy directives to ensure consistent light-mode visuals.

## 6. Testing & Edge Cases
- Content variety: Articles include multi-lingual headlines (Hindi/English), varying summary lengths, and realistic HTML in content to validate rendering.
- Missing data: NewsCard and Hero handle absent imageUrl, empty author or source fields gracefully.
- Search & categories: Case-insensitive search across fields and stable slug generation (regex cleans special chars).
- Latency simulation: Artificial delays exercise loading skeletons, server-time UI, and caching behavior.
- Trending: Deterministic trending list (first N) for predictable tests.

## 7. Implementation Notes & Recommendations
- Keep data helpers pure and deterministic to simplify unit tests.
- Use generateStaticParams for article pages at build time; consider ISR or revalidation for frequently updated sections.
- Add unit tests for:
  - getCategories slug logic
  - category mapping resolution
  - search filtering behavior
  - NewsCard fallback rendering
- Confirm next.config.ts remotePatterns include all external image hosts used by MOCK_ARTICLES.

## Summary
The project uses Next.js App Router with a server-first approach, a robust local mock API that simulates real-world conditions, and a component-driven UI tuned for accessibility and responsive news reading. Emphasis is on SSG for article pages, predictable mock data, and component fallbacks to ensure resilience during development and testing.
