-- ============================================================
-- LandlordPilot AI — Full Database Schema
-- Run this in Supabase SQL Editor
-- ============================================================

-- 1. EXTENSIONS
create extension if not exists "uuid-ossp";

-- 2. PROFILES (extends auth.users)
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  phone text,
  company_name text,
  stripe_customer_id text,
  subscription_status text default 'trial', -- trial, active, past_due, canceled
  subscription_plan text default 'starter', -- starter, professional, portfolio
  subscription_end_date timestamptz,
  max_properties integer default 4,
  max_units integer default 4,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (
    new.id,
    new.raw_user_meta_data ->> 'full_name'
  );
  return new;
end;
$$;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 3. PROPERTIES
create table public.properties (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
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
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 4. TENANTS
create table public.tenants (
  id uuid primary key default uuid_generate_v4(),
  property_id uuid not null references public.properties(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  full_name text not null,
  email text,
  phone text,
  lease_start date,
  lease_end date,
  monthly_rent decimal(10,2),
  deposit_paid boolean default false,
  status text default 'active' check (status in ('active', 'notice', 'moved_out')),
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 5. RENT PAYMENTS
create table public.rent_payments (
  id uuid primary key default uuid_generate_v4(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  property_id uuid not null references public.properties(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  amount decimal(10,2) not null,
  due_date date not null,
  paid_date date,
  status text default 'pending' check (status in ('pending', 'paid', 'late', 'overdue')),
  late_fee decimal(10,2) default 0,
  payment_method text,
  stripe_payment_id text,
  notes text,
  created_at timestamptz default now()
);

-- 6. MAINTENANCE REQUESTS
create table public.maintenance_requests (
  id uuid primary key default uuid_generate_v4(),
  property_id uuid not null references public.properties(id) on delete cascade,
  tenant_id uuid references public.tenants(id) on delete set null,
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  description text,
  priority text default 'medium' check (priority in ('low', 'medium', 'high', 'urgent')),
  status text default 'open' check (status in ('open', 'in_progress', 'completed', 'cancelled')),
  category text,
  estimated_cost decimal(10,2),
  assigned_to text,
  completed_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 7. SUBSCRIPTIONS / INVOICES
create table public.subscriptions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  stripe_subscription_id text,
  plan text not null default 'starter',
  status text not null default 'trial',
  current_period_start timestamptz,
  current_period_end timestamptz,
  created_at timestamptz default now()
);

-- ============================================================
-- ROW LEVEL SECURITY (RLS) — Multi-tenant isolation
-- Each user can ONLY see their own data
-- ============================================================

-- Enable RLS on all tables
alter table public.profiles enable row level security;
alter table public.properties enable row level security;
alter table public.tenants enable row level security;
alter table public.rent_payments enable row level security;
alter table public.maintenance_requests enable row level security;
alter table public.subscriptions enable row level security;

-- PROFILES: users can read/update their own profile
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- PROPERTIES: users can only see their own properties
create policy "Users can view own properties"
  on public.properties for select
  using (auth.uid() = user_id);

create policy "Users can create own properties"
  on public.properties for insert
  with check (auth.uid() = user_id);

create policy "Users can update own properties"
  on public.properties for update
  using (auth.uid() = user_id);

create policy "Users can delete own properties"
  on public.properties for delete
  using (auth.uid() = user_id);

-- TENANTS: users can only see their own tenants
create policy "Users can view own tenants"
  on public.tenants for select
  using (auth.uid() = user_id);

create policy "Users can create own tenants"
  on public.tenants for insert
  with check (auth.uid() = user_id);

create policy "Users can update own tenants"
  on public.tenants for update
  using (auth.uid() = user_id);

create policy "Users can delete own tenants"
  on public.tenants for delete
  using (auth.uid() = user_id);

-- RENT PAYMENTS: users can only see their own payments
create policy "Users can view own payments"
  on public.rent_payments for select
  using (auth.uid() = user_id);

create policy "Users can create own payments"
  on public.rent_payments for insert
  with check (auth.uid() = user_id);

create policy "Users can update own payments"
  on public.rent_payments for update
  using (auth.uid() = user_id);

-- MAINTENANCE: users can only see their own requests
create policy "Users can view own maintenance"
  on public.maintenance_requests for select
  using (auth.uid() = user_id);

create policy "Users can create own maintenance"
  on public.maintenance_requests for insert
  with check (auth.uid() = user_id);

create policy "Users can update own maintenance"
  on public.maintenance_requests for update
  using (auth.uid() = user_id);

-- SUBSCRIPTIONS
create policy "Users can view own subscription"
  on public.subscriptions for select
  using (auth.uid() = user_id);

-- ============================================================
-- PLAN LIMITS FUNCTION
-- Check if user can add more properties based on their plan
-- ============================================================
create or replace function public.check_property_limit()
returns trigger
language plpgsql
security definer
as $$
declare
  plan_max integer;
  current_count integer;
begin
  -- Get max properties based on plan
  select 
    case 
      when p.subscription_plan = 'starter' then 4
      when p.subscription_plan = 'professional' then 15
      when p.subscription_plan = 'portfolio' then 999999
      else 4
    end into plan_max
  from public.profiles p
  where p.id = auth.uid();

  -- Count current properties
  select count(*) into current_count
  from public.properties
  where user_id = auth.uid();

  if current_count >= plan_max then
    raise exception 'Property limit reached for your plan. Upgrade to add more properties.';
  end if;

  return new;
end;
$$;

-- ============================================================
-- AUTO-CREATE PAYMENT SCHEDULE
-- When a tenant is added, create recurring rent payments
-- ============================================================
create or replace function public.create_rent_schedule()
returns trigger
language plpgsql
security definer
as $$
begin
  -- Create 12 months of rent payments
  insert into public.rent_payments (tenant_id, property_id, user_id, amount, due_date, status)
  select 
    new.id,
    new.property_id,
    new.user_id,
    new.monthly_rent,
    (date_trunc('month', new.lease_start) + interval '1 month' * generate_series(0, 11))::date,
    'pending'
  where new.monthly_rent is not null;
  
  return new;
end;
$$;

create or replace trigger on_tenant_created
  after insert on public.tenants
  for each row execute function public.create_rent_schedule();

-- ============================================================
-- INDEXES for performance
-- ============================================================
create index idx_properties_user on public.properties(user_id);
create index idx_tenants_user on public.tenants(user_id);
create index idx_tenants_property on public.tenants(property_id);
create index idx_rent_payments_user on public.rent_payments(user_id);
create index idx_rent_payments_tenant on public.rent_payments(tenant_id);
create index idx_rent_payments_status on public.rent_payments(status);
create index idx_maintenance_user on public.maintenance_requests(user_id);
create index idx_maintenance_property on public.maintenance_requests(property_id);
create index idx_maintenance_status on public.maintenance_requests(status);