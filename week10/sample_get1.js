// 전체 조회
// 실행: node sample_get1.js
const { db, createApp, asyncHandler, integer, subjectName, start } = require("./sample_common");
const app = createApp();

app.get("/", asyncHandler(async (req, res) => {
  const [subjects] = await db.execute("SELECT id, subject, score FROM subject ORDER BY id DESC");
  res.render("sample_get1", { subjects });
}));

start(app, "GET 1: 전체 조회");
