---
status: in-progress
created: 2026-04-17
updated: 2026-04-17
tags: [domain, strategy, branding, seo]
---

# Daisy's Foundation — Domain Strategy & Website Changes

> Conversation summary from 2026-04-17 session. Covers domain purchases, DNS migration from Squarespace to Vercel, competitor analysis, and website content changes.

---

## Domain Inventory (All Purchased on Squarespace)

| Domain | Role | Status |
|--------|------|--------|
| **daisysnonprofit.com** | **New primary website** | DNS partially configured — old Squarespace A records still need to be deleted |
| **daisysnonpro.fit** | Campaign shortlink (clever wordplay: "Daisy's Non-Pro-Fit" → nonprofit) | DNS not yet pointed to Vercel |
| **daisysfoundation.com** | Redirect → daisysnonprofit.com (keep for old links) | Currently live as primary |

---

## Competitor Analysis

| | **Daisy's Foundation** (ours) | **DAISY Foundation** (daisyfoundation.org) | **Daisy Cares** (daisycaresfoundation.com) |
|---|---|---|---|
| Mission | Early childhood education, family support, honoring Grandmother Daisy | Nursing recognition awards (DAISY = "Diseases Attacking the Immune System") | Unknown (thin Wix site) |
| Location | Jacksonville, FL | Anacortes, WA (international) | Unknown |
| Size | Local startup | Large, est. 1999, thousands of hospitals | Small |
| SEO Threat | — | **HIGH** — dominates "Daisy Foundation" searches | Low |
| Name Confusion Risk | — | **HIGH** — near-identical name | Moderate |

**Key insight:** Anyone Googling "Daisy Foundation" will find daisyfoundation.org first. Can't compete head-on with 25+ years of SEO authority. Must differentiate via:
- Possessive "Daisy's" (not "Daisy")
- "Nonprofit" in domain name
- Jacksonville, FL location keywords
- Early childhood education focus

---

## Recommended Strategy

### Primary Domain: **daisysnonprofit.com**
- Includes "nonprofit" — instant trust signal
- Differentiates from nursing org
- Trisha specifically requested this name
- Clean, professional, SEO-friendly

### Campaign Shortlink: **daisysnonpro.fit**
- Clever wordplay (Daisy's Non-Pro-Fit)
- Short & memorable for social media bios, QR codes, flyers, SMS campaigns
- Redirects to primary domain

### Legacy: **daisysfoundation.com**
- 301 redirect to daisysnonprofit.com
- Preserves existing SEO
- Keeps old links working

---

## DNS Migration Progress (2026-04-17)

### Vercel Configuration (Completed)
All domains added to Vercel project `daisy-foundation-web`:
- `daisysnonprofit.com`
- `www.daisysnonprofit.com`
- `daisysnonpro.fit`
- `www.daisysnonpro.fit`

### Squarespace DNS (In Progress)

**Resolved:** Old Squarespace parking A records (198.x.x.x) deleted. DNS now resolves cleanly to `76.76.21.21` (Vercel only). Confirmed via nslookup 2026-04-17.

**Current DNS state:**
```
daisysnonprofit.com A records:
  76.76.21.21        ← Vercel ✅
```

### Remaining DNS Tasks

- [x] Delete the 4 old Squarespace A records (198.x.x.x) from daisysnonprofit.com DNS
- [ ] Verify CNAME www → cname.vercel-dns.com on daisysnonprofit.com
- [ ] Add A record `@` → `76.76.21.21` on daisysnonpro.fit in Squarespace DNS ← **Tony: last remaining task**
- [ ] Delete Squarespace parking records on daisysnonpro.fit ← **Tony: do alongside above**
- [ ] Add CNAME www → cname.vercel-dns.com on daisysnonpro.fit
- [x] Set up redirect: daisysnonpro.fit → daisysnonprofit.com (301, done via Vercel API 2026-04-17)
- [x] Set up redirect: www.daisysnonpro.fit → daisysnonprofit.com (301, done via Vercel API 2026-04-17)
- [x] Set up redirect: daisysfoundation.com → daisysnonprofit.com (301, done via Vercel API 2026-04-17)
- [x] Set up redirect: www.daisysfoundation.com → daisysnonprofit.com (301, done via Vercel API 2026-04-17)
- [x] daisysnonprofit.com confirmed as primary domain (200 OK, verified 2026-04-17)

---

## Code Changes Needed After DNS Cutover

### `src/app/layout.tsx`
- [x] Update `openGraph.url` from `https://daisysfoundation.com` → `https://daisysnonprofit.com`
- [x] Update title from "Daisy Foundation" → "Daisy's Foundation" (possessive for differentiation)
- [x] Change "Miami nonprofits" keyword → "Jacksonville FL nonprofits" (location is Jacksonville, not Miami)
- [x] Add JSON-LD structured data for NonprofitOrganization schema

### External Services
- [ ] Update Stripe webhook URL: `https://daisysnonprofit.com/api/webhooks/stripe`
- [ ] Update Resend domain verification for new domain
- [ ] Update Mailchimp "from" email to match new domain (if switching)

---

## Website Content Changes Completed Today (2026-04-17)

### Hero Background
- **File:** `src/components/sections/Hero.tsx:31`
- **Changed:** AI-generated `/images/hero/hero-community.png` → real family photo `/images/hero/hero-community.jpg`
- **Source:** `C:/Users/tonyt/Daisys-Foundation-Photos-For-Review/02-Daisy-Memorial-Photos/07-Daisy-With-Grandchildren.jpg`

### Mission Middle Photo
- **File:** `src/components/sections/MissionValues.tsx:80`
- **Changed:** AI-generated `grandmother-teaching.png` → real photo `grandmother-teaching.jpg`
- **Source:** `C:/Users/tonyt/Daisys-Foundation-Photos-For-Review/02-Daisy-Memorial-Photos/10-Daisy-Photo-Mar11b.jpg` (Daisy & granddaughter)

### Favicon
- **Issue fixed:** Original `favicon1.png` was only 39x33px with white background — too small, browsers ignored it
- **Solution:** Upscaled to proper sizes and made background transparent:
  - `public/favicon.ico` (32x32)
  - `public/icon.png` (192x192)
  - `public/apple-icon.png` (180x180)
- **File:** `src/app/layout.tsx:49-55`

### Commits Pushed
- `dbb6dcc` — Update hero and mission photos with real family images, add favicon
- `f02be40` — Switch favicon to heart-leaf logo (favicon1.png)
- `58c6037` — Fix favicon: upscale to proper sizes (32x32, 180x180, 192x192)
- `8ed00a6` — Make favicon background transparent

---

## Outstanding Email Task

Tony has a **draft email to Trisha** (unsent as of Mar 24) saying "You now own daisysnonprofit AND DAISY". Needs to be finalized and sent after full migration complete.

**Thread:** Gmail "Re: wedsite" with Trisha Curtis-Cornelius <info@daisysfoundation.com>

---

## Infrastructure Summary

- **Hosting:** Vercel (project `daisy-foundation-web`, team `tony-telemacques-projects`)
- **Repo:** https://github.com/Degenius12/daisy-foundation-website (main branch auto-deploys)
- **DNS Registrar:** Squarespace (all three domains)
- **Email:** info@daisysfoundation.com (may need to migrate to info@daisysnonprofit.com later)
- **Payments:** Stripe account "Daisy Non Profit Inc." (already connected)
