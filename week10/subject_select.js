// [R] 과목 성적 조회
// 실행: node subject_select.js → http://localhost:3000/subjects
const express = require("express");
const db = require("./db");
const { asyncHandler, setupApp, startServer } = require("./subject_common");

const app = express();
const PORT = Number(process.env.PORT || 3000);
setupApp(app);

app.get("/subjects", asyncHandler(async (req, res) => {
  const [subjects] = await db.execute("SELECT * FROM subject ORDER BY id DESC");
  res.render("subject_select", { subjects });
}));

startServer(app, db, PORT, "과목 조회 서버");
