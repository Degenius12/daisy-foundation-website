# Accessibility — WCAG 2.1 AA

- Every image needs descriptive alt text (not "image" or "photo")
- Every input needs a `<Label>` — placeholders are not labels
- Headings in order: h1 > h2 > h3, never skip levels
- Use `<button>` not `<div onClick>` — native HTML first, ARIA only when needed
- Color contrast: 4.5:1 text, 3:1 large text/UI — never color-only indicators
- Visible focus indicators on all interactive elements — never `outline: none`
- Skip-to-main-content link as first focusable element
- Respect `prefers-reduced-motion` media query
- Test with axe-core in Playwright + manual screen reader testing

Full reference: `docs/standards-accessibility.md`
