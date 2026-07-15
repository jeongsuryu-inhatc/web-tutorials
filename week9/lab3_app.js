// 실습 3: partial 분리 (header/footer 재사용)
// 실행: node lab3_app.js
// / 와 /about 페이지가 같은 헤더·푸터를 공유한다

const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("lab3", { title: "홈", content: "partial로 헤더와 푸터를 재사용합니다." });
});

app.get("/about", (req, res) => {
  res.render("lab3", { title: "소개", content: "이 페이지도 같은 헤더·푸터를 씁니다." });
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
