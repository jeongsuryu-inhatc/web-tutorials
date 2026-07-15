const express = require("express");
const path = require("path");
const store = require("./store");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res, next) => {
  try {
    const filter = ["active", "done"].includes(req.query.filter)
      ? req.query.filter
      : "all";
    const todos = await store.getAll();
    const filtered = todos.filter((t) =>
      filter === "active" ? !t.done : filter === "done" ? t.done : true
    );
    res.render("index", {
      todos: filtered,
      filter,
      remaining: todos.filter((t) => !t.done).length,
      total: todos.length,
    });
  } catch (err) {
    next(err);
  }
});

app.post("/todos", async (req, res, next) => {
  try {
    const title = (req.body.title || "").trim();
    if (title) await store.add(title);
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

app.post("/todos/:id/toggle", async (req, res, next) => {
  try {
    await store.toggle(req.params.id);
    res.redirect(req.get("referer") || "/");
  } catch (err) {
    next(err);
  }
});

app.post("/todos/:id/delete", async (req, res, next) => {
  try {
    await store.remove(req.params.id);
    res.redirect(req.get("referer") || "/");
  } catch (err) {
    next(err);
  }
});

app.post("/todos/clear-done", async (req, res, next) => {
  try {
    await store.clearDone();
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("서버 오류가 발생했어요: " + err.message);
});

app.listen(PORT, () => {
  console.log(`Todos app running → http://localhost:${PORT}`);
});
