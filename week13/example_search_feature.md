# 예시: 검색 기능 추가 (참고용 정답 예시)

11주차 Todo 앱에 검색 기능을 추가한 예시다. AI가 생성한 코드가 이와 다르더라도,
아래 기준을 만족하는지 스스로 판단할 것.

## routes/todos.js — 목록 라우트 수정

```js
router.get("/", async (req, res, next) => {
  try {
    const filter = req.query.filter || "all";
    const q = (req.query.q || "").trim(); // 검색어

    let sql = "SELECT * FROM todos WHERE 1=1";
    const params = [];

    if (filter === "active") sql += " AND done = FALSE";
    if (filter === "done") sql += " AND done = TRUE";

    if (q !== "") {
      sql += " AND title LIKE ?";      // ✅ 플레이스홀더 사용
      params.push(`%${q}%`);           // ❌ 절대 sql += `'%${q}%'` 금지 (SQL 인젝션)
    }

    sql += " ORDER BY due_date IS NULL, due_date, created_at DESC";

    const [todos] = await pool.query(sql, params);
    res.render("todos", { todos, filter, q });
  } catch (err) {
    next(err);
  }
});
```

## views/todos.ejs — 검색 폼 추가

```html
<form method="GET" action="/todos" class="add-form">
  <input type="text" name="q" value="<%= q %>" placeholder="검색어">
  <button type="submit">검색</button>
</form>
```

## 체크 포인트
- `q`를 render에 넘기지 않으면 EJS에서 `q is not defined` 에러 → AI가 자주 빠뜨리는 부분
- 검색과 필터가 동시에 동작하는지 확인
