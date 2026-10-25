// [D] 과목 성적 삭제 — CRUD 완성본
// 실행: node subject_del.js → http://localhost:3000/subjects
const express = require("express");
const db = require("./db");
const { asyncHandler, validSubject, setupApp, startServer } = require("./subject_common");

const app = express();
const PORT = Number(process.env.PORT || 3000);
setupApp(app);

app.get("/subjects", asyncHandler(async (req, res) => {
  const [subjects] = await db.execute("SELECT * FROM subject ORDER BY id DESC");
  res.render("subject_del", { subjects });
}));

app.post("/subjects", asyncHandler(async (req, res) => {
  if (!validSubject(req.body)) return res.redirect("/subjects");
  await db.execute("INSERT INTO subject (subject, score) VALUES (?, ?)",
    [req.body.subject.trim(), Number(req.body.score)]);
  res.redirect("/subjects");
}));

app.get("/subjects/:id/edit", asyncHandler(async (req, res) => {
  const [[subject]] = await db.execute("SELECT * FROM subject WHERE id = ?", [req.params.id]);
  if (!subject) return res.redirect("/subjects");
  res.render("subject_form", { subject });
}));

app.post("/subjects/:id/edit", asyncHandler(async (req, res) => {
  if (validSubject(req.body)) {
    await db.execute("UPDATE subject SET subject = ?, score = ? WHERE id = ?",
      [req.body.subject.trim(), Number(req.body.score), req.params.id]);
  }
  res.redirect("/subjects");
}));

app.post("/subjects/:id/delete", asyncHandler(async (req, res) => {
  await db.execute("DELETE FROM subject WHERE id = ?", [req.params.id]);
  res.redirect("/subjects");
}));

startServer(app, db, PORT, "과목 CRUD 서버");
