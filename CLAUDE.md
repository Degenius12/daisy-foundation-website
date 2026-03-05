# Daisy Foundation Website

## Links
- **Live**: https://daisysfoundation.com
- **GitHub**: https://github.com/Degenius12/daisys-foundation-website
- **Vercel**: https://vercel.com/tony-telemacques-projects/daisy-foundation-web

## Tech Stack
- **Framework**: Next.js 16 (App Router, RSC) + TypeScript strict
- **Styling**: Tailwind CSS + shadcn/ui (Radix primitives)
- **Animations**: Framer Motion
- **Database**: Supabase (PostgreSQL + Auth + Storage)
- **Payments**: Stripe Checkout (one-time + recurring)
- **Email**: Resend (transactional)
- **Newsletter**: Mailchimp
- **Testing**: Vitest (unit) + Playwright (E2E) + axe-core (a11y)
- **Hosting**: Vercel (free tier) + Supabase (free tier)

## Key Tables
`admin_users`, `programs`, `events`, `impact_metrics`, `success_stories`, `contact_submissions`, `newsletter_subscribers`, `donations`

## Reference Docs (read on-demand, not always)
- `docs/prd-overview.md` — mission, programs, features, milestones, metrics
- `docs/prd-database-schema.md` — full table definitions
- `docs/service-integration.md` — Stripe, Resend, Mailchimp setup + env vars
- `docs/standards-nonprofit.md` — trust, conversion, performance, security, voice
- `docs/standards-accessibility.md` — WCAG 2.1 AA rules + checklists
- `docs/standards-testing.md` — test strategy, commands, coverage config

## Commands
```bash
npm run dev               # Next.js dev server
npm run build             # Production build
npm run test              # All tests
npm run test:e2e          # Playwright E2E
npm run lint              # ESLint
npx supabase start        # Local Supabase
npx supabase db push      # Apply migrations
```

## Rules (auto-loaded)
- `.claude/rules/nonprofit-standards.md` — trust + conversion + mobile-first
- `.claude/rules/accessibility.md` — WCAG AA + keyboard + screen readers
- `.claude/rules/testing.md` — test before commit, mock external APIs

## Workflow
Artifacts: `docs/workflow/` | Start: `/workflow` to assess scope and route.

## Status
**Phase**: Week 1 complete (skeleton + auth). Week 2 next (build sections).
