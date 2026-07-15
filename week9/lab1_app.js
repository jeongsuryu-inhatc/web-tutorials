// 실습 1: EJS 설정과 변수 출력
// 실행: node lab1_app.js → http://localhost:3000

const express = require("express");
const app = express();
const PORT = 3000;

// EJS를 뷰 엔진으로 설정 (views 폴더의 .ejs 파일을 사용)
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // render의 두 번째 인자로 데이터를 넘기면 EJS에서 쓸 수 있다
  res.render("lab1", {
    name: "홍길동",
    today: new Date().toLocaleDateString("ko-KR"),
  });
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
