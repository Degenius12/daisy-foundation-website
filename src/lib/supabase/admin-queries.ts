import { createClient } from "./server";
import type { Database } from "@/types/database";

type Program = Database["public"]["Tables"]["programs"]["Row"];
type ProgramInsert = Database["public"]["Tables"]["programs"]["Insert"];
type ProgramUpdate = Database["public"]["Tables"]["programs"]["Update"];
type Event = Database["public"]["Tables"]["events"]["Row"];
type EventInsert = Database["public"]["Tables"]["events"]["Insert"];
type EventUpdate = Database["public"]["Tables"]["events"]["Update"];
type ImpactMetric = Database["public"]["Tables"]["impact_metrics"]["Row"];
type ImpactMetricUpdate = Database["public"]["Tables"]["impact_metrics"]["Update"];
type SuccessStory = Database["public"]["Tables"]["success_stories"]["Row"];
type SuccessStoryInsert = Database["public"]["Tables"]["success_stories"]["Insert"];
type SuccessStoryUpdate = Database["public"]["Tables"]["success_stories"]["Update"];
type ContactSubmission = Database["public"]["Tables"]["contact_submissions"]["Row"];
type NewsletterSubscriber = Database["public"]["Tables"]["newsletter_subscribers"]["Row"];
type Donation = Database["public"]["Tables"]["donations"]["Row"];

function isSupabaseConfigured(): boolean {
  return !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

// --- Programs CRUD ---

export async function getAllPrograms(): Promise<Program[]> {
  if (!isSupabaseConfigured()) return [];
  const supabase = await createClient();
  const { data, error } = await supabase.from("programs").select("*").order("order_index");
  if (error) throw error;
  return data || [];
}

export async function createProgram(program: ProgramInsert): Promise<Program> {
  const supabase = await createClient();
  const { data, error } = await supabase.from("programs").insert(program).select().single();
  if (error) throw error;
  return data;
}

export async function updateProgram(id: string, updates: ProgramUpdate): Promise<Program> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("programs")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteProgram(id: string): Promise<void> {
  const supabase = await createClient();
  const { error } = await supabase.from("programs").delete().eq("id", id);
  if (error) throw error;
}

// --- Events CRUD ---

export async function getAllEvents(): Promise<Event[]> {
  if (!isSupabaseConfigured()) return [];
  const supabase = await createClient();
  const { data, error } = await supabase.from("events").select("*").order("date", { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function createEvent(event: EventInsert): Promise<Event> {
  const supabase = await createClient();
  const { data, error } = await supabase.from("events").insert(event).select().single();
  if (error) throw error;
  return data;
}

export async function updateEvent(id: string, updates: EventUpdate): Promise<Event> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("events")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteEvent(id: string): Promise<void> {
  const supabase = await createClient();
  const { error } = await supabase.from("events").delete().eq("id", id);
  if (error) throw error;
}

// --- Impact Metrics ---

export async function getAllMetrics(): Promise<ImpactMetric[]> {
  if (!isSupabaseConfigured()) return [];
  const supabase = await createClient();
  const { data, error } = await supabase.from("impact_metrics").select("*").order("display_order");
  if (error) throw error;
  return data || [];
}

export async function updateMetric(id: string, updates: ImpactMetricUpdate): Promise<ImpactMetric> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("impact_metrics")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

// --- Success Stories CRUD ---

export async function getAllStories(): Promise<SuccessStory[]> {
  if (!isSupabaseConfigured()) return [];
  const supabase = await createClient();
  const { data, error } = await supabase.from("success_stories").select("*").order("display_order");
  if (error) throw error;
  return data || [];
}

export async function createStory(story: SuccessStoryInsert): Promise<SuccessStory> {
  const supabase = await createClient();
  const { data, error } = await supabase.from("success_stories").insert(story).select().single();
  if (error) throw error;
  return data;
}

export async function updateStory(id: string, updates: SuccessStoryUpdate): Promise<SuccessStory> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("success_stories")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteStory(id: string): Promise<void> {
  const supabase = await createClient();
  const { error } = await supabase.from("success_stories").delete().eq("id", id);
  if (error) throw error;
}

// --- Read-only tables ---

export async function getContactSubmissions(): Promise<ContactSubmission[]> {
  if (!isSupabaseConfigured()) return [];
  const supabase = await createClient();
  const { data, error } = await supabase.from("contact_submissions").select("*").order("submitted_at", { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function getNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
  if (!isSupabaseConfigured()) return [];
  const supabase = await createClient();
  const { data, error } = await supabase.from("newsletter_subscribers").select("*").order("subscribed_at", { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function getDonations(): Promise<Donation[]> {
  if (!isSupabaseConfigured()) return [];
  const supabase = await createClient();
  const { data, error } = await supabase.from("donations").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}

// --- Dashboard counts ---

export async function getDashboardCounts(): Promise<{
  programs: number;
  events: number;
  contacts: number;
  subscribers: number;
  donations: number;
  totalDonated: number;
}> {
  if (!isSupabaseConfigured()) {
    return { programs: 0, events: 0, contacts: 0, subscribers: 0, donations: 0, totalDonated: 0 };
  }

  const supabase = await createClient();

  const [programs, events, contacts, subscribers, donations] = await Promise.all([
    supabase.from("programs").select("*", { count: "exact", head: true }),
    supabase.from("events").select("*", { count: "exact", head: true }),
    supabase.from("contact_submissions").select("*", { count: "exact", head: true }),
    supabase.from("newsletter_subscribers").select("*", { count: "exact", head: true }),
    supabase.from("donations").select("amount").eq("status", "completed"),
  ]);

  const totalDonated = (donations.data || []).reduce((sum, d) => sum + d.amount, 0);

  return {
    programs: programs.count || 0,
    events: events.count || 0,
    contacts: contacts.count || 0,
    subscribers: subscribers.count || 0,
    donations: donations.data?.length || 0,
    totalDonated,
  };
}
