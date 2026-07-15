// MBTI 챗봇 서버 — Express + Gemini API
// 실행 전: .env에 GEMINI_API_KEY 설정 (lab6_mbti_chatbot.md 2단계 참고)

require("dotenv").config(); // .env 파일을 process.env로 로드
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;
const MODEL = "gemini-2.5-flash"; // 사용 불가 시 AI Studio에서 최신 모델명 확인

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// 챗봇의 역할과 규칙을 정하는 시스템 프롬프트
const SYSTEM_PROMPT = `
너는 MBTI 판별 챗봇이다. 규칙:
1. 질문은 반드시 한 번에 하나씩, 총 6개만 한다.
2. 질문은 E/I, S/N, T/F, J/P 성향을 파악할 수 있는 일상적 상황 질문으로 하고, 번호(1/6 형식)를 붙인다.
3. 답변이 모호하면 그대로 넘어가되, 6개 질문이 모두 끝나면
   "당신의 MBTI는 XXXX입니다" 형태로 4글자 유형과 판단 근거를 각 축별로 설명한다.
4. 모든 대화는 한국어로, 친근하고 간결하게 한다.
5. MBTI와 무관한 질문을 받으면 정중히 거절하고 다음 질문을 이어간다.
`;

app.post("/api/chat", async (req, res) => {
  try {
    // 프런트가 보낸 대화 이력: [{ role: "user" | "model", text: "..." }]
    const messages = req.body.messages || [];

    // Gemini REST API 형식으로 변환
    const contents = messages.map((m) => ({
      role: m.role,
      parts: [{ text: m.text }],
    }));

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: contents,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // 키 오류, 한도 초과 등 — 사용자에게 원인 안내
      console.error("Gemini API 오류:", data);
      return res.status(500).json({
        text: "AI 호출에 실패했습니다. API Key 설정(.env)을 확인해 주세요.",
      });
    }

    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text ??
      "응답을 이해하지 못했어요. 다시 시도해 주세요.";

    res.json({ text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ text: "서버 오류가 발생했습니다." });
  }
});

app.listen(PORT, () => {
  if (!process.env.GEMINI_API_KEY) {
    console.warn("⚠️  GEMINI_API_KEY가 없습니다. .env 파일을 확인하세요.");
  }
  console.log(`MBTI 챗봇 실행 중: http://localhost:${PORT}`);
});
