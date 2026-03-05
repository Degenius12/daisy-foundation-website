# Daisy Foundation — Testing Standards Reference

## Strategy

```
       /\
      /E2E\        10% — Critical user workflows (Playwright)
     /------\
    /Integr.\    20% — API + form interactions (Vitest)
   /----------\
  / Unit Tests \ 70% — Fast, isolated (Vitest)
 /--------------\
```

**Coverage target**: 80%+ overall. 100% for validation, donation calcs, email, auth.

## What to Test

### Unit (Vitest)
- Form validation schemas (donation, contact, newsletter)
- Utility functions (currency formatting, date formatting)
- Business logic (donation allocation: 78/14/8 split)
- Email template generation
- API clients (mocked responses)

### Integration (Vitest)
- API endpoints: POST /api/contact, /api/newsletter, /api/donate
- Database operations (CRUD with Supabase)
- Stripe checkout session creation (mocked)
- Resend email sending (mocked)
- Mailchimp subscriber addition (mocked)

### E2E (Playwright)
- Full donation flow: select amount > Stripe checkout
- Contact form: fill > submit > success message
- Newsletter signup: email > submit > confirmation
- Navigation: smooth scroll, mobile menu
- Admin: login > update content > verify on public site

### Accessibility (Playwright + axe-core)
- WCAG 2.1 AA violations scan on all pages
- Keyboard navigation (Tab, Enter, Space)
- Focus indicator visibility

## Mock Strategy

**Never hit real APIs in tests.** Mock: Stripe, Resend, Mailchimp, Supabase (unit only).

Mock files go in `tests/mocks/` (stripe.ts, resend.ts, mailchimp.ts).
Test fixtures go in `tests/fixtures/` (donations.ts, events.ts).

## Commands

```bash
npm run test              # All tests
npm run test:unit         # Unit only
npm run test:watch        # Watch mode
npm run test:integration  # Integration only
npm run test:e2e          # Playwright E2E
npm run test:e2e:headed   # E2E with browser visible
npm run test:a11y         # Accessibility tests
npm run test:coverage     # Coverage report
```

## Coverage Config

```ts
// vitest.config.ts thresholds
{ lines: 80, functions: 80, branches: 75, statements: 80 }
```

## Pre-Commit

- [ ] All tests pass
- [ ] Coverage >= 80%
- [ ] No console errors
- [ ] Lint + type-check pass
- [ ] Mocks configured for external services

## CI/CD

GitHub Actions on push to main/develop and PRs to main:
- Unit + integration tests with coverage
- E2E tests with Playwright (upload report on failure)
- Accessibility tests (upload report on failure)
