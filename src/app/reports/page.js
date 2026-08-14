'use client';

import { DashboardShell } from '@/components/layout/DashboardShell';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FileText, Download, TrendingDown, TrendingUp, ArrowRight } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export default function ReportsPage() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Financial Reports</h1>
          <p className="text-sm text-zinc-500 mt-1">Tax-ready income and expense reports for your portfolio.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm">
            <Download className="w-4 h-4" />
            Export CSV
          </Button>
          <Button size="sm">
            <Download className="w-4 h-4" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <Card hover>
          <CardContent>
            <p className="text-sm text-zinc-500 mb-1">Total Income (YTD)</p>
            <p className="text-3xl font-bold text-emerald-600">{formatCurrency(148800)}</p>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-xs text-emerald-600">+12% vs last year</span>
            </div>
          </CardContent>
        </Card>
        <Card hover>
          <CardContent>
            <p className="text-sm text-zinc-500 mb-1">Total Expenses (YTD)</p>
            <p className="text-3xl font-bold text-red-600">{formatCurrency(32450)}</p>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="w-3.5 h-3.5 text-red-500" />
              <span className="text-xs text-red-600">+5% vs last year</span>
            </div>
          </CardContent>
        </Card>
        <Card hover>
          <CardContent>
            <p className="text-sm text-zinc-500 mb-1">Net Income (YTD)</p>
            <p className="text-3xl font-bold text-zinc-900">{formatCurrency(116350)}</p>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-xs text-emerald-600">+14% margin</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Available Reports */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card hover>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center">
                <FileText className="w-6 h-6 text-brand-600" />
              </div>
              <Badge variant="green">Updated Jan 2025</Badge>
            </div>
            <h3 className="font-semibold text-lg mb-1">Year-End Tax Report</h3>
            <p className="text-sm text-zinc-600 mb-4">Complete Schedule E report with depreciation, all expenses categorized and totals by property.</p>
            <div className="flex items-center gap-2">
              <Button variant="secondary" size="sm">
                <Download className="w-4 h-4" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card hover>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center">
                <FileText className="w-6 h-6 text-brand-600" />
              </div>
              <Badge variant="blue">Monthly</Badge>
            </div>
            <h3 className="font-semibold text-lg mb-1">Monthly P&L Statement</h3>
            <p className="text-sm text-zinc-600 mb-4">Profit and loss breakdown by property with occupancy rates, rent collection %, and expense ratios.</p>
            <div className="flex items-center gap-2">
              <Button variant="secondary" size="sm">
                <Download className="w-4 h-4" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card hover>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center">
                <FileText className="w-6 h-6 text-brand-600" />
              </div>
              <Badge variant="green">Quarterly</Badge>
            </div>
            <h3 className="font-semibold text-lg mb-1">Rent Roll Summary</h3>
            <p className="text-sm text-zinc-600 mb-4">Complete rent roll with lease dates, payment history, deposits, and rent trends per unit.</p>
            <div className="flex items-center gap-2">
              <Button variant="secondary" size="sm">
                <Download className="w-4 h-4" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card hover>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center">
                <FileText className="w-6 h-6 text-brand-600" />
              </div>
              <Badge variant="amber">Coming Soon</Badge>
            </div>
            <h3 className="font-semibold text-lg mb-1">Maintenance Cost Report</h3>
            <p className="text-sm text-zinc-600 mb-4">Maintenance spending by property, category, and vendor. Compare costs across your portfolio.</p>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" disabled>
                Notify me <ArrowRight className="w-3 h-3" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}