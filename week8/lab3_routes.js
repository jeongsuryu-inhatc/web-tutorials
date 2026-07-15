// 실습 3: GET 라우트 3개
// 실행: node lab3_routes.js
// 접속: /, /about, /time 을 각각 브라우저로 열어 볼 것

const express = require("express");
const app = express();
const PORT = 3000;

// 1) 홈
app.get("/", (req, res) => {
  res.send("<h1>홈 페이지</h1><p><a href='/about'>소개</a> | <a href='/time'>현재 시각</a></p>");
});

// 2) 소개
app.get("/about", (req, res) => {
  res.send("<h1>소개</h1><p>Express로 만든 첫 서버입니다.</p>");
});

// 3) 현재 시각: 요청이 올 때마다 새로 계산된다
app.get("/time", (req, res) => {
  const now = new Date().toLocaleString("ko-KR");
  res.send(`<h1>현재 시각</h1><p>${now}</p>`);
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
