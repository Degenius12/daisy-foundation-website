# Daisy Foundation — Database Schema

All tables use Supabase (PostgreSQL). Migrations in `daisy-foundation-web/supabase/migrations/`.

## Tables

### admin_users
```sql
id          UUID PRIMARY KEY
email       TEXT UNIQUE NOT NULL
role        TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'staff'))
created_at  TIMESTAMPTZ DEFAULT NOW()
```

### programs
```sql
id            UUID PRIMARY KEY DEFAULT uuid_generate_v4()
title         TEXT NOT NULL
description   TEXT NOT NULL
category      TEXT CHECK (category IN ('Education', 'Wellness', 'Community', 'Environment'))
bullet_points JSONB NOT NULL  -- Array of 3 bullet points
is_active     BOOLEAN DEFAULT true
order_index   INTEGER NOT NULL
created_at    TIMESTAMPTZ DEFAULT NOW()
updated_at    TIMESTAMPTZ DEFAULT NOW()
```

### events
```sql
id          UUID PRIMARY KEY DEFAULT uuid_generate_v4()
title       TEXT NOT NULL
date        DATE NOT NULL
location    TEXT NOT NULL
description TEXT NOT NULL
rsvp_link   TEXT
is_featured BOOLEAN DEFAULT false
created_at  TIMESTAMPTZ DEFAULT NOW()
updated_at  TIMESTAMPTZ DEFAULT NOW()
```

### impact_metrics
```sql
id             UUID PRIMARY KEY DEFAULT uuid_generate_v4()
metric_name    TEXT UNIQUE NOT NULL
metric_value   INTEGER NOT NULL
display_suffix TEXT
display_order  INTEGER NOT NULL
updated_at     TIMESTAMPTZ DEFAULT NOW()
```

### success_stories
```sql
id              UUID PRIMARY KEY DEFAULT uuid_generate_v4()
title           TEXT NOT NULL
content         TEXT NOT NULL
featured_image  TEXT  -- Supabase Storage URL
is_published    BOOLEAN DEFAULT false
display_order   INTEGER
created_at      TIMESTAMPTZ DEFAULT NOW()
updated_at      TIMESTAMPTZ DEFAULT NOW()
```

### contact_submissions
```sql
id           UUID PRIMARY KEY DEFAULT uuid_generate_v4()
name         TEXT NOT NULL
email        TEXT NOT NULL
subject      TEXT NOT NULL
message      TEXT NOT NULL
status       TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'resolved'))
submitted_at TIMESTAMPTZ DEFAULT NOW()
```

### newsletter_subscribers
```sql
id              UUID PRIMARY KEY DEFAULT uuid_generate_v4()
email           TEXT UNIQUE NOT NULL
source          TEXT DEFAULT 'website'
mailchimp_id    TEXT
subscribed_at   TIMESTAMPTZ DEFAULT NOW()
```

### donations
```sql
id                 UUID PRIMARY KEY DEFAULT uuid_generate_v4()
stripe_session_id  TEXT UNIQUE NOT NULL
amount             INTEGER NOT NULL  -- cents
donor_email        TEXT NOT NULL
donor_name         TEXT
frequency          TEXT NOT NULL CHECK (frequency IN ('one-time', 'monthly'))
status             TEXT DEFAULT 'completed' CHECK (status IN ('completed', 'pending', 'failed'))
created_at         TIMESTAMPTZ DEFAULT NOW()
```
