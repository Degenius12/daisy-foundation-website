# Daisy Foundation — Accessibility Standards Reference

WCAG 2.1 Level AA compliance required. This is both a legal requirement (ADA Title III) and moral imperative for a nonprofit.

## Quick Rules

1. **Every `<img>`/`<Image>` needs descriptive alt text** — not "image" or "photo"
2. **Every input needs a `<Label>`** — placeholders are not labels
3. **Headings in order** — h1 > h2 > h3, never skip levels
4. **Use `<button>` not `<div onClick>`** — native elements are keyboard-accessible
5. **Color contrast** — 4.5:1 for text, 3:1 for large text and UI components
6. **Never remove focus outlines** — customize them, don't hide them
7. **First rule of ARIA** — don't use ARIA if native HTML works

## Color Contrast

| Element | Min Ratio |
|---------|-----------|
| Normal text (< 18pt) | 4.5:1 |
| Large text (>= 18pt or 14pt bold) | 3:1 |
| UI components & graphics | 3:1 |

- Never rely on color alone — use icons, text, or patterns too
- Use relative units (rem) not fixed pixels for font sizes

## Keyboard Navigation

- All interactive elements reachable via Tab
- Visible focus indicators on everything (outline: 2px solid, outline-offset: 2px)
- Skip-to-main-content link as first focusable element
- Natural DOM order (never use custom tabIndex values)
- Respect `prefers-reduced-motion` — disable animations when set

## Forms

- `<Label htmlFor="id">` on every input
- `aria-invalid` + `aria-describedby` for error states
- Error messages: icon + bold prefix + descriptive text
- `autoComplete` attributes for name, email, tel fields
- Confirmation dialog before financial transactions

## ARIA Patterns

- Modals: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`
- Live regions: `role="status"`, `aria-live="polite"` for form success/error
- Icons with labels: `aria-hidden="true"` on icon, visible or sr-only text
- Decorative images: `alt=""` + `role="presentation"`

## Screen Reader Testing

Test with at least 2 of:
- NVDA + Firefox (Windows)
- JAWS + Chrome (Windows)
- VoiceOver + Safari (macOS/iOS)
- TalkBack + Chrome (Android)

## Automated Testing

```typescript
// Use @axe-core/playwright in E2E tests
const results = await new AxeBuilder({ page })
  .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
  .analyze();
expect(results.violations).toEqual([]);
```

## Manual Checklist

- [ ] Tab through entire page — all elements reachable
- [ ] Focus indicators visible on every interactive element
- [ ] Screen reader announces all content correctly
- [ ] Page usable at 200% zoom (no horizontal scroll)
- [ ] All images have appropriate alt text
- [ ] Forms: labels, errors, autocomplete all work
- [ ] Heading hierarchy: no skipped levels
- [ ] Touch targets >= 44x44px on mobile
