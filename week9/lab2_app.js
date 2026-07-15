// 실습 2: 반복·조건 렌더링
// 실행: node lab2_app.js
// /fruits 와 /empty 를 각각 접속해 비교해 볼 것

const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

const fruits = ["사과", "바나나", "포도", "딸기"];

// 데이터가 있는 경우
app.get("/fruits", (req, res) => {
  res.render("lab2", { title: "과일 목록", items: fruits });
});

// 빈 배열인 경우 → 조건 렌더링 확인
app.get("/empty", (req, res) => {
  res.render("lab2", { title: "빈 목록", items: [] });
});

app.get("/", (req, res) => {
  res.send('<a href="/fruits">과일 목록</a> | <a href="/empty">빈 목록</a>');
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
