# Zubair Khan — Digital Marketing Consultant Website

**mzubairkhan.com** — A complete personal brand website for Zubair Khan, digital marketing consultant based in Girne (Kyrenia), North Cyprus.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Email:** Nodemailer
- **SEO:** Next.js Metadata API + JSON-LD schemas

---

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.local` and fill in your values:

```bash
cp .env.local .env.local
```

Required variables:

```env
# SMTP Configuration (Gmail recommended)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-gmail-app-password

# Email Destination (lead notifications sent here)
CONTACT_EMAIL=khanmuhammadzubair79@gmail.com

# Site URL
NEXT_PUBLIC_SITE_URL=https://mzubairkhan.com
```

> **Gmail App Password:** Go to Google Account → Security → 2-Step Verification → App Passwords. Generate a password for "Mail".

### 3. Add Your Photo

Place `zubair.jpg` in the `/public` folder. The photo should be:
- Portrait orientation (recommended: 800×1000px or similar)
- High quality, cutout style on purple gradient background
- File name: exactly `zubair.jpg`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Build for Production

```bash
npm run build
npm start
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page (14 sections) |
| `/about` | About Zubair Khan |
| `/services` | All services overview |
| `/services/local-seo` | Local SEO service page |
| `/services/web-design` | Web Design service page |
| `/services/google-ads` | Google Ads service page |
| `/services/meta-ads` | Meta Ads service page |
| `/services/seo-audit` | SEO Audit service page |
| `/services/google-business-profile` | GBP service page |
| `/portfolio` | Portfolio / case studies |
| `/blog` | Blog listing page |
| `/blog/local-seo-for-restaurants-in-north-cyprus` | Blog post |
| `/contact` | Contact form |
| `/locations/girne` | Girne location page |
| `/locations/lefkosa` | Lefkoşa location page |
| `/locations/gazimagusa` | Gazimağusa location page |
| `/locations/iskele` | İskele location page |
| `/locations/lapta` | Lapta location page |
| `/locations/guzelyurt` | Güzelyurt location page |

---

## Lead Management

All contact form submissions are:
1. **Emailed** to `khanmuhammadzubair79@gmail.com` (via Nodemailer)
2. **Backed up** to `leads.json` in the project root

The `leads.json` file accumulates all leads. To reset, empty the array: `[]`

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Add all environment variables in Vercel Dashboard → Settings → Environment Variables
4. Deploy

### Environment Variables on Vercel

Add these in Vercel Dashboard:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_EMAIL`
- `NEXT_PUBLIC_SITE_URL`

---

## SEO Configuration

- All pages have unique `title` and `description` metadata
- Open Graph tags on all pages
- Twitter Card tags on all pages
- Canonical URLs on all pages
- JSON-LD schemas:
  - `Person` schema on homepage
  - `ProfessionalService` schema on homepage
  - `LocalBusiness` schema on all location pages
  - `BlogPosting` schema on blog post
- Auto-generated sitemap at `/sitemap.xml`
- `robots.txt` at `/robots.txt`

---

## WhatsApp Integration

The site uses WhatsApp number: **+90 539 111 35 77** (`905391113577`)

- Floating WhatsApp button (bottom right, always visible)
- Contact form success → WhatsApp CTA with pre-filled lead details
- Navbar mobile drawer → WhatsApp CTA button

---

## Customisation

### Update Contact Info
Edit `lib/seo.ts` → `siteConfig` object

### Update Pricing
Edit `components/PricingSection.tsx`

### Add Blog Posts
Create new directories under `app/blog/[slug]/page.tsx`

### Add Location Pages
Create new directories under `app/locations/[city]/page.tsx` using the `LocationPage` component

### Update Colors
Edit `tailwind.config.ts` → `theme.extend.colors`

---

## Contact

**Zubair Khan** — Digital Marketing Consultant  
📍 Girne (Kyrenia), North Cyprus  
📧 info@mzubairkhan.com  
📱 +90 539 111 35 77  
🌐 mzubairkhan.com
