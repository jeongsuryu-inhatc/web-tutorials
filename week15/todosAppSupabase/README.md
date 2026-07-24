# Todos App Supabase(Cloud Database) Project 

## Supabase 대시보드 → Project Settings → API 에서 확인
SUPABASE_KEY=your-anon-key

SUPABASE_URL=https://your-project-ref.supabase.co   

## jeongsuryu-inhatc's Org > my-database-store 클릭 > 아래에 PROJECT_URL 
https://cmconjzoqsjubsibzeom.supabase.co

# schema.sql 실행하기 
## 좌측 메뉴> SQL Editor > 복사 & 붙여넣기 > Run(우측)
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

# SUPABASE 환경변수 설정 
## .env 파일 생성 (.env.exmaple 파일 복사해서 .env 파일을 생성한다.)

# 명령어 실행 
## npm install 

## npm run dev 

## 웹브라우저: localhost:3000 

# 데이터 확인 
## Table Editor 로 데이터 확인 


