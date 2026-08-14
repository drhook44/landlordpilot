'use client';

import { Bell, Search, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 h-16 bg-stone-50/80 backdrop-blur-lg border-b border-zinc-200/50 flex items-center px-6 gap-4">
      <button
        onClick={onMenuClick}
        className="lg:hidden btn-ghost !p-2"
      >
        <Menu className="w-5 h-5" />
      </button>

      <div className="flex-1 flex items-center gap-3 max-w-md">
        <Search className="w-4 h-4 text-zinc-400" />
        <input
          type="text"
          placeholder="Search properties, tenants..."
          className="flex-1 bg-transparent border-none outline-none text-sm text-zinc-900 placeholder:text-zinc-400"
        />
      </div>

      <div className="flex items-center gap-2">
        <button className="btn-ghost !p-2 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-stone-50" />
        </button>
        <div className="flex items-center gap-3 pl-3 border-l border-zinc-200">
          <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-semibold text-sm">
            JD
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-zinc-900 leading-tight">Jamie Davis</p>
            <p className="text-xs text-zinc-500">8 properties</p>
          </div>
        </div>
      </div>
    </header>
  );
}