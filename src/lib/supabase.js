import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database schema types
/*
  profiles (
    id uuid primary key references auth.users,
    full_name text,
    avatar_url text,
    phone text,
    company_name text,
    created_at timestamptz default now()
  )

  properties (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references profiles(id) not null,
    name text not null,
    address text not null,
    unit text,
    city text,
    state text,
    zip text,
    property_type text,
    total_units integer default 1,
    leased_units integer default 0,
    monthly_rent decimal(10,2),
    deposit_amount decimal(10,2),
    image_url text,
    notes text,
    created_at timestamptz default now()
  )

  tenants (
    id uuid primary key default gen_random_uuid(),
    property_id uuid references properties(id) not null,
    user_id uuid references profiles(id) not null,
    full_name text not null,
    email text,
    phone text,
    lease_start date,
    lease_end date,
    monthly_rent decimal(10,2),
    deposit_paid boolean default false,
    status text default 'active', -- active, notice, moved_out
    notes text,
    created_at timestamptz default now()
  )

  rent_payments (
    id uuid primary key default gen_random_uuid(),
    tenant_id uuid references tenants(id) not null,
    property_id uuid references properties(id) not null,
    user_id uuid references profiles(id) not null,
    amount decimal(10,2) not null,
    due_date date not null,
    paid_date date,
    status text default 'pending', -- pending, paid, late, overdue
    late_fee decimal(10,2) default 0,
    payment_method text,
    notes text,
    created_at timestamptz default now()
  )

  maintenance_requests (
    id uuid primary key default gen_random_uuid(),
    property_id uuid references properties(id) not null,
    tenant_id uuid references tenants(id),
    user_id uuid references profiles(id) not null,
    title text not null,
    description text,
    priority text default 'medium', -- low, medium, high, urgent
    status text default 'open', -- open, in_progress, completed, cancelled
    category text,
    estimated_cost decimal(10,2),
    assigned_to text,
    completed_at timestamptz,
    created_at timestamptz default now()
  )
*/