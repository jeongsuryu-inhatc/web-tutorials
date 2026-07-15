# MBTI 챗봇 — 참고 구현

실습 6의 완성 참고 예시. 먼저 스스로 바이브 코딩해 보고, 막힐 때만 볼 것.

## 실행

```bash
cd mbti_reference
npm install
cp .env.example .env    # 열어서 본인의 GEMINI_API_KEY 입력
node server.js          # → http://localhost:3000
```

## 구조

```
mbti_reference/
├── server.js        # Express + Gemini API 호출
├── public/
│   └── index.html   # 채팅 UI (단일 파일)
├── DESIGN.md        # Stitch로 만든 디자인 명세 예시
├── .env.example     # 키 설정 예시 (실제 키는 .env에)
└── package.json
```
