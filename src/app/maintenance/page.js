'use client';

import { DashboardShell } from '@/components/layout/DashboardShell';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Wrench, Plus, AlertTriangle, Clock, CheckCircle2 } from 'lucide-react';

const requests = [
  { id: 1, title: 'Leaking faucet', property: '123 Oak St · Unit 4', priority: 'medium', status: 'open', created: 'Jan 3', tenant: 'Alice Martinez' },
  { id: 2, title: 'HVAC not heating', property: '45 Pine Ave · Unit 2', priority: 'urgent', status: 'in_progress', created: 'Jan 2', tenant: 'Bob Chen' },
  { id: 3, title: 'Broken garbage disposal', property: '78 Elm St · Unit 1', priority: 'low', status: 'open', created: 'Jan 5', tenant: 'Carol Johnson' },
  { id: 4, title: 'Water heater pilot light out', property: '45 Pine Ave · Unit 3', priority: 'high', status: 'completed', created: 'Dec 28', tenant: 'Frank Wilson' },
];

export default function MaintenancePage() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Maintenance</h1>
          <p className="text-sm text-zinc-500 mt-1">Track and manage maintenance requests across your portfolio.</p>
        </div>
        <Button>
          <Plus className="w-4 h-4" />
          New Request
        </Button>
      </div>

      {/* AI Predictive Alert */}
      <Card className="mb-8 border-amber-200 bg-amber-50">
        <CardContent className="flex items-start gap-4 p-5">
          <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-amber-900">AI Predictive Maintenance Alert</h3>
            <p className="text-sm text-amber-700 mt-1">HVAC system at 123 Oak St shows irregular cycling patterns. Recommended inspection within 14 days to prevent costly failure.</p>
            <div className="flex items-center gap-3 mt-3">
              <Button variant="primary" size="sm" className="bg-amber-600 hover:bg-amber-700">Schedule Inspection</Button>
              <Button variant="ghost" size="sm">Dismiss</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
        <Card hover>
          <CardContent className="text-center py-5">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-2xl font-bold">1</p>
            <p className="text-xs text-zinc-500">Urgent</p>
          </CardContent>
        </Card>
        <Card hover>
          <CardContent className="text-center py-5">
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-2">
              <Clock className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-2xl font-bold">3</p>
            <p className="text-xs text-zinc-500">Open</p>
          </CardContent>
        </Card>
        <Card hover>
          <CardContent className="text-center py-5">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-2">
              <Wrench className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-2xl font-bold">1</p>
            <p className="text-xs text-zinc-500">In Progress</p>
          </CardContent>
        </Card>
        <Card hover>
          <CardContent className="text-center py-5">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            </div>
            <p className="text-2xl font-bold">12</p>
            <p className="text-xs text-zinc-500">Completed This Month</p>
          </CardContent>
        </Card>
      </div>

      {/* Requests List */}
      <Card>
        <CardHeader>
          <h2 className="font-semibold">All Requests</h2>
        </CardHeader>
        <div className="divide-y divide-zinc-100">
          {requests.map((req) => (
            <div key={req.id} className="flex items-center justify-between px-6 py-4 hover:bg-zinc-50 transition">
              <div className="flex items-start gap-4">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  req.priority === 'urgent' ? 'bg-red-500' :
                  req.priority === 'high' ? 'bg-amber-500' :
                  req.priority === 'medium' ? 'bg-blue-500' : 'bg-zinc-300'
                }`} />
                <div>
                  <p className="font-medium text-sm text-zinc-900">{req.title}</p>
                  <div className="flex items-center gap-3 text-xs text-zinc-500 mt-0.5">
                    <span>{req.property}</span>
                    <span>{req.tenant}</span>
                    <span>Created {req.created}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={
                  req.priority === 'urgent' ? 'red' :
                  req.priority === 'high' ? 'amber' :
                  req.priority === 'medium' ? 'blue' : 'default'
                }>
                  {req.priority}
                </Badge>
                <Badge variant={
                  req.status === 'completed' ? 'green' :
                  req.status === 'in_progress' ? 'blue' : 'default'
                }>
                  {req.status.replace('_', ' ')}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </DashboardShell>
  );
}