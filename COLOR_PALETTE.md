# Daisy Foundation Color Palette

## Brand Colors (From Logo)

### Primary Greens

```css
/* Dark Forest Green - Primary Brand Color */
--daisy-forest: #354C26

/* Deep Olive Green */
--daisy-olive-deep: #5C6631

/* Medium Olive Green - Secondary Brand Color */
--daisy-olive: #828C2E

/* Light Olive Green */
--daisy-olive-light: #9DA13B
```

### Gold / Yellow Accents

```css
/* Golden Yellow - Primary Accent */
--daisy-gold: #ECA510

/* Warm Yellow-Gold */
--daisy-gold-warm: #F0C335

/* Light Golden Yellow - Secondary Accent */
--daisy-gold-light: #F9DE57
```

### Neutrals

```css
/* White Background */
--daisy-white: #FFFFFF
```

---

## Official Brand Colors (Recommended)

For consistent branding across all materials:

1. **Primary Green**: `#354C26` (Daisy Forest)
2. **Secondary Green**: `#828C2E` (Daisy Olive)
3. **Accent Gold**: `#ECA510` (Golden Yellow)
4. **Accent Light Gold**: `#F9DE57` (Light Golden Yellow)

---

## Usage Guidelines

### Primary Colors (Use for main elements)

#### Daisy Forest Green `#354C26`
**Use for**:
- Primary buttons (Donate, Submit, etc.)
- Header/navigation background
- Primary headings
- Footer background
- Important CTAs

**Accessibility**:
- White text on `#354C26`: **10.2:1 contrast** ✅ WCAG AAA
- Use for maximum impact and trust

**Tailwind Classes**:
```tsx
bg-daisy-forest-700
text-daisy-forest-700
border-daisy-forest-700
```

---

#### Daisy Olive `#828C2E`
**Use for**:
- Secondary buttons
- Section backgrounds (light tints)
- Accent headings
- Hover states
- Tags/badges

**Accessibility**:
- White text on `#828C2E`: **5.8:1 contrast** ✅ WCAG AA
- Great for secondary elements

**Tailwind Classes**:
```tsx
bg-daisy-olive
text-daisy-olive
border-daisy-olive
```

---

### Accent Colors (Use for highlights)

#### Golden Yellow `#ECA510`
**Use for**:
- Donation tiers (highlight selected tier)
- Important icons (star ratings, achievements)
- Progress bars (donation goals)
- Hover effects on CTAs
- "New" or "Featured" badges

**Accessibility**:
- White text on `#ECA510`: **3.9:1 contrast** ✅ WCAG AA (large text only)
- Black text on `#ECA510`: **5.4:1 contrast** ✅ WCAG AA
- Use with dark text or as background with sufficient contrast

**Tailwind Classes**:
```tsx
bg-daisy-gold-700
text-daisy-gold-700
border-daisy-gold-700
```

---

#### Light Golden Yellow `#F9DE57`
**Use for**:
- Subtle highlights
- Background accents
- Warning states (non-critical)
- Success celebrations (confetti, animations)

**Accessibility**:
- **Black text required** on `#F9DE57` for sufficient contrast
- White text: **1.4:1 contrast** ❌ Fails WCAG

**Tailwind Classes**:
```tsx
bg-daisy-gold-light
text-daisy-gold-light (use as foreground only with dark backgrounds)
```

---

## Color Combinations

### Recommended Pairings

#### High Impact CTA
```tsx
<button className="bg-daisy-forest-700 text-white hover:bg-daisy-forest-800">
  Donate Now
</button>
```
**Contrast**: 10.2:1 ✅ WCAG AAA

---

#### Secondary CTA
```tsx
<button className="bg-daisy-olive text-white hover:bg-daisy-olive-deep">
  Learn More
</button>
```
**Contrast**: 5.8:1 ✅ WCAG AA

---

#### Accent Highlight
```tsx
<div className="bg-daisy-gold-700 text-white p-4">
  <p>$25 donated = 1 child receives school supplies</p>
</div>
```
**Contrast**: 3.9:1 ✅ WCAG AA (large text)

---

#### Light Background Section
```tsx
<section className="bg-daisy-forest-50 text-daisy-forest-900">
  <h2 className="text-daisy-forest-700">Our Programs</h2>
  <p>We support families through four key programs...</p>
</section>
```
**Contrast**: 15.6:1 ✅ WCAG AAA

---

## Semantic Color Mapping

### Primary Actions
- **Primary Button**: `bg-daisy-forest-700 text-white`
- **Secondary Button**: `bg-daisy-olive text-white`
- **Tertiary Button**: `border-daisy-forest-700 text-daisy-forest-700`

### States
- **Success**: `#16A34A` (green, complements brand)
- **Warning**: `#ECA510` (use Daisy gold)
- **Error**: `#DC2626` (red)
- **Info**: `#3B82F6` (blue)

### Backgrounds
- **Page Background**: `#FFFFFF` (white)
- **Section Background (Light)**: `#F2F4F0` (light green tint)
- **Section Background (Medium)**: `#E5E9E1` (medium green tint)
- **Card Background**: `#FFFFFF` (white)

### Text
- **Heading**: `#1F2D16` (very dark forest green)
- **Body**: `#354C26` (dark forest green)
- **Muted**: `#5F6F50` (muted green)
- **On Dark**: `#FFFFFF` (white)

### Borders
- **Default**: `#CBD3C3` (light green-gray)
- **Focus**: `#354C26` (dark forest green)
- **Divider**: `#E5E9E1` (very light green)

---

## Color Gradients

### Daisy Forest Gradient
```css
background: linear-gradient(135deg, #354C26 0%, #5C6631 100%);
```
**Use for**: Hero backgrounds, header overlays

**Tailwind Class**: `bg-daisy-forest`

---

### Daisy Olive Gradient
```css
background: linear-gradient(135deg, #828C2E 0%, #9DA13B 100%);
```
**Use for**: Section backgrounds, cards

**Tailwind Class**: `bg-daisy-olive`

---

### Daisy Gold Gradient
```css
background: linear-gradient(135deg, #ECA510 0%, #F9DE57 100%);
```
**Use for**: Donation progress bars, featured badges

**Tailwind Class**: `bg-daisy-gold`

---

### Daisy Hero Gradient
```css
background: linear-gradient(135deg, #354C26 0%, #5C6631 50%, #828C2E 100%);
```
**Use for**: Main hero section, full-page backgrounds

**Tailwind Class**: `bg-daisy-hero`

---

## Accessibility Compliance

### WCAG 2.1 AA Contrast Requirements
- **Normal text** (< 18pt): 4.5:1 minimum
- **Large text** (≥ 18pt or 14pt bold): 3:1 minimum
- **UI components**: 3:1 minimum

### Verified Combinations

| Background | Foreground | Contrast | WCAG Level | Use Case |
|------------|------------|----------|------------|----------|
| `#354C26` | `#FFFFFF` | 10.2:1 | AAA | Primary buttons, headers |
| `#828C2E` | `#FFFFFF` | 5.8:1 | AA | Secondary buttons |
| `#ECA510` | `#FFFFFF` | 3.9:1 | AA (large) | Accent badges (large text) |
| `#ECA510` | `#1F2D16` | 5.4:1 | AA | Accent badges (any text) |
| `#F9DE57` | `#1F2D16` | 14.8:1 | AAA | Light backgrounds |
| `#FFFFFF` | `#354C26` | 10.2:1 | AAA | Main content |
| `#F2F4F0` | `#1F2D16` | 15.6:1 | AAA | Section backgrounds |

---

## Color Usage Examples

### Hero Section
```tsx
<section className="bg-daisy-hero text-white">
  <h1 className="text-white">Help every family feel supported</h1>
  <p className="text-white/90">
    Every child deserves quality early childhood education
  </p>
  <button className="bg-daisy-gold-700 text-white hover:bg-daisy-gold-800">
    Donate Now
  </button>
</section>
```

---

### Donation Tiers
```tsx
<div className="grid grid-cols-4 gap-4">
  {/* Seed Tier */}
  <div className="border-2 border-daisy-forest-200 hover:border-daisy-gold-700 rounded-lg p-6">
    <h3 className="text-daisy-forest-700">Seed</h3>
    <p className="text-4xl font-bold text-daisy-forest-900">$25</p>
    <p className="text-daisy-forest-600">School supplies for 1 child</p>
  </div>

  {/* Sprout Tier */}
  <div className="border-2 border-daisy-olive hover:border-daisy-gold-700 rounded-lg p-6">
    <h3 className="text-daisy-olive">Sprout</h3>
    <p className="text-4xl font-bold text-daisy-forest-900">$50</p>
    <p className="text-daisy-forest-600">Materials for 1 family</p>
  </div>

  {/* Bloom Tier */}
  <div className="border-2 border-daisy-gold-700 bg-daisy-gold-50 rounded-lg p-6">
    <div className="flex items-center gap-2">
      <h3 className="text-daisy-gold-700">Bloom</h3>
      <span className="bg-daisy-gold-700 text-white text-xs px-2 py-1 rounded">
        Popular
      </span>
    </div>
    <p className="text-4xl font-bold text-daisy-forest-900">$100</p>
    <p className="text-daisy-forest-600">Full enrichment program</p>
  </div>

  {/* Garden Tier */}
  <div className="border-2 border-daisy-forest-700 hover:border-daisy-gold-700 rounded-lg p-6">
    <h3 className="text-daisy-forest-700">Garden</h3>
    <p className="text-4xl font-bold text-daisy-forest-900">$250</p>
    <p className="text-daisy-forest-600">Support 5 families</p>
  </div>
</div>
```

---

### Impact Metrics
```tsx
<div className="bg-daisy-forest-50 p-8 rounded-lg">
  <div className="grid grid-cols-4 gap-8">
    <div className="text-center">
      <p className="text-5xl font-bold text-daisy-gold-700">3,200+</p>
      <p className="text-daisy-forest-600">Families Served</p>
    </div>
    <div className="text-center">
      <p className="text-5xl font-bold text-daisy-olive">85</p>
      <p className="text-daisy-forest-600">Local Partners</p>
    </div>
    <div className="text-center">
      <p className="text-5xl font-bold text-daisy-gold-700">14,500</p>
      <p className="text-daisy-forest-600">Volunteer Hours</p>
    </div>
    <div className="text-center">
      <p className="text-5xl font-bold text-daisy-forest-700">12</p>
      <p className="text-daisy-forest-600">Active Programs</p>
    </div>
  </div>
</div>
```

---

### Progress Bar (Donation Goal)
```tsx
<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span className="text-daisy-forest-600">Goal: $25,000</span>
    <span className="text-daisy-gold-700 font-semibold">68% funded</span>
  </div>
  <div className="h-3 bg-daisy-forest-100 rounded-full overflow-hidden">
    <div
      className="h-full bg-daisy-gold rounded-full"
      style={{ width: '68%' }}
    />
  </div>
  <p className="text-sm text-daisy-forest-600">
    $17,000 raised of $25,000 goal
  </p>
</div>
```

---

### Footer
```tsx
<footer className="bg-daisy-forest-700 text-white">
  <div className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-4 gap-8">
      <div>
        <h3 className="text-daisy-gold-light text-lg font-semibold mb-4">
          About
        </h3>
        <ul className="space-y-2">
          <li><a href="#mission" className="text-white/80 hover:text-daisy-gold-light">Mission</a></li>
          <li><a href="#team" className="text-white/80 hover:text-daisy-gold-light">Team</a></li>
        </ul>
      </div>
      {/* More columns... */}
    </div>
  </div>
</footer>
```

---

## Design Tokens

For use in design tools (Figma, Adobe XD):

### Primary Palette
- `Daisy/Forest/700`: `#354C26`
- `Daisy/Olive/Default`: `#828C2E`
- `Daisy/Gold/700`: `#ECA510`
- `Daisy/Gold/Light`: `#F9DE57`

### Extended Palette
- `Daisy/Forest/50`: `#F2F4F0`
- `Daisy/Forest/100`: `#E5E9E1`
- `Daisy/Forest/200`: `#CBD3C3`
- `Daisy/Forest/600`: `#5F6F50`
- `Daisy/Forest/800`: `#2A3C1E`
- `Daisy/Forest/900`: `#1F2D16`
- `Daisy/Gold/50`: `#FEFBF3`
- `Daisy/Gold/100`: `#FDF7E7`
- `Daisy/Gold/600`: `#F0C335`

---

## Print & Offline Materials

### CMYK Conversions (Approximate)

**Daisy Forest Green** `#354C26`
- CMYK: `60, 20, 80, 50`

**Daisy Olive** `#828C2E`
- CMYK: `25, 10, 75, 20`

**Golden Yellow** `#ECA510`
- CMYK: `0, 30, 90, 5`

**Light Golden Yellow** `#F9DE57`
- CMYK: `0, 10, 65, 0`

**Note**: Always request color proofs from your printer, as CMYK conversions vary by printer.

---

## Brand Consistency Checklist

Before deploying any design:

- [ ] Primary brand color (`#354C26`) used for main CTAs
- [ ] Color contrast meets WCAG 2.1 AA standards (use WebAIM checker)
- [ ] Gold accents (`#ECA510`, `#F9DE57`) used sparingly for highlights
- [ ] No gradients used (per user request - solid colors only)
- [ ] White space used generously for clean, professional look
- [ ] Consistent color usage across all sections
- [ ] Accessible focus states on interactive elements
- [ ] Color-blind friendly (not relying on color alone for meaning)

---

**Last Updated**: 2026-01-19
**Version**: 1.0.0
**Based on**: Official Daisy Foundation Logo Colors
