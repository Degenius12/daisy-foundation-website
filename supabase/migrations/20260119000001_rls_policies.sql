-- Enable Row Level Security on all tables
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE impact_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE success_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Public read access for active content
CREATE POLICY "Public can view active programs"
  ON programs FOR SELECT
  USING (is_active = true);

CREATE POLICY "Public can view events"
  ON events FOR SELECT
  USING (true);

CREATE POLICY "Public can view impact metrics"
  ON impact_metrics FOR SELECT
  USING (true);

CREATE POLICY "Public can view published stories"
  ON success_stories FOR SELECT
  USING (is_published = true);

-- Public can insert contact submissions and newsletter subscriptions
CREATE POLICY "Public can submit contact forms"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Public can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  WITH CHECK (true);

-- Authenticated admin access
CREATE POLICY "Admins can manage programs"
  ON programs FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Admins can manage events"
  ON events FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Admins can manage impact metrics"
  ON impact_metrics FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Admins can manage success stories"
  ON success_stories FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Admins can view contact submissions"
  ON contact_submissions FOR SELECT
  USING (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Admins can update contact submission status"
  ON contact_submissions FOR UPDATE
  USING (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Admins can view newsletter subscribers"
  ON newsletter_subscribers FOR SELECT
  USING (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Admins can view donations"
  ON donations FOR SELECT
  USING (auth.uid() IN (SELECT id FROM admin_users));

-- Service role can insert donations (from webhooks)
CREATE POLICY "Service role can insert donations"
  ON donations FOR INSERT
  WITH CHECK (true);
