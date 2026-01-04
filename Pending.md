High priority — Performance

Reduce font payload: you're loading many Google font families and lots of weights in layout.js. Limit families and weights to only those used (e.g., keep 2–3 families, 2–4 weights).
File: layout.js
Example: load only required weights for Poppins/Roboto instead of 9 weights each.
Defer heavy client JS / split bundles: convert non-interactive components to server components (remove "use client") where possible. Move heavy UI (carousels, animation-heavy sections) to dynamic imports to reduce initial JS.
Candidates: Tech / TechCategoryCard / ProjectsCarousel / any heavy motion-using components.
Images: optimize public images (compress, convert to WebP/AVIF). Ensure every large hero/LCP image uses next/image with priority and appropriate sizes.
Files: project banners referenced in ProjectCarouselData.js and display in VisualShowcaseSection.js.
Avoid unnecessary font-stretching/weights at runtime (e.g., numeric fontWeight animation can trigger layout). Use font-synthesis or prefer CSS variable weights where possible.
Defer non-critical animations and mark prefers-reduced-motion: for repeated animations (floating text, pulsing) add reduced-motion handling.
Tree-shake & dedupe animation libs: I saw mixed imports (framer-motion and motion/react) — standardize to one package to avoid duplicates and reduce bundle size.
Medium priority — Accessibility

Add accessible names for icon-only links (screen-readers):
File: SocialLinks.js
Fix: add aria-label={name} to the link and ensure the icon is aria-hidden="true".
Example:
<Link href={url} target="_blank" rel="noopener noreferrer" aria-label={name}> <Icon aria-hidden="true" /> </Link>
Headings (semantic structure / H1 usage): you have multiple components that render h1:
Heading → Heading.js uses h1.
ProjectHeader → ProjectHeader.js also uses h1.
Recommendation: ensure only one h1 per page. Change ProjectHeader to accept a level prop (default h1) or render h2 when used inside a page that already has a Heading.
Example change:
ProjectHeader signature: function ProjectHeader({ title, subtitle, level = 2 }) then render const Tag = \h${level}`; return <Tag>…</Tag>`
Skip link / landmarks: add a skip-to-content link at top of body for keyboard users and ensure main content uses <main> landmark.
Add to RootLayout or globals.css: a hidden but focusable link Skip to content that appears on focus.
Focus-visible styles: ensure keyboard focus styles (not only :focus-visible) visible across components (buttons, links).
Interactive controls: ensure all clickable divs are real <button> or <a> with keyboard handlers and semantic roles.
Form accessibility: ensure form controls have labels and validations announced; if you add contact form, check ARIA-live for submit feedback.
Low / Medium priority — HTML5 & SEO

Metadata & social: metadata exists in layout.js (good). Add Open Graph and Twitter meta for share previews, and canonical links.
Example fields: openGraph: { title, description, url, images: [...] }, twitter: { card, creator }.
Sitemap & robots: add sitemap.xml (Next.js app-router: create app/sitemap.js) and robots.txt for crawlers.
Structured data: add JSON-LD for Person and Website and Project pages for richer search results.
Image alt text: ensure all rendered images have meaningful alt; most next/image uses alt={...} already — verify project images used as decorative have empty alt alt="".
Canonical & pagination: ensure canonical tags on pages with pagination or filtered views (if any).
Heading / content order: verify visual order matches DOM order for screen-readers (e.g., hero then contents), check position: fixed elements do not reorder DOM reading order.
Links: external links have rel="noopener noreferrer" (you already have many examples). Ensure any that miss it add rel.
Concrete file-level suggestions (quick actionable checklist)

layout.js — reduce fonts, add openGraph metadata, add skip-to-content anchor inside <body>.
Heading.js — already supports subheading (good). Ensure you use it consistently (you did).
ProjectHeader.js — change to configurable heading level to avoid duplicate H1s.
File link: ProjectHeader.js
SocialLinks.js — add aria-label to links (see example above).
File link: SocialLinks.js
VisualShowcaseSection.js — ensure LCP images have priority when above the fold (you already updated one). Consider placeholder="blur" if possible and small blurDataURL.
File link: VisualShowcaseSection.js
TechSkillItem.js — you already fixed animatable values; also include prefers-reduced-motion respect.
File link: TechSkillItem.js
Accessibility & performance extras (code snippets)

Social link aria-label:
<Link href={url} target="_blank" rel="noopener noreferrer" aria-label={name}> <Icon aria-hidden="true" /> </Link>
Skip-to-content (add inside body in RootLayout):
<a href="#content" className="sr-only focus:not-sr-only ...">Skip to content</a>
Wrap main content: <main id="content"> ... </main>
Respect reduced motion:
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches; then disable repeating animations or use CSS @media (prefers-reduced-motion: reduce) { .animate { animation: none; } }.
ProjectHeader change (minimal):
function ProjectHeader({ title, subtitle, titleCase = 'uppercase', level = 1 }) { const Tag = h${level}; return <Tag>…</Tag> }
Then call <ProjectHeader level={2} title={...} /> in project hero.
How I’d prioritize fixes (quick roadmap)

Reduce fonts and image sizes (fast wins for performance).
Add skip link and fix social link aria-labels (small dev effort, big accessibility value).
Ensure one H1 per page — make ProjectHeader configurable.
Audit client/server components and dynamic-import heavy interactive parts.
Add OG/Twitter meta, JSON-LD, sitemap and robots.
Would you like me to:

implement the easy fixes now (add aria-label to social links, add level prop to ProjectHeader, add skip-link to RootLayout), or
run a deeper automated scan (axe/lighthouse) and produce a prioritized code-patch list?
Which option do you prefer?

Claude Haiku 4.5 • 1x