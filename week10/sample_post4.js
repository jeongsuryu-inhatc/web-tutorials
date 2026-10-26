// 과목명 검색
// 실행: node sample_post4.js
const { db, createApp, asyncHandler, integer, subjectName, start } = require("./sample_common");
const app = createApp();

app.get("/", (req, res) => {
  res.render("sample_post4", { subjects: [], keyword: "" });
});
app.post("/search", asyncHandler(async (req, res) => {
  const keyword = subjectName(req.body.keyword);
  const [subjects] = await db.execute(
    "SELECT id, subject, score FROM subject WHERE subject LIKE ? ORDER BY id DESC",
    [`%${keyword}%`]
  );
  res.render("sample_post4", { subjects, keyword });
}));

start(app, "POST 4: 과목명 검색");
