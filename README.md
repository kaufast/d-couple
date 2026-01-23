# Strategic Accountability Hub

A high-scale institutional oversight platform for corporate governance, civic mobility, and asset preservation tracking. Built with Next.js 16, Supabase, and Vercel.

---

## Features

### Core Functionality

- **Dynamic Entity Directory** - 10,000+ institutional profiles with ISR
- **Governance Report Engine** - Multi-category submission system with Zod validation
- **Community Validation** - Upvote/downvote system for report impact rating
- **Strategic Mobility Portal** - Secure section for asset preservation and relocation intel
- **Row-Level Security** - Privacy-first database access control
- **GDPR Compliance** - Cookie consent, privacy policy, data export/deletion rights

### Technical Highlights

- **Next.js 16** with App Router and React 19
- **Incremental Static Regeneration (ISR)** - Sub-2-second page loads
- **Supabase** - PostgreSQL database with real-time subscriptions
- **Row-Level Security (RLS)** - Granular access control
- **Content Security Policy** - XSS and injection attack prevention
- **DOMPurify** - HTML sanitization
- **Vercel KV (Redis)** - Real-time analytics (optional)
- **Dynamic Sitemap** - SEO optimization for 10,000+ pages

---

## Quick Start

### 1. Database Setup (Required First)

**Apply migrations to your Supabase project:**

1. Go to https://supabase.com/dashboard/project/rkcotbfnmzoichinvndv/sql
2. Run each migration file in order:
   - Copy/paste `/migrations/001_initial_schema.sql` → Execute
   - Copy/paste `/migrations/002_rls_policies.sql` → Execute
   - Copy/paste `/migrations/003_seed_data.sql` → Execute

### 2. Get Service Role Key

1. Go to https://supabase.com/dashboard/project/rkcotbfnmzoichinvndv/settings/api
2. Under "Project API keys" → Copy the **service_role** secret key
3. Add it to `.env.local`:
   ```env
   SUPABASE_SERVICE_ROLE_KEY=your_actual_service_role_key_here
   ```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Your Project Configuration

✅ **Supabase Project:**
- Project ID: `rkcotbfnmzoichinvndv`
- URL: `https://rkcotbfnmzoichinvndv.supabase.co`
- Database: `postgresql://postgres:V4rArxIq8OxVUiCg@db.rkcotbfnmzoichinvndv.supabase.co:5432/postgres`

✅ **Environment Variables:**
- `.env.local` created with your credentials
- Need to add: `SUPABASE_SERVICE_ROLE_KEY` (see step 2 above)

---

## Next Steps

### 1. Apply Database Migrations

Run the 3 SQL migration files in your Supabase SQL Editor (in order).

### 2. Create First Admin User

1. Run `npm run dev`
2. Go to http://localhost:3000/auth/signup
3. Create an account
4. Verify email
5. In Supabase SQL Editor, run:
   ```sql
   UPDATE user_profiles
   SET role = 'admin', is_verified = true
   WHERE id = (
     SELECT id FROM auth.users WHERE email = 'your-email@example.com'
   );
   ```

### 3. Test Features

- Browse entities: http://localhost:3000/directory
- Submit a report: http://localhost:3000/reports/submit
- Access portal: http://localhost:3000/portal

---

## Key Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/directory` | Entity directory listing |
| `/directory/[slug]` | Entity detail page (dynamic, ISR) |
| `/reports/[id]` | Report detail page |
| `/reports/submit` | Report submission form |
| `/portal` | Secure portal dashboard |
| `/auth/login` | Login page |
| `/auth/signup` | Signup page |
| `/privacy` | Privacy policy |

---

## Documentation

- **[claude.md](./claude.md)** - Comprehensive transformation plan
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deployment guide
- **[migrations/README.md](./migrations/README.md)** - Database setup

---

## Support

For questions:
- **Database:** See `/migrations/README.md`
- **Deployment:** See `/DEPLOYMENT.md`
- **Architecture:** See `/claude.md`

---

**Version:** 1.0
**Last Updated:** January 23, 2026
