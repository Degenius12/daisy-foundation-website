# Testing Standards

- Never commit logic without tests — unit and/or E2E
- Never hit real APIs in tests — mock Stripe, Resend, Mailchimp, Supabase
- Coverage target: 80%+ overall, 100% for validation/auth/donation logic
- Test pyramid: 70% unit (Vitest), 20% integration (Vitest), 10% E2E (Playwright)
- Run `npm run test` + `npm run lint` before committing

Full reference: `docs/standards-testing.md`
