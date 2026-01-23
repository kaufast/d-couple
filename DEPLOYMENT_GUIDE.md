# Deployment Guide - d-couple.com

## ✅ Homepage Updated
The index-4 design is now your homepage at `http://localhost:3000`

---

## 🚀 Deploy to Vercel

### Step 1: Initialize Git Repository (if not already done)

```bash
cd /Users/melchor/d-couple
git init
git add .
git commit -m "Initial commit - Strategic Accountability Hub"
```

### Step 2: Push to GitHub

1. **Create a new repository** on GitHub (don't initialize with README)
2. **Push your code**:

```bash
git remote add origin https://github.com/YOUR_USERNAME/d-couple.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel

**Option A: Using Vercel CLI (Fastest)**

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production
vercel --prod
```

**Option B: Using Vercel Dashboard**

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. **Import** your GitHub repository
4. Vercel will auto-detect Next.js
5. Click **"Deploy"**

### Step 4: Add Environment Variables in Vercel

Go to your project → **Settings** → **Environment Variables** and add:

```env
NEXT_PUBLIC_SUPABASE_URL=https://rkcotbfnmzoichinvndv.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_wglmArol-5xq0GchkOigrg_y4AMOz43
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrY290YmZubXpvaWNoaW52bmR2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTE0NDIwMCwiZXhwIjoyMDg0NzIwMjAwfQ.56TBZI6HY8wnLyhYknafYM-mTYwH0XsaSNPndY_eCUc
NEXT_PUBLIC_SITE_URL=https://d-couple.com
NEXT_PUBLIC_APP_NAME=Strategic Accountability Hub
RESEND_API_KEY=re_X1QMhaGd_MBRGBcgYcoooRjc6wFbyVstZ
ADMIN_EMAIL=dcouple@proton.me
NEXT_PUBLIC_WEBAUTHN_RP_ID=d-couple.com
```

**Important:** Set these for **Production**, **Preview**, and **Development** environments.

---

## 🌐 Connect d-couple.com Domain (Namecheap)

### Step 1: Get Vercel DNS Records

After deploying, in Vercel:

1. Go to your project → **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter: `d-couple.com`
4. Vercel will show you DNS records to add

You'll see something like:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 2: Configure Namecheap DNS

1. **Login to Namecheap**
2. Go to **Domain List** → Click **"Manage"** next to `d-couple.com`
3. Go to **Advanced DNS** tab
4. **Delete existing A/CNAME records** (if any)
5. **Add new records** from Vercel:

**Add these records:**

| Type  | Host | Value                  | TTL       |
|-------|------|------------------------|-----------|
| A     | @    | 76.76.21.21            | Automatic |
| CNAME | www  | cname.vercel-dns.com   | Automatic |

**Note:** Vercel's IP might be different. Use the exact values Vercel provides.

### Step 3: Wait for DNS Propagation

- DNS changes can take **5 minutes to 48 hours**
- Usually propagates within **30 minutes**
- Check status: [dnschecker.org](https://dnschecker.org)

### Step 4: Verify in Vercel

1. Back in Vercel → **Domains**
2. Wait for the domain to show **"Valid Configuration"** ✓
3. Vercel will automatically provision SSL certificate

---

## 🔒 Update Supabase for Production

### Step 1: Add Production URL to Supabase

Go to **Supabase Dashboard** → **Authentication** → **URL Configuration**

**Add these URLs:**

- **Site URL**: `https://d-couple.com`
- **Redirect URLs**:
  - `https://d-couple.com/auth/callback`
  - `https://www.d-couple.com/auth/callback`
  - `https://d-couple.vercel.app/auth/callback` (Vercel domain)

### Step 2: Update CORS Settings

In **Supabase Dashboard** → **Settings** → **API**

Add to **CORS allowed origins**:
- `https://d-couple.com`
- `https://www.d-couple.com`

---

## 📧 Configure Resend for Production

### Step 1: Verify Domain in Resend

1. Go to [resend.com/domains](https://resend.com/domains)
2. Click **"Add Domain"**
3. Enter: `d-couple.com`
4. Resend will provide DNS records (TXT, MX, CNAME)

### Step 2: Add DNS Records to Namecheap

Add the Resend DNS records to Namecheap Advanced DNS:

Example records:
```
Type: TXT
Host: @
Value: v=spf1 include:amazonses.com ~all

Type: MX
Host: @
Value: feedback-smtp.us-east-1.amazonses.com
Priority: 10

Type: CNAME
Host: resend._domainkey
Value: resend._domainkey.u12345.wl123.sendgrid.net
```

**Use the exact values Resend provides.**

### Step 3: Update Email "From" Address

Update `/lib/email/notifications.ts`:

```typescript
from: 'Strategic Accountability Hub <noreply@d-couple.com>',
```

---

## ✅ Final Checklist

After deployment:

- [ ] Website loads at `https://d-couple.com`
- [ ] SSL certificate is active (🔒 in browser)
- [ ] Login/Signup works
- [ ] Admin dashboard accessible at `https://d-couple.com/admin`
- [ ] Contact form sends emails
- [ ] File uploads work
- [ ] Password reset works

---

## 🔧 Troubleshooting

### Domain not working?
- Check DNS propagation: [dnschecker.org](https://dnschecker.org)
- Verify A record points to Vercel IP
- Clear browser cache (Ctrl+Shift+R)

### Environment variables not working?
- Make sure they're set for **Production** environment
- Redeploy after adding variables
- Check Vercel deployment logs

### Auth not working?
- Verify Supabase redirect URLs include production domain
- Check `NEXT_PUBLIC_SITE_URL` is correct
- Test with browser DevTools Network tab

### Emails not sending?
- Verify Resend domain is verified
- Check DNS records are correct
- Test with Resend logs dashboard

---

## 📞 Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Namecheap Support**: [namecheap.com/support](https://www.namecheap.com/support/)
- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
- **Resend Docs**: [resend.com/docs](https://resend.com/docs)

---

**Deployment Date**: January 2026
**Domain**: d-couple.com
**Project**: Strategic Accountability Hub
