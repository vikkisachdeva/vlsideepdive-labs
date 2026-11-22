-- vlsideepdive labs: video badges (watch a video in full on the site to earn its badge).
-- Run once in the Supabase SQL editor, after schema.sql and counters.sql. Safe to run again.

create table if not exists public.badges (
  user_id uuid not null references auth.users (id) on delete cascade,
  badge_id text not null check (badge_id ~ '^yt-[A-Za-z0-9_-]{11}$'),
  title text not null default '' check (char_length(title) <= 200),
  earned_at timestamptz not null default now(),
  primary key (user_id, badge_id)
);
alter table public.badges enable row level security;
drop policy if exists "own badges read" on public.badges;
drop policy if exists "own badges insert" on public.badges;
create policy "own badges read" on public.badges for select using (auth.uid() = user_id);
create policy "own badges insert" on public.badges for insert with check (auth.uid() = user_id);
grant select, insert on public.badges to authenticated;

-- Leaderboards: the same ranking by points as before, plus each person's badge count (badges break ties).
create or replace view public.leaderboard as
  select g.topic, g.user_id, p.display_name, g.points, g.labs_passed, g.quizzes, g.reached_at,
         rank() over (partition by g.topic order by g.points desc, coalesce(b.n, 0) desc, g.reached_at asc) as rank,
         coalesce(b.n, 0)::int as badges
  from (
    select topic, user_id,
           sum(case when passed then 10 else 0 end + quiz_score)::int as points,
           count(*) filter (where passed)::int as labs_passed,
           count(*) filter (where quiz_total > 0)::int as quizzes,
           max(updated_at) as reached_at
    from public.progress group by topic, user_id
  ) g join public.profiles p on p.id = g.user_id
  left join (select user_id, count(*) as n from public.badges group by user_id) b on b.user_id = g.user_id
  where g.points > 0;

-- All topics: also lists people who so far have only badges.
create or replace view public.leaderboard_all as
  select 'all'::text as topic, u.user_id, p.display_name,
         coalesce(g.points, 0)::int as points, coalesce(g.labs_passed, 0)::int as labs_passed, coalesce(g.quizzes, 0)::int as quizzes,
         coalesce(greatest(g.reached_at, b.last), g.reached_at, b.last) as reached_at,
         rank() over (order by coalesce(g.points, 0) desc, coalesce(b.n, 0) desc, coalesce(greatest(g.reached_at, b.last), g.reached_at, b.last) asc) as rank,
         coalesce(b.n, 0)::int as badges
  from (select user_id from public.progress union select user_id from public.badges) u
  join public.profiles p on p.id = u.user_id
  left join (
    select user_id,
           sum(case when passed then 10 else 0 end + quiz_score)::int as points,
           count(*) filter (where passed)::int as labs_passed,
           count(*) filter (where quiz_total > 0)::int as quizzes,
           max(updated_at) as reached_at
    from public.progress group by user_id
  ) g on g.user_id = u.user_id
  left join (select user_id, count(*) as n, max(earned_at) as last from public.badges group by user_id) b on b.user_id = u.user_id
  where coalesce(g.points, 0) > 0 or coalesce(b.n, 0) > 0;

grant select on public.leaderboard, public.leaderboard_all to anon, authenticated;

-- Live counter for the home page: videos watched in full.
insert into public.counters (name) values ('videos') on conflict (name) do nothing;
