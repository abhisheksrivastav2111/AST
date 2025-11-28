# AI Use & Reflection

## How AI was used
- Boilerplate: Generated initial page and NewsCard layout to speed up scaffolding.
- Styling: Suggested Tailwind utility patterns for the LiveHindustan red/white theme and responsive grid (1 column on mobile → multi-column on desktop).
- Content: Produced realistic mock headlines and summaries to populate the UI during development.

## Corrections and deliberate changes
- Router: Chose Next.js App Router (app/) over the Pages Router. Replaced getStaticProps suggestions with generateStaticParams where appropriate.
- Tailwind v4: Adjusted global CSS to match Tailwind v4 conventions and removed legacy directives and dark-mode media query to preserve the news portal aesthetic.
- Images: Added next.config.ts remotePatterns for placehold.co to avoid runtime image errors and added fallback logic for missing images.

## Custom modifications and tests
- Mock data: Manually refined dummy data and added edge cases (e.g., an article without an image) to validate NewsCard fallbacks.
- Navbar: Implemented client-side mobile hamburger state for a working responsive header.
- Accessibility & responsiveness: Verified layout across breakpoints and ensured readable contrast for the theme.

## Short summary
AI accelerated scaffolding, styling suggestions, and mock content creation. All generated code was reviewed and adapted to the project choices (App Router, Tailwind v4, image config) and supplemented with manual edge-case handling and UI polish.
