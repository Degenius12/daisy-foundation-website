# Daisy Foundation — Nonprofit Standards Reference

## Trust-Building

### Donation Transparency
- ALWAYS show "Where Your Money Goes" allocation: 78% Programs, 14% Operations, 8% Fundraising
- Display in: Donate section (prominent), Footer (link), Mission section
- Update quarterly based on actual expenses

### Impact Metrics
- Database-driven, real-time metrics (from `impact_metrics` table)
- Show update timestamps — no stale data
- No vague claims ("Thousands of lives changed") — use real, verifiable numbers

### Trust Signals
- Founded year (2024), Grandmother Daisy's story, partner logos, real photos
- Avoid: fake testimonials, generic stock photos, exaggerated claims

## Conversion Optimization

### CTAs
- Hierarchy: Primary (Donate) > Secondary (Volunteer/Contact) > Tertiary (Newsletter)
- Button text: "Donate Now", "Make an Impact", "Join Our Mission" — not "Click Here"
- Max 2 CTAs per section

### Donation Flow
- Target: 3 clicks from homepage to Stripe Checkout
- No account creation required, no multi-page forms
- Direct redirect to Stripe-hosted checkout (PCI compliant)

### Mobile-First
- 60%+ traffic is mobile — optimize accordingly
- Tap targets >= 44px, body text >= 16px
- Donation tiers stack vertically on mobile
- Forms use correct input types (email, tel)

## Performance

| Metric | Mobile | Desktop |
|--------|--------|---------|
| LCP | < 2s | < 1.5s |
| Lighthouse Perf | 85+ | 90+ |
| Lighthouse A11y | 100 | 100 |
| Lighthouse SEO | 100 | 100 |

- Use Next.js `<Image>` (never raw `<img>`), lazy-load below fold
- ISR for homepage (1h revalidation), code-split with dynamic imports

## Security

- All payments through Stripe Checkout (never handle card details)
- No donor data in logs, no sensitive data in client storage
- Admin auth via Supabase (email/password, 7-day sessions)
- Honeypot field for contact form spam protection
- Middleware protection for `/admin/*` routes

## Content Voice

- Warm, authentic, hopeful, professional
- Use "we/our" (inclusive), active voice, specific numbers
- Avoid jargon — "Help families afford childcare" not "Subsidize tuition"
- Stories: 70% statistics + 30% qualitative impact stories

## SEO

- Meta tags on every page (title, description, OpenGraph, Twitter Card)
- schema.org/NGO structured data
- Sitemap + robots.txt

## Pre-Launch Checklist

- [ ] Donation flow works (test card 4242...)
- [ ] Contact form sends emails
- [ ] Newsletter adds to Mailchimp
- [ ] Admin login + CRUD works
- [ ] All links work (no 404s)
- [ ] Lighthouse 85+ mobile
- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] Color contrast WCAG AA
- [ ] HTTPS + API keys secure
