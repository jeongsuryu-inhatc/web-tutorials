# 강의 자료 — Claude vs ChatGPT vs Google Antigravity 비교

AI 도구는 크게 두 계열로 나눠 이해하면 쉽다.

1. **대화형 챗봇** — 웹/데스크톱 앱에서 대화로 사용 (Claude, ChatGPT)
2. **에이전트 개발 도구** — AI가 내 컴퓨터의 코드·파일을 직접 다룸 (Claude Code, Codex CLI, Google Antigravity)

## 1. 한눈에 비교

| 구분 | Claude | ChatGPT | Google Antigravity |
|---|---|---|---|
| 제공사 | Anthropic | OpenAI | Google |
| 핵심 모델 | Claude (Sonnet/Opus 등) | GPT 계열 | Gemini 3 Pro |
| 챗봇 형태 | 웹 · 데스크톱 · 모바일 | 웹 · 데스크톱 · 모바일 | (챗봇이 아닌 개발 플랫폼) |
| 개발자 도구 | Claude Code (CLI), Cowork | Codex (CLI/클라우드) | Antigravity Desktop + CLI + SDK |
| 대표 특징 | Artifacts(코드 미리보기), Projects, 긴 문서 처리 | 이미지 생성, 데이터 분석, 음성 대화 | Agent Manager(에이전트 병렬 관리), 브라우저 통합 테스트 |
| 형태 | 챗봇 + 터미널 CLI | 챗봇 + 터미널 CLI | VS Code 계열의 에이전트 IDE (2.0부터 독립 앱 + CLI) |
| 비용(수업 기준) | 웹 무료 티어 / Claude Code는 유료 플랜 | 웹 무료 티어 / Codex는 유료 플랜 | Google 계정만 있으면 무료로 시작 가능 |
| 강점 | 코드 품질·신뢰성 (벤치마크에서 첫 시도 통과율 높음) | 범용성, 생태계, 멀티모달 | 속도·비용, 무료 진입, 에이전트가 브라우저로 결과 직접 검증 |

## 2. 각 도구 자세히

### Claude (Anthropic)
- 대화 중 만든 코드를 **Artifacts**로 옆 화면에서 바로 실행·미리보기할 수 있어 웹 실습과 궁합이 좋다.
- **Projects**에 자료를 넣어 두면 매 대화마다 맥락을 다시 설명할 필요가 없다.
- 개발자용 **Claude Code**는 터미널에서 실행하는 CLI로, 프로젝트 폴더를 통째로 이해하고 파일 수정·테스트·커밋까지 수행한다. 복잡한 기능, 품질이 중요한 코드에 강하다.

### ChatGPT (OpenAI)
- 가장 대중적인 챗봇. **이미지 생성**, **데이터 분석**(CSV를 올리면 차트까지 그려 줌), **음성 대화** 등 멀티모달 기능이 풍부하다.
- 개발자용 **Codex**는 CLI와 클라우드 실행을 지원하며, 샌드박스(격리 환경) 실행이 강점이다.

### Google Antigravity
- 챗봇이 아니라 **에이전트 우선(agent-first) 개발 플랫폼**이다. VS Code 계열 에디터를 기반으로 한다.
- **Agent Manager**: 여러 AI 에이전트에게 작업을 나눠 주고 병렬로 진행 상황을 관리한다.
- **브라우저 통합**: Chrome 확장을 통해 에이전트가 만든 웹페이지를 스스로 브라우저에서 열어 테스트한다.
- **Planning 모드**(복잡한 작업, 깊은 설계) / **Fast 모드**(간단·빠른 수정)를 상황에 따라 선택한다.
- Google 계정만 있으면 무료로 Gemini 3 Pro 에이전트를 사용할 수 있어 수업 실습에 부담이 없다.

## 3. 무엇을 언제 쓸까 (수업 관점)

- 개념 질문, 코드 설명, 문서 요약 → 챗봇 (Claude / ChatGPT)
- 브라우저에서 바로 보이는 작은 웹 결과물 → Claude Artifacts
- 데이터 파일 분석·시각화 → ChatGPT 데이터 분석
- 내 프로젝트 폴더를 직접 고치는 작업 → Claude Code / Codex / Antigravity
- 무료로 에이전트 개발을 체험 → Antigravity

> 어떤 도구든 원칙은 같다 — **결정과 검증은 개발자가, 실행은 AI가.** (13주차에서 심화)

## 출처

- [Google I/O 2026 developer highlights (blog.google)](https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-developer-highlights/)
- [Getting Started with Google Antigravity (Google Codelabs)](https://codelabs.developers.google.com/getting-started-google-antigravity)
- [Google flips Antigravity into an agentic dev suite (9to5Google)](https://9to5google.com/2026/05/19/google-antigravity-agentic-developer-suite/)
- [Antigravity 2.0 vs Claude Code vs Codex CLI (aimadetools)](https://www.aimadetools.com/blog/antigravity-2-vs-claude-code-vs-codex-cli/)
- [Google Antigravity 완벽 가이드 (피카부랩스)](https://peekaboolabs.ai/blog/google-antigravity-guide)
