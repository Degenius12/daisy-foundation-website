import { createClient } from "./server";
import type { Database } from "@/types/database";

type Program = Database["public"]["Tables"]["programs"]["Row"];
type Event = Database["public"]["Tables"]["events"]["Row"];
type ImpactMetric = Database["public"]["Tables"]["impact_metrics"]["Row"];
type SuccessStory = Database["public"]["Tables"]["success_stories"]["Row"];

// --- Fallback data (used when Supabase is not configured) ---

const fallbackPrograms: Program[] = [
  {
    id: "1",
    title: "Healthy Beginnings",
    description: "Nutrition support, wellness kits, and caregiver education for families in need.",
    category: "Wellness",
    bullet_points: ["Family pantry", "Wellness workshops", "Care kits"],
    is_active: true,
    order_index: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Bloom Scholarships",
    description: "Micro-grants and mentorship for youth to thrive in school and beyond.",
    category: "Education",
    bullet_points: ["Tutoring access", "School supplies", "Mentorship"],
    is_active: true,
    order_index: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Hands & Hearts",
    description: "Volunteer-led outreach events that build dignity, connection, and support.",
    category: "Community",
    bullet_points: ["Monthly drives", "Resource fairs", "Neighbor support"],
    is_active: true,
    order_index: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Green Daisy",
    description: "Community gardens and clean-up initiatives that improve local health.",
    category: "Environment",
    bullet_points: ["Garden builds", "Clean-ups", "Youth eco clubs"],
    is_active: true,
    order_index: 4,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

const fallbackEvents: Event[] = [
  {
    id: "1",
    title: "Family Fun Day",
    date: "2026-03-20",
    location: "Central Park",
    description: "Join us for games, food, and community fun. Bring the whole family for a day of activities, face painting, and getting to know your neighbors.",
    rsvp_link: null,
    is_featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Back to School Drive",
    date: "2026-08-10",
    location: "Community Center",
    description: "Help us prepare students for the new school year. We're collecting backpacks, school supplies, and volunteers to help distribute them to families.",
    rsvp_link: null,
    is_featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Community Garden Kickoff",
    date: "2026-04-15",
    location: "Green Daisy Garden Site",
    description: "Launch our spring planting season! Learn about sustainable gardening, get your hands dirty, and help us grow fresh produce for local families.",
    rsvp_link: null,
    is_featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Mother's Day Floral Experience",
    date: "2026-05-10",
    location: "Hap's House",
    description: "On Mother's Day, Daisy's Nonprofit was proud to sponsor Hap's House's Mother's Day Floral Experience — a community celebration in partnership with OMU Gallery. Families gathered to celebrate motherhood, create something beautiful, and honor the women who inspire us.",
    rsvp_link: null,
    is_featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "5",
    title: "Back to School Bash",
    date: "2026-08-29",
    location: "175 Fountains Way, Unit 1, St. Johns, FL 32259",
    description: "Daisy's Nonprofit is proud to partner with Lil' Voyagers Academy for their Back to School Bash & Open House — a free family event with a bounce house, face painting, games, and snacks, open to current and new families.",
    rsvp_link: null,
    is_featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

const fallbackMetrics: ImpactMetric[] = [
  { id: "1", metric_name: "Families Served", metric_value: 3200, display_suffix: "+", display_order: 1, updated_at: new Date().toISOString() },
  { id: "2", metric_name: "Local Partners", metric_value: 85, display_suffix: null, display_order: 2, updated_at: new Date().toISOString() },
  { id: "3", metric_name: "Volunteer Hours", metric_value: 14500, display_suffix: "+", display_order: 3, updated_at: new Date().toISOString() },
  { id: "4", metric_name: "Active Programs", metric_value: 12, display_suffix: null, display_order: 4, updated_at: new Date().toISOString() },
];

const fallbackStories: SuccessStory[] = [
  {
    id: "1",
    title: "Maria's Story",
    content: "When I became a single mother, I didn't know how I would afford quality childcare while working full-time. The Bloom Scholarship program gave my children access to an amazing pre-K program at no cost. Today, they're thriving in elementary school, and I've completed job training to advance my career. This foundation changed our lives.",
    featured_image: "/images/impact/success-story-maria.png",
    is_published: true,
    display_order: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// --- Helper to check if Supabase is configured ---

function isSupabaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

// --- Query functions ---

export async function getPrograms(): Promise<Program[]> {
  if (!isSupabaseConfigured()) return fallbackPrograms;

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("programs")
      .select("*")
      .eq("is_active", true)
      .order("order_index");

    if (error) throw error;
    return data && data.length > 0 ? data : fallbackPrograms;
  } catch {
    return fallbackPrograms;
  }
}

export async function getEvents(): Promise<Event[]> {
  if (!isSupabaseConfigured()) return fallbackEvents;

  try {
    const supabase = await createClient();
    const today = new Date().toISOString().split("T")[0];
    const ninetyDaysAgo = new Date(Date.now() - 90 * 86_400_000).toISOString().split("T")[0];

    const { data, error } = await supabase
      .from("events")
      .select("*")
      .gte("date", ninetyDaysAgo)
      .order("date");

    if (error) throw error;
    if (!data || data.length === 0) return fallbackEvents;

    // Upcoming first (closest date first), then past (most recent first).
    const upcoming = data.filter((e) => e.date >= today);
    const past = data.filter((e) => e.date < today).reverse();
    return [...upcoming, ...past];
  } catch {
    return fallbackEvents;
  }
}

export async function getImpactMetrics(): Promise<ImpactMetric[]> {
  if (!isSupabaseConfigured()) return fallbackMetrics;

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("impact_metrics")
      .select("*")
      .order("display_order");

    if (error) throw error;
    return data && data.length > 0 ? data : fallbackMetrics;
  } catch {
    return fallbackMetrics;
  }
}

export async function getSuccessStories(): Promise<SuccessStory[]> {
  if (!isSupabaseConfigured()) return fallbackStories;

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("success_stories")
      .select("*")
      .eq("is_published", true)
      .order("display_order");

    if (error) throw error;
    return data && data.length > 0 ? data : fallbackStories;
  } catch {
    return fallbackStories;
  }
}
