// 실습 5: DB의 할 일 목록을 EJS로 출력 (최종 제출물)
// 실행 전: lab2_schema.sql 실행 + db.js 비밀번호 수정 + npm install
// 실행: node app.js → http://localhost:3000/todos

const express = require("express");
const pool = require("./db");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => res.redirect("/todos"));

app.get("/todos", async (req, res) => {
  try {
    // SQL 실행: 결과의 첫 요소(rows)가 데이터 배열
    const [rows] = await pool.query(
      "SELECT * FROM todos ORDER BY created_at DESC"
    );
    res.render("todos", { todos: rows });
  } catch (err) {
    console.error(err);
    res.status(500).send("DB 오류: " + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}/todos`);
});
