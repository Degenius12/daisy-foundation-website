---
status: in-progress
created: 2026-05-11
updated: 2026-05-11
tags: [supabase, vercel, runbook, database, auth, infrastructure]
---

# Supabase + Vercel Production Setup

> Wire up the existing Supabase migrations to a real Supabase project and connect Vercel so the admin dashboard works in production. Until this lands, the public site serves hardcoded fallback data from `src/lib/supabase/queries.ts` and admin write actions crash with `Your project's URL and API key are required`.

---

## Current state (verified 2026-05-11)

- Schema is fully defined: `supabase/migrations/20260119000000_initial_schema.sql` (101 lines), `supabase/migrations/20260119000001_rls_policies.sql` (73 lines)
- Seed file exists: `supabase/seed.sql` (3 placeholder events, 4 programs, 4 impact metrics, 1 sample story)
- Codebase wires Supabase correctly via `@supabase/ssr` (`src/lib/supabase/server.ts`) — just no env vars
- Read functions guard with `isSupabaseConfigured()` → return fallback when env missing (this is why the site appears to work)
- Write functions in `src/lib/supabase/admin-queries.ts` **do not** have that guard → they crash if env missing (this is why the admin form 500s)
- Vercel project: `prj_fgEVLIeN4aW901cCp0ChGzxP6Z42` (team `team_hmTrmXpU23X5Iyn1wWJLNtzz`)
- Auth flow exists: `src/middleware.ts` checks `supabase.auth.getUser()` for `/admin/*` routes; `src/app/admin/login/page.tsx` uses `signInWithPassword`

---

## Pre-check — does a Supabase project already exist?

Before creating a new one, check whether Trisha or Tony already provisioned a Supabase project for Daisy's at some point.

1. Sign in at https://supabase.com/dashboard
2. Look for a project named anything like `daisy*`, `nonprofit`, `daisysfoundation`, etc.
3. If one exists: **skip Part 1**, go straight to **Part 2** with the existing project's URL + keys.
4. If none: continue to Part 1.

---

## Part 1 — Create the Supabase project (skip if one exists)

1. https://supabase.com/dashboard → **New project**
2. Org: pick Tony's personal org (or create a "Daisy's Nonprofit" org if you want it scoped)
3. **Project name:** `daisys-nonprofit`
4. **Database password:** generate a strong one — **save to 1Password/Bitwarden immediately** (Supabase shows it once)
5. **Region:** `East US (Ohio)` or `East US (N. Virginia)` — closest to Vercel's IAD1
6. **Plan:** Free is fine for now (500 MB DB, 1 GB storage, 50k MAU)
7. Click **Create new project**. Provisioning takes ~2 min.

Once provisioned, go to **Settings → API**. Note three values (the runbook references these by name later):

- `SUPABASE_URL` — looks like `https://abcdefghij.supabase.co`
- `SUPABASE_ANON_KEY` — long `eyJ...` JWT (safe to expose client-side)
- `SUPABASE_SERVICE_ROLE_KEY` — different long `eyJ...` JWT (**server-only**, never commit)

---

## Part 2 — Apply schema + seed

Two paths. Path A (CLI) is reproducible; Path B (UI) is one-shot.

### Path A — Supabase CLI *(recommended)*

```bash
cd "C:/Users/tonyt/Daisys Foundation Website"
npx supabase login              # opens browser, authenticates CLI
npx supabase link --project-ref <ref>   # <ref> = the subdomain before .supabase.co
npx supabase db push            # applies both migration files
psql "$DATABASE_URL" -f supabase/seed.sql   # optional seed; see note below
```

> The `DATABASE_URL` is shown in Supabase Settings → Database → Connection string.

### Path B — Supabase SQL Editor

1. Dashboard → **SQL Editor** → **New query**
2. Paste contents of `supabase/migrations/20260119000000_initial_schema.sql` → **Run**
3. New query → paste `supabase/migrations/20260119000001_rls_policies.sql` → **Run**
4. (Optional) New query → paste `supabase/seed.sql` → **Run**

### Seed data decision

Three options for the events table specifically (since this is the urgent path):

- **Skip the seed entirely** and let `queries.ts` fallback handle the public site until real events are added. Cleanest.
- **Run the seed** and accept the 3 placeholder events (Family Fun Day, Back to School Drive, Community Garden Kickoff) become real DB rows.
- **Run a modified seed** that drops the placeholders and inserts only real events (Mother's Day Floral Experience is the only confirmed real one — recipe at the bottom of this doc).

Recommend: **run a modified seed** with just the Mother's Day row, plus the 4 programs + 4 metrics + 1 success story from the original seed (those are reasonable placeholders).

---

## Part 3 — Create the admin user

Supabase Auth is the gate for `/admin/*`. The codebase doesn't auto-create admin users — you create them manually.

1. Dashboard → **Authentication → Users → Add user → Create new user**
2. **Email:** `tonytele@gmail.com` (for Tony's admin access); repeat for Trisha if she ever needs it
3. **Password:** generate, save to vault
4. ✅ **Auto-confirm user** (skips email verification)
5. Click **Create user**

Then add to the `admin_users` table (the middleware checks this for admin role):

```sql
INSERT INTO admin_users (id, email, role)
SELECT id, email, 'admin'
FROM auth.users
WHERE email IN ('tonytele@gmail.com');
```

Run in SQL Editor.

---

## Part 4 — Add env vars to Vercel

1. https://vercel.com/tony-telemacques-projects/daisy-foundation-web/settings/environment-variables
2. For each variable below, click **Add new**, set Environments to **Production, Preview, Development** (all three), paste value, save:

| Name | Value source | Why |
|------|--------------|-----|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase Settings → API → Project URL | Client + server reads/writes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Settings → API → anon public | Public-safe client key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase Settings → API → service_role | Server-only writes that bypass RLS (used in some admin actions) |

Optional but related (unblock more features if you add them):

| Name | Value source |
|------|--------------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe Dashboard → Developers → API Keys (live pk_live_...) |
| `STRIPE_SECRET_KEY` | Stripe API Keys (sk_live_...) |
| `STRIPE_WEBHOOK_SECRET` | Stripe Webhooks endpoint config |
| `RESEND_API_KEY` | resend.com/api-keys |
| `RESEND_FROM_EMAIL` | already set: `info@daisysfoundation.com` |
| `MAILCHIMP_API_KEY` | Mailchimp account → API keys |
| `MAILCHIMP_AUDIENCE_ID` | Mailchimp audience settings |
| `MAILCHIMP_SERVER_PREFIX` | Mailchimp (e.g., `us21`) |

For this runbook, **only the 3 Supabase vars are required**. The rest can wait.

---

## Part 5 — Redeploy + verify

1. After saving env vars, Vercel will prompt **"Redeploy now"** — click it. (If not, go to Deployments → ... → Redeploy without build cache.)
2. Watch the build complete (~2-3 min).
3. Once live:

```bash
# Public site should now serve real events from the DB instead of fallback.
# If you skipped the seed, the section will be empty (which is correct — no real events yet).
curl -sS https://daisysnonprofit.com | grep -oE "(Family Fun Day|Mother's Day Floral)" | sort -u
```

- If you ran the modified seed: should print `Mother's Day Floral`
- If you skipped seed: should print nothing (Events section will show "No events found" via the component's empty state)
- If you still see `Family Fun Day`: env vars didn't take effect — recheck Vercel and redeploy without build cache

4. Test admin login: https://daisysnonprofit.com/admin/login → sign in with the user created in Part 3.
5. Test create flow: `/admin/events` → "+ Add New Event" → fill any row → Create. Should succeed (no 500) and appear on the homepage within a few seconds (`revalidatePath("/")` fires inside the action).

---

## Part 6 — Remove the fallback Mother's Day entry

Once the DB has the Mother's Day row, delete the fallback we added on 2026-05-11 (commit `7e16b96`):

```bash
# Edit src/lib/supabase/queries.ts, remove the "id: '4'" Mother's Day Floral Experience block from fallbackEvents.
# Commit and push.
```

The other 3 fallback events (Family Fun Day, Back to School Drive, Community Garden Kickoff) can stay — they're decorative placeholders for when the database is unconfigured/empty.

> Longer-term cleanup option: drop the fallback data entirely and ship an empty state ("Check back soon for upcoming events"). That's a design call, not a setup call.

---

## Part 7 — Local dev setup

For working on the project locally with real Supabase data:

```bash
cd "C:/Users/tonyt/Daisys Foundation Website"
npx vercel link             # link to the daisy-foundation-web project
npx vercel env pull .env.local   # downloads all prod env vars
npm run dev                 # localhost:3000 now talks to the real Supabase
```

Alternatively, for fully isolated local dev with a local Postgres:

```bash
npx supabase start          # starts Docker-backed local stack
# Manually set NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321 and the local anon key in .env.local
```

---

## Risks & rollback

- **Risk:** Wrong service role key committed to git. **Mitigation:** `.env.local` is gitignored; never paste service role keys into chat, source files, or commit messages.
- **Risk:** RLS policies block legitimate writes once enabled. **Mitigation:** Review `supabase/migrations/20260119000001_rls_policies.sql` before applying — if any policy is too strict, fix and re-apply.
- **Risk:** Auto-redeploy doesn't pick up new env vars. **Mitigation:** Manually redeploy *without* build cache.
- **Rollback:** Remove env vars from Vercel and redeploy → site reverts to fallback data. No code changes needed.

---

## Appendix — Modified seed (Mother's Day only event)

If you want to seed real content alongside the schema instead of using the original placeholders:

```sql
-- Programs (from original seed, unchanged)
INSERT INTO programs (title, description, category, bullet_points, order_index) VALUES
('Healthy Beginnings', 'Supporting families from prenatal through age 3 with comprehensive care.', 'Wellness',
  '["Prenatal and postpartum care", "Developmental screenings", "Parent education workshops"]', 1),
('Bloom Scholarships', 'Tuition assistance ensuring every child can access quality pre-K programs.', 'Education',
  '["Full or partial tuition coverage", "School supplies and materials", "Educational enrichment activities"]', 2),
('Hands & Hearts', 'Building strong communities through volunteer engagement and family events.', 'Community',
  '["Family fun events", "Community service projects", "Parent support groups"]', 3),
('Green Daisy', 'Environmental education and sustainability through hands-on learning.', 'Environment',
  '["Community garden projects", "Nature-based learning", "Sustainability education"]', 4);

-- Impact metrics (from original seed, unchanged)
INSERT INTO impact_metrics (metric_name, metric_value, display_suffix, display_order) VALUES
('Families Served', 3200, '+', 1),
('Local Partners', 85, '', 2),
('Volunteer Hours', 14500, '+', 3),
('Active Programs', 12, '', 4);

-- Events — only the real Mother's Day sponsorship (skip the 3 placeholders)
INSERT INTO events (title, date, location, description, rsvp_link, is_featured) VALUES
('Mother''s Day Floral Experience', '2026-05-10', 'Hap''s House',
 'On Mother''s Day, Daisy''s Nonprofit was proud to sponsor Hap''s House''s Mother''s Day Floral Experience — a community celebration in partnership with OMU Gallery. Families gathered to celebrate motherhood, create something beautiful, and honor the women who inspire us.',
 NULL, false);

-- Success story (from original seed, unchanged)
INSERT INTO success_stories (title, content, is_published, display_order) VALUES
('Maria''s Story',
 'When I became a single mother, I didn''t know how I would afford quality childcare while working full-time. The Bloom Scholarship program gave my children access to an amazing pre-K program at no cost. Today, they''re thriving in elementary school, and I''ve completed job training to advance my career. This foundation changed our lives.',
 true, 1);
```

---

## References

- `docs/prd-database-schema.md` — full table definitions
- `docs/service-integration.md` — Stripe, Resend, Mailchimp env vars
- `supabase/migrations/` — schema source of truth
- Vercel project: https://vercel.com/tony-telemacques-projects/daisy-foundation-web
- Supabase docs: https://supabase.com/docs/guides/getting-started/quickstarts/nextjs
