// 실습 4: POST 라우트와 미들웨어
// 실행: node lab4_post.js → http://localhost:3000

const express = require("express");
const app = express();
const PORT = 3000;

// 미들웨어: 폼 데이터(name=value&...)를 req.body로 변환해 준다
app.use(express.urlencoded({ extended: true }));

// GET: 폼 페이지 보여주기
app.get("/", (req, res) => {
  res.send(`
    <h1>인사말 폼</h1>
    <form method="POST" action="/greet">
      <input type="text" name="name" placeholder="이름">
      <button type="submit">보내기</button>
    </form>
  `);
});

// POST: 폼에서 보낸 데이터 받기
app.post("/greet", (req, res) => {
  const name = req.body.name; // 미들웨어 덕분에 사용 가능
  res.send(`<h1>${name}님, 안녕하세요!</h1><a href="/">돌아가기</a>`);
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
