"use server";

import {
  createProgram,
  updateProgram,
  deleteProgram,
  createEvent,
  updateEvent,
  deleteEvent,
  updateMetric,
  createStory,
  updateStory,
  deleteStory,
} from "@/lib/supabase/admin-queries";
import { revalidatePath } from "next/cache";

// --- Programs ---

export async function createProgramAction(formData: FormData) {
  const program = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    category: formData.get("category") as "Education" | "Wellness" | "Community" | "Environment",
    bullet_points: (formData.get("bullet_points") as string).split("\n").filter(Boolean),
    is_active: formData.get("is_active") === "true",
    order_index: parseInt(formData.get("order_index") as string) || 0,
  };
  await createProgram(program);
  revalidatePath("/admin/programs");
  revalidatePath("/");
}

export async function updateProgramAction(formData: FormData) {
  const id = formData.get("id") as string;
  const updates = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    category: formData.get("category") as "Education" | "Wellness" | "Community" | "Environment",
    bullet_points: (formData.get("bullet_points") as string).split("\n").filter(Boolean),
    is_active: formData.get("is_active") === "true",
    order_index: parseInt(formData.get("order_index") as string) || 0,
  };
  await updateProgram(id, updates);
  revalidatePath("/admin/programs");
  revalidatePath("/");
}

export async function deleteProgramAction(formData: FormData) {
  const id = formData.get("id") as string;
  await deleteProgram(id);
  revalidatePath("/admin/programs");
  revalidatePath("/");
}

// --- Events ---

export async function createEventAction(formData: FormData) {
  const event = {
    title: formData.get("title") as string,
    date: formData.get("date") as string,
    location: formData.get("location") as string,
    description: formData.get("description") as string,
    rsvp_link: (formData.get("rsvp_link") as string) || null,
    is_featured: formData.get("is_featured") === "true",
  };
  await createEvent(event);
  revalidatePath("/admin/events");
  revalidatePath("/");
}

export async function updateEventAction(formData: FormData) {
  const id = formData.get("id") as string;
  const updates = {
    title: formData.get("title") as string,
    date: formData.get("date") as string,
    location: formData.get("location") as string,
    description: formData.get("description") as string,
    rsvp_link: (formData.get("rsvp_link") as string) || null,
    is_featured: formData.get("is_featured") === "true",
  };
  await updateEvent(id, updates);
  revalidatePath("/admin/events");
  revalidatePath("/");
}

export async function deleteEventAction(formData: FormData) {
  const id = formData.get("id") as string;
  await deleteEvent(id);
  revalidatePath("/admin/events");
  revalidatePath("/");
}

// --- Impact Metrics ---

export async function updateMetricAction(formData: FormData) {
  const id = formData.get("id") as string;
  const updates = {
    metric_name: formData.get("metric_name") as string,
    metric_value: parseInt(formData.get("metric_value") as string) || 0,
    display_suffix: (formData.get("display_suffix") as string) || null,
    display_order: parseInt(formData.get("display_order") as string) || 0,
  };
  await updateMetric(id, updates);
  revalidatePath("/admin/impact");
  revalidatePath("/");
}

// --- Success Stories ---

export async function createStoryAction(formData: FormData) {
  const story = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
    featured_image: (formData.get("featured_image") as string) || null,
    is_published: formData.get("is_published") === "true",
    display_order: parseInt(formData.get("display_order") as string) || 0,
  };
  await createStory(story);
  revalidatePath("/admin/stories");
  revalidatePath("/");
}

export async function updateStoryAction(formData: FormData) {
  const id = formData.get("id") as string;
  const updates = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
    featured_image: (formData.get("featured_image") as string) || null,
    is_published: formData.get("is_published") === "true",
    display_order: parseInt(formData.get("display_order") as string) || 0,
  };
  await updateStory(id, updates);
  revalidatePath("/admin/stories");
  revalidatePath("/");
}

export async function deleteStoryAction(formData: FormData) {
  const id = formData.get("id") as string;
  await deleteStory(id);
  revalidatePath("/admin/stories");
  revalidatePath("/");
}
