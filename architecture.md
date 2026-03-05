# Meal-Master 2026: Complete Technical Architecture

## Executive Summary

Meal-Master 2026 is a cost-optimized, production-ready web application that transforms fridge photos into verified nutritional data and recipe recommendations. Built with Next.js 16, Supabase, and Claude AI, the system maintains a monthly operating cost of $15-35 through aggressive caching strategies, search-first policies, and hard quota limits.

**Project Status**: Planning Phase → Implementation Ready
**Target Budget**: $15-35/month (hard cap: $50/month)
**Timeline**: 4-6 weeks to MVP launch
**Coverage**: 80%+ test coverage required

---

## Table of Contents

1. [System Overview](#system-overview)
2. [Tech Stack](#tech-stack)
3. [Architecture Patterns](#architecture-patterns)
4. [Database Schema](#database-schema)
5. [API Integration](#api-integration)
6. [Cost Optimization](#cost-optimization)
7. [Security & Privacy](#security--privacy)
8. [Performance Optimization](#performance-optimization)
9. [Testing Strategy](#testing-strategy)
10. [Deployment](#deployment)
11. [Monitoring & Observability](#monitoring--observability)

---

## System Overview

### Core Features

1. **Photo-to-Ingredients Detection**
   - Upload fridge/pantry photos
   - Claude Vision API analyzes image
   - MD5 deduplication (60-80% cost savings)
   - Confidence scoring (threshold: 0.8)
   - User confirmation for low-confidence results

2. **Recipe Search**
   - Spoonacular API integration (150 free requests/day)
   - Ingredient-based search
   - 7-day cache TTL
   - Search-first policy (before AI generation)

3. **AI Recipe Generation**
   - Claude Extended Thinking fallback (when search <3 results)
   - Quota limits: 5/user/day, 100/platform/day
   - Streaming response for better UX
   - `[AI-EXPERIMENTAL]` badge + medical disclaimer

4. **Nutritional Analysis**
   - USDA FoodData API integration
   - Per-serving calculations
   - RDA percentage display
   - Local cache for common foods

### User Workflows

#### Primary Flow: Photo → Recipe

```
┌─────────────┐
│ User Uploads│
│    Photo    │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────────┐
│ Image Processing                        │
│ • Resize (max 1200x1200)               │
│ • Convert to WebP (85% quality)        │
│ • Compute MD5 hash                     │
└──────┬──────────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────────┐
│ Vision Cache Check (MD5 lookup)        │
│ Layer 1: Redis (24h TTL)               │
│ Layer 2: Supabase (30d TTL)            │
└──────┬──────────────────────────────────┘
       │
       ├─ Cache HIT → Return cached ingredients (FREE)
       │
       └─ Cache MISS ↓
          │
          ▼
     ┌──────────────────────────────────┐
     │ Claude Vision API ($0.003)       │
     │ Detect ingredients + confidence  │
     └──────┬───────────────────────────┘
            │
            ▼
     ┌──────────────────────────────────┐
     │ Save to Cache (30-day TTL)       │
     └──────┬───────────────────────────┘
            │
            ▼
     ┌──────────────────────────────────┐
     │ Confidence Check                 │
     │ < 0.8 → Show warning, allow edit │
     │ >= 0.8 → Proceed                 │
     └──────┬───────────────────────────┘
            │
            ▼
     ┌──────────────────────────────────┐
     │ Recipe Search Cache Check        │
     │ Hash: MD5(sorted ingredients)    │
     └──────┬───────────────────────────┘
            │
            ├─ Cache HIT → Return recipes (FREE)
            │
            └─ Cache MISS ↓
               │
               ▼
          ┌──────────────────────────────┐
          │ Spoonacular API (FREE)       │
          │ Search by ingredients        │
          └──────┬───────────────────────┘
                 │
                 ▼
          ┌──────────────────────────────┐
          │ Result Count Check           │
          │ >= 3 → Show recipes (END)    │
          │ < 3 → Continue to AI         │
          └──────┬───────────────────────┘
                 │
                 ▼
          ┌──────────────────────────────┐
          │ AI Quota Check               │
          │ User: 5/day, Platform: 100/day│
          └──────┬───────────────────────┘
                 │
                 ├─ Quota Exceeded → Error message
                 │
                 └─ Quota OK ↓
                    │
                    ▼
               ┌──────────────────────────┐
               │ Claude Extended Thinking │
               │ Generate recipe ($0.20)  │
               └──────┬───────────────────┘
                      │
                      ▼
               ┌──────────────────────────┐
               │ USDA Nutrition Lookup    │
               │ Calculate per serving    │
               └──────┬───────────────────┘
                      │
                      ▼
               ┌──────────────────────────┐
               │ Display Recipe + Nutrition│
               │ [AI-EXPERIMENTAL] badge  │
               │ Medical disclaimer       │
               └──────────────────────────┘
```

**Expected Cost Distribution**:
- 60% requests: Cache hit → $0.00
- 30% requests: Search success → $0.00 (Spoonacular free)
- 10% requests: AI generation → $0.20
- **Average cost per request**: $0.02

---

## Tech Stack

### Frontend

**Framework**: Next.js 16 (App Router)
- React Server Components (default)
- Client Components (interactive features only)
- Streaming with Suspense boundaries
- ISR (Incremental Static Regeneration) for recipe pages
- Parallel routes for dashboard layout
- Intercepting routes for modals

**Styling**: Tailwind CSS + Shadcn/UI
- Utility-first CSS framework
- Pre-built accessible components
- Custom theme configuration
- Dark mode support (future)

**State Management**:
- Server Components for data fetching
- React hooks for client state
- Server Actions for mutations
- No global state library needed (leveraging RSC)

### Backend

**Database**: Supabase PostgreSQL
- Row-Level Security (RLS) policies
- Real-time subscriptions (optional)
- Generated TypeScript types
- Connection pooling via PgBouncer

**Authentication**: Supabase Auth
- Cookie-based sessions
- Email/password authentication
- Social login (future: Google, GitHub)
- JWT tokens with auto-refresh

**Storage**: Supabase Storage
- User photo uploads
- Presigned URLs for direct uploads
- CDN delivery
- Image transformation on-demand

**Edge Functions**: Supabase Edge Functions (Deno)
- Async AI recipe generation
- Webhook handlers
- Background jobs

### AI & External APIs

**Claude AI** (Anthropic)
- **Vision**: Claude 3.5 Sonnet (image → ingredients)
- **Generation**: Claude 3.7 Sonnet with Extended Thinking (recipe creation)
- Streaming responses for better UX
- Cost: $0.003/image, $0.20/generation

**Spoonacular API**
- Recipe search by ingredients
- Free tier: 150 requests/day
- Caching: 7-day TTL
- Fallback: AI generation if <3 results

**USDA FoodData Central API**
- Nutritional data verification
- Free, unlimited access
- Local cache for common foods
- Fallback: Estimate from food groups

### Caching Layer

**Upstash Redis**
- In-memory hot cache
- 24-hour TTL for frequently accessed data
- Free tier: 10K commands/day
- Atomic operations for quota counters

**Supabase (Persistent Cache)**
- Vision API results: 30-day TTL
- Recipe searches: 7-day TTL
- Nutrition data: Permanent cache
- Automatic expiry cleanup

**Browser (SessionStorage)**
- Current session data
- Reduces server round-trips
- Automatic cleanup on tab close

### Deployment & Infrastructure

**Hosting**: Vercel
- Free tier: 100GB bandwidth/month
- Automatic HTTPS
- Edge network (CDN)
- Preview deployments
- Zero-config deployment

**Monitoring**: Sentry + Vercel Analytics
- Error tracking (5K events/month free)
- Performance monitoring
- Custom cost dashboard
- User analytics

**CI/CD**: GitHub Actions
- Automated testing (unit + E2E)
- Code coverage reports
- Lighthouse audits
- Deployment on merge

---

## Architecture Patterns

### Next.js 16 App Router Structure

```
src/
├── app/
│   ├── layout.tsx                   # Root layout (RSC)
│   ├── page.tsx                     # Landing page (RSC)
│   ├── globals.css                  # Tailwind imports
│   │
│   ├── (auth)/                      # Route group: Auth
│   │   ├── layout.tsx               # Auth layout
│   │   ├── login/page.tsx           # Login (RSC)
│   │   └── signup/page.tsx          # Signup (RSC)
│   │
│   ├── (app)/                       # Route group: Protected app
│   │   ├── layout.tsx               # App layout with nav
│   │   ├── dashboard/
│   │   │   ├── page.tsx             # Dashboard (RSC)
│   │   │   ├── @stats/default.tsx   # Parallel route: Stats
│   │   │   └── @recent/default.tsx  # Parallel route: Recent
│   │   │
│   │   ├── upload/
│   │   │   └── page.tsx             # Photo upload (hybrid)
│   │   │
│   │   ├── recipes/
│   │   │   ├── page.tsx             # Recipe list (RSC + ISR)
│   │   │   ├── [id]/page.tsx        # Recipe detail (RSC + ISR)
│   │   │   └── @modal/              # Intercepting route
│   │   │       └── (.)[id]/page.tsx # Modal view
│   │   │
│   │   ├── search/
│   │   │   └── page.tsx             # Search (RSC)
│   │   │
│   │   └── admin/
│   │       └── costs/page.tsx       # Cost dashboard (RSC)
│   │
│   └── api/
│       ├── vision/route.ts          # POST: Image → Ingredients
│       ├── search/route.ts          # POST: Ingredients → Recipes
│       ├── generate/route.ts        # POST: AI recipe generation
│       └── nutrition/route.ts       # POST: Nutrition lookup
│
├── components/
│   ├── ui/                          # Shadcn/UI components
│   ├── features/                    # Feature components
│   └── layout/                      # Layout components
│
├── lib/
│   ├── supabase/                    # Supabase clients
│   ├── api/                         # API clients
│   ├── cache/                       # Cache utilities
│   ├── rate-limiting/               # Quota management
│   └── utils/                       # Shared utilities
│
├── actions/                         # Server Actions
│   ├── auth.ts                      # Auth mutations
│   ├── recipes.ts                   # Recipe CRUD
│   └── upload.ts                    # Photo upload
│
└── types/                           # TypeScript types
    ├── api.ts                       # API types
    └── database.ts                  # Supabase generated types
```

### Server vs Client Components

**Server Components (Default)**:
- Data fetching (database queries, API calls)
- Static content rendering
- SEO-critical pages
- Recipe list/detail pages
- Dashboard analytics

**Client Components (`'use client'`)**:
- Interactive UI (forms, modals, dropdowns)
- State management (hooks)
- Browser APIs (FileReader, geolocation)
- Event handlers
- Photo uploader, search filters

**Hybrid Pattern**:
```tsx
// page.tsx (Server Component)
export default async function RecipesPage() {
  const recipes = await getRecipes(); // Server-side fetch

  return (
    <div>
      <RecipeFilters /> {/* Client Component */}
      <RecipeGrid recipes={recipes} /> {/* Server Component */}
    </div>
  );
}
```

---

## Database Schema

### Core Tables

#### `profiles`
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  dietary_restrictions JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

**RLS Policies**:
- Users can view/update own profile only
- No public access

#### `recipes`
```sql
CREATE TABLE recipes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  instructions JSONB NOT NULL, -- Array of steps
  cook_time_minutes INTEGER,
  servings INTEGER,
  difficulty TEXT CHECK (difficulty IN ('easy', 'medium', 'hard')),
  source TEXT CHECK (source IN ('spoonacular', 'ai_generated', 'user_created')),
  source_id TEXT, -- Spoonacular ID or null
  image_url TEXT,
  is_public BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

**RLS Policies**:
- Users can CRUD own recipes
- All users can read public recipes
- Search filters by `is_public = true`

#### `recipe_ingredients`
```sql
CREATE TABLE recipe_ingredients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  recipe_id UUID REFERENCES recipes ON DELETE CASCADE,
  name TEXT NOT NULL,
  amount NUMERIC,
  unit TEXT,
  order_index INTEGER NOT NULL
);
```

**RLS Policies**:
- Inherit from recipes table
- Users can manage ingredients for own recipes

#### `recipe_nutrition`
```sql
CREATE TABLE recipe_nutrition (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  recipe_id UUID REFERENCES recipes ON DELETE CASCADE,
  calories INTEGER,
  protein_g NUMERIC,
  carbs_g NUMERIC,
  fat_g NUMERIC,
  fiber_g NUMERIC,
  sugar_g NUMERIC,
  sodium_mg NUMERIC
);
```

### Cache Tables (Critical for Cost Optimization)

#### `vision_cache`
```sql
CREATE TABLE vision_cache (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  image_hash TEXT UNIQUE NOT NULL, -- MD5 hash
  ingredients JSONB NOT NULL,
  confidence_score NUMERIC NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ DEFAULT NOW() + INTERVAL '30 days'
);

CREATE INDEX idx_vision_cache_hash ON vision_cache(image_hash);
CREATE INDEX idx_vision_cache_expires_at ON vision_cache(expires_at);
```

**Purpose**: Deduplicate Vision API calls
**Expected Savings**: 60-80% cost reduction
**TTL**: 30 days

#### `spoonacular_cache`
```sql
CREATE TABLE spoonacular_cache (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  search_key TEXT UNIQUE NOT NULL, -- MD5(sorted ingredients)
  results JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ DEFAULT NOW() + INTERVAL '7 days'
);

CREATE INDEX idx_spoonacular_cache_key ON spoonacular_cache(search_key);
CREATE INDEX idx_spoonacular_cache_expires_at ON spoonacular_cache(expires_at);
```

**Purpose**: Cache Spoonacular search results
**Expected Savings**: 80%+ cache hit rate
**TTL**: 7 days

#### `usda_food_cache`
```sql
CREATE TABLE usda_food_cache (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  food_name TEXT UNIQUE NOT NULL,
  fdc_id INTEGER,
  nutrition_data JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_usda_cache_name ON usda_food_cache(food_name);
```

**Purpose**: Local cache of common foods
**Expected Savings**: Reduce USDA API calls by 90%+
**TTL**: Permanent (nutrition data doesn't change)

#### `ai_quota_usage`
```sql
CREATE TABLE ai_quota_usage (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles ON DELETE CASCADE,
  generation_date DATE NOT NULL DEFAULT CURRENT_DATE,
  generation_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, generation_date)
);

CREATE INDEX idx_ai_quota_usage_date ON ai_quota_usage(user_id, generation_date);
```

**Purpose**: Track user-level AI generation quota
**Limit**: 5 per user per day

#### `platform_quota`
```sql
CREATE TABLE platform_quota (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  quota_date DATE NOT NULL DEFAULT CURRENT_DATE,
  generation_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(quota_date)
);

CREATE INDEX idx_platform_quota_date ON platform_quota(quota_date);
```

**Purpose**: Track platform-wide AI generation quota
**Limit**: 100 per day across all users

---

## API Integration

### Claude Vision API

**Endpoint**: `POST https://api.anthropic.com/v1/messages`

**Flow**:
```typescript
// src/lib/api/claude.ts
import Anthropic from '@anthropic-ai/sdk';
import { createHash } from 'crypto';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export async function analyzeImage(
  imageBase64: string,
  mimeType: string
): Promise<VisionResult> {
  // Step 1: Compute MD5 hash
  const imageHash = createHash('md5').update(imageBase64).digest('hex');

  // Step 2: Check cache
  const cached = await getVisionCache(imageHash);
  if (cached) return cached;

  // Step 3: Call Vision API
  const message = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'image',
            source: {
              type: 'base64',
              media_type: mimeType,
              data: imageBase64,
            },
          },
          {
            type: 'text',
            text: `Analyze this image and list all visible food ingredients.
            Return ONLY a JSON object:
            {
              "ingredients": ["ingredient1", "ingredient2", ...],
              "confidence": 0.95
            }`,
          },
        ],
      },
    ],
  });

  // Step 4: Parse response
  const result = JSON.parse(message.content[0].text);

  // Step 5: Cache result
  await setVisionCache(imageHash, result);

  return result;
}
```

**Cost**: $0.003 per image
**Cache Strategy**: 30-day TTL, MD5 deduplication
**Expected Savings**: 60-80% through caching

---

### Spoonacular API

**Endpoint**: `GET https://api.spoonacular.com/recipes/findByIngredients`

**Flow**:
```typescript
// src/lib/api/spoonacular.ts
export async function searchRecipesByIngredients(
  ingredients: string[]
): Promise<Recipe[]> {
  // Step 1: Create cache key
  const searchKey = createHash('md5')
    .update(ingredients.sort().join(','))
    .digest('hex');

  // Step 2: Check cache
  const cached = await getRecipeCache(searchKey);
  if (cached) return cached;

  // Step 3: Call Spoonacular API
  const params = new URLSearchParams({
    apiKey: process.env.SPOONACULAR_API_KEY!,
    ingredients: ingredients.join(','),
    number: '10',
    ranking: '2', // Maximize used ingredients
    ignorePantry: 'true',
  });

  const response = await fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?${params}`
  );

  if (!response.ok) {
    throw new Error(`Spoonacular API error: ${response.statusText}`);
  }

  const recipes = await response.json();

  // Step 4: Cache result
  await setRecipeCache(searchKey, recipes);

  return recipes;
}
```

**Cost**: FREE (150 requests/day)
**Cache Strategy**: 7-day TTL, ingredient hash key
**Expected Cache Hit Rate**: 80%+

---

### USDA FoodData API

**Endpoint**: `GET https://api.nal.usda.gov/fdc/v1/foods/search`

**Flow**:
```typescript
// src/lib/api/usda.ts
export async function searchFood(foodName: string): Promise<NutritionData | null> {
  // Step 1: Check local cache
  const cached = await getUSDACache(foodName);
  if (cached) return cached;

  // Step 2: Call USDA API
  const params = new URLSearchParams({
    query: foodName,
    dataType: 'Foundation,SR Legacy',
    pageSize: '1',
    api_key: process.env.USDA_API_KEY || 'DEMO_KEY',
  });

  const response = await fetch(
    `https://api.nal.usda.gov/fdc/v1/foods/search?${params}`
  );

  if (!response.ok) {
    throw new Error(`USDA API error: ${response.statusText}`);
  }

  const data = await response.json();

  if (data.foods.length === 0) {
    return null; // Food not found
  }

  const food = data.foods[0];
  const nutritionData = parseUSDAResponse(food);

  // Step 3: Cache result (permanent)
  await setUSDACache(foodName, nutritionData);

  return nutritionData;
}
```

**Cost**: FREE (unlimited)
**Cache Strategy**: Permanent, no expiry
**Expected Cache Hit Rate**: 90%+ for common foods

---

## Cost Optimization

### Budget Breakdown

**Target**: $15-35/month average
**Hard Cap**: $50/month

```
Claude Vision API:     $5-15   (500-5,000 images @ $0.003)
  - Target: 1,000 images/month
  - With 80% cache hit rate: 200 API calls = $0.60
  - Actual: $5-15 (accounting for growth)

Claude AI Generation:  $10-20  (50-100 recipes @ $0.20)
  - Target: 50 generations/month
  - Cost: 50 × $0.20 = $10
  - Actual: $10-20 (accounting for growth)

Spoonacular:           $0      (free tier: 150 req/day)
  - Daily: 100 requests (within free limit)
  - Monthly: ~3,000 requests (all free)

USDA FoodData:         $0      (free, unlimited)

Infrastructure:        $0      (all free tiers)
  - Upstash Redis: Free (10K commands/day)
  - Supabase: Free (500MB DB, 1GB storage)
  - Vercel: Free (100GB bandwidth)

-----------------------------------------------------------
TOTAL:                 $15-35/month
```

### Cost Reduction Strategies

#### 1. MD5 Image Deduplication

**Implementation**:
```typescript
// Before every Vision API call
const buffer = await imageFile.arrayBuffer();
const hash = createHash('md5').update(Buffer.from(buffer)).digest('hex');

const cached = await supabase
  .from('vision_cache')
  .select('*')
  .eq('image_hash', hash)
  .single();

if (cached) {
  return cached.data.ingredients; // FREE
}

// Only call API if cache miss
const result = await anthropic.messages.create(...);
```

**Expected Savings**: 60-80% cost reduction on Vision API
**Impact**: $10-20/month saved

---

#### 2. Multi-Layer Caching

**Architecture**:
```
┌─────────────────┐
│ Browser Session │ ← Fastest (0ms)
│  (SessionStorage)│
└────────┬────────┘
         │ Cache Miss
         ▼
┌─────────────────┐
│  Redis Cache    │ ← Fast (5-10ms)
│  (24h TTL)      │
└────────┬────────┘
         │ Cache Miss
         ▼
┌─────────────────┐
│ Supabase Cache  │ ← Persistent (50-100ms)
│  (7-30d TTL)    │
└────────┬────────┘
         │ Cache Miss
         ▼
┌─────────────────┐
│  External API   │ ← Expensive (500-2000ms)
│  (Vision/Search)│
└─────────────────┘
```

**Implementation**:
```typescript
async function getCachedData<T>(key: string, fetchFn: () => Promise<T>): Promise<T> {
  // Layer 1: Redis
  const redisData = await redis.get<T>(key);
  if (redisData) return redisData;

  // Layer 2: Supabase
  const { data } = await supabase.from('cache').select().eq('key', key).single();
  if (data && new Date(data.expires_at) > new Date()) {
    await redis.setex(key, 86400, JSON.stringify(data.value)); // Backfill Redis
    return data.value;
  }

  // Layer 3: External API
  const apiData = await fetchFn();
  await redis.setex(key, 86400, JSON.stringify(apiData));
  await supabase.from('cache').insert({ key, value: apiData });
  return apiData;
}
```

**Expected Cache Hit Rate**: 80%+
**Impact**: $15-25/month saved

---

#### 3. Search-First Policy

**Rule**: ALWAYS search Spoonacular before AI generation.

**Implementation**:
```typescript
// CORRECT: Search first
const searchResults = await searchRecipesByIngredients(ingredients);

if (searchResults.length >= 3) {
  return searchResults; // FREE (Spoonacular)
}

// Only generate if insufficient results
const quotaCheck = await checkAIQuota(userId);
if (!quotaCheck.allowed) {
  throw new Error('Daily quota exceeded');
}

const aiRecipe = await generateRecipe(ingredients, userId); // $0.20
return [...searchResults, aiRecipe];
```

**Expected Fallback Rate**: 20% (80% searches succeed)
**Impact**: $50-100/month saved

---

#### 4. Hard Quota Limits

**User Quota**:
```typescript
// Redis counter: quota:user:{userId}:{date}
const userKey = `quota:user:${userId}:${today}`;
const count = await redis.get(userKey) || 0;

if (count >= 5) {
  throw new Error('Daily user quota exceeded');
}

await redis.incr(userKey);
await redis.expire(userKey, secondsUntilMidnightUTC);
```

**Platform Quota**:
```typescript
// Redis counter: quota:platform:{date}
const platformKey = `quota:platform:${today}`;
const count = await redis.get(platformKey) || 0;

if (count >= 100) {
  throw new Error('Platform quota exceeded');
}

await redis.incr(platformKey);
await redis.expire(platformKey, secondsUntilMidnightUTC);
```

**Impact**: Prevents runaway costs, $200+ saved in edge cases

---

## Security & Privacy

### Authentication

**Provider**: Supabase Auth
**Method**: Cookie-based sessions (not localStorage)

**Flow**:
```typescript
// Signup
const { data, error } = await supabase.auth.signUp({
  email,
  password,
  options: {
    emailRedirectTo: `${origin}/auth/callback`,
  },
});

// Login
const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password,
});

// Session check (middleware)
const { data: { session } } = await supabase.auth.getSession();
if (!session && pathname.startsWith('/app')) {
  redirect('/login');
}
```

### Row-Level Security (RLS)

**Profiles**:
```sql
-- Users can only see/edit own profile
CREATE POLICY "Users manage own profile" ON profiles
  FOR ALL USING (auth.uid() = id);
```

**Recipes**:
```sql
-- Users can CRUD own recipes
CREATE POLICY "Users manage own recipes" ON recipes
  FOR ALL USING (auth.uid() = user_id);

-- Anyone can read public recipes
CREATE POLICY "Public recipes readable" ON recipes
  FOR SELECT USING (is_public = true);
```

### Data Privacy

**No PII in Logs**:
```typescript
// ❌ INCORRECT
console.log('User email:', user.email);

// ✅ CORRECT
console.log('User action:', { userId: user.id, action: 'upload' });
```

**Cache Expiry**:
- Vision cache: 30 days (auto-delete)
- User data: On request (GDPR compliance)
- Analytics: Anonymized, 90-day retention

**API Key Security**:
- Environment variables only (never commit)
- Rotate keys quarterly
- Use `.env.local` for development
- Vercel secrets for production

---

## Performance Optimization

### ISR (Incremental Static Regeneration)

```typescript
// src/app/(app)/recipes/[id]/page.tsx
export const revalidate = 3600; // 1 hour

export async function generateStaticParams() {
  // Pre-generate top 100 recipes
  const recipes = await getTopRecipes(100);
  return recipes.map(r => ({ id: r.id }));
}

export default async function RecipePage({ params }) {
  const recipe = await getRecipe(params.id);
  return <RecipeDetail recipe={recipe} />;
}
```

**Impact**: 95% reduction in database queries

---

### Image Optimization

```typescript
// Resize, compress, convert to WebP
import sharp from 'sharp';

const optimized = await sharp(buffer)
  .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
  .webp({ quality: 85 })
  .toBuffer();
```

**Impact**: 60-80% file size reduction

---

### Code Splitting

```typescript
// Lazy load heavy components
import dynamic from 'next/dynamic';

const RecipeGenerator = dynamic(
  () => import('@/components/features/recipes/RecipeGenerator'),
  {
    loading: () => <Skeleton />,
    ssr: false, // Client-only
  }
);
```

**Impact**: 30-50% smaller initial bundle

---

## Testing Strategy

### Unit Tests (Vitest)

**Coverage**: 70% of total tests
**Focus**: Cache logic, quota management, utilities

```typescript
describe('Vision Cache', () => {
  it('should return cached result from Redis', async () => {
    vi.mocked(redis.get).mockResolvedValue(mockResult);
    const result = await getVisionCache('hash123');
    expect(result).toEqual(mockResult);
  });
});
```

### E2E Tests (Playwright)

**Coverage**: 10% of total tests
**Focus**: Critical user workflows

```typescript
test('photo upload to recipe flow', async ({ page }) => {
  await page.setInputFiles('input[type="file"]', 'chicken-rice.jpg');
  await page.waitForSelector('[data-testid="recipe-card"]');
  const count = await page.locator('[data-testid="recipe-card"]').count();
  expect(count).toBeGreaterThanOrEqual(3);
});
```

**Coverage Target**: 80%+ overall

---

## Deployment

### Vercel Configuration

```json
// vercel.json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "regions": ["iad1"],
  "env": {
    "NEXT_PUBLIC_SUPABASE_URL": "@supabase-url",
    "SUPABASE_SERVICE_ROLE_KEY": "@supabase-service-key",
    "ANTHROPIC_API_KEY": "@anthropic-key",
    "SPOONACULAR_API_KEY": "@spoonacular-key",
    "UPSTASH_REDIS_REST_URL": "@redis-url",
    "UPSTASH_REDIS_REST_TOKEN": "@redis-token"
  }
}
```

### CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run test
      - run: npm run test:e2e

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/deploy@v1
        with:
          token: ${{ secrets.VERCEL_TOKEN }}
```

---

## Monitoring & Observability

### Cost Dashboard

**Location**: `/app/admin/costs`

**Metrics**:
- Vision API calls (last 30 days) × $0.003
- AI generations (last 30 days) × $0.20
- Total cost vs. budget ($50 cap)
- Cache hit rates (target: 80%+)
- Quota usage (user + platform)

### Error Tracking (Sentry)

```typescript
// src/app/layout.tsx
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
  environment: process.env.NODE_ENV,
});
```

### Performance Monitoring (Vercel Analytics)

```typescript
// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

**Metrics Tracked**:
- Largest Contentful Paint (LCP): <2s
- First Input Delay (FID): <100ms
- Cumulative Layout Shift (CLS): <0.1
- Time to Interactive (TTI): <3s

---

## Appendix

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

ANTHROPIC_API_KEY=sk-ant-...
SPOONACULAR_API_KEY=...
USDA_API_KEY=DEMO_KEY

UPSTASH_REDIS_REST_URL=https://...upstash.io
UPSTASH_REDIS_REST_TOKEN=...

MAX_AI_GENERATIONS_PER_USER_DAILY=5
MAX_AI_GENERATIONS_PLATFORM_DAILY=100

VISION_CACHE_TTL=2592000  # 30 days
RECIPE_CACHE_TTL=604800   # 7 days
REDIS_CACHE_TTL=86400     # 24 hours

ENABLE_AI_GENERATION=true
ENABLE_NUTRITION_ANALYSIS=true

NEXT_PUBLIC_SENTRY_DSN=https://...@sentry.io/...
```

### Key Metrics

| Metric | Target | Critical |
|--------|--------|----------|
| Monthly Cost | $15-35 | <$50 |
| Vision Cache Hit Rate | 60% → 80% | >50% |
| Recipe Cache Hit Rate | 80% | >70% |
| Search Success Rate | 80% | >70% |
| AI Fallback Rate | 20% | <30% |
| Page Load (LCP) | <2s | <3s |
| Test Coverage | 80% | >70% |
| Uptime | 99.9% | >99% |

---

**Document Version**: 1.0.0
**Last Updated**: 2026-01-18
**Next Review**: 2026-02-18
**Owner**: Architecture Team
**Status**: ✅ Approved for Implementation
