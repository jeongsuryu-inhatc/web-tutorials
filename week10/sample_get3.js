// 점수 범위 조회
// 실행: node sample_get3.js
const { db, createApp, asyncHandler, integer, subjectName, start } = require("./sample_common");
const app = createApp();

app.get("/", asyncHandler(async (req, res) => {
  const min = req.query.min === undefined ? 0 : integer(req.query.min);
  const max = req.query.max === undefined ? 100 : integer(req.query.max);
  if (min === null || max === null || min > max) {
    return res.status(400).render("sample_error", { message: "입력값 또는 대상 ID를 확인하세요." });
  }
  const [subjects] = await db.execute(
    "SELECT id, subject, score FROM subject WHERE score BETWEEN ? AND ? ORDER BY score DESC, id ASC",
    [min, max]
  );
  res.render("sample_get3", { subjects, min, max });
}));

start(app, "GET 3: 점수 범위 조회");
