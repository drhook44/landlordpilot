'use client';

import { DashboardShell } from '@/components/layout/DashboardShell';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { DollarSign, TrendingUp, Clock, AlertTriangle, Download, ArrowUpRight } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

const rentStats = [
  { label: 'Expected This Month', value: formatCurrency(24800), change: '+8.2%', trend: 'up' },
  { label: 'Collected', value: formatCurrency(23200), change: '93.5%', trend: 'up' },
  { label: 'Outstanding', value: formatCurrency(1600), change: '', trend: 'neutral' },
  { label: 'Late Fees Issued', value: formatCurrency(150), change: '+$50', trend: 'up' },
];

const payments = [
  { tenant: 'Alice Martinez', property: '123 Oak St · Unit 4', amount: 1800, due: 'Jan 1', paid: 'Jan 1', status: 'paid', method: 'Auto-charge' },
  { tenant: 'Bob Chen', property: '45 Pine Ave · Unit 2', amount: 2200, due: 'Jan 1', paid: 'Jan 2', status: 'paid', method: 'Bank transfer' },
  { tenant: 'Carol Johnson', property: '78 Elm St · Unit 1', amount: 1500, due: 'Jan 1', paid: '-', status: 'late', method: '-' },
  { tenant: 'David Kim', property: '123 Oak St · Unit 2', amount: 1950, due: 'Jan 1', paid: '-', status: 'pending', method: '-' },
  { tenant: 'Emily Davis', property: '90 Maple Dr · Unit 1', amount: 1600, due: 'Jan 1', paid: 'Jan 1', status: 'paid', method: 'Auto-charge' },
];

export default function RentPage() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Rent Collection</h1>
          <p className="text-sm text-zinc-500 mt-1">Track payments, manage late fees, and export reports.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm">
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Button size="sm">
            <DollarSign className="w-4 h-4" />
            Send Reminders
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {rentStats.map((stat) => (
          <Card key={stat.label} hover>
            <CardContent>
              <p className="text-sm text-zinc-500">{stat.label}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
              {stat.change && (
                <div className="flex items-center gap-1 mt-1">
                  {stat.trend === 'up' ? (
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                  )}
                  <span className={`text-xs font-medium ${stat.trend === 'up' ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {stat.change}
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Payments Table */}
      <Card>
        <CardHeader className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold">January Payments</h2>
            <p className="text-xs text-zinc-500 mt-0.5">Due on the 1st of each month</p>
          </div>
          <Badge variant="amber">3 pending / 1 late</Badge>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-100 bg-zinc-50">
                <th className="text-left font-medium text-zinc-500 px-6 py-3.5">Tenant</th>
                <th className="text-left font-medium text-zinc-500 px-6 py-3.5">Property</th>
                <th className="text-left font-medium text-zinc-500 px-6 py-3.5">Amount</th>
                <th className="text-left font-medium text-zinc-500 px-6 py-3.5">Due</th>
                <th className="text-left font-medium text-zinc-500 px-6 py-3.5">Paid</th>
                <th className="text-left font-medium text-zinc-500 px-6 py-3.5">Status</th>
                <th className="text-left font-medium text-zinc-500 px-6 py-3.5">Method</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {payments.map((pmt, i) => (
                <tr key={i} className="hover:bg-zinc-50 transition">
                  <td className="px-6 py-4 font-medium text-zinc-900">{pmt.tenant}</td>
                  <td className="px-6 py-4 text-zinc-600">{pmt.property}</td>
                  <td className="px-6 py-4 font-medium">{formatCurrency(pmt.amount)}</td>
                  <td className="px-6 py-4 text-zinc-600">{pmt.due}</td>
                  <td className="px-6 py-4 text-zinc-600">{pmt.paid}</td>
                  <td className="px-6 py-4">
                    <Badge variant={pmt.status === 'paid' ? 'green' : pmt.status === 'late' ? 'red' : 'amber'}>
                      {pmt.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-zinc-600">{pmt.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* AI Rent Optimization */}
      <Card className="mt-6">
        <CardContent className="flex items-start justify-between p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-xl flex-shrink-0">
              🤖
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900">AI Rent Optimization Available</h3>
              <p className="text-sm text-zinc-600 mt-1 max-w-lg">
                Based on local market data, 3 of your properties are priced below market rate. Optimizing could increase monthly revenue by $540.
              </p>
              <button className="text-sm font-medium text-brand-600 hover:text-brand-700 mt-2 inline-flex items-center gap-1">
                View recommendations <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardShell>
  );
}