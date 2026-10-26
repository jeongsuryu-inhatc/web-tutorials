// 과목 수정
// 실행: node sample_post2.js
const { db, createApp, asyncHandler, integer, subjectName, start } = require("./sample_common");
const app = createApp();

app.get("/", asyncHandler(async (req, res) => {
  const [subjects] = await db.execute("SELECT id, subject, score FROM subject ORDER BY id DESC");
  res.render("sample_post2", { subjects });
}));
app.post("/subjects", asyncHandler(async (req, res) => {
  const id = integer(req.body.id);
  const subject = subjectName(req.body.subject);
  const score = integer(req.body.score);
  if (id === null || id <= 0 || !subject || [...subject].length > 100 || score === null || score < -2147483648 || score > 2147483647) {
    return res.status(400).render("sample_error", { message: "입력값 또는 대상 ID를 확인하세요." });
  }
  const [result] = await db.execute("UPDATE subject SET subject = ?, score = ? WHERE id = ?", [subject, score, id]);
  if (result.affectedRows === 0) return res.status(404).render("sample_error", { message: "입력값 또는 대상 ID를 확인하세요." });
  // POST ?? ? GET?? ???? ????? ?? ?? ??? ????.
  res.redirect(303, "/");
}));

start(app, "POST 2: 과목 수정");
