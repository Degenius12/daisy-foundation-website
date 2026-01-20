import { z } from "zod";

// Contact form validation
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  website: z.string().optional(), // Honeypot field
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Newsletter subscription validation
export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;

// Donation validation
export const donationSchema = z.object({
  amount: z
    .number()
    .min(10, "Minimum donation amount is $10")
    .max(10000, "Maximum donation amount is $10,000"),
  frequency: z.enum(["one-time", "monthly"], {
    errorMap: () => ({ message: "Frequency must be 'one-time' or 'monthly'" }),
  }),
  donorName: z.string().optional(),
  donorEmail: z.string().email("Please enter a valid email address").optional(),
});

export type DonationFormData = z.infer<typeof donationSchema>;

// Admin login validation
export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

// Program validation (for admin)
export const programSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.enum(["Education", "Wellness", "Community", "Environment"]),
  bulletPoints: z.array(z.string()).min(1, "At least one bullet point is required"),
  isActive: z.boolean().default(true),
  orderIndex: z.number().int().positive(),
});

export type ProgramFormData = z.infer<typeof programSchema>;

// Event validation (for admin)
export const eventSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Please enter a valid date",
  }),
  location: z.string().min(3, "Location must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  rsvpLink: z.string().url("Please enter a valid URL").optional(),
  isFeatured: z.boolean().default(false),
});

export type EventFormData = z.infer<typeof eventSchema>;

// Impact metric validation (for admin)
export const metricSchema = z.object({
  metricName: z.string().min(3, "Metric name must be at least 3 characters"),
  metricValue: z.number().int().positive("Metric value must be a positive number"),
  displaySuffix: z.string().optional(),
  displayOrder: z.number().int().positive(),
});

export type MetricFormData = z.infer<typeof metricSchema>;

// Success story validation (for admin)
export const storySchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  content: z.string().min(50, "Content must be at least 50 characters"),
  featuredImage: z.string().url("Please enter a valid image URL").optional(),
  isPublished: z.boolean().default(false),
  displayOrder: z.number().int().positive().optional(),
});

export type StoryFormData = z.infer<typeof storySchema>;
