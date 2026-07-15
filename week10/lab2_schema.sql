-- 실습 2: 데이터베이스와 todos 테이블 생성

-- 1) 데이터베이스 생성
CREATE DATABASE IF NOT EXISTS todo_app
  DEFAULT CHARACTER SET utf8mb4;

-- 2) 사용할 데이터베이스 선택
USE todo_app;

-- 3) todos 테이블 생성
CREATE TABLE IF NOT EXISTS todos (
  id INT AUTO_INCREMENT PRIMARY KEY,     -- 자동 증가 번호
  title VARCHAR(200) NOT NULL,           -- 할 일 내용
  done BOOLEAN NOT NULL DEFAULT FALSE,   -- 완료 여부
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 4) 확인
SHOW TABLES;
DESC todos;
