// [C] 과목 성적 추가
// 실행: node subject_ins.js → http://localhost:3000/subjects
const express = require("express");
const db = require("./db");
const { asyncHandler, validSubject, setupApp, startServer } = require("./subject_common");

const app = express();
const PORT = Number(process.env.PORT || 3000);
setupApp(app);

app.get("/subjects", asyncHandler(async (req, res) => {
  const [subjects] = await db.execute("SELECT * FROM subject ORDER BY id DESC");
  res.render("subject_ins", { subjects });
}));

app.post("/subjects", asyncHandler(async (req, res) => {
  if (!validSubject(req.body)) return res.redirect("/subjects");

  const subject = req.body.subject.trim();
  const score = Number(req.body.score);
  await db.execute("INSERT INTO subject (subject, score) VALUES (?, ?)", [subject, score]);
  res.redirect("/subjects");
}));

startServer(app, db, PORT, "과목 추가 서버");
