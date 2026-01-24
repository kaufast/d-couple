# Next Steps - Making d-couple Self-Sustaining

## ✅ Completed

### Brand & Messaging
- ✅ Updated hero headline: "Decoupling from Global Monopolies through Strategic Autonomy"
- ✅ Updated badge: "10k+ Data Points Tracked"
- ✅ Updated tagline: "Strategic intelligence for autonomous growth"
- ✅ Updated navbar: Overview, Oversight Directory, Mobility Resources, Field Intel
- ✅ Comprehensive SEO with Open Graph tags
- ✅ Sitemap and robots.txt configured

### Technical Infrastructure
- ✅ Next.js 16 with Turbopack
- ✅ Supabase authentication and database
- ✅ Admin dashboard for content management
- ✅ Contact form with file uploads
- ✅ Email notifications via Resend
- ✅ WebAuthn passkey support
- ✅ Vercel deployment with environment variables
- ✅ Domain: d-couple.com (DNS propagating)

---

## 🔄 Dummy Content to Replace (One-Man Band Approach)

### 1. Featured Articles Section (Homepage Hero)

**Current Location:** `/components/sections/home-6/Section1.tsx`

**Current Dummy Data:**
- Category: "Solitude"
- Title: "There is a kind of peace only found in the fading of nature"
- Author: "Lora"
- Tags: silence, noise, solitude, landscape, mindfulness

**What to Replace With:**

#### Option A: Regional Growth Projects (Recommended for Immediate Impact)
```javascript
{
    linkPost: "/reports/eu-logistics-framework",
    linkCategory: "/category/eu-funding",
    category: "EU Funding",
    title: "How the Trans-European Transport Network Decouples from Big Tech Logistics",
    description: "Analysis of EU-funded infrastructure projects that provide regional alternatives to Amazon and DHL monopolies.",
    linkAuthor: "/about",
    author: "d-couple Research",
    date: "January 2026",
    readTime: "8 mins read",
    img: "/assets/imgs/reports/eu-logistics.jpg",
    tags: [
        { link: "/category/logistics", name: "Logistics" },
        { link: "/category/eu-funding", name: "EU Funding" },
        { link: "/category/infrastructure", name: "Infrastructure" },
    ],
}
```

#### Option B: Big Actor Accountability Scores
```javascript
{
    linkPost: "/directory/google",
    linkCategory: "/category/tech-monopolies",
    category: "Accountability Report",
    title: "Google's EU Compliance Score Drops to 42% Following GDPR Violations",
    description: "Quarterly update on Google's governance metrics, regional market share, and viable European alternatives.",
    author: "d-couple Intelligence",
    date: "January 2026",
    readTime: "12 mins read",
    img: "/assets/imgs/reports/google-score.jpg",
    tags: [
        { link: "/category/privacy", name: "Privacy" },
        { link: "/category/big-tech", name: "Big Tech" },
        { link: "/category/compliance", name: "Compliance" },
    ],
}
```

### 2. Category Mapping (Sidebar & Footer)

**Current Categories (Template Dummy Data):**
- Lifestyle
- Culture
- Science
- World
- Politics

**Map to Your Strategic Sectors:**
- **EU Funding** - Regional growth projects
- **Logistics** - Transport, supply chain alternatives
- **Privacy Tech** - GDPR-compliant tools & services
- **Governance** - Institutional accountability scores
- **Asset Mobility** - Legal frameworks for relocation
- **Regional Markets** - Alternative marketplaces to Big Tech

**Files to Update:**
- Footer categories
- Archive page listings
- Tag cloud (Popular Tags section)

### 3. Flash News Section (Currently in Mega Menu)

**Current Location:** `/components/layout/MainMenu.tsx` (lines 8-48)

**Replace With:** Intelligence Alerts
- "New EU regulation affects Big Tech market share in telecom"
- "3 French startups receive €50M in sovereign tech funding"
- "Alternative search engine Qwant reaches 5% market share in Germany"
- "Switzerland updates asset preservation laws for digital nomads"
- "Regional logistics cooperative launches in Baltics"

### 4. Most Comments Section

**Replace With:** Top Accountability Scores (Week/Month)
- "Amazon - Compliance Score: 38% ↓"
- "Meta - Privacy Violations: 12 this quarter ↑"
- "Apple - Regional Market Dominance: 67% ↑"

---

## 🤖 Self-Sustaining Features (Already Built, Just Need Content)

### 1. Admin Dashboard (`/admin`)
**What You Can Do:**
- Approve/reject user-submitted reports (Field Intel)
- Manage entity profiles
- Review contact form submissions
- Moderate content

**Time Investment:** 15-30 minutes per day reviewing submissions

### 2. Reports System (`/reports/submit`)
**User Contribution Flow:**
- Users submit intelligence reports
- Reports go to "under_review" status
- You log in after work, click "Approve" or "Reject"
- Approved reports appear in directory and sitemap

**Your Role:** Quality control, not content creation

### 3. Entity Directory (`/directory`)
**Current State:**
- Database schema ready
- Dynamic pages generated
- Governance score calculations built-in

**What's Missing:** Seed data (the 10,000+ entities)

**Quick Win:** Start with top 100 monopolies
- Google, Amazon, Meta, Apple, Microsoft
- Top 20 EU regulatory targets
- Major logistics companies (DHL, UPS, FedEx)
- Banking monopolies (Visa, Mastercard, PayPal)

### 4. Newsletter System
**Already Integrated:** Email notifications via Resend

**What to Add:**
- Weekly digest: "Top 5 Accountability Score Changes"
- Monthly: "Regional Growth Project Spotlight"
- Quarterly: "Big Actor Compliance Report Card"

**Time Investment:** 1 hour per week writing one strategic email

---

## 📊 Immediate Action Plan (This Week)

### Day 1-2: Replace Hero Content
1. Pick 2-3 real regional projects or accountability reports
2. Update `/components/sections/home-6/Section1.tsx` with actual data
3. Use real images or placeholders with proper context

### Day 3-4: Seed Top 20 Entities
1. Create 20 entity profiles (Google, Amazon, Meta, Apple, etc.)
2. Add basic governance scores (can be simple at first)
3. Link to existing news sources for credibility

### Day 5-6: Update Categories & Tags
1. Replace "Lifestyle, Culture, Science" with strategic sectors
2. Update footer links
3. Map tags to real topics

### Day 7: Launch Community Reporting
1. Announce "Submit Intelligence" feature
2. Share submission form link
3. Monitor for first user contributions

---

## 🎯 Long-Term Automation Strategy

### Phase 1: Manual Curation (Months 1-3)
- You write 1-2 high-quality reports per week
- Users submit intelligence, you approve
- Entity profiles grow organically

### Phase 2: Community-Driven (Months 4-6)
- Top contributors get "Verified Analyst" role
- Auto-approve from trusted users
- You focus on oversight, not creation

### Phase 3: Data Integration (Months 7-12)
- Connect to EU regulatory APIs for automated compliance scores
- Integrate news feeds for Big Actor alerts
- Auto-generate weekly digests from database

---

## 💡 Content Ideas You Can Execute in 1 Hour

### Quick Wins:
1. **Regional Blueprint:** "How Qwant Decouples from Google Search"
   - 500 words
   - Link to official Qwant docs
   - Compare privacy policies

2. **Accountability Report:** "Amazon's EU Warehouse Violations in 2025"
   - Summarize existing news articles
   - Add governance score
   - Link to alternatives (regional logistics cooperatives)

3. **Asset Mobility Guide:** "Digital Nomad Visa Comparison: Portugal vs. Estonia"
   - Bullet-point comparison
   - Link to official government sources
   - Tax implications table

### Template for All Reports:
1. **Problem:** What monopoly behavior are we decoupling from?
2. **Data:** Specific metrics, scores, or violations
3. **Alternative:** Regional solution with contact info
4. **Action:** What readers can do this week

---

## 🔧 Technical Tasks (Optional)

### Search Integration
**File:** `/components/layout/header/HeaderSearchButton.tsx`
**Current:** Opens search modal
**Add:** Connect to Supabase full-text search across entities and reports

### Automated Footer Categories
**File:** `/components/layout/footer/Footer4.tsx`
**Add:** Dynamic category links pulled from database instead of hardcoded

### Newsletter Signup
**Current:** Email input exists in footer
**Add:** Connect to email marketing service (Resend + mailing list)

---

## 📞 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Supabase Docs:** https://supabase.com/docs
- **Next.js SEO:** https://nextjs.org/learn/seo/introduction-to-seo

---

**Last Updated:** January 24, 2026
**Status:** Hero and navbar updated, ready for content replacement
