# 🚀 Deploy via Vercel Dashboard (Easiest Method)

## Step 1: Push to GitHub

```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/d-couple.git
git push -u origin main
```

## Step 2: Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select your **d-couple** repository
4. Click **"Import"**

## Step 3: Add Environment Variables

Before clicking "Deploy", add these environment variables:

**Click "Environment Variables" and add each one:**

```
NEXT_PUBLIC_SUPABASE_URL
https://rkcotbfnmzoichinvndv.supabase.co

NEXT_PUBLIC_SUPABASE_ANON_KEY
sb_publishable_wglmArol-5xq0GchkOigrg_y4AMOz43

SUPABASE_SERVICE_ROLE_KEY
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrY290YmZubXpvaWNoaW52bmR2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTE0NDIwMCwiZXhwIjoyMDg0NzIwMjAwfQ.56TBZI6HY8wnLyhYknafYM-mTYwH0XsaSNPndY_eCUc

NEXT_PUBLIC_SITE_URL
https://d-couple.com

NEXT_PUBLIC_APP_NAME
Strategic Accountability Hub

RESEND_API_KEY
re_X1QMhaGd_MBRGBcgYcoooRjc6wFbyVstZ

ADMIN_EMAIL
dcouple@proton.me

NEXT_PUBLIC_WEBAUTHN_RP_ID
d-couple.com
```

**Make sure to select all environments:** Production, Preview, Development

## Step 4: Deploy

Click **"Deploy"**

Vercel will build and deploy your app!

## Step 5: Add Domain

After deployment:

1. Go to your project → **Settings** → **Domains**
2. Add `d-couple.com`
3. Copy the DNS records Vercel provides
4. Add them to Namecheap (Advanced DNS)

---

## OR: Fix CLI Permission Issue

Add `melchor@inmobimobi.com` to your Vercel team:

1. Go to [vercel.com/teams/kaufasts-projects/settings/members](https://vercel.com/teams/settings/members)
2. Click **"Invite"**
3. Enter: `melchor@inmobimobi.com`
4. Set role: **Member** or **Owner**

Then you can use CLI:
```bash
vercel --prod
```

---

**Recommended:** Use the dashboard method - it's faster and easier!
