-- Supabase SQL Editor에서 실행하세요.
create table if not exists todos (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  done boolean not null default false,
  created_at timestamptz not null default now()
);

-- 데모용: anon 키로 접근할 수 있도록 RLS를 켜고 전체 허용 정책을 추가합니다.
-- 실서비스에서는 사용자 인증 기반 정책으로 바꾸세요.
alter table todos enable row level security;

create policy "todos demo full access"
  on todos for all
  using (true)
  with check (true);
