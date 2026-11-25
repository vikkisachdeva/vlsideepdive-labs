-- vlsideepdive labs: private share counters. Run once in the Supabase SQL editor, after features.sql. Safe to run again.
-- Share taps per platform (share_li, share_x, ...) and visits from shared links (share_visit) go into
-- private_counters, which has row level security on and no read policy: only the dashboard (service role) can read it.
create table if not exists public.private_counters (
  name text primary key check (name ~ '^share_[a-z]{1,16}$'),
  n bigint not null default 0,
  since date not null default current_date
);
alter table public.private_counters enable row level security;
revoke all on public.private_counters from anon, authenticated;

create or replace function public.bump_counters(c jsonb, batch uuid, l jsonb default '{}'::jsonb) returns void
language plpgsql security definer set search_path = public as $$
declare k text; v int; t int; s int; fresh int; nl int := 0;
begin
  insert into public.counter_batches (id) values (batch) on conflict (id) do nothing;
  get diagnostics fresh = row_count;
  if fresh = 0 then return; end if;   -- already counted
  for k, v in select key, least(greatest(round((value #>> '{}')::numeric)::int, 0), 50) from jsonb_each(c) where jsonb_typeof(value) = 'number' loop
    if k ~ '^share_(li|x|fb|wa|tg|ig|save|more|copy|visit)$' then
      insert into public.private_counters (name, n) values (k, v) on conflict (name) do update set n = private_counters.n + excluded.n;
    else
      update public.counters set n = counters.n + v where name = k;
    end if;
  end loop;
  for k in select key from jsonb_each(coalesce(l, '{}'::jsonb)) where key ~ '^[A-Za-z0-9_.-]{1,48}$' loop
    nl := nl + 1; exit when nl > 60;
    t := case when (l -> k ->> 't') = '1' then 1 else 0 end;
    s := case when (l -> k ->> 's') = '1' then 1 else 0 end;
    insert into public.lab_stats (lab_id, tried, solved) values (k, t, s)
      on conflict (lab_id) do update set tried = lab_stats.tried + t, solved = lab_stats.solved + s;
  end loop;
  if random() < 0.01 then delete from public.counter_batches where at < now() - interval '30 days'; end if;
end $$;
revoke all on function public.bump_counters(jsonb, uuid, jsonb) from public;
grant execute on function public.bump_counters(jsonb, uuid, jsonb) to anon, authenticated;

-- To read them (SQL editor): select name, n, since from public.private_counters order by n desc;
