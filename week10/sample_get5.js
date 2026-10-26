// ID 상세 조회
// 실행: node sample_get5.js
const { db, createApp, asyncHandler, integer, subjectName, start } = require("./sample_common");
const app = createApp();

app.get("/", (req, res) => {
  res.render("sample_get5", { subjects: [] });
});
app.get("/subjects/:id", asyncHandler(async (req, res) => {
  const id = integer(req.params.id);
  if (id === null || id <= 0) {
    return res.status(400).render("sample_error", { message: "입력값 또는 대상 ID를 확인하세요." });
  }
  const [subjects] = await db.execute("SELECT id, subject, score FROM subject WHERE id = ?", [id]);
  res.status(subjects.length ? 200 : 404).render("sample_get5", { subjects });
}));

start(app, "GET 5: ID 상세 조회");
