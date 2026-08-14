# LandlordPilot AI 🏠

**AI-powered property management for independent landlords.**

LandlordPilot AI automates tenant screening, rent collection, maintenance tracking, and financial reporting — so you can manage every property from one dashboard without the headache.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Copy env vars
cp .env.local.example .env.local

# Start dev server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app.

---

## 📁 Project Structure

```
landlordpilot/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.js           # Root layout (Inter font, globals)
│   │   ├── page.js             # Dashboard home
│   │   ├── login/              # Sign in page
│   │   ├── signup/             # Sign up page
│   │   ├── properties/         # Property management CRUD
│   │   ├── tenants/            # Tenant management
│   │   ├── rent/               # Rent collection dashboard
│   │   ├── maintenance/        # Maintenance requests
│   │   ├── reports/            # Financial reports & exports
│   │   ├── onboarding/         # Multi-step onboarding wizard
│   │   └── settings/           # Account settings
│   ├── components/
│   │   ├── ui/                 # Reusable primitives (Button, Card, Input, etc.)
│   │   ├── layout/             # Sidebar, Navbar, DashboardShell
│   │   └── ...                 # Feature-specific components
│   ├── lib/
│   │   ├── supabase.js         # Supabase client + DB schema
│   │   ├── ai.js               # OpenAI helpers (screening, insights, predictions)
│   │   ├── stripe.js           # Stripe billing helpers
│   │   └── utils.js            # Shared utilities
│   ├── hooks/                  # Custom React hooks
│   └── styles/
│       └── globals.css         # Tailwind + component classes
├── public/                     # Static assets
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## ✨ Key Features

### 🤖 AI-Powered
- **Tenant Screening** — AI risk scoring from applications
- **Predictive Maintenance** — Flags at-risk appliances before they fail
- **Rent Optimization** — Market comps suggest optimal prices
- **Smart Insights** — Portfolio health dashboard with recommendations

### 🏠 Property Management
- Add & manage properties with unit tracking
- Occupancy monitoring with visual indicators
- Document storage for leases and inspections

### 👥 Tenant Management
- Tenant profiles with lease terms
- AI screening and risk assessment
- Lease renewal and move-out tracking

### 💰 Rent Collection
- Automated monthly billing via Stripe
- Late fee enforcement
- Payment status tracking (paid/pending/late)
- Export-ready reports

### 🔧 Maintenance
- Tenant-submitted request tracking
- AI-prioritized urgency assessment
- Status workflow (open → in progress → completed)

### 📊 Financial Reports
- Tax-ready Schedule E export
- Monthly P&L statements
- Rent roll summaries
- CSV and PDF exports

---

## 🧭 Onboarding Flow

New users are guided through a 4-step wizard:

1. **Add Properties** — Enter property details
2. **Add Tenants** — Invite or manually add tenants
3. **Set Up Billing** — Connect Stripe for auto-collection
4. **Launch** — Dashboard ready with AI insights

**Aha moment:** First rent auto-collected via Stripe within 24 hours of setup.

---

## 🔧 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14 (App Router) |
| **Styling** | Tailwind CSS |
| **Auth** | Supabase Auth (email + Google) |
| **Database** | Supabase (PostgreSQL) |
| **Payments** | Stripe |
| **AI** | OpenAI (GPT-4o-mini) |
| **Charts** | Recharts |
| **Icons** | Lucide React |

---

## 🔐 Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_pk_key
STRIPE_SECRET_KEY=your_stripe_sk_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 📈 Key Metrics (Onboarding KPIs)

- **Activation:** Rent auto-collected within 24 hours of signup
- **Drop-off points:** Profile Setup → First Action (-24pp average)
- **Target:** 45% activation rate within 4 weeks
- **North Star:** Properties under active management

---

## 📄 License

MIT — built for landlords, by landlords.