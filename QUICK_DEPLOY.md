# ⚡ Quick Deploy to Vercel - d-couple.com

## ✅ What's Done

- ✅ Homepage updated to index-4 design
- ✅ Git repository initialized
- ✅ All files committed
- ✅ Vercel CLI installed

---

## 🚀 Deploy NOW (3 Steps)

### Step 1: Login to Vercel

```bash
vercel login
```

This will open your browser. Choose your preferred login method (GitHub, GitLab, Email).

### Step 2: Deploy to Vercel

```bash
cd /Users/melchor/d-couple
vercel
```

When prompted:
- **Set up and deploy?** → `Y` (Yes)
- **Which scope?** → Select your account
- **Link to existing project?** → `N` (No)
- **Project name?** → `d-couple` (or press Enter)
- **Directory?** → Press Enter (use current)
- **Override settings?** → `N` (No)

Vercel will build and deploy! You'll get a preview URL like:
```
https://d-couple-xxx.vercel.app
```

### Step 3: Add Environment Variables

Go to your Vercel project dashboard and add these:

**Settings → Environment Variables → Add:**

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

**Set for all environments:** Production, Preview, Development

Then redeploy:
```bash
vercel --prod
```

---

## 🌐 Connect d-couple.com Domain

### In Vercel Dashboard:

1. Go to your project → **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter: `d-couple.com`
4. Add: `www.d-couple.com` (optional)

Vercel will show DNS records like:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### In Namecheap:

1. Login to Namecheap
2. Go to **Domain List** → **Manage** `d-couple.com`
3. **Advanced DNS** tab
4. **Delete** all existing A/CNAME records for @ and www
5. **Add** the records from Vercel:

| Type  | Host | Value                | TTL       |
|-------|------|----------------------|-----------|
| A     | @    | 76.76.21.21          | Automatic |
| CNAME | www  | cname.vercel-dns.com | Automatic |

6. **Save Changes**

**DNS propagation:** Usually 5-30 minutes

---

## 🔒 Update Supabase (Important!)

### Add Production URLs:

**Supabase Dashboard → Authentication → URL Configuration:**

**Site URL:**
```
https://d-couple.com
```

**Redirect URLs (add all):**
```
https://d-couple.com/auth/callback
https://www.d-couple.com/auth/callback
https://d-couple.vercel.app/auth/callback
```

**CORS Origins (Settings → API):**
```
https://d-couple.com
https://www.d-couple.com
```

---

## ✅ Verify Deployment

After DNS propagates, test:

- [ ] `https://d-couple.com` loads
- [ ] SSL certificate active (🔒 padlock)
- [ ] Login works
- [ ] Admin dashboard accessible
- [ ] Contact form works
- [ ] Email notifications send

---

## 🎯 One-Command Deploy (After Initial Setup)

```bash
# Make changes, commit, deploy
git add .
git commit -m "Update"
vercel --prod
```

---

**Need help?** Check `DEPLOYMENT_GUIDE.md` for detailed instructions!
