// 점수 정렬
// 실행: node sample_get4.js
const { db, createApp, asyncHandler, integer, subjectName, start } = require("./sample_common");
const app = createApp();

app.get("/", asyncHandler(async (req, res) => {
  // SQL ???? ???? ? ???? ??? ?? ?????.
  const order = req.query.order === "asc" ? "asc" : "desc";
  const direction = order === "asc" ? "ASC" : "DESC";
  const [subjects] = await db.execute(
    `SELECT id, subject, score FROM subject ORDER BY score ${direction}, id ASC`
  );
  res.render("sample_get4", { subjects, order });
}));

start(app, "GET 4: 점수 정렬");
