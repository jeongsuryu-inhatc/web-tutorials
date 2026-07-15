-- 11주차: todos 테이블 (실습 5의 마감일 due_date 포함)

CREATE DATABASE IF NOT EXISTS todo_app
  DEFAULT CHARACTER SET utf8mb4;

USE todo_app;

DROP TABLE IF EXISTS todos;

CREATE TABLE todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  done BOOLEAN NOT NULL DEFAULT FALSE,
  due_date DATE NULL,                    -- 실습 5: 마감일 (선택 입력)
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 예시 데이터
INSERT INTO todos (title, due_date) VALUES
  ('Todo CRUD 완성하기', '2026-07-20'),
  ('GitHub에 push 하기', NULL);
