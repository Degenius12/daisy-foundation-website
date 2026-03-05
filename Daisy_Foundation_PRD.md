# PRD — Daisy Foundation Website (Founded 2024)

## 1) Overview

### Product Name
**Daisy Foundation Website**

### Purpose
Create a modern, trustworthy nonprofit website that:
- Clearly communicates Daisy Foundation’s mission and programs
- Drives donations (one-time + recurring)
- Increases volunteer signups and community engagement
- Builds credibility with impact metrics, stories, and transparency

### Target Launch Version
**V1: Public Launch (Single-page site + essential integrations)**

### Primary User Goals
Visitors should be able to:
1. Understand what Daisy Foundation does in <10 seconds
2. Explore programs and proof of impact
3. Donate easily
4. Join newsletter / volunteer
5. Contact the organization quickly


---

## 2) Goals & Success Metrics

### Business Goals
- Increase donations and recurring donors
- Convert visitors into volunteers and partners
- Improve trust and legitimacy (especially for a newer nonprofit founded in 2024)

### KPIs (Measurable Success)

#### Donation Conversion
- Donation conversion rate: target **1.5%–3%**
- Monthly donor conversion: target **0.5%–1.5%**

#### Engagement
- Average scroll depth: **>70%**
- Newsletter signup conversion: **2%–5%**
- Volunteer inquiry conversion: **1%–3%**

#### Trust
- Bounce rate reduced with clear messaging
- Time on page: **>1 minute**

#### Technical
- Mobile PageSpeed score: **85+**
- Desktop PageSpeed score: **90+**


---

## 3) Target Users

### Primary Personas

#### 1. Donor
- Wants to donate quickly
- Needs trust signals (impact, transparency, mission)

#### 2. Volunteer
- Wants to know how to help and what events exist
- Needs easy signup and clear event information

#### 3. Partner / Sponsor
- Schools, small businesses, community orgs
- Wants credibility and partnership options

#### 4. Press / Community Stakeholder
- Needs clear contact + story of mission + proof of activity


---

## 4) Scope

### In-Scope (V1)
✅ Single-page website with:
- Header navigation
- Hero
- Mission + values
- Programs
- Impact (stats + stories)
- Events / volunteer
- Donation section
- Contact + form
- Footer (newsletter + quick links)

✅ Responsive design (mobile, tablet, desktop)  
✅ Donation CTA flow (connected or placeholder)  
✅ Newsletter capture (Mailchimp/Brevo placeholder or connected)  
✅ Analytics + conversion tracking support  

### Out of Scope (V1 — Optional V2)
- Full CMS blog
- Multi-language support
- Member login portal
- Complex event registration system
- Grants page + downloadable PDFs (can be added later)


---

## 5) Key User Journeys

### Journey A — New Visitor → Donation
1. Visitor lands on hero section
2. Understands mission immediately
3. Scrolls to “Programs” or “Impact”
4. Clicks “Donate”
5. Selects tier or custom amount
6. Completes checkout via donation provider
7. Gets confirmation and receipt

✅ **Success = completed donation + tracked conversion event**

---

### Journey B — Volunteer → Sign Up
1. Visitor goes to “Events”
2. Sees opportunities
3. Clicks “Volunteer”
4. Fills out contact form or signup form
5. Receives confirmation email (or redirect to volunteer form)

✅ **Success = captured volunteer lead**

---

### Journey C — Partner → Request Collaboration
1. Visitor opens “Programs”
2. Sees partnership CTA
3. Submits interest form
4. Team receives inquiry with details

✅ **Success = partner inquiry lead captured**


---

## 6) Functional Requirements

## 6.1 Global Navigation + Layout
### Requirements
- Sticky header with:
  - Logo + Daisy Foundation name
  - Navigation: Mission, Programs, Impact, Events, Donate, Contact
  - Primary CTA button: **Donate**
- Smooth scrolling to sections
- Mobile menu toggle and collapsible nav

### Acceptance Criteria
- Header remains visible on scroll
- Mobile menu works on all breakpoints
- Clicking nav scrolls correctly with appropriate spacing

---

## 6.2 Hero Section
### Requirements
- Positioning line (ex: **Community • Care • Opportunity**)
- Headline: mission-focused, emotional, action-oriented
- Subheadline: quick summary of foundation work
- Primary CTA: **Donate now**
- Secondary CTA: **Explore programs**
- 3 pillars (ex: Direct support / Local partners / Lasting impact)
- Optional “Monthly focus” card with goal + event

### Acceptance Criteria
- CTA buttons scroll to correct sections
- Fully responsive layout with no overflow/cutoff issues

---

## 6.3 Mission + Values
### Requirements
- Mission statement paragraph
- Values list (integrity, equity, sustainability, transparency)
- Trust blocks: community-first, dignity, sustainable
- Transparency note

### Acceptance Criteria
- Mission is clear and scannable
- Values are readable with icons and structure

---

## 6.4 Programs Section
### Requirements
- 4 program cards, each includes:
  - Program title
  - Short description
  - Tag/category (Education, Wellness, etc.)
  - 3 bullet points
  - CTA: **Learn more / volunteer**

### Acceptance Criteria
- Cards display as a grid on desktop and stack on mobile
- CTA scrolls to contact/signup

---

## 6.5 Impact Section
### Requirements
- Impact stats grid:
  - Families supported
  - Partners
  - Volunteer hours
  - Programs launched
- 3 short story blocks
- Optional media tip area

### Acceptance Criteria
- Stats are aligned and readable on all screens
- Stories are short and easy to skim

---

## 6.6 Events Section
### Requirements
- Show 3 featured events minimum:
  - Title
  - Date
  - Location
  - Description
  - CTA: RSVP / Volunteer

### Acceptance Criteria
- Events display cleanly and consistently
- CTA buttons work properly

---

## 6.7 Donate Section (Core Conversion Section)
### Requirements
- Donation tiers:
  - Seed ($25)
  - Sprout ($50)
  - Bloom ($100)
  - Garden ($250)
- Custom slider:
  - Min $10, max $500, step $5
- Buttons:
  - Donate now
  - Become a monthly donor
- “Where your money goes” breakdown bars:
  - Programs 78%
  - Operations 14%
  - Fundraising 8%
- Employer matching note

### Integration Options
- Donorbox embed
- Stripe Checkout
- PayPal donation link
- Classy embed

### Acceptance Criteria
- Selected tier highlights properly
- Slider updates amount live
- Donate button opens correct checkout in production

---

## 6.8 Contact Section
### Requirements
- Contact details:
  - Address
  - Email
  - Phone
- Social icons:
  - Instagram
  - Facebook
  - LinkedIn
- Contact form fields:
  - Name
  - Email
  - Subject
  - Message
  - Submit

### Form Delivery Options
- Formspree
- Netlify Forms
- Backend endpoint
- Google Forms redirect

### Acceptance Criteria
- Required fields validate
- Submit shows success or confirmation
- Message is delivered to foundation inbox

---

## 6.9 Footer
### Requirements
- Logo + mission sentence
- Quick links
- Newsletter signup (email + join button)
- Privacy / Terms / Financials links (placeholders ok in V1)
- Copyright:
  - **© 2024–present year Daisy Foundation**

### Acceptance Criteria
- Footer responsive layout
- Newsletter signup works or is connected

---

## 7) Content Requirements

### Copy Needed From Daisy Foundation
- One-line mission statement
- Hero description summary
- Program names + short descriptions
- Impact stats (real numbers)
- Event details (optional)
- Donation allocation breakdown (real percentages)
- Contact info + social links


---

## 8) Design Requirements

### Style Goals
- Clean, warm, modern nonprofit style
- Rounded corners, soft card shadows, friendly typography
- Emotion + trust + action

### UX Requirements
- Clear CTA priority: Donate > Volunteer > Learn More
- Minimal friction donation flow
- Mobile-first layout
- Accessible tap targets and readable fonts

### Accessibility
- Strong heading structure (H1 only once)
- Keyboard navigation support
- Form fields have labels/placeholders

---

## 9) Technical Requirements

### Frontend
- React
- Tailwind CSS
- shadcn/ui components
- Framer Motion for animations

### Performance Targets
- LCP < 2.5 seconds
- Minimal CLS (no layout shifting)
- Optimized + lazy loaded images

### SEO (V1)
- Meta title + description
- OpenGraph social share tags
- Clean heading structure
- Clear internal anchors for sections

---

## 10) Analytics & Tracking

### Trackable Events
- Donate button clicks
- Donation completion (if provider supports tracking)
- Newsletter signup
- Volunteer CTA clicks
- Contact form submissions

### Tools
- Google Analytics 4
- Meta Pixel (optional)
- Donation provider analytics

---

## 11) Security & Compliance

### Requirements
- HTTPS only
- Spam protection for forms (reCAPTCHA optional)
- Payments handled by PCI-compliant donation provider
- Privacy policy recommended (V2 if needed)

---

## 12) Admin / Operations Requirements

### Team Update Needs
- Events text
- Impact numbers
- Program descriptions
- Donation allocation percentages

**V1 approach:** code updates  
**V2 option:** CMS (Sanity, Contentful, JSON content file)

---

## 13) Risks & Mitigations

### Risk: Trust barrier for new nonprofit (Founded 2024)
**Mitigation**
- Transparency and reporting statements
- Real photos, testimonials, and partner logos
- Clear impact stats + stories

### Risk: Donation friction
**Mitigation**
- Use fast checkout tool (Stripe/Donorbox)
- Promote monthly giving clearly

### Risk: Too much content on one page
**Mitigation**
- Keep content scannable
- Use cards, bullets, and structured sections

---

## 14) Launch Checklist
✅ Domain + hosting configured  
✅ SSL enabled  
✅ Donation integration tested  
✅ Contact form tested  
✅ Newsletter integration confirmed  
✅ Analytics installed  
✅ Mobile testing complete  
✅ Accessibility check passed  

---

## 15) Future Enhancements (V2)
- Multi-page structure:
  - About Daisy
  - Programs detail pages
  - Blog/News
  - Financial reports page
- Photo + video gallery
- Volunteer portal
- Sponsorship packages page (PDF download)
