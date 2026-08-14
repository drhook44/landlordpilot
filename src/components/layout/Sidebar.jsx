'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import {
  LayoutDashboard,
  Building2,
  Users,
  DollarSign,
  Wrench,
  FileText,
  Settings,
  LogOut,
  ChevronRight,
} from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/properties', label: 'Properties', icon: Building2 },
  { href: '/tenants', label: 'Tenants', icon: Users },
  { href: '/rent', label: 'Rent', icon: DollarSign },
  { href: '/maintenance', label: 'Maintenance', icon: Wrench },
  { href: '/reports', label: 'Reports', icon: FileText },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const { signOut } = useAuth();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[var(--sidebar-width)] bg-white border-r border-zinc-200 flex flex-col z-40">
      {/* Brand */}
      <div className="h-16 flex items-center gap-2.5 px-6 border-b border-zinc-100">
        <span className="text-xl">🏠</span>
        <span className="font-semibold text-base tracking-tight">
          Landlord<span className="text-brand-600">Pilot</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href || (href !== '/dashboard' && pathname?.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition',
                isActive
                  ? 'bg-brand-50 text-brand-700'
                  : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
              )}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
              {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto text-brand-500" />}
            </Link>
          );
        })}
      </nav>

      {/* User area */}
      <div className="px-3 py-3 border-t border-zinc-100">
        <button
          onClick={signOut}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}