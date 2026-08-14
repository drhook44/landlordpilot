'use client';

import { DashboardShell } from '@/components/layout/DashboardShell';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { 
  Building2, Users, DollarSign, Wrench, 
  TrendingUp, TrendingDown, AlertTriangle, 
  ArrowUpRight, Plus, CalendarDays 
} from 'lucide-react';
import { formatCurrency, formatDateShort } from '@/lib/utils';

const stats = [
  { 
    label: 'Total Properties', value: '8', change: '+1', 
    trend: 'up', icon: Building2, color: 'bg-blue-50 text-blue-600' 
  },
  { 
    label: 'Active Tenants', value: '24', change: '+2', 
    trend: 'up', icon: Users, color: 'bg-emerald-50 text-emerald-600' 
  },
  { 
    label: 'Rent Collected', value: formatCurrency(24800), change: '+8.2%', 
    trend: 'up', icon: DollarSign, color: 'bg-brand-50 text-brand-600' 
  },
  { 
    label: 'Open Requests', value: '3', change: '-2', 
    trend: 'down', icon: Wrench, color: 'bg-amber-50 text-amber-600' 
  },
];

const recentPayments = [
  { tenant: 'Alice Martinez', property: '123 Oak St · Unit 4', amount: 1800, status: 'paid', date: '2025-01-01' },
  { tenant: 'Bob Chen', property: '45 Pine Ave · Unit 2', amount: 2200, status: 'paid', date: '2025-01-02' },
  { tenant: 'Carol Johnson', property: '78 Elm St · Unit 1', amount: 1500, status: 'late', date: '2025-01-01' },
  { tenant: 'David Kim', property: '123 Oak St · Unit 2', amount: 1950, status: 'pending', date: '2025-01-03' },
];

const alerts = [
  { type: 'warning', message: '78 Elm St · Unit 1 rent is 7 days overdue', action: 'Send reminder' },
  { type: 'info', message: 'Water heater at 123 Oak St due for inspection', action: 'Schedule' },
  { type: 'warning', message: '45 Pine Ave lease expires in 30 days', action: 'Review renewal' },
];

export default function DashboardPage() {
  return (
    <DashboardShell>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-sm text-zinc-500 mt-1">Here&apos;s what&apos;s happening with your portfolio this week.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm">
            <CalendarDays className="w-4 h-4" />
            Jan 2025
          </Button>
          <Link href="/properties/new">
            <Button size="sm">
              <Plus className="w-4 h-4" />
              Add Property
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label} hover>
            <CardContent className="flex items-start justify-between">
              <div>
                <p className="text-sm text-zinc-500">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                <div className="flex items-center gap-1 mt-1">
                  {stat.trend === 'up' ? (
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <TrendingDown className="w-3.5 h-3.5 text-red-500" />
                  )}
                  <span className={`text-xs font-medium ${stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
                    {stat.change} this month
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-xl ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* AI Insights */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold">AI Portfolio Insights</h2>
              <p className="text-xs text-zinc-500 mt-0.5">Updated 2 hours ago</p>
            </div>
            <Badge variant="brand">AI Powered</Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-50 border border-brand-100">
                <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center text-lg flex-shrink-0">
                  📈
                </div>
                <div>
                  <p className="font-medium text-sm text-brand-900">Market rent optimization opportunity</p>
                  <p className="text-sm text-brand-700 mt-1">Your 3 properties on Elm St are priced 12% below market average. A rent adjustment could increase monthly revenue by $540.</p>
                  <button className="text-sm font-medium text-brand-600 hover:text-brand-700 mt-2 inline-flex items-center gap-1">
                    View analysis <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-amber-50 border border-amber-100">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-lg flex-shrink-0">
                  🔧
                </div>
                <div>
                  <p className="font-medium text-sm text-amber-900">Predictive maintenance alert</p>
                  <p className="text-sm text-amber-700 mt-1">The HVAC system at 123 Oak St shows irregular cycling patterns. Service recommended within 14 days to prevent failure.</p>
                  <button className="text-sm font-medium text-amber-600 hover:text-amber-700 mt-2 inline-flex items-center gap-1">
                    Schedule inspection <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-lg flex-shrink-0">
                  ✅
                </div>
                <div>
                  <p className="font-medium text-sm text-emerald-900">Rent collection on track</p>
                  <p className="text-sm text-emerald-700 mt-1">96% collection rate this month. 1 outstanding payment (David Kim — sent reminder yesterday).</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <h2 className="font-semibold">Action Required</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {alerts.map((alert, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${alert.type === 'warning' ? 'bg-amber-500' : 'bg-blue-500'}`} />
                <div className="flex-1">
                  <p className="text-sm text-zinc-700">{alert.message}</p>
                  <button className="text-xs font-medium text-brand-600 hover:text-brand-700 mt-1">
                    {alert.action} →
                  </button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Payments & Occupancy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <h2 className="font-semibold">Recent Payments</h2>
            <Button variant="ghost" size="sm">View all</Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-zinc-100">
              {recentPayments.map((payment, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-3.5">
                  <div>
                    <p className="text-sm font-medium text-zinc-900">{payment.tenant}</p>
                    <p className="text-xs text-zinc-500">{payment.property}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{formatCurrency(payment.amount)}</p>
                    <Badge variant={payment.status === 'paid' ? 'green' : payment.status === 'late' ? 'red' : 'amber'}>
                      {payment.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <h2 className="font-semibold">Property Occupancy</h2>
            <Badge variant="green">96% overall</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: '123 Oak St', units: 4, leased: 4 },
              { name: '45 Pine Ave', units: 3, leased: 3 },
              { name: '78 Elm St', units: 2, leased: 1 },
              { name: '90 Maple Dr', units: 6, leased: 6 },
              { name: '12 Birch Ln', units: 5, leased: 5 },
              { name: '7 Cedar Ct', units: 4, leased: 4 },
            ].map((prop) => (
              <div key={prop.name} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-900">{prop.name}</p>
                  <p className="text-xs text-zinc-500">{prop.leased}/{prop.units} units leased</p>
                </div>
                <div className="w-24 h-2 bg-zinc-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 rounded-full transition-all" 
                    style={{ width: `${(prop.leased / prop.units) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}