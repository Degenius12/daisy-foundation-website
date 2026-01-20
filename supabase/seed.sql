-- Seed data for Daisy Foundation website

-- Insert 4 programs
INSERT INTO programs (title, description, category, bullet_points, order_index) VALUES
(
  'Healthy Beginnings',
  'Supporting families from prenatal through age 3 with comprehensive care.',
  'Wellness',
  '["Prenatal and postpartum care", "Developmental screenings", "Parent education workshops"]',
  1
),
(
  'Bloom Scholarships',
  'Tuition assistance ensuring every child can access quality pre-K programs.',
  'Education',
  '["Full or partial tuition coverage", "School supplies and materials", "Educational enrichment activities"]',
  2
),
(
  'Hands & Hearts',
  'Building strong communities through volunteer engagement and family events.',
  'Community',
  '["Family fun events", "Community service projects", "Parent support groups"]',
  3
),
(
  'Green Daisy',
  'Environmental education and sustainability through hands-on learning.',
  'Environment',
  '["Community garden projects", "Nature-based learning", "Sustainability education"]',
  4
);

-- Insert impact metrics
INSERT INTO impact_metrics (metric_name, metric_value, display_suffix, display_order) VALUES
('Families Served', 3200, '+', 1),
('Local Partners', 85, '', 2),
('Volunteer Hours', 14500, '+', 3),
('Active Programs', 12, '', 4);

-- Insert sample events
INSERT INTO events (title, date, location, description, rsvp_link, is_featured) VALUES
(
  'Family Fun Day',
  '2026-03-20',
  'Central Park',
  'Join us for games, food, and community fun. Bring the whole family for a day of activities, face painting, and getting to know your neighbors.',
  'https://eventbrite.com/family-fun-day',
  true
),
(
  'Back to School Drive',
  '2026-08-10',
  'Community Center',
  'Help us prepare students for the new school year. We''re collecting backpacks, school supplies, and volunteers to help distribute them to families.',
  'https://eventbrite.com/back-to-school',
  false
),
(
  'Community Garden Kickoff',
  '2026-04-15',
  'Green Daisy Garden Site',
  'Launch our spring planting season! Learn about sustainable gardening, get your hands dirty, and help us grow fresh produce for local families.',
  'https://eventbrite.com/garden-kickoff',
  false
);

-- Insert a sample success story
INSERT INTO success_stories (title, content, is_published, display_order) VALUES
(
  'Maria''s Story',
  'When I became a single mother, I didn''t know how I would afford quality childcare while working full-time. The Bloom Scholarship program gave my children access to an amazing pre-K program at no cost. Today, they''re thriving in elementary school, and I''ve completed job training to advance my career. This foundation changed our lives.',
  true,
  1
);

-- Note: Admin users should be created through Supabase Auth, not directly in the database
-- This is just a reference for the expected structure
-- INSERT INTO admin_users (email, role) VALUES
-- ('admin@daisysfoundation.com', 'admin');
