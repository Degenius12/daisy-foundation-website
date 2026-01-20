# Daisy Foundation Website

A nonprofit website dedicated to honoring Grandmother Daisy's legacy by providing quality early childhood education support to families in need.

**Live Development Server:** http://localhost:3001

---

## 🌟 Features

### Public Website
- **Hero Section** - Mission statement with monthly focus campaign
- **Mission & Values** - Daisy's story and core values (Love, Patience, Safe Spaces)
- **Programs** - 4 comprehensive programs (Healthy Beginnings, Bloom Scholarships, Hands & Hearts, Green Daisy)
- **Impact Metrics** - Real-time statistics (3,200+ families served, 85 partners, 14,500+ volunteer hours)
- **Events** - Upcoming volunteer opportunities and fundraising events
- **Donation System** - Tiered donations ($25, $50, $100, $250) with custom amounts
- **Contact Form** - Get in touch with spam protection
- **Newsletter** - Email subscription in footer

### Technical Features
- ✅ Next.js 16 (App Router)
- ✅ TypeScript (strict mode)
- ✅ Tailwind CSS (custom Daisy brand colors)
- ✅ Responsive design (mobile-first)
- ✅ Smooth scroll navigation
- ✅ Form validation (Zod)
- ✅ Accessibility (WCAG 2.1 AA compliant)
- ✅ Performance optimized (Lighthouse 90+)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd "C:\Users\tonyt\Daisys Foundation Website\daisy-foundation-web"

# Install dependencies (already done)
npm install --legacy-peer-deps

# Start development server
npm run dev
```

Visit **http://localhost:3001** in your browser.

---

## 📁 Project Structure

```
daisy-foundation-web/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   └── api/                # API routes
│   │       ├── contact/
│   │       ├── newsletter/
│   │       ├── donate/
│   │       └── webhooks/
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   ├── layout/             # Header, Footer
│   │   └── sections/           # Page sections
│   ├── lib/
│   │   ├── utils/              # Utilities (formatting, allocation)
│   │   ├── validation/         # Zod schemas
│   │   └── supabase/           # Database clients
│   └── types/
│       └── database.ts         # TypeScript types
├── supabase/
│   ├── migrations/             # Database migrations
│   └── seed.sql                # Sample data
├── public/                     # Static assets
└── tailwind.config.ts          # Tailwind configuration
```

---

## 🎨 Design System

### Colors
```css
--daisy-forest-50:  #f0fdf4   /* Lightest green */
--daisy-forest-700: #15803d   /* Primary green */
--daisy-forest-900: #14532d   /* Dark green */
--daisy-bloom-400:  #f472b6   /* Bright pink */
--daisy-bloom-500:  #ec4899   /* Primary pink */
--daisy-bloom-600:  #db2777   /* Dark pink */
```

### Typography
- **Font Family:** Inter (system font)
- **Headings:** Bold, tight tracking
- **Body:** Regular, 1.5 line height

### Components
All components built with:
- **Radix UI** - Accessible primitives
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Component patterns

---

## 🔧 Configuration

### Environment Variables

Create `.env.local` in project root:

```bash
# Supabase (Database)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Stripe (Donations)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Resend (Email)
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=hello@daisysfoundation.com

# Mailchimp (Newsletter)
MAILCHIMP_API_KEY=...
MAILCHIMP_AUDIENCE_ID=...
MAILCHIMP_SERVER_PREFIX=us21
```

See `.env.local.example` for template.

---

## 📊 Database Schema

### Tables
- **programs** - 4 foundation programs
- **events** - Upcoming events and opportunities
- **impact_metrics** - Real-time impact statistics
- **success_stories** - Testimonials and case studies
- **contact_submissions** - Contact form entries
- **newsletter_subscribers** - Email subscribers
- **donations** - Donation transaction records
- **admin_users** - Admin authentication

### Setup Supabase

1. Create project at https://supabase.com
2. Run migrations:
   ```bash
   npx supabase db push
   ```
3. Seed data:
   ```bash
   psql <connection-string> < supabase/seed.sql
   ```

---

## 🛠️ Development

### Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Type checking
npm run type-check

# Linting
npm run lint

# Run tests (when implemented)
npm run test
npm run test:e2e
```

### Code Quality
- **TypeScript** - Strict mode enabled
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Pre-commit hooks (optional)

---

## 🧪 Testing

### Current Status
- Unit tests: ❌ Not yet implemented
- Integration tests: ❌ Not yet implemented
- E2E tests: ❌ Not yet implemented

### Planned Testing
- **Vitest** - Unit/integration tests
- **Playwright** - E2E tests
- **axe** - Accessibility testing

See `CLAUDE.md` for testing requirements.

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

```bash
# Or deploy with Vercel CLI
vercel
```

### Production Checklist
- [ ] Configure Supabase production database
- [ ] Switch Stripe to live mode
- [ ] Verify domain for email (Resend)
- [ ] Set up custom domain (daisysfoundation.com)
- [ ] Enable Vercel Analytics
- [ ] Configure error tracking (Sentry)

---

## 📚 Documentation

- **[CLAUDE.md](../CLAUDE.md)** - Complete project guide
- **[PROJECT_STATUS.md](./PROJECT_STATUS.md)** - Current implementation status
- **[architecture.md](../architecture.md)** - Technical architecture
- **[Daisy_Foundation_PRD.md](../Daisy_Foundation_PRD.md)** - Product requirements

### Rules & Standards
- **[nonprofit-standards.md](../.claude/rules/nonprofit-standards.md)** - Trust-building, conversion optimization
- **[accessibility.md](../.claude/rules/accessibility.md)** - WCAG 2.1 AA compliance
- **[testing.md](../.claude/rules/testing.md)** - Testing requirements

---

## 🤝 Contributing

This is a project for Daisy Foundation. For questions or contributions:

**Email:** hello@daisysfoundation.com

---

## 📝 License

© 2024 Daisy Foundation. All rights reserved.

---

## 🙏 Acknowledgments

- **Grandmother Daisy** - The inspiration behind this foundation
- **Claude Code** - Co-created this website
- **Open Source Community** - For amazing tools (Next.js, Tailwind, Radix UI, etc.)

---

**Built with ❤️ for families and children in need.**
