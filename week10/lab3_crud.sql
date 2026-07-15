-- 실습 3: CRUD SQL 연습 (한 줄씩 실행하며 결과를 확인할 것)

USE todo_app;

-- C (Create): 데이터 넣기
INSERT INTO todos (title) VALUES ('MySQL 설치하기');
INSERT INTO todos (title) VALUES ('SQL 문법 연습하기');
INSERT INTO todos (title) VALUES ('Express와 연동하기');

-- R (Read): 조회하기
SELECT * FROM todos;                          -- 전체 조회
SELECT * FROM todos WHERE done = FALSE;       -- 미완료만
SELECT * FROM todos ORDER BY created_at DESC; -- 최신순

-- U (Update): 수정하기
UPDATE todos SET done = TRUE WHERE id = 1;    -- 1번 완료 처리
SELECT * FROM todos;                          -- 확인

-- D (Delete): 삭제하기
DELETE FROM todos WHERE id = 2;               -- 2번 삭제
SELECT * FROM todos;                          -- 확인
