// 실습 5: 정적 파일 제공 (최종 제출물)
// 실행: node lab5_static.js → http://localhost:3000
// public 폴더의 index.html, style.css가 그대로 제공된다

const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

// 정적 파일 미들웨어: public 폴더를 웹 루트로 공개
app.use(express.static(path.join(__dirname, "public")));

// API 라우트도 함께 쓸 수 있다
app.get("/time", (req, res) => {
  res.send(new Date().toLocaleString("ko-KR"));
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});

// 완료 후: git add → commit → push 로 GitHub에 올릴 것
