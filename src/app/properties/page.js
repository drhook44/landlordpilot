'use client';

import { DashboardShell } from '@/components/layout/DashboardShell';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Search, Plus, MapPin } from 'lucide-react';

const properties = [
  { id: 1, name: '123 Oak Street', type: 'Multi-Family', units: 4, leased: 4, rent: 7200, address: '123 Oak St, Portland, OR', status: 'active' },
  { id: 2, name: '45 Pine Avenue', type: 'Triplex', units: 3, leased: 3, rent: 5600, address: '45 Pine Ave, Portland, OR', status: 'active' },
  { id: 3, name: '78 Elm Street', type: 'Duplex', units: 2, leased: 1, rent: 1500, address: '78 Elm St, Portland, OR', status: 'active' },
  { id: 4, name: '90 Maple Drive', type: 'Apartment', units: 6, leased: 6, rent: 10800, address: '90 Maple Dr, Portland, OR', status: 'active' },
];

export default function PropertiesPage() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Properties</h1>
          <p className="text-sm text-zinc-500 mt-1">Manage your rental properties.</p>
        </div>
        <Button>
          <Plus className="w-4 h-4" />
          Add Property
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
        <input type="text" placeholder="Search properties..." className="input-field pl-10" />
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {properties.map((prop) => (
          <Card key={prop.id} hover>
            <div className="h-40 bg-gradient-to-br from-brand-100 to-brand-50 rounded-t-2xl flex items-center justify-center">
              <span className="text-5xl">🏠</span>
            </div>
            <CardContent>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-zinc-900">{prop.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-zinc-500 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    {prop.address}
                  </div>
                </div>
                <Badge variant="green">{prop.status}</Badge>
              </div>
              <div className="flex items-center justify-between text-sm border-t border-zinc-100 pt-3 mt-3">
                <div>
                  <p className="text-zinc-500">Units</p>
                  <p className="font-medium">{prop.leased}/{prop.units}</p>
                </div>
                <div>
                  <p className="text-zinc-500">Type</p>
                  <p className="font-medium">{prop.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-zinc-500">Monthly</p>
                  <p className="font-medium">${prop.rent.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardShell>
  );
}