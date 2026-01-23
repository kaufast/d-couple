# D-Couple: Strategic Accountability Hub - Transformation Plan

## Executive Summary

This document outlines the comprehensive transformation of the existing Next.js template (Foks) into a high-scale **Strategic Accountability Hub** focused on corporate governance oversight, civic mobility, and asset preservation. The refactored application will support 10,000+ institutional profiles with secure reporting, privacy-first architecture, and real-time analytics.

---

## Current Architecture Analysis

### Technology Stack (As-Is)
- **Framework:** Next.js 16.0.7 (App Router)
- **React:** 19.2.1
- **Language:** TypeScript 5.x
- **Styling:** Bootstrap 5.3.3 + Custom CSS (4,552 lines)
- **Animation:** GSAP 3.12.7, WOW.js 1.1.3, Swiper 11.2.5
- **Deployment:** Vercel (configured)

### Current State
- **33 static pages** in App Router structure
- **No database integration** (static content only)
- **No authentication system**
- **No API routes or Server Actions**
- **Multi-layout system:** 8 home variants, 9 archive layouts, 7 single post layouts
- **Server/Client component pattern** implemented
- **Dark mode support** with localStorage persistence
- **Responsive design** with Bootstrap grid system

### Component Organization
```
components/
├── cards/         # 26 card components
├── common/        # Tabs, shared UI (3 files)
├── elements/      # Pagination, sidebars, breadcrumbs (16 files)
├── layout/        # Headers (7), footers (7), navigation (52 total files)
├── sections/      # Page sections (34 directories)
└── shared/        # Swiper carousels (2 files)
```

### Routing Structure
- **Static pages only** (e.g., `/about-us`, `/archive-1`, `/single-3`)
- **No dynamic routes** currently implemented
- Each route has dedicated folder with `page.tsx`

---

## Transformation Objectives

### 1. Dynamic Routing & Scalability
**Goal:** Support 10,000+ institutional profiles with dynamic routes and ISR

#### Actions Required:
- [ ] Migrate static entity pages to dynamic route: `app/directory/[slug]/page.tsx`
- [ ] Implement `generateStaticParams()` for ISR (Incremental Static Regeneration)
- [ ] Configure revalidation strategy for 10,000+ pages
- [ ] Create fallback handling for new entities
- [ ] Build entity indexing system

**Technical Implementation:**
```typescript
// app/directory/[slug]/page.tsx
export async function generateStaticParams() {
  const entities = await fetchTopEntities(100); // Pre-render top 100
  return entities.map((entity) => ({ slug: entity.slug }));
}

export const revalidate = 3600; // Revalidate every hour
```

---

### 2. Database Architecture

#### Technology Selection
**Recommended:** Supabase (PostgreSQL) or Vercel Postgres
- Row-Level Security (RLS) for privacy
- Real-time subscriptions for live updates
- Built-in authentication
- Edge function support

#### Schema Implementation

##### Core Entities Table
```sql
CREATE TABLE entities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  sector TEXT, -- 'Technology', 'Finance', 'Government', etc.
  governance_score INT DEFAULT 50 CHECK (governance_score >= 0 AND governance_score <= 100),
  is_verified BOOLEAN DEFAULT FALSE,
  metadata JSONB, -- Flexible metadata storage
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_entities_slug ON entities(slug);
CREATE INDEX idx_entities_sector ON entities(sector);
CREATE INDEX idx_entities_governance_score ON entities(governance_score DESC);
```

##### Strategic Reports Table
```sql
CREATE TABLE reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  entity_id UUID REFERENCES entities(id) ON DELETE CASCADE,
  category TEXT NOT NULL CHECK (category IN ('compliance', 'asset_preservation', 'relocation', 'policy_strategy')),
  classification TEXT DEFAULT 'unclassified' CHECK (classification IN ('unclassified', 'restricted', 'confidential_internal')),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  impact_rating INT DEFAULT 0,
  status TEXT DEFAULT 'under_review' CHECK (status IN ('under_review', 'approved', 'rejected', 'flagged')),
  metadata JSONB, -- Source citations, attachments, etc.
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_reports_entity_id ON reports(entity_id);
CREATE INDEX idx_reports_category ON reports(category);
CREATE INDEX idx_reports_status ON reports(status);
CREATE INDEX idx_reports_classification ON reports(classification);
```

##### Impact Voting System
```sql
CREATE TABLE impact_votes (
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  report_id UUID REFERENCES reports(id) ON DELETE CASCADE,
  vote_weight INT CHECK (vote_weight IN (1, -1)),
  voted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (user_id, report_id)
);

CREATE INDEX idx_impact_votes_report_id ON impact_votes(report_id);
```

##### User Profiles (Extended)
```sql
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  role TEXT DEFAULT 'contributor' CHECK (role IN ('contributor', 'verified_analyst', 'admin')),
  institution_affiliation TEXT,
  expertise_areas TEXT[], -- Array of expertise domains
  reputation_score INT DEFAULT 0,
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

##### Activity Log (Audit Trail)
```sql
CREATE TABLE activity_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  action TEXT NOT NULL, -- 'report_submitted', 'entity_created', 'vote_cast'
  entity_type TEXT, -- 'report', 'entity', 'vote'
  entity_id UUID,
  metadata JSONB,
  ip_address INET,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_activity_log_user_id ON activity_log(user_id);
CREATE INDEX idx_activity_log_created_at ON activity_log(created_at DESC);
```

#### Row-Level Security (RLS) Policies

##### Entities - Public Read, Verified Write
```sql
ALTER TABLE entities ENABLE ROW LEVEL SECURITY;

-- Anyone can read unverified entities
CREATE POLICY "Public entities are viewable by everyone"
  ON entities FOR SELECT
  USING (true);

-- Only admins can insert/update entities
CREATE POLICY "Admins can manage entities"
  ON entities FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  );
```

##### Reports - Privacy-First Access
```sql
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;

-- Public reports (unclassified, approved)
CREATE POLICY "Public reports are viewable by everyone"
  ON reports FOR SELECT
  USING (
    classification = 'unclassified'
    AND status = 'approved'
  );

-- Authors can view their own reports
CREATE POLICY "Authors can view their own reports"
  ON reports FOR SELECT
  USING (auth.uid() = author_id);

-- Admins can view all reports
CREATE POLICY "Admins can view all reports"
  ON reports FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  );

-- Verified analysts can submit reports
CREATE POLICY "Verified users can submit reports"
  ON reports FOR INSERT
  WITH CHECK (
    auth.uid() = author_id
    AND EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND (role = 'verified_analyst' OR role = 'admin')
    )
  );
```

##### Votes - User Privacy
```sql
ALTER TABLE impact_votes ENABLE ROW LEVEL SECURITY;

-- Users can only see their own votes
CREATE POLICY "Users can view their own votes"
  ON impact_votes FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own votes
CREATE POLICY "Users can cast votes"
  ON impact_votes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update only their own votes
CREATE POLICY "Users can change their votes"
  ON impact_votes FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
```

---

### 3. Authentication & Authorization

#### Implementation Strategy: Supabase Auth

##### Setup Steps
1. **Install Supabase:**
```bash
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
```

2. **Environment Variables:**
```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

3. **Create Supabase Client:**
```typescript
// lib/supabase/client.ts
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export const supabase = createClientComponentClient();
```

4. **Server-Side Client:**
```typescript
// lib/supabase/server.ts
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const createClient = () => {
  return createServerComponentClient({ cookies });
};
```

##### User Roles & Permissions
| Role | Permissions |
|------|-------------|
| **Public** | View approved unclassified reports, browse entities |
| **Contributor** | Submit reports (pending approval), vote on reports |
| **Verified Analyst** | Submit reports (auto-approved), edit own reports |
| **Admin** | Full CRUD on all entities, moderation, user management |

##### Authentication Flow
1. **Email/Password signup** with email verification
2. **OAuth providers:** Google, GitHub (optional)
3. **Magic link login** for secure passwordless access
4. **Session management:** 7-day session, refresh tokens

---

### 4. Governance Report Engine

#### Features
1. **Multi-category submission forms:**
   - Corporate Compliance
   - Policy Strategy
   - Asset Preservation
   - Logistics & Relocation

2. **Zod Schema Validation:**
```typescript
// lib/validations/report.ts
import { z } from 'zod';

export const reportSchema = z.object({
  entity_id: z.string().uuid(),
  category: z.enum(['compliance', 'asset_preservation', 'relocation', 'policy_strategy']),
  classification: z.enum(['unclassified', 'restricted', 'confidential_internal']),
  title: z.string().min(10).max(200),
  content: z.string().min(100).max(10000),
  sources: z.array(z.string().url()).optional(),
  tags: z.array(z.string()).max(10).optional(),
});

export type ReportFormData = z.infer<typeof reportSchema>;
```

3. **Next.js Server Actions:**
```typescript
// app/actions/reports.ts
'use server';

import { revalidatePath } from 'next/cache';
import { createClient } from '@/lib/supabase/server';
import { reportSchema } from '@/lib/validations/report';

export async function submitReport(formData: FormData) {
  const supabase = createClient();

  // Get authenticated user
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { error: 'Unauthorized' };
  }

  // Validate input
  const rawData = Object.fromEntries(formData);
  const validation = reportSchema.safeParse(rawData);

  if (!validation.success) {
    return { error: 'Validation failed', details: validation.error };
  }

  // Insert report
  const { data, error } = await supabase
    .from('reports')
    .insert({
      ...validation.data,
      author_id: user.id,
      status: 'under_review',
    })
    .select()
    .single();

  if (error) {
    return { error: error.message };
  }

  // Revalidate entity page
  revalidatePath(`/directory/${validation.data.entity_id}`);

  return { success: true, report: data };
}
```

4. **Form Component:**
```typescript
// components/forms/ReportSubmissionForm.tsx
'use client';

import { useFormStatus } from 'react-dom';
import { submitReport } from '@/app/actions/reports';

export function ReportSubmissionForm({ entityId }: { entityId: string }) {
  const { pending } = useFormStatus();

  return (
    <form action={submitReport} className="space-y-4">
      <input type="hidden" name="entity_id" value={entityId} />

      <div>
        <label htmlFor="category">Report Category</label>
        <select name="category" id="category" required>
          <option value="compliance">Corporate Compliance</option>
          <option value="policy_strategy">Policy Strategy</option>
          <option value="asset_preservation">Asset Preservation</option>
          <option value="relocation">Logistics & Relocation</option>
        </select>
      </div>

      <div>
        <label htmlFor="classification">Classification</label>
        <select name="classification" id="classification" required>
          <option value="unclassified">Public (Unclassified)</option>
          <option value="restricted">Restricted (Verified Only)</option>
          <option value="confidential_internal">Confidential (Private)</option>
        </select>
      </div>

      <div>
        <label htmlFor="title">Report Title</label>
        <input
          type="text"
          name="title"
          id="title"
          minLength={10}
          maxLength={200}
          required
        />
      </div>

      <div>
        <label htmlFor="content">Report Content</label>
        <textarea
          name="content"
          id="content"
          rows={10}
          minLength={100}
          maxLength={10000}
          required
        />
      </div>

      <button type="submit" disabled={pending}>
        {pending ? 'Submitting...' : 'Submit Report'}
      </button>
    </form>
  );
}
```

---

### 5. Strategic Mobility Portal (Secure Section)

#### Features
1. **Private dashboard** for "Asset Preservation" and "Relocation" data
2. **Encrypted data storage** for sensitive information
3. **Time-limited sessions** (30-minute timeout)
4. **Audit logging** for all access

#### Implementation
```typescript
// app/portal/layout.tsx
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login?redirect=/portal');
  }

  // Check if user has verified role
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('role, is_verified')
    .eq('id', user.id)
    .single();

  if (!profile?.is_verified) {
    redirect('/portal/verification-required');
  }

  return (
    <div className="portal-secure-layout">
      <div className="security-banner">
        Secure Session Active - Session expires in 30 minutes
      </div>
      {children}
    </div>
  );
}
```

#### Security Features
- **Automatic session timeout:** Logout after 30 minutes of inactivity
- **IP address logging:** Track access for security audits
- **Content Security Policy:** Prevent XSS attacks
- **HTTPS-only cookies:** Secure session storage

---

### 6. Community Validation System

#### Impact Rating Logic
```typescript
// app/actions/votes.ts
'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function voteOnReport(reportId: string, voteWeight: 1 | -1) {
  const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { error: 'Unauthorized' };
  }

  // Upsert vote (update if exists, insert if not)
  const { error: voteError } = await supabase
    .from('impact_votes')
    .upsert({
      user_id: user.id,
      report_id: reportId,
      vote_weight: voteWeight,
    });

  if (voteError) {
    return { error: voteError.message };
  }

  // Update report's impact_rating (aggregate votes)
  const { data: votes } = await supabase
    .from('impact_votes')
    .select('vote_weight')
    .eq('report_id', reportId);

  const totalScore = votes?.reduce((sum, v) => sum + v.vote_weight, 0) || 0;

  await supabase
    .from('reports')
    .update({ impact_rating: totalScore })
    .eq('id', reportId);

  revalidatePath(`/reports/${reportId}`);

  return { success: true, newScore: totalScore };
}
```

#### Voting UI Component
```typescript
// components/VoteButtons.tsx
'use client';

import { useState } from 'react';
import { voteOnReport } from '@/app/actions/votes';

export function VoteButtons({
  reportId,
  currentScore,
  userVote
}: {
  reportId: string;
  currentScore: number;
  userVote?: 1 | -1 | null;
}) {
  const [score, setScore] = useState(currentScore);
  const [vote, setVote] = useState(userVote);

  const handleVote = async (weight: 1 | -1) => {
    const result = await voteOnReport(reportId, weight);
    if (result.success && result.newScore !== undefined) {
      setScore(result.newScore);
      setVote(weight);
    }
  };

  return (
    <div className="vote-buttons">
      <button
        onClick={() => handleVote(1)}
        className={vote === 1 ? 'active' : ''}
        aria-label="Upvote"
      >
        ↑
      </button>
      <span className="vote-score">{score}</span>
      <button
        onClick={() => handleVote(-1)}
        className={vote === -1 ? 'active' : ''}
        aria-label="Downvote"
      >
        ↓
      </button>
    </div>
  );
}
```

---

### 7. Privacy, Security & Compliance

#### Data Sanitization (XSS Prevention)
```typescript
// lib/utils/sanitize.ts
import DOMPurify from 'isomorphic-dompurify';

export function sanitizeHTML(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'ul', 'ol', 'li'],
    ALLOWED_ATTR: ['href', 'target'],
  });
}
```

#### GDPR Cookie Consent Banner
```typescript
// components/CookieConsent.tsx
'use client';

import { useState, useEffect } from 'react';

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-consent-banner">
      <div className="cookie-consent-content">
        <p>
          This site uses essential cookies for authentication and analytics.
          See our <a href="/privacy-policy">Privacy Policy</a> for details.
        </p>
        <div className="cookie-consent-actions">
          <button onClick={acceptCookies}>Accept</button>
          <button onClick={rejectCookies}>Reject Non-Essential</button>
        </div>
      </div>
    </div>
  );
}
```

#### Content Security Policy (CSP)
```typescript
// next.config.mjs
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.vercel-insights.com;
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      font-src 'self' data:;
      connect-src 'self' https://*.supabase.co wss://*.supabase.co;
      frame-ancestors 'none';
    `.replace(/\s{2,}/g, ' ').trim()
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  }
];

export default {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};
```

---

### 8. Vercel & SEO Optimization

#### Dynamic Sitemap Generation
```typescript
// app/sitemap.ts
import { createClient } from '@/lib/supabase/server';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createClient();

  // Fetch all entities
  const { data: entities } = await supabase
    .from('entities')
    .select('slug, updated_at')
    .order('updated_at', { ascending: false });

  const baseUrl = 'https://yoursite.com';

  const entityUrls = entities?.map((entity) => ({
    url: `${baseUrl}/directory/${entity.slug}`,
    lastModified: new Date(entity.updated_at),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  })) || [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/directory`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...entityUrls,
  ];
}
```

#### Metadata Generation for Dynamic Routes
```typescript
// app/directory/[slug]/page.tsx
import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const supabase = createClient();

  const { data: entity } = await supabase
    .from('entities')
    .select('name, sector, governance_score')
    .eq('slug', params.slug)
    .single();

  if (!entity) {
    return {
      title: 'Entity Not Found',
    };
  }

  return {
    title: `${entity.name} - Strategic Accountability Hub`,
    description: `Governance oversight and compliance reports for ${entity.name} in the ${entity.sector} sector. Governance Score: ${entity.governance_score}/100.`,
    openGraph: {
      title: entity.name,
      description: `${entity.sector} - Governance Score: ${entity.governance_score}`,
      type: 'website',
    },
  };
}
```

#### Incremental Static Regeneration (ISR)
```typescript
// app/directory/[slug]/page.tsx
export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const supabase = createClient();

  // Pre-render top 100 entities by governance score
  const { data: entities } = await supabase
    .from('entities')
    .select('slug')
    .order('governance_score', { ascending: false })
    .limit(100);

  return entities?.map((entity) => ({
    slug: entity.slug,
  })) || [];
}

export default async function EntityPage({
  params
}: {
  params: { slug: string }
}) {
  const supabase = createClient();

  const { data: entity } = await supabase
    .from('entities')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (!entity) {
    notFound();
  }

  return (
    <div>
      <h1>{entity.name}</h1>
      <p>Governance Score: {entity.governance_score}/100</p>
      {/* Entity details */}
    </div>
  );
}
```

#### Vercel KV (Redis) for Real-Time Metrics
```typescript
// lib/kv/analytics.ts
import { kv } from '@vercel/kv';

export async function trackActiveResearchers(entityId: string, userId: string) {
  const key = `active:${entityId}`;
  await kv.sadd(key, userId);
  await kv.expire(key, 300); // 5-minute activity window
}

export async function getActiveResearchers(entityId: string): Promise<number> {
  const key = `active:${entityId}`;
  return await kv.scard(key) || 0;
}
```

#### Performance Optimization (next.config.mjs)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['react-icons', 'lodash'],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
```

---

## Implementation Roadmap

### Phase 1: Foundation (Week 1-2)
- [ ] Set up Supabase project and database
- [ ] Implement authentication with Supabase Auth
- [ ] Create database schema with RLS policies
- [ ] Migrate static pages to dynamic routes
- [ ] Set up environment variables and configuration

### Phase 2: Core Features (Week 3-4)
- [ ] Build Governance Report Engine with Server Actions
- [ ] Implement entity directory with ISR
- [ ] Create community validation (voting) system
- [ ] Add user profile management
- [ ] Implement data sanitization and validation (Zod)

### Phase 3: Security & Privacy (Week 5)
- [ ] Configure Row-Level Security (RLS) policies
- [ ] Implement GDPR cookie consent banner
- [ ] Add Content Security Policy headers
- [ ] Set up audit logging for sensitive actions
- [ ] Create secure portal section with session timeout

### Phase 4: Optimization (Week 6)
- [ ] Generate dynamic sitemap
- [ ] Implement Vercel KV for real-time metrics
- [ ] Optimize images and caching
- [ ] Add metadata generation for SEO
- [ ] Performance testing and optimization

### Phase 5: UI/UX Refinement (Week 7)
- [ ] Design data-dense institutional UI (Bloomberg-style)
- [ ] Implement CMD+K global search
- [ ] Add Shadcn/UI DataTable components
- [ ] Create responsive layouts for all features
- [ ] Dark mode refinement

### Phase 6: Testing & Deployment (Week 8)
- [ ] End-to-end testing with Playwright
- [ ] Security audit and penetration testing
- [ ] Load testing for 10,000+ pages
- [ ] Deploy to Vercel with production config
- [ ] Monitor and optimize performance

---

## Technical Debt & Migration Strategy

### Database Migration
1. **Export existing static content** to JSON
2. **Seed Supabase database** with initial entities and reports
3. **Create migration scripts** for future schema changes
4. **Implement backup strategy** (daily backups to S3/Vercel Blob)

### Component Refactoring
1. **Reuse existing card components** for entity cards
2. **Adapt layout components** for new pages
3. **Keep animation stack** (GSAP, WOW.js) for institutional UX
4. **Migrate from Bootstrap** to Tailwind CSS + Shadcn/UI (optional)

### URL Structure Changes
```
Before: /single-1, /archive-2
After:  /directory/[slug], /reports/[id], /portal/asset-preservation
```

Implement **301 redirects** in `next.config.mjs`:
```javascript
async redirects() {
  return [
    {
      source: '/single-1',
      destination: '/directory/example-entity',
      permanent: true,
    },
  ];
}
```

---

## Security Checklist

- [ ] Environment variables stored in Vercel (not committed)
- [ ] HTTPS-only cookies for sessions
- [ ] Row-Level Security (RLS) enabled on all tables
- [ ] Input sanitization with DOMPurify
- [ ] Zod validation on all user inputs
- [ ] Content Security Policy (CSP) headers
- [ ] Rate limiting on API routes (Vercel Edge Config)
- [ ] SQL injection prevention (parameterized queries via Supabase)
- [ ] XSS prevention (sanitized HTML rendering)
- [ ] CSRF protection (SameSite cookies)
- [ ] Audit logging for sensitive actions
- [ ] IP address tracking for security incidents
- [ ] Automatic session timeout (30 minutes for portal)
- [ ] Two-factor authentication (2FA) for admin accounts

---

## Performance Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| **Lighthouse Score** | 95+ | ISR, image optimization, code splitting |
| **First Contentful Paint** | < 1.5s | Edge caching, optimized fonts |
| **Time to Interactive** | < 3s | Lazy loading, minimal JS bundles |
| **Page Load (10k+ entities)** | < 2s | ISR with stale-while-revalidate |
| **Database Query Time** | < 100ms | Indexed queries, connection pooling |
| **Real-time Metrics Update** | < 500ms | Vercel KV (Redis) edge caching |

---

## Compliance & Legal

### GDPR Compliance
- [ ] Cookie consent banner with granular controls
- [ ] User data export functionality (GDPR Article 20)
- [ ] Right to erasure (delete account and all data)
- [ ] Privacy policy page with data retention details
- [ ] Data processing agreements with Supabase/Vercel

### Accessibility (WCAG 2.1 AA)
- [ ] Keyboard navigation for all interactive elements
- [ ] ARIA labels for screen readers
- [ ] Color contrast ratio > 4.5:1
- [ ] Semantic HTML structure
- [ ] Focus indicators on all buttons/links

---

## Monitoring & Analytics

### Metrics to Track
1. **User Engagement:**
   - Active researchers per entity (Vercel KV)
   - Reports submitted per day
   - Votes cast per report
   - Average session duration

2. **Performance:**
   - Core Web Vitals (Vercel Analytics)
   - API response times
   - Database query performance
   - Edge cache hit rate

3. **Security:**
   - Failed login attempts
   - Suspicious activity (rapid voting, spam reports)
   - RLS policy violations
   - IP addresses accessing sensitive data

### Tools
- **Vercel Analytics:** Core Web Vitals, real-time traffic
- **Sentry:** Error tracking and performance monitoring
- **Supabase Logs:** Database query performance
- **Vercel KV:** Real-time metrics storage

---

## Dependencies to Add

```bash
# Core dependencies
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
npm install zod react-hook-form @hookform/resolvers
npm install isomorphic-dompurify
npm install @vercel/kv @vercel/analytics

# UI components (optional migration from Bootstrap)
npm install @radix-ui/react-dropdown-menu @radix-ui/react-dialog
npm install cmdk # CMD+K search
npm install react-hot-toast # Notifications
npm install @tanstack/react-table # DataTable

# Development
npm install -D @types/node
npm install -D playwright # E2E testing
```

---

## File Structure (Proposed)

```
/Users/melchor/D-couple/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   ├── signup/page.tsx
│   │   └── verify-email/page.tsx
│   ├── directory/
│   │   ├── [slug]/page.tsx          # Dynamic entity pages
│   │   └── page.tsx                 # Directory listing
│   ├── reports/
│   │   ├── [id]/page.tsx            # Individual report pages
│   │   └── submit/page.tsx          # Report submission form
│   ├── portal/                       # Secure section
│   │   ├── layout.tsx               # Protected layout
│   │   ├── asset-preservation/page.tsx
│   │   └── relocation/page.tsx
│   ├── actions/
│   │   ├── reports.ts               # Server Actions for reports
│   │   ├── votes.ts                 # Server Actions for voting
│   │   └── entities.ts              # Server Actions for entities
│   ├── api/
│   │   └── search/route.ts          # Search API endpoint
│   ├── sitemap.ts                   # Dynamic sitemap
│   └── layout.tsx                   # Root layout
├── components/
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   └── SignupForm.tsx
│   ├── directory/
│   │   ├── EntityCard.tsx
│   │   └── EntityTable.tsx
│   ├── reports/
│   │   ├── ReportCard.tsx
│   │   ├── ReportSubmissionForm.tsx
│   │   └── VoteButtons.tsx
│   ├── shared/
│   │   ├── CookieConsent.tsx
│   │   ├── GlobalSearch.tsx
│   │   └── Navbar.tsx
│   └── ui/                          # Shadcn/UI components
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── middleware.ts
│   ├── validations/
│   │   ├── report.ts
│   │   └── entity.ts
│   ├── utils/
│   │   ├── sanitize.ts
│   │   └── dates.ts
│   └── kv/
│       └── analytics.ts
├── migrations/
│   ├── 001_initial_schema.sql
│   └── 002_rls_policies.sql
├── public/
├── .env.local                       # Environment variables (git-ignored)
├── next.config.mjs
├── package.json
├── tsconfig.json
└── claude.md                        # This file
```

---

## Glossary

| Term | Definition |
|------|------------|
| **ISR** | Incremental Static Regeneration - regenerates static pages on-demand |
| **RLS** | Row-Level Security - database-level access control |
| **CSP** | Content Security Policy - HTTP header to prevent XSS attacks |
| **XSS** | Cross-Site Scripting - code injection vulnerability |
| **Server Actions** | Next.js feature for server-side form handling |
| **Edge Functions** | Serverless functions running at edge locations |
| **KV Store** | Key-Value store (Redis) for fast data access |

---

## Resources

### Documentation
- [Next.js 16 Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Vercel Platform](https://vercel.com/docs)
- [Zod Validation](https://zod.dev/)
- [Shadcn/UI](https://ui.shadcn.com/)

### Security
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GDPR Guidelines](https://gdpr.eu/)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

---

## Contact & Support

For questions or implementation assistance:
- Review this document
- Consult Next.js, Supabase, and Vercel documentation
- Test security features thoroughly before production

---

**Last Updated:** 2026-01-23
**Version:** 1.0
**Status:** Planning Phase
