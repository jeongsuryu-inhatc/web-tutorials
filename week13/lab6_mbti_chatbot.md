# 실습 6 — MBTI 챗봇 바이브 코딩 (Google Antigravity)

4~8개의 질문을 던지고, 답변을 모아 **LLM(Gemini API)이 MBTI를 판별**해 주는 챗봇을
Google Antigravity Desktop으로 바이브 코딩한다.
`mbti_reference/` 폴더에 완성 참고 예시가 있다 — **먼저 스스로 만들고, 막힐 때만 참고할 것.**

## 완성 조건

- 챗봇이 질문을 **한 번에 하나씩** 4~8개 던진다 (E/I, S/N, T/F, J/P 각 성향을 알 수 있는 질문)
- 모든 답변이 끝나면 LLM이 MBTI 유형(예: ENFP)과 근거를 한국어로 알려준다
- 프런트엔드는 채팅 UI, 백엔드는 Node.js + Express, LLM은 Gemini API 호출
- API Key는 `.env` 파일로 관리하며 **절대 GitHub에 올리지 않는다**

---

## 1단계 — Stitch로 DESIGN.md 만들기

[Google Stitch](https://stitch.withgoogle.com/)는 프롬프트로 UI 디자인을 생성해 주는 도구다.
바이브 코딩 전에 **디자인을 먼저 확정**하면 AI에게 훨씬 정확하게 지시할 수 있다.

1. https://stitch.withgoogle.com/ 접속 → Google 계정 로그인
2. 새 프로젝트에서 아래와 같이 프롬프트를 입력한다.
   ```
   MBTI 판별 챗봇의 모바일 웹 채팅 화면.
   상단에 앱 이름과 진행 상태(질문 3/6), 가운데는 말풍선 대화 영역
   (봇은 왼쪽 회색, 사용자는 오른쪽 파란색), 하단에 입력창과 전송 버튼.
   마지막 결과 화면에는 MBTI 4글자를 크게, 아래에 성향 설명 카드.
   파란색 포인트의 밝고 미니멀한 디자인.
   ```
3. 마음에 드는 시안이 나올 때까지 프롬프트를 수정한다 (색·레이아웃 등).
4. 시안이 확정되면 Stitch가 보여주는 **화면 구성·색상·컴포넌트 설명과 생성된 HTML/CSS 코드**를 복사해
   프로젝트 폴더에 `DESIGN.md`로 저장한다. 형식 예:
   ```markdown
   # MBTI 챗봇 디자인 명세
   ## 화면 구성
   - 헤더: 앱 이름 + 진행률 표시 ...
   ## 색상
   - 주조색 #2563EB, 배경 #F9FAFB ...
   ## 참고 코드 (Stitch 생성)
   ...HTML/CSS 붙여넣기...
   ```
   → 이 파일이 Antigravity 에이전트에게 주는 **디자인 기준서**가 된다.

---

## 2단계 — Google API Key 발급과 설정

### 발급
1. [Google AI Studio](https://aistudio.google.com/) 접속 → Google 계정 로그인
2. 왼쪽 메뉴(또는 우측 상단)의 **Get API key → Create API key** 클릭
3. 생성된 키(`AIza...`)를 복사한다 — 무료 등급으로 실습에 충분하다

### 설정 (.env 방식 — 권장)
1. 프로젝트 폴더에 `.env` 파일을 만들고 키를 넣는다.
   ```
   GEMINI_API_KEY=AIza여기에_본인_키
   ```
2. `.gitignore`에 `.env`를 반드시 추가한다 (7주차 gitignore_example.txt 참고).
3. Node.js에서는 `dotenv` 패키지로 읽는다.
   ```bash
   npm install dotenv
   ```
   ```js
   require("dotenv").config();
   const apiKey = process.env.GEMINI_API_KEY;
   ```

⚠️ **주의**
- 키가 코드에 하드코딩되어 있으면 GitHub에 올라가는 순간 유출된다. 반드시 `.env`로 분리할 것.
- 유출됐다면 AI Studio에서 해당 키를 삭제하고 새로 발급한다.
- 팀/공용 PC에서는 실습 후 키를 삭제한다.

---

## 3단계 — Antigravity에서 바이브 코딩

1. 빈 프로젝트 폴더(`mbti-chatbot/`)를 만들고 `DESIGN.md`와 `.env`를 넣은 뒤 Antigravity Desktop으로 연다.
2. **개발자가 주도권을 갖는 지시**를 내린다. 예시:
   ```
   MBTI 판별 챗봇을 만들어줘.
   조건:
   (1) Node.js + Express 서버, 프런트는 public/index.html 단일 파일
   (2) UI는 DESIGN.md의 명세를 그대로 따를 것
   (3) 챗봇은 질문을 한 번에 하나씩 총 6개 하고, 답변이 끝나면
       Gemini API(gemini-2.5-flash)가 MBTI와 근거를 한국어로 판별
   (4) API Key는 process.env.GEMINI_API_KEY로 읽을 것 — 코드에 하드코딩 금지
   (5) 대화 이력은 프런트가 배열로 유지해서 POST /api/chat 으로 전달
   (6) 외부 프런트 라이브러리 금지
   완성 후 서버를 실행해서 브라우저로 직접 대화 흐름을 테스트해줘.
   ```
3. 에이전트의 **계획(Planning)을 먼저 읽고 승인**한다 — 이상한 설계면 이 단계에서 바로잡는다.
4. 완성되면 Antigravity의 브라우저 통합으로 에이전트가 스스로 테스트하는 것을 관찰하고,
   나도 직접 6개 질문에 답해 MBTI 결과까지 확인한다.

## 4단계 — 검증 체크리스트 (13주차 원칙: 검증은 내 몫)

- [ ] API Key가 코드 어디에도 하드코딩되어 있지 않은가? (`grep -r "AIza" .` 로 확인)
- [ ] `.gitignore`에 `.env`가 있는가?
- [ ] 질문이 4~8개 범위에서 한 번에 하나씩 나오는가?
- [ ] 성의 없는 답("몰라요")에도 죽지 않고 동작하는가?
- [ ] Gemini 응답이 실패했을 때(키 오류 등) 사용자에게 안내 메시지가 나오는가?
- [ ] 내가 이 코드의 요청/응답 흐름을 설명할 수 있는가?

## 제출물

- GitHub 레포지토리 (`.env` 제외, `.env.example` 포함)
- 챗봇 대화 전체 + MBTI 결과 화면 스크린샷
- `CODE_REVIEW_TEMPLATE.md`로 작성한 리뷰 기록 (AI가 잘한 것/내가 고친 것)
