-- vlsideepdive labs: accounts and per-topic leaderboards (Supabase / PostgreSQL).
-- Run once in the Supabase SQL editor (Dashboard -> SQL Editor -> New query -> paste -> Run).

-- Display names shown on the leaderboards. Email addresses stay in auth.users and are never exposed.
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null check (char_length(display_name) between 2 and 32),
  created_at timestamptz not null default now()
);

-- One row per user, topic and lab.
create table if not exists public.progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  topic text not null check (topic in ('logic', 'verilog', 'systemverilog', 'sva', 'dv', 'synth', 'cdc', 'sta', 'pd')),
  lab_id text not null check (lab_id ~ '^[A-Za-z0-9_.-]{1,48}$'),
  passed boolean not null default false,
  quiz_score int not null default 0 check (quiz_score between 0 and 25),
  quiz_total int not null default 0 check (quiz_total between 0 and 25),
  first_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, topic, lab_id),
  check (quiz_score <= quiz_total)
);

-- Results never go down: a cleared quiz on another browser does not erase a score.
create or replace function public.progress_keep_best() returns trigger language plpgsql as $$
begin
  if tg_op = 'UPDATE' then
    new.passed := old.passed or new.passed;
    if new.quiz_score < old.quiz_score then new.quiz_score := old.quiz_score; new.quiz_total := greatest(old.quiz_total, new.quiz_total); end if;
    new.first_at := old.first_at;
    if new.passed = old.passed and new.quiz_score = old.quiz_score then new.updated_at := old.updated_at; else new.updated_at := now(); end if;
  else
    new.first_at := now(); new.updated_at := now();
  end if;
  return new;
end $$;
drop trigger if exists progress_keep_best on public.progress;
create trigger progress_keep_best before insert or update on public.progress for each row execute function public.progress_keep_best();

-- Row-level security: everyone reads display names; each user writes only their own rows.
alter table public.profiles enable row level security;
alter table public.progress enable row level security;
drop policy if exists "profiles readable" on public.profiles;
drop policy if exists "own profile insert" on public.profiles;
drop policy if exists "own profile update" on public.profiles;
create policy "profiles readable" on public.profiles for select using (true);
create policy "own profile insert" on public.profiles for insert with check (auth.uid() = id);
create policy "own profile update" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);
drop policy if exists "own progress read" on public.progress;
drop policy if exists "own progress insert" on public.progress;
drop policy if exists "own progress update" on public.progress;
create policy "own progress read" on public.progress for select using (auth.uid() = user_id);
create policy "own progress insert" on public.progress for insert with check (auth.uid() = user_id);
create policy "own progress update" on public.progress for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Leaderboard: 10 points per lab passed (without opening the solution) + quiz points.
-- Ties: whoever reached the score first ranks higher. Only display names are exposed.
create or replace view public.leaderboard as
  select g.topic, g.user_id, p.display_name, g.points, g.labs_passed, g.quizzes, g.reached_at,
         rank() over (partition by g.topic order by g.points desc, g.reached_at asc) as rank
  from (
    select topic, user_id,
           sum(case when passed then 10 else 0 end + quiz_score)::int as points,
           count(*) filter (where passed)::int as labs_passed,
           count(*) filter (where quiz_total > 0)::int as quizzes,
           max(updated_at) as reached_at
    from public.progress group by topic, user_id
  ) g join public.profiles p on p.id = g.user_id
  where g.points > 0;

-- All topics together.
create or replace view public.leaderboard_all as
  select 'all'::text as topic, g.user_id, p.display_name, g.points, g.labs_passed, g.quizzes, g.reached_at,
         rank() over (order by g.points desc, g.reached_at asc) as rank
  from (
    select user_id,
           sum(case when passed then 10 else 0 end + quiz_score)::int as points,
           count(*) filter (where passed)::int as labs_passed,
           count(*) filter (where quiz_total > 0)::int as quizzes,
           max(updated_at) as reached_at
    from public.progress group by user_id
  ) g join public.profiles p on p.id = g.user_id
  where g.points > 0;

grant select on public.leaderboard, public.leaderboard_all to anon, authenticated;
grant select on public.profiles to anon, authenticated;
grant insert, update on public.profiles to authenticated;
grant select, insert, update on public.progress to authenticated;
