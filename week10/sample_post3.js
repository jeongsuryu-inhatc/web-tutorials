// 과목 삭제
// 실행: node sample_post3.js
const { db, createApp, asyncHandler, integer, subjectName, start } = require("./sample_common");
const app = createApp();

app.get("/", asyncHandler(async (req, res) => {
  const [subjects] = await db.execute("SELECT id, subject, score FROM subject ORDER BY id DESC");
  res.render("sample_post3", { subjects });
}));
app.post("/subjects", asyncHandler(async (req, res) => {
  const id = integer(req.body.id);
  if (id === null || id <= 0) {
    return res.status(400).render("sample_error", { message: "입력값 또는 대상 ID를 확인하세요." });
  }
  const [result] = await db.execute("DELETE FROM subject WHERE id = ?", [id]);
  if (result.affectedRows === 0) return res.status(404).render("sample_error", { message: "입력값 또는 대상 ID를 확인하세요." });
  // POST ?? ? GET?? ???? ????? ?? ?? ??? ????.
  res.redirect(303, "/");
}));

start(app, "POST 3: 과목 삭제");
