// 과목 등록
// 실행: node sample_post1.js
const { db, createApp, asyncHandler, integer, subjectName, start } = require("./sample_common");
const app = createApp();

app.get("/", asyncHandler(async (req, res) => {
  const [subjects] = await db.execute("SELECT id, subject, score FROM subject ORDER BY id DESC");
  res.render("sample_post1", { subjects });
}));
app.post("/subjects", asyncHandler(async (req, res) => {
  const subject = subjectName(req.body.subject);
  const score = integer(req.body.score);
  if (!subject || [...subject].length > 100 || score === null || score < -2147483648 || score > 2147483647) {
    return res.status(400).render("sample_error", { message: "입력값 또는 대상 ID를 확인하세요." });
  }
  await db.execute("INSERT INTO subject (subject, score) VALUES (?, ?)", [subject, score]);
  // POST ?? ? GET?? ???? ????? ?? ?? ??? ????.
  res.redirect(303, "/");
}));

start(app, "POST 1: 과목 등록");
