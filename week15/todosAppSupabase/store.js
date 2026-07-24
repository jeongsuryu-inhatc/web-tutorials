// Supabase 기반 저장소 (schema.sql 참고)
require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");

const { SUPABASE_URL, SUPABASE_KEY } = process.env;
if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("SUPABASE_URL / SUPABASE_KEY 를 .env 에 설정해 주세요. (.env.example 참고)");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function unwrap({ data, error }) {
  if (error) throw new Error(`Supabase error: ${error.message}`);
  return data;
}

exports.getAll = async () =>
  unwrap(
    await supabase
      .from("todos")
      .select("*")
      .order("created_at", { ascending: false })
  ).map((row) => ({
    id: row.id,
    title: row.title,
    done: row.done,
    createdAt: row.created_at,
  }));

exports.add = async (title) => {
  unwrap(await supabase.from("todos").insert({ title }));
};

exports.toggle = async (id) => {
  const row = unwrap(
    await supabase.from("todos").select("done").eq("id", id).maybeSingle()
  );
  if (row) {
    unwrap(await supabase.from("todos").update({ done: !row.done }).eq("id", id));
  }
};

exports.remove = async (id) => {
  unwrap(await supabase.from("todos").delete().eq("id", id));
};

exports.clearDone = async () => {
  unwrap(await supabase.from("todos").delete().eq("done", true));
};
