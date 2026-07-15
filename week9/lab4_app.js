// 실습 4: EJS Todo 목록 페이지 (최종 제출물)
// 실행: node lab4_app.js → http://localhost:3000/todos
// 아직 DB는 없다 — 서버 메모리의 배열을 렌더링한다 (10주차에서 DB로 교체)

const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

// 서버가 갖고 있는 할 일 데이터
const todos = [
  { id: 1, title: "EJS 문법 복습", done: true },
  { id: 2, title: "partial 분리 연습", done: false },
  { id: 3, title: "10주차 MySQL 예습", done: false },
];

app.get("/", (req, res) => res.redirect("/todos"));

app.get("/todos", (req, res) => {
  res.render("todos", { title: "할 일 목록", todos: todos });
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}/todos`);
});
