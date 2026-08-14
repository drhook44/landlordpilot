'use client';

import { DashboardShell } from '@/components/layout/DashboardShell';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Search, Plus, Mail, Phone } from 'lucide-react';

const tenants = [
  { id: 1, name: 'Alice Martinez', property: '123 Oak St · Unit 4', rent: 1800, leaseEnd: '2025-06-30', status: 'active', email: 'alice@email.com', phone: '(503) 555-0104' },
  { id: 2, name: 'Bob Chen', property: '45 Pine Ave · Unit 2', rent: 2200, leaseEnd: '2025-08-15', status: 'active', email: 'bob@email.com', phone: '(503) 555-0105' },
  { id: 3, name: 'Carol Johnson', property: '78 Elm St · Unit 1', rent: 1500, leaseEnd: '2025-02-28', status: 'active', email: 'carol@email.com', phone: '(503) 555-0106' },
  { id: 4, name: 'David Kim', property: '123 Oak St · Unit 2', rent: 1950, leaseEnd: '2025-04-30', status: 'late', email: 'david@email.com', phone: '(503) 555-0107' },
  { id: 5, name: 'Emily Davis', property: '90 Maple Dr · Unit 1', rent: 1600, leaseEnd: '2025-05-31', status: 'active', email: 'emily@email.com', phone: '(503) 555-0108' },
];

export default function TenantsPage() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Tenants</h1>
          <p className="text-sm text-zinc-500 mt-1">Manage tenants and lease agreements.</p>
        </div>
        <Button>
          <Plus className="w-4 h-4" />
          Add Tenant
        </Button>
      </div>

      <div className="relative max-w-md mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
        <input type="text" placeholder="Search tenants..." className="input-field pl-10" />
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-100">
                <th className="text-left font-medium text-zinc-500 px-6 py-3.5">Name</th>
                <th className="text-left font-medium text-zinc-500 px-6 py-3.5">Property</th>
                <th className="text-left font-medium text-zinc-500 px-6 py-3.5">Rent</th>
                <th className="text-left font-medium text-zinc-500 px-6 py-3.5">Lease Ends</th>
                <th className="text-left font-medium text-zinc-500 px-6 py-3.5">Status</th>
                <th className="text-right font-medium text-zinc-500 px-6 py-3.5">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {tenants.map((tenant) => (
                <tr key={tenant.id} className="hover:bg-zinc-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 text-xs font-semibold">
                        {tenant.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium text-zinc-900">{tenant.name}</p>
                        <div className="flex items-center gap-2 text-xs text-zinc-500">
                          <Mail className="w-3 h-3" /> {tenant.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-zinc-700">{tenant.property}</td>
                  <td className="px-6 py-4 font-medium">${tenant.rent.toLocaleString()}</td>
                  <td className="px-6 py-4 text-zinc-600">{tenant.leaseEnd}</td>
                  <td className="px-6 py-4">
                    <Badge variant={tenant.status === 'active' ? 'green' : 'red'}>
                      {tenant.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm">View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </DashboardShell>
  );
}