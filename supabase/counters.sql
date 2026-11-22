-- vlsideepdive labs: live usage counters for the home page (simulations, STA runs, ...).
-- Run once in the Supabase SQL editor, after schema.sql.
-- Anyone can read the totals and add to them, but only to the named counters, and by at most 50 per call.

create table if not exists public.counters (
  name text primary key,
  n bigint not null default 0,
  since date not null default current_date
);
insert into public.counters (name) values
  ('learners'), ('sim'), ('sta'), ('synth'), ('cdc'), ('labs_passed'), ('quizzes')
on conflict (name) do nothing;

alter table public.counters enable row level security;
drop policy if exists "counters readable" on public.counters;
create policy "counters readable" on public.counters for select using (true);
grant select on public.counters to anon, authenticated;

-- Add a batch of counts, e.g. {"sim": 3, "quizzes": 1}. Unknown names are ignored.
create or replace function public.bump_counters(c jsonb) returns void
language plpgsql security definer set search_path = public as $$
declare k text; v int;
begin
  for k, v in select key, least(greatest((value #>> '{}')::int, 0), 50) from jsonb_each(c) where jsonb_typeof(value) = 'number' loop
    update public.counters set n = n + v where name = k;
  end loop;
end $$;
revoke all on function public.bump_counters(jsonb) from public;
grant execute on function public.bump_counters(jsonb) to anon, authenticated;
