# Database Migrations

This directory contains SQL migration files for the Strategic Accountability Hub database.

## Files

1. **001_initial_schema.sql** - Creates all core tables (entities, reports, votes, profiles, activity_log)
2. **002_rls_policies.sql** - Implements Row-Level Security policies for privacy and access control
3. **003_seed_data.sql** - Populates database with sample entities and common tags

## How to Apply Migrations

### Using Supabase Dashboard

1. Log in to your Supabase project at https://app.supabase.com
2. Navigate to **SQL Editor**
3. Copy the contents of each migration file
4. Execute them in order (001, 002, 003)

### Using Supabase CLI

```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link to your project
supabase link --project-ref your-project-ref

# Apply migrations
supabase db push

# Or run individual migrations
supabase db execute --file migrations/001_initial_schema.sql
supabase db execute --file migrations/002_rls_policies.sql
supabase db execute --file migrations/003_seed_data.sql
```

### Using psql (Direct Connection)

```bash
# Connect to your Supabase database
psql "postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"

# Run migrations
\i migrations/001_initial_schema.sql
\i migrations/002_rls_policies.sql
\i migrations/003_seed_data.sql
```

## Migration Order

**IMPORTANT:** Always run migrations in numerical order to avoid dependency issues.

## Schema Overview

### Tables

- **entities** - Companies, foundations, politicians tracked by the system
- **reports** - Strategic reports on governance, compliance, asset preservation
- **impact_votes** - Community validation votes on reports
- **user_profiles** - Extended user information with roles and reputation
- **activity_log** - Audit trail for all user actions
- **common_tags** - Pre-defined tags for report categorization

### Security Features

- Row-Level Security (RLS) enabled on all tables
- Policies enforce role-based access control
- Automatic activity logging triggers
- Automatic timestamp updates on modifications

### User Roles

- **contributor** - Can submit reports (pending approval), vote on reports
- **verified_analyst** - Can submit auto-approved reports, access restricted content
- **admin** - Full CRUD on all entities, moderation, user management

### Report Classification Levels

- **unclassified** - Public access (when approved)
- **restricted** - Verified analysts only (when approved)
- **confidential_internal** - Author and admins only

## Verification Checklist

After running migrations, verify:

- [ ] All tables created successfully
- [ ] RLS enabled on all tables (`SELECT * FROM pg_tables WHERE rowsecurity = true`)
- [ ] Triggers created for timestamp updates
- [ ] Triggers created for vote aggregation
- [ ] Sample entities inserted
- [ ] Common tags inserted

## Rollback

If you need to rollback migrations:

```sql
-- Drop all tables (WARNING: This will delete all data)
DROP TABLE IF EXISTS activity_log CASCADE;
DROP TABLE IF EXISTS impact_votes CASCADE;
DROP TABLE IF EXISTS reports CASCADE;
DROP TABLE IF EXISTS user_profiles CASCADE;
DROP TABLE IF EXISTS entities CASCADE;
DROP TABLE IF EXISTS common_tags CASCADE;

-- Drop functions
DROP FUNCTION IF EXISTS update_updated_at_column();
DROP FUNCTION IF EXISTS handle_new_user();
DROP FUNCTION IF EXISTS update_report_impact_rating();
DROP FUNCTION IF EXISTS log_report_submission();
```

## Troubleshooting

### Error: "relation already exists"

The migrations use `IF NOT EXISTS` clauses, so you can safely re-run them. If you encounter this error, it means the table was already created.

### Error: "permission denied"

Ensure you're connected with the `postgres` role or have sufficient privileges.

### Error: "auth.users does not exist"

This means Supabase Auth is not enabled. Enable it in your Supabase dashboard under **Authentication** settings.

## Next Steps

After applying migrations:

1. Configure authentication providers in Supabase Dashboard
2. Set up environment variables in `.env.local`
3. Test database connection from Next.js app
4. Create initial admin user
5. Test RLS policies with different user roles
