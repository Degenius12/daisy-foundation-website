# Daisy Foundation — Service Integration Guides

## Stripe (Donations)

**Setup**: stripe.com > Sign up > Business details (nonprofit)

**Products** (create in Dashboard > Products):
- Seed ($25), Sprout ($50), Bloom ($100), Garden ($250)

**API Keys** (Dashboard > Developers > API keys):
- Publishable: `pk_test_...` → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- Secret: `sk_test_...` → `STRIPE_SECRET_KEY`

**Webhook** (Dashboard > Developers > Webhooks):
- Endpoint: `https://daisysfoundation.com/api/webhooks/stripe`
- Events: `checkout.session.completed`
- Signing secret: `whsec_...` → `STRIPE_WEBHOOK_SECRET`

**Test card**: `4242 4242 4242 4242` / any future date / any 3-digit CVC

**Go live**: Activate account > toggle to live mode > update keys + webhook URL

**Cost**: 2.9% + $0.30 per transaction

---

## Resend (Transactional Email)

**Setup**: resend.com > Sign up > Verify email

**Domain verification** (Dashboard > Domains > Add Domain):
- Add `daisysfoundation.com`
- Add TXT + DKIM DNS records (can take up to 48h)

**API Key** (Dashboard > API Keys > Create):
- Key: `re_...` → `RESEND_API_KEY`
- From: `info@daisysfoundation.com` → `RESEND_FROM_EMAIL`

**Templates**: `src/lib/email/templates.ts` (contact confirmation, admin notification)

**Free tier**: 100 emails/day, 3,000/month

---

## Mailchimp (Newsletter)

**Setup**: mailchimp.com > Free plan > Verify email

**Audience** (Dashboard > Audience > Create):
- Name: "Newsletter Subscribers"
- From: `info@daisysfoundation.com`
- Enable double opt-in

**API Key** (Profile > Extras > API keys > Create):
- Key → `MAILCHIMP_API_KEY`
- Server prefix (e.g., `us21`) → `MAILCHIMP_SERVER_PREFIX`

**Audience ID** (Audience > Settings > Audience name and defaults):
- ID → `MAILCHIMP_AUDIENCE_ID`

**Free tier**: 500 subscribers, 1,000 emails/month

---

## Environment Variables Template

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Resend
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=info@daisysfoundation.com

# Mailchimp
MAILCHIMP_API_KEY=...
MAILCHIMP_AUDIENCE_ID=...
MAILCHIMP_SERVER_PREFIX=us21

# Optional
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=...
NEXT_PUBLIC_SENTRY_DSN=...
```
