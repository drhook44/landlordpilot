'use client';

import { useState } from 'react';
import { DashboardShell } from '@/components/layout/DashboardShell';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Input, Select } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Check, ArrowRight, Building2, Users, CreditCard, Rocket } from 'lucide-react';

const steps = [
  { id: 1, title: 'Properties', icon: Building2, description: 'Add your first property' },
  { id: 2, title: 'Tenants', icon: Users, description: 'Invite or add tenants' },
  { id: 3, title: 'Billing', icon: CreditCard, description: 'Set up rent collection' },
  { id: 4, title: 'Launch', icon: Rocket, description: 'You\'re all set!' },
];

export default function OnboardingPage() {
  const [step, setStep] = useState(1);

  return (
    <DashboardShell>
      <div className="max-w-2xl mx-auto">
        {/* Progress */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            {steps.map((s, i) => (
              <div key={s.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold transition-all ${
                  step === s.id 
                    ? 'bg-brand-600 text-white ring-4 ring-brand-100' 
                    : step > s.id 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-zinc-100 text-zinc-400'
                }`}>
                  {step > s.id ? <Check className="w-5 h-5" /> : <s.icon className="w-5 h-5" />}
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-16 sm:w-24 h-0.5 mx-2 transition-colors ${
                    step > s.id ? 'bg-emerald-500' : 'bg-zinc-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3">
            {steps.map((s) => (
              <div key={s.id} className="text-center" style={{ width: '25%' }}>
                <p className="text-xs font-medium text-zinc-900 hidden sm:block">{s.title}</p>
                <p className="text-xs text-zinc-500 hidden sm:block">{s.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Step content */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold">
              {step === 1 && 'Add your first property'}
              {step === 2 && 'Add your tenants'}
              {step === 3 && 'Set up rent collection'}
              {step === 4 && 'You\'re all set!'}
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              {step === 1 && 'Start by adding a property. You can add more later.'}
              {step === 2 && 'Add tenants to your properties or send them an invite link.'}
              {step === 3 && 'Connect Stripe to automate rent collection and late fees.'}
              {step === 4 && 'Your LandlordPilot AI dashboard is ready to go.'}
            </p>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <div className="space-y-4">
                <Input label="Property Name" id="name" placeholder="e.g. 123 Oak Street" />
                <Input label="Address" id="address" placeholder="Street address" />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="City" id="city" placeholder="Portland" />
                  <Select label="State" id="state">
                    <option>OR</option>
                    <option>WA</option>
                    <option>CA</option>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Select label="Property Type" id="type">
                    <option>Single Family Home</option>
                    <option>Multi-Family</option>
                    <option>Apartment</option>
                    <option>Duplex</option>
                    <option>Triplex</option>
                  </Select>
                  <Input label="Total Units" id="units" type="number" placeholder="1" />
                </div>
                <Input label="Monthly Rent ($)" id="rent" type="number" placeholder="2000" />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-200">
                  <p className="text-sm font-medium mb-2">Or invite tenants via email</p>
                  <div className="flex gap-2">
                    <input type="email" className="input-field flex-1" placeholder="tenant@email.com" />
                    <Button variant="secondary">Send Invite</Button>
                  </div>
                </div>
                <div className="border-t border-zinc-100 pt-4">
                  <p className="text-sm font-medium text-zinc-900 mb-3">Add manually</p>
                  <Input label="Full Name" id="tenant-name" placeholder="Tenant name" />
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <Input label="Email" id="tenant-email" type="email" placeholder="email@example.com" />
                    <Input label="Phone" id="tenant-phone" placeholder="(503) 555-0000" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <Select label="Property" id="assign-property">
                      <option>123 Oak St · Unit 4</option>
                      <option>45 Pine Ave · Unit 2</option>
                      <option>78 Elm St · Unit 1</option>
                    </Select>
                    <Input label="Monthly Rent ($)" id="tenant-rent" type="number" placeholder="1800" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <Input label="Lease Start" id="lease-start" type="date" />
                    <Input label="Lease End" id="lease-end" type="date" />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="rounded-xl border border-brand-200 bg-brand-50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Stripe connected</p>
                      <p className="text-xs text-brand-600">Automatic rent collection is active</p>
                    </div>
                    <Badge variant="green" className="ml-auto">Connected</Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-medium">Rent collection settings</p>
                  <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-200">
                    <div>
                      <p className="text-sm font-medium">Auto-charge on due date</p>
                      <p className="text-xs text-zinc-500">Charge tenants automatically on the 1st of each month</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-200">
                    <div>
                      <p className="text-sm font-medium">Late fee enforcement</p>
                      <p className="text-xs text-zinc-500">$50 late fee applied after 3-day grace period</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="text-center py-6">
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Welcome to LandlordPilot AI!</h3>
                <p className="text-zinc-600 mb-8 max-w-md mx-auto">
                  Your dashboard is ready. AI is already analyzing your portfolio and will surface insights as you add more data.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="rounded-xl bg-brand-50 p-4">
                    <p className="text-2xl font-bold text-brand-600">1</p>
                    <p className="text-xs text-zinc-600">Property Added</p>
                  </div>
                  <div className="rounded-xl bg-brand-50 p-4">
                    <p className="text-2xl font-bold text-brand-600">3</p>
                    <p className="text-xs text-zinc-600">Tenants Invited</p>
                  </div>
                  <div className="rounded-xl bg-brand-50 p-4">
                    <p className="text-2xl font-bold text-brand-600">$7.2K</p>
                    <p className="text-xs text-zinc-600">Monthly Rent</p>
                  </div>
                </div>
                <Button size="lg">
                  Go to Dashboard <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-zinc-100">
              <Button
                variant="ghost"
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
              >
                Back
              </Button>
              <div className="flex items-center gap-2">
                {step < 4 && (
                  <Button variant="ghost" onClick={() => setStep(4)}>
                    Skip to end
                  </Button>
                )}
                <Button onClick={() => setStep(Math.min(4, step + 1))}>
                  {step === 4 ? 'Finish' : 'Continue'}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}