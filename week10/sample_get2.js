// 과목명 검색
// 실행: node sample_get2.js
const { db, createApp, asyncHandler, integer, subjectName, start } = require("./sample_common");
const app = createApp();

app.get("/", asyncHandler(async (req, res) => {
  const keyword = subjectName(req.query.keyword);
  const [subjects] = await db.execute(
    "SELECT id, subject, score FROM subject WHERE subject LIKE ? ORDER BY id DESC",
    [`%${keyword}%`]
  );
  res.render("sample_get2", { subjects, keyword });
}));

start(app, "GET 2: 과목명 검색");
