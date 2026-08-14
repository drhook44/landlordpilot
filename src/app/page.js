'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LandingPage() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="antialiased bg-stone-50 text-zinc-900 font-sans">

      {/* NOTICE BANNER */}
      <div className="bg-brand-600 text-white text-center text-sm py-2.5 px-4">
        🚀 <strong>LandlordPilot AI</strong> is live!{' '}
        <Link href="/signup" className="underline font-semibold hover:text-brand-100">Sign up free</Link>
        {' — '}no card needed
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-stone-50/80 backdrop-blur-lg border-b border-zinc-200/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🏠</span>
            <span className="font-semibold text-lg tracking-tight">Landlord<span className="text-brand-600">Pilot</span> AI</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            <a href="#features" className="hover:text-zinc-900 transition">Features</a>
            <a href="#how-it-works" className="hover:text-zinc-900 transition">How It Works</a>
            <a href="#testimonials" className="hover:text-zinc-900 transition">Testimonials</a>
            <a href="#pricing" className="hover:text-zinc-900 transition">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition hidden sm:inline">Sign In</Link>
            <Link href="/signup" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-brand-700">Start Free →</Link>
            <button className="md:hidden p-2" onClick={() => setMobileMenu(!mobileMenu)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenu ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {mobileMenu && (
          <div className="md:hidden border-t border-zinc-100 bg-white px-6 py-4 space-y-3">
            <a href="#features" className="block text-sm text-zinc-600 hover:text-zinc-900" onClick={() => setMobileMenu(false)}>Features</a>
            <a href="#how-it-works" className="block text-sm text-zinc-600 hover:text-zinc-900" onClick={() => setMobileMenu(false)}>How It Works</a>
            <a href="#testimonials" className="block text-sm text-zinc-600 hover:text-zinc-900" onClick={() => setMobileMenu(false)}>Testimonials</a>
            <a href="#pricing" className="block text-sm text-zinc-600 hover:text-zinc-900" onClick={() => setMobileMenu(false)}>Pricing</a>
            <Link href="/login" className="block text-sm text-zinc-600 hover:text-zinc-900">Sign In</Link>
            <Link href="/signup" className="block text-sm font-medium text-brand-600 hover:text-brand-700">Start Free →</Link>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-32 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-radial from-brand-500/10 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-radial from-brand-500/10 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-200 px-4 py-1.5 text-sm font-medium text-brand-700 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              Now in public beta — 2,400+ landlords onboarded
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05] text-zinc-900 mb-6">
              Your AI co-pilot for<br />
              <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">rental property management</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto mb-10">
              LandlordPilot AI automates tenant screening, rent collection, maintenance tracking, and financial reporting — so you can manage every property from one dashboard without the headache.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700 hover:shadow-xl">
                Start your free trial →
              </Link>
              <Link href="/signup" className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-8 py-4 text-base font-medium text-zinc-900 transition hover:bg-zinc-50 shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.5 3.5A1.5 1.5 0 008 5h4a1.5 1.5 0 001.5-1.5V3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v.5A2.5 2.5 0 0113 5.5V7h1.5A2.5 2.5 0 0117 9.5v5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-5A2.5 2.5 0 015.5 7H7V5.5A2.5 2.5 0 019.5 3H10a.5.5 0 01.5.5v.5a.5.5 0 01-.5.5H9a1.5 1.5 0 00-1.5 1.5V7h5V5.5A1.5 1.5 0 0011 4h-.5a.5.5 0 010-1H11a2.5 2.5 0 012.5 2.5V7h1.5A1.5 1.5 0 0116.5 8.5v5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 014.5 13.5v-5A1.5 1.5 0 016 7h1V5.5A1.5 1.5 0 017.5 4H8a.5.5 0 01.5.5V5a.5.5 0 01-.5.5H7a.5.5 0 00-.5.5v1z"/></svg>
                Watch 2-min demo
              </Link>
            </div>
            <p className="mt-6 text-sm text-zinc-500">No credit card required · Cancel anytime · 14-day free trial</p>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-12 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm font-medium text-zinc-500 mb-8">Trusted by landlords managing over 12,000+ rental units</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-50">
            <span className="text-xl font-semibold text-zinc-400">RentalPro</span>
            <span className="text-xl font-semibold text-zinc-400">PropMgmt Co.</span>
            <span className="text-xl font-semibold text-zinc-400">KeyHolders</span>
            <span className="text-xl font-semibold text-zinc-400">UnitFlow</span>
            <span className="text-xl font-semibold text-zinc-400">LeaseWorks</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 mb-4">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-4">Everything you need to run your rentals</h2>
            <p className="text-lg text-zinc-600 leading-relaxed">From tenant screening to tax-ready reports, LandlordPilot AI handles the busy work so you can focus on growing your portfolio.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔍', title: 'AI Tenant Screening', desc: 'Upload applications and get instant credit, background, and eviction checks with AI-powered risk scoring.' },
              { icon: '💰', title: 'Rent Tracking & Auto-Charge', desc: 'Automated monthly billing with late-fee enforcement, payment reminders, and real-time balance tracking.' },
              { icon: '🔧', title: 'Predictive Maintenance', desc: 'AI flags at-risk appliances and schedules preventive repairs before problems cost you thousands.' },
              { icon: '📊', title: 'Tax-Ready Reports', desc: 'Auto-categorized income and expenses, depreciation schedules, and year-end exports for your CPA.' },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-2xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 mb-4">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-4">From signup to first rent check in 5 minutes</h2>
            <p className="text-lg text-zinc-600 leading-relaxed max-w-xl mx-auto">We designed the onboarding to get you to value fast — no training, no setup calls required.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { num: '1', title: 'Connect your properties', desc: 'Add your properties one by one or bulk import. Set rent amounts, deposit rules, and lease terms.' },
              { num: '2', title: 'Invite & screen tenants', desc: 'Share a custom application link. AI screens applicants and ranks them by risk score in under 60 seconds.' },
              { num: '3', title: 'Sit back & collect rent', desc: 'Auto-billing, late fee enforcement, maintenance requests, and monthly reports — all on autopilot.' },
            ].map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-brand-600/20">{s.num}</div>
                <h3 className="font-semibold text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI SPOTLIGHT */}
      <section className="py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 mb-4">AI That Actually Helps</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-6">Your properties talk. LandlordPilot listens.</h2>
              <p className="text-base text-zinc-600 leading-relaxed mb-8">Our AI ingests lease documents, repair history, market data, and tenant communications to give you smart recommendations — not more noise.</p>
              <div className="space-y-5">
                {[
                  { title: 'Predict vacancy risk 30 days early', desc: 'Flags tenants showing move-out signals so you can plan turnarounds.' },
                  { title: 'Optimize rent with market comps', desc: 'Real-time local market analysis suggests the right price for every renewal.' },
                  { title: 'Draft lease renewals in one click', desc: 'Generates custom renewal terms based on payment history and market rates.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900">{item.title}</p>
                      <p className="text-sm text-zinc-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-zinc-200 bg-gradient-to-br from-zinc-800 to-zinc-900 p-1">
              <div className="rounded-xl bg-zinc-900 p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-xs text-zinc-500 ml-2">pilot.landlordpilot.ai — Portfolio Dashboard</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">Portfolio Performance</span>
                    <span className="text-emerald-400 font-medium">+8.2% vs last month</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-brand-500 to-emerald-500 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="bg-zinc-800 rounded-lg p-4"><p className="text-xs text-zinc-500">Occupancy</p><p className="text-2xl font-bold text-white">96%</p></div>
                    <div className="bg-zinc-800 rounded-lg p-4"><p className="text-xs text-zinc-500">Collected</p><p className="text-2xl font-bold text-white">$24.8K</p></div>
                    <div className="bg-zinc-800 rounded-lg p-4"><p className="text-xs text-zinc-500">Alerts</p><p className="text-2xl font-bold text-amber-400">3</p></div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between bg-zinc-800/50 rounded-lg px-4 py-2.5"><span className="text-sm text-zinc-300">🏠 123 Oak St · Unit 4</span><span className="text-xs text-amber-400 font-medium">⚠️ Maintenance due</span></div>
                    <div className="flex items-center justify-between bg-zinc-800/50 rounded-lg px-4 py-2.5"><span className="text-sm text-zinc-300">🏠 45 Pine Ave · Unit 2</span><span className="text-xs text-emerald-400 font-medium">✓ Rent received</span></div>
                    <div className="flex items-center justify-between bg-zinc-800/50 rounded-lg px-4 py-2.5"><span className="text-sm text-zinc-300">🏠 78 Elm St · Unit 1</span><span className="text-xs text-red-400 font-medium">⚠️ Late (7 days)</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 mb-4">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-4">Landlords love working less</h2>
            <p className="text-lg text-zinc-600 leading-relaxed max-w-xl mx-auto">Hear from independent landlords who cut their management time in half.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Mira Chen', role: 'Property Owner · 12 units · Since 2024', initials: 'MC', text: '"I manage 12 units across 4 buildings. LandlordPilot cut my weekly admin from 15 hours to under 3. The AI maintenance predictions saved me $4,200 on a water heater replacement last quarter."' },
              { name: 'David Torres', role: 'Independent Landlord · 6 units · Since 2024', initials: 'DT', text: '"The AI tenant screening is a game-changer. I used to spend hours checking references. Now I get a risk score in 30 seconds and haven\'t had a missed payment in 8 months."' },
              { name: 'Sarah Kim', role: 'Real Estate Investor · 8 units · Since 2024', initials: 'SK', text: '"The tax reports alone are worth the subscription. My CPA used to charge me $800 extra to organize property finances. Now I export a single PDF. LandlordPilot paid for itself in month one."' },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-zinc-200 bg-stone-50 p-8 shadow-sm">
                <div className="flex items-center gap-1 mb-4 text-amber-400">★★★★★</div>
                <p className="text-zinc-700 leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-semibold text-sm">{t.initials}</div>
                  <div>
                    <p className="font-medium text-sm text-zinc-900">{t.name}</p>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 mb-4">Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-4">Simple pricing, no surprises</h2>
            <p className="text-lg text-zinc-600 leading-relaxed">All plans include a 14-day free trial. No credit card needed.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Starter', desc: 'For landlords with 1-4 units', price: '$29', features: ['Up to 4 properties', 'AI tenant screening', 'Rent tracking & reminders', 'Maintenance requests', 'Basic financial reports'] },
              { name: 'Professional', desc: 'For landlords with 5-15 units', price: '$79', popular: true, features: ['Up to 15 properties', 'Everything in Starter', 'Predictive maintenance AI', 'Auto-charge & late fees', 'Tax-ready export', 'Market rent analysis'] },
              { name: 'Portfolio', desc: 'For 15+ units and teams', price: '$149', features: ['Unlimited properties', 'Everything in Professional', 'Team access', 'AI lease renewal drafting', 'Priority support', 'API access'] },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl border ${plan.popular ? 'border-2 border-brand-500 shadow-lg shadow-brand-500/10' : 'border-zinc-200'} bg-white p-8 shadow-sm hover:shadow-lg transition relative`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-semibold px-4 py-1 rounded-full">Most Popular</div>}
                <h3 className="font-semibold text-xl mb-1">{plan.name}</h3>
                <p className="text-sm text-zinc-500 mb-6">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-zinc-500 text-sm">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-zinc-700">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/signup" className={`inline-flex items-center justify-center gap-2 w-full rounded-lg px-5 py-3 text-sm font-medium transition ${plan.popular ? 'bg-brand-600 text-white shadow-sm hover:bg-brand-700' : 'border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50'}`}>
                  Start free trial →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-zinc-900 to-zinc-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">Stop managing properties in spreadsheets</h2>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto mb-10">Join 2,400+ landlords who've cut their management time in half. Start your 14-day free trial — no credit card, no commitment.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700 hover:shadow-xl">Start your free trial →</Link>
            <Link href="/login" className="inline-flex items-center gap-2 rounded-lg border border-zinc-600 bg-zinc-800 px-8 py-4 text-base font-medium text-zinc-200 transition hover:bg-zinc-700">Sign In</Link>
          </div>
          <p className="mt-6 text-sm text-zinc-500">Free 14-day trial · Cancel anytime · No card required</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🏠</span>
                <span className="font-semibold text-white">Landlord<span className="text-brand-500">Pilot</span> AI</span>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">AI-powered property management for independent landlords.</p>
            </div>
            <div>
              <h4 className="font-medium text-zinc-200 text-sm mb-4">Product</h4>
              <ul className="space-y-2.5">
                <li><a href="#features" className="text-sm text-zinc-500 hover:text-zinc-300 transition">Features</a></li>
                <li><a href="#pricing" className="text-sm text-zinc-500 hover:text-zinc-300 transition">Pricing</a></li>
                <li><Link href="/dashboard" className="text-sm text-zinc-500 hover:text-zinc-300 transition">Dashboard →</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-zinc-200 text-sm mb-4">Get Started</h4>
              <ul className="space-y-2.5">
                <li><Link href="/login" className="text-sm text-zinc-500 hover:text-zinc-300 transition">Sign In</Link></li>
                <li><Link href="/signup" className="text-sm text-zinc-500 hover:text-zinc-300 transition">Sign Up</Link></li>
                <li><Link href="/onboarding" className="text-sm text-zinc-500 hover:text-zinc-300 transition">Onboarding</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-zinc-200 text-sm mb-4">Company</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-sm text-zinc-500 hover:text-zinc-300 transition">About</a></li>
                <li><a href="#" className="text-sm text-zinc-500 hover:text-zinc-300 transition">Privacy</a></li>
                <li><a href="#" className="text-sm text-zinc-500 hover:text-zinc-300 transition">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-600">© 2025 LandlordPilot AI. All rights reserved.</p>
            <p className="text-xs text-zinc-600">🏡 <a href="http://localhost:3000" className="text-brand-400 hover:text-brand-300 underline">localhost:3000</a></p>
          </div>
        </div>
      </footer>

      <style>{`
        .bg-gradient-radial { background: radial-gradient(circle, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 70%); }
        .reveal { opacity: 0; transform: translateY(20px); transition: opacity .6s ease-out, transform .6s ease-out; }
        .reveal.in-view { opacity: 1; transform: none; }
      `}</style>
      <script dangerouslySetInnerHTML={{
        __html: `
          try {
            document.querySelectorAll('section, footer').forEach(el => el.classList.add('reveal'));
            const io = new IntersectionObserver(entries => {
              entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
            document.querySelectorAll('.reveal').forEach(el => io.observe(el));
          } catch(e) {}
        `
      }} />
    </div>
  );
}