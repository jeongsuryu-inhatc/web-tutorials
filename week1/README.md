# 1주차 — 웹의 동작 원리와 개발 환경

## 실습 1. VS Code 설치
1. https://code.visualstudio.com 에서 VS Code를 내려받아 설치한다.
2. 왼쪽 확장(Extensions) 탭에서 다음을 설치한다.
   - `Korean Language Pack` — 한국어 UI
   - `Live Server` — HTML 실시간 미리보기

## 실습 2. Node.js 설치
1. https://nodejs.org 에서 **LTS 버전**을 설치한다.
2. 터미널(명령 프롬프트)에서 설치를 확인한다.
   ```bash
   node -v
   npm -v
   ```
   버전이 출력되면 성공.

## 실습 3. 브라우저 개발자 도구 관찰
1. 크롬에서 즐겨 찾는 사이트를 열고 `F12`를 누른다.
2. **Elements 탭**: HTML 태그 구조를 펼쳐 보고, 요소를 클릭하면 화면 어디가 강조되는지 확인한다.
3. **Network 탭**: 새로고침 후 브라우저가 서버에 보내는 요청과 응답을 관찰한다.
4. 인상 깊은 부분을 스크린샷 1장과 함께 메모로 남긴다.

## 실습 4. 첫 HTML 페이지 (제출물)
1. `lab4/index.html`을 참고해 나만의 자기소개 페이지를 만든다.
2. 파일을 우클릭 → `Open with Live Server`로 실행한다.
3. 제목, 문단, 사진이 포함되어야 한다.
