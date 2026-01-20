// Database types - will be auto-generated from Supabase when connected
// For now, using manual types

export type Database = {
  public: {
    Tables: {
      programs: {
        Row: {
          id: string;
          title: string;
          description: string;
          category: "Education" | "Wellness" | "Community" | "Environment";
          bullet_points: string[];
          is_active: boolean;
          order_index: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          category: "Education" | "Wellness" | "Community" | "Environment";
          bullet_points: string[];
          is_active?: boolean;
          order_index: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          category?: "Education" | "Wellness" | "Community" | "Environment";
          bullet_points?: string[];
          is_active?: boolean;
          order_index?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      events: {
        Row: {
          id: string;
          title: string;
          date: string;
          location: string;
          description: string;
          rsvp_link: string | null;
          is_featured: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          date: string;
          location: string;
          description: string;
          rsvp_link?: string | null;
          is_featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          date?: string;
          location?: string;
          description?: string;
          rsvp_link?: string | null;
          is_featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      impact_metrics: {
        Row: {
          id: string;
          metric_name: string;
          metric_value: number;
          display_suffix: string | null;
          display_order: number;
          updated_at: string;
        };
        Insert: {
          id?: string;
          metric_name: string;
          metric_value: number;
          display_suffix?: string | null;
          display_order: number;
          updated_at?: string;
        };
        Update: {
          id?: string;
          metric_name?: string;
          metric_value?: number;
          display_suffix?: string | null;
          display_order?: number;
          updated_at?: string;
        };
      };
      success_stories: {
        Row: {
          id: string;
          title: string;
          content: string;
          featured_image: string | null;
          is_published: boolean;
          display_order: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          content: string;
          featured_image?: string | null;
          is_published?: boolean;
          display_order?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          content?: string;
          featured_image?: string | null;
          is_published?: boolean;
          display_order?: number | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          subject: string | null;
          message: string;
          status: "new" | "read" | "replied";
          submitted_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          subject?: string | null;
          message: string;
          status?: "new" | "read" | "replied";
          submitted_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          subject?: string | null;
          message?: string;
          status?: "new" | "read" | "replied";
          submitted_at?: string;
        };
      };
      newsletter_subscribers: {
        Row: {
          id: string;
          email: string;
          source: string;
          mailchimp_id: string | null;
          subscribed_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          source?: string;
          mailchimp_id?: string | null;
          subscribed_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          source?: string;
          mailchimp_id?: string | null;
          subscribed_at?: string;
        };
      };
      donations: {
        Row: {
          id: string;
          stripe_session_id: string;
          amount: number;
          donor_email: string;
          donor_name: string | null;
          frequency: "one-time" | "monthly";
          status: "completed" | "pending" | "failed";
          created_at: string;
        };
        Insert: {
          id?: string;
          stripe_session_id: string;
          amount: number;
          donor_email: string;
          donor_name?: string | null;
          frequency: "one-time" | "monthly";
          status?: "completed" | "pending" | "failed";
          created_at?: string;
        };
        Update: {
          id?: string;
          stripe_session_id?: string;
          amount?: number;
          donor_email?: string;
          donor_name?: string | null;
          frequency?: "one-time" | "monthly";
          status?: "completed" | "pending" | "failed";
          created_at?: string;
        };
      };
      admin_users: {
        Row: {
          id: string;
          email: string;
          role: "admin" | "editor";
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          role?: "admin" | "editor";
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          role?: "admin" | "editor";
          created_at?: string;
        };
      };
    };
  };
};
