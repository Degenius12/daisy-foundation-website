# Daisy Foundation — PRD Overview

## The Story

Daisy was a Jamaican-born pediatric nurse with nine children who migrated to the US and worked as a caregiver in Miami. Her home was a sanctuary where every child felt seen and supported. Her granddaughter opened a childcare center in 2018, inspired by that legacy.

Working in early education revealed a gap: single mothers, teenage parents, and young families struggling to afford quality pre-K. Daisy Foundation bridges this gap through tuition subsidies, enrichment programs, job training, and lasting educational impact.

## Mission

Provide quality early childhood education support to families in need, honoring Grandmother Daisy's legacy of compassion.

## Core Programs

| Program | Category | Description |
|---------|----------|-------------|
| Healthy Beginnings | Wellness | Wellness kits for families |
| Bloom Scholarships | Education | Tuition coverage for pre-K |
| Hands & Hearts | Community | Volunteer and mentorship programs |
| Green Daisy | Environment | Sustainability education |

## Donation Tiers

| Tier | Amount | Impact |
|------|--------|--------|
| Seed | $25 | Supports wellness kits for 1 family |
| Sprout | $50 | Provides school supplies for 2 children |
| Bloom | $100 | Funds 1 month of tutoring |
| Garden | $250 | Sponsors 1 child's full program access |

- Custom slider: $10–$500 in $5 increments
- One-time or monthly recurring via Stripe Checkout
- Allocation: 78% Programs, 14% Operations, 8% Fundraising

## Website Sections (Single-Page)

1. **Hero** — Mission + CTAs (Donate, Explore Programs)
2. **Mission & Values** — Foundation story + core values
3. **Programs** — 4 program cards (database-driven)
4. **Impact** — Real-time metrics + success stories
5. **Events** — Upcoming volunteer/fundraising events
6. **Donate** — Tiered options + custom amounts + Stripe
7. **Contact** — Form with Resend email delivery
8. **Footer** — Newsletter signup + quick links + social

## Admin Dashboard (/admin/*)

- Protected by Supabase Auth (email/password)
- CRUD: Programs, Events, Success Stories
- Update: Impact Metrics
- View: Contact Submissions, Newsletter Subscribers, Donations (read-only)
- Simple table-based UI with inline editing

## Success Metrics

| Metric | Target |
|--------|--------|
| Donation conversion | 1.5%–3% |
| Monthly donor conversion | 0.5%–1.5% |
| Newsletter signup rate | 2%–5% |
| Mobile PageSpeed | 85+ |
| Desktop PageSpeed | 90+ |
| LCP | < 2.5s |
| WCAG compliance | AA |

## Implementation Status

- [x] Week 1: Foundation & Setup (project init, Supabase, shadcn/ui, auth, layout)
- [ ] Week 2: Main Website Sections (Hero through Contact, responsive polish)
- [ ] Week 3: Integrations & Admin Dashboard (Stripe, Resend, Mailchimp, CRUD)
- [ ] Week 4: Polish, Testing, & Deployment (performance, a11y, SEO, launch)

**Timeline**: 4 weeks to V1 launch
**Priority**: Trust-building, donation conversion, mobile-first
