---
status: in-progress
created: 2026-05-08
updated: 2026-05-08
tags: [google-workspace, dns, domain-alias, runbook]
---

# Google Workspace Alias Setup — daisysnonprofit.com

> Runbook for adding `daisysnonprofit.com` as a **user alias domain** of the existing `daisysfoundation.com` Google Workspace. Result: every existing mailbox automatically also receives mail at the corresponding `@daisysnonprofit.com` address.

---

## Why a user alias (not a secondary domain)?

| | User alias domain | Secondary domain |
|---|---|---|
| Existing mailboxes get the new address automatically | ✅ | ❌ (must create new users) |
| Independent users on each domain | ❌ | ✅ |
| Setup time | ~15 min | ~30 min + per-user provisioning |
| Cost | Free | Free, but new users may incur per-license cost |
| Right for migration period | ✅ | ❌ overkill |

We want option 1 — both addresses route to the same inbox. If we ever decide to give `daisysnonprofit.com` its own users, we can convert it later.

---

## Pre-checks before starting

- [ ] Confirm admin email: sign in at admin.google.com — verify whether the admin account is `info@daisyfoundation.com` (no "s") or `info@daisysfoundation.com` (with "s"). Trisha's Jan 7 email had it without the "s" but the invoice domain is `daisysfoundation.com`.
- [ ] Confirm payment method is current (no Red Alert at top of admin page)
- [ ] Have the Squarespace DNS panel open in a separate tab — login is part of Trisha's master password set

---

## Part 1 — Add the alias in Admin Console

1. admin.google.com → left menu **Domains** → **Manage domains**
2. Click **Add a domain** (top right)
3. Choose **User alias domain**
4. Enter: `daisysnonprofit.com` → **Continue**
5. Google shows a **TXT record** for verification — copy the entire `google-site-verification=...` string into the placeholder below

```
TXT verification value (paste here once you have it):
______________________________________________________
```

> ⚠️ Do not click "Verify" yet — go to Part 2 first.

---

## Part 2 — Add DNS records on Squarespace

In Squarespace DNS panel for `daisysnonprofit.com`, **leave existing records alone** (the Vercel A record `76.76.21.21` and CNAME `www` → `cname.vercel-dns.com` keep web traffic working). Add these as new records:

### TXT record (verification)

| Type | Host | Value |
|------|------|-------|
| TXT | @ | *(paste the google-site-verification=... string from Part 1, step 5)* |

### MX records (mail routing)

| Type | Host | Priority | Value |
|------|------|----------|-------|
| MX | @ | 1  | `ASPMX.L.GOOGLE.COM` |
| MX | @ | 5  | `ALT1.ASPMX.L.GOOGLE.COM` |
| MX | @ | 5  | `ALT2.ASPMX.L.GOOGLE.COM` |
| MX | @ | 10 | `ALT3.ASPMX.L.GOOGLE.COM` |
| MX | @ | 10 | `ALT4.ASPMX.L.GOOGLE.COM` |

> Squarespace's DNS panel: **Settings** → **Domains** → click `daisysnonprofit.com` → **DNS Settings** → scroll to **Custom Records** → **Add Record**. For MX records, the priority field appears after you select MX as the type.

### Optional but recommended later (after verification works)

These improve deliverability and are good to add once email is flowing:

| Type | Host | Value |
|------|------|-------|
| TXT | @ | `v=spf1 include:_spf.google.com ~all` |
| TXT | `_dmarc` | `v=DMARC1; p=none; rua=mailto:info@daisysfoundation.com` |
| TXT | (DKIM — generated separately in Admin) | *(see Part 4)* |

---

## Part 3 — Verify in Admin Console

1. Back in admin.google.com → **Domains** → **Manage domains** → click the pending `daisysnonprofit.com` row
2. Click **Verify**
3. If it fails: wait 10 minutes for DNS propagation, try again
4. Test propagation manually from a terminal:

```bash
# Should show the google-site-verification TXT
nslookup -type=TXT daisysnonprofit.com

# Should show the 5 ASPMX entries
nslookup -type=MX daisysnonprofit.com
```

5. Once verified: send a test email from a personal Gmail to `info@daisysnonprofit.com` — should arrive in the existing `info@daisysfoundation.com` inbox within ~1 minute

---

## Part 4 — DKIM (improves deliverability, optional but recommended)

After Part 3 succeeds:

1. admin.google.com → **Apps** → **Google Workspace** → **Gmail** → **Authenticate email**
2. Select domain: `daisysnonprofit.com`
3. Click **Generate new record** (or "Start authentication")
4. Copy the long DKIM TXT value
5. In Squarespace DNS, add:

| Type | Host | Value |
|------|------|-------|
| TXT | `google._domainkey` | *(paste the long DKIM value from step 4)* |

6. Wait ~10 min, then in Admin click **Start authentication**

---

## Part 5 — Other Workspace cleanups while in admin

- [ ] **Rename account:** Account Settings → Profile → change display name from `"Daisy's (Lva)"` → `"Daisy's Nonprofit"`
- [ ] **Upload logo:** Account Settings → Personalization → Custom logo → upload `daisys-nonprofit-logo.png` (file is at `public/images/daisys-nonprofit-logo.png` and live at https://daisysnonprofit.com/images/daisys-nonprofit-logo.png)
- [ ] **Document admin password** in 1Password/Bitwarden vault (per pending TickTick password task)
- [ ] **Confirm billing payment method** is current (no Red Alert at top of admin page)

---

## Part 6 — Communicate to Trisha

Once verified and tested, send Trisha a one-paragraph note:

> "Workspace alias is set up — anything sent to info@daisysnonprofit.com now lands in your existing daisysfoundation.com inbox automatically. No change to how you sign in or send mail; you can hand out either address. When you're ready to start telling people the new email is `info@daisysnonprofit.com`, just go for it — the old address will keep working as long as the domain alias stays in place."

---

## Risks & rollback

- **Risk:** MX records on `daisysnonprofit.com` could conflict with anything currently running on that domain. Check: this domain currently only has Vercel A records — no existing MX records (verify with `nslookup -type=MX daisysnonprofit.com` before starting). If MX records DO exist, document them before overwriting.
- **Rollback:** If anything goes wrong, simply remove the user alias domain in Admin (**Domains** → Manage domains → Remove). DNS records can stay (they're harmless without the alias on Google's side). No effect on existing daisysfoundation.com email.

---

## References

- [Google Workspace help: Add a user alias domain](https://support.google.com/a/answer/53295)
- Domain inventory: `docs/domain-strategy-2026-04-17.md`
- Existing TickTick task: project "Daisy's Foundation" → "Google Workspace setup and documentation — Tony handling"
