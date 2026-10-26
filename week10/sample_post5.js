// 최소 점수 조회
// 실행: node sample_post5.js
const { db, createApp, asyncHandler, integer, subjectName, start } = require("./sample_common");
const app = createApp();

app.get("/", (req, res) => {
  res.render("sample_post5", { subjects: [], min: 60 });
});
app.post("/filter", asyncHandler(async (req, res) => {
  const min = integer(req.body.min);
  if (min === null || min < -2147483648 || min > 2147483647) {
    return res.status(400).render("sample_error", { message: "입력값 또는 대상 ID를 확인하세요." });
  }
  const [subjects] = await db.execute(
    "SELECT id, subject, score FROM subject WHERE score >= ? ORDER BY score DESC, id ASC", [min]
  );
  res.render("sample_post5", { subjects, min });
}));

start(app, "POST 5: 최소 점수 조회");
