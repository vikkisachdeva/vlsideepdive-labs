-- vlsideepdive labs: live usage counters for the home page (simulations, STA runs, ...).
-- Run once in the Supabase SQL editor, after schema.sql. Safe to run again.
-- Anyone can read the totals and add to them, but only to the named counters, and by at most 50 per call.
-- Each batch carries an ID: a batch the server has already counted is ignored, so browsers can retry safely.

create table if not exists public.counters (
  name text primary key,
  n bigint not null default 0,
  since date not null default current_date
);
insert into public.counters (name) values
  ('learners'), ('hands_on'), ('sim'), ('sta'), ('synth'), ('cdc'), ('labs_passed'), ('quizzes')
on conflict (name) do nothing;

alter table public.counters enable row level security;
drop policy if exists "counters readable" on public.counters;
create policy "counters readable" on public.counters for select using (true);
grant select on public.counters to anon, authenticated;

-- Batch IDs already counted (kept for 30 days; not readable by visitors).
create table if not exists public.counter_batches (id uuid primary key, at timestamptz not null default now());
alter table public.counter_batches enable row level security;

drop function if exists public.bump_counters(jsonb);
create or replace function public.bump_counters(c jsonb, batch uuid) returns void
language plpgsql security definer set search_path = public as $$
declare k text; v int; fresh int;
begin
  insert into public.counter_batches (id) values (batch) on conflict (id) do nothing;
  get diagnostics fresh = row_count;
  if fresh = 0 then return; end if;   -- already counted
  for k, v in select key, least(greatest(round((value #>> '{}')::numeric)::int, 0), 50) from jsonb_each(c) where jsonb_typeof(value) = 'number' loop
    update public.counters set n = n + v where name = k;
  end loop;
  if random() < 0.01 then delete from public.counter_batches where at < now() - interval '30 days'; end if;
end $$;
revoke all on function public.bump_counters(jsonb, uuid) from public;
grant execute on function public.bump_counters(jsonb, uuid) to anon, authenticated;
