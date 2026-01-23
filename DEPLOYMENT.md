# Deployment Guide - Strategic Accountability Hub

This document provides step-by-step instructions for deploying the Strategic Accountability Hub to production.

---

## Prerequisites

- [ ] Supabase account (https://supabase.com)
- [ ] Vercel account (https://vercel.com)
- [ ] GitHub repository
- [ ] Domain name (optional)

---

## Step 1: Set Up Supabase Database

### 1.1 Create Supabase Project

1. Go to https://app.supabase.com
2. Click "New Project"
3. Choose organization and enter project details
4. Wait for project to be created (2-3 minutes)

### 1.2 Apply Database Migrations

Option A: Using Supabase Dashboard (Recommended for first deployment)

1. Open your Supabase project
2. Navigate to **SQL Editor**
3. Run each migration file in order:
   - `/migrations/001_initial_schema.sql`
   - `/migrations/002_rls_policies.sql`
   - `/migrations/003_seed_data.sql`
4. Verify tables were created: Go to **Table Editor**

Option B: Using Supabase CLI

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref your-project-ref

# Push migrations
supabase db push
```

### 1.3 Configure Authentication

1. Go to **Authentication** > **Providers**
2. Enable **Email** provider
3. Configure email templates (optional):
   - Confirmation email
   - Password reset email
4. Set **Site URL** to your deployment URL (will update later)

### 1.4 Get API Credentials

1. Go to **Settings** > **API**
2. Copy the following values:
   - `Project URL`
   - `anon public` key
   - `service_role` key (keep secret!)

---

## Step 2: Deploy to Vercel

### 2.1 Push Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Strategic Accountability Hub"

# Add remote
git remote add origin https://github.com/your-username/strategic-accountability-hub.git

# Push to GitHub
git push -u origin main
```

### 2.2 Import to Vercel

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Configure project settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Build Command:** (leave default)
   - **Output Directory:** (leave default)

### 2.3 Configure Environment Variables

In Vercel project settings, add these environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app
```

**Note:** Do NOT add KV variables yet - we'll set those up in Step 3.

### 2.4 Deploy

1. Click **Deploy**
2. Wait for deployment to complete (3-5 minutes)
3. Visit your deployment URL to verify

---

## Step 3: Configure Vercel KV (Optional - for real-time analytics)

### 3.1 Create KV Store

1. In Vercel dashboard, go to **Storage**
2. Click **Create Database**
3. Select **KV**
4. Name it "strategic-hub-kv"
5. Select region closest to your Supabase database

### 3.2 Connect to Project

1. Click **Connect Project**
2. Select your Strategic Accountability Hub project
3. Copy environment variables:
   - `KV_REST_API_URL`
   - `KV_REST_API_TOKEN`
   - `KV_REST_API_READ_ONLY_TOKEN`

### 3.3 Update Code

Uncomment KV code in `/lib/kv/analytics.ts`:

```typescript
import { kv } from '@vercel/kv'; // Uncomment this line
```

Then uncomment all function implementations.

### 3.4 Redeploy

```bash
git add .
git commit -m "Enable Vercel KV analytics"
git push
```

---

## Step 4: Update Supabase Configuration

### 4.1 Update Site URL

1. Go to Supabase Dashboard > **Authentication** > **URL Configuration**
2. Set **Site URL** to your Vercel deployment URL
3. Add **Redirect URLs:**
   - `https://your-domain.vercel.app/auth/callback`
   - `https://your-domain.vercel.app/auth/reset-password`

### 4.2 Configure CORS (if needed)

1. Go to **Settings** > **API**
2. Under **CORS Settings**, add your Vercel domain

---

## Step 5: Create First Admin User

### 5.1 Sign Up via UI

1. Visit your deployment URL
2. Click **Sign Up**
3. Create an account with your email
4. Check email for verification link
5. Verify your account

### 5.2 Promote to Admin (via SQL)

1. Go to Supabase Dashboard > **SQL Editor**
2. Run this query (replace with your email):

```sql
UPDATE user_profiles
SET role = 'admin', is_verified = true
WHERE id = (
  SELECT id FROM auth.users WHERE email = 'your-email@example.com'
);
```

3. Verify by logging in and accessing `/portal`

---

## Step 6: Add Initial Data

### 6.1 Seed Entities (Already Done)

The migration `003_seed_data.sql` added 8 sample entities.

### 6.2 Create More Entities (via Admin)

*Coming soon: Admin dashboard for entity management.*

For now, use SQL Editor:

```sql
INSERT INTO entities (slug, name, sector, governance_score, description, is_verified)
VALUES (
  'example-corp',
  'Example Corporation',
  'Technology',
  75,
  'Description here',
  true
);
```

---

## Step 7: Domain Configuration (Optional)

### 7.1 Add Custom Domain in Vercel

1. Go to **Settings** > **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions

### 7.2 Update Environment Variables

1. Update `NEXT_PUBLIC_SITE_URL` to your custom domain
2. Update Supabase **Site URL** and **Redirect URLs**

### 7.3 Force HTTPS

Vercel automatically handles HTTPS. Ensure your CSP headers allow it:
- Already configured in `next.config.mjs`

---

## Step 8: Performance Optimization

### 8.1 Enable Vercel Analytics

1. Go to Vercel Dashboard > **Analytics**
2. Click **Enable Analytics**
3. Add environment variable (if not auto-added):
   ```
   NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
   ```

### 8.2 Configure ISR

Already configured:
- Entity pages: Revalidate every 1 hour (`revalidate = 3600`)
- Directory: Revalidate every 5 minutes (`revalidate = 300`)

### 8.3 Test Performance

1. Run Lighthouse audit
2. Target scores:
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 95+

---

## Step 9: Security Checklist

- [ ] CSP headers configured (`next.config.mjs`)
- [ ] RLS policies enabled on all tables
- [ ] HTTPS enforced (Vercel automatic)
- [ ] Environment variables secured (never commit `.env.local`)
- [ ] Rate limiting configured (via Vercel Edge Config - optional)
- [ ] Input sanitization active (DOMPurify)
- [ ] XSS protection enabled
- [ ] CORS configured properly

---

## Step 10: Monitoring & Maintenance

### 10.1 Set Up Monitoring

1. **Vercel Logs:**
   - Real-time logs: Vercel Dashboard > **Logs**
   - Set up log drains (optional)

2. **Supabase Logs:**
   - Database logs: Supabase Dashboard > **Logs**
   - Set up log retention

3. **Error Tracking (Optional):**
   - Install Sentry: `npm install @sentry/nextjs`
   - Configure in `sentry.client.config.ts` and `sentry.server.config.ts`

### 10.2 Backup Strategy

1. **Supabase Backups:**
   - Automatic daily backups (Pro plan)
   - Manual backups: **Database** > **Backups**

2. **Code Backups:**
   - GitHub already serves as backup
   - Tag releases: `git tag v1.0.0 && git push --tags`

### 10.3 Update Workflow

```bash
# Make changes locally
npm run dev

# Test thoroughly
# ...

# Commit and push
git add .
git commit -m "Description of changes"
git push

# Vercel auto-deploys from main branch
```

---

## Troubleshooting

### Database Connection Issues

1. Check environment variables are correct
2. Verify Supabase project is not paused (free tier auto-pauses after 7 days inactivity)
3. Check RLS policies aren't blocking queries

### Build Failures

1. Check build logs in Vercel Dashboard
2. Common issues:
   - Missing environment variables
   - Type errors (run `npm run build` locally first)
   - Import errors (check file paths)

### Authentication Issues

1. Verify Site URL matches deployment URL
2. Check Redirect URLs are correct
3. Ensure email provider is enabled in Supabase

### Performance Issues

1. Check ISR is working: Look for `Cache-Control` headers
2. Enable Vercel Analytics to identify bottlenecks
3. Use `next/image` for all images (already implemented)

---

## Production Checklist

- [ ] All migrations applied successfully
- [ ] Admin user created and verified
- [ ] Environment variables configured
- [ ] Custom domain configured (if applicable)
- [ ] Analytics enabled
- [ ] Privacy policy reviewed and updated
- [ ] Cookie consent banner tested
- [ ] All authentication flows tested (signup, login, password reset)
- [ ] Report submission tested
- [ ] Voting system tested
- [ ] Portal access tested for verified users
- [ ] Security headers verified (use securityheaders.com)
- [ ] Performance tested (Lighthouse)
- [ ] Mobile responsiveness verified
- [ ] Backup strategy in place

---

## Scaling Considerations

### Database Scaling

- **Supabase Pro:** Upgrade when you exceed free tier limits
- **Connection pooling:** Already handled by Supabase
- **Indexes:** Already added in migrations

### Vercel Scaling

- **Pro plan:** Required for:
  - Team collaboration
  - Preview deployments for all branches
  - Advanced analytics
  - Edge config for rate limiting

### CDN & Caching

- Vercel Edge Network (automatic)
- ISR for dynamic pages (already configured)
- Static assets cached automatically

---

## Support & Documentation

- **Next.js Docs:** https://nextjs.org/docs
- **Supabase Docs:** https://supabase.com/docs
- **Vercel Docs:** https://vercel.com/docs

---

**Last Updated:** January 23, 2026
**Deployment Version:** 1.0
