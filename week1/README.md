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

## 실습 5. JavaScript & CSS 기초 (lab1 ~ lab5)

### lab1 — JavaScript 기초 문법 (`node sampleN.js`로 실행)

| 파일 | 설명 |
|---|---|
| `sample1.js` | Hello World, `console.log`, 주석 작성법 |
| `sample2.js` | 변수와 상수(`let`/`const`/`var`), 자료형 |
| `sample3.js` | 연산자 (산술, 대입, 비교, 논리) |
| `sample4.js` | 문자열 다루기 (템플릿 리터럴, 문자열 메서드) |
| `sample5.js` | 조건문 (`if`/`else if`/`else`, `switch`) |
| `sample6.js` | 반복문 (`for`, `while`, `break`/`continue`) |
| `sample7.js` | 함수 (선언식, 매개변수/반환값, 화살표 함수) |
| `sample8.js` | 배열 (생성, 순회, `map`/`filter`/`reduce`) |
| `sample9.js` | 객체 (속성/메서드, 객체 배열) |
| `sample10.js` | 종합 실습 — 학생 성적 관리 |

### lab2 — JavaScript 응용 문제 (`node practiceN.js`로 실행)

| 파일 | 설명 |
|---|---|
| `practice1.js` | 구구단 출력기 (중첩 반복문) |
| `practice2.js` | FizzBuzz (반복문 + 조건문 + 나머지 연산) |
| `practice3.js` | 최댓값/최솟값/평균 계산기 (함수, 배열) |
| `practice4.js` | 학생 성적 처리기 (객체 배열, 학점 계산, 합격자 필터링) |
| `practice5.js` | 소수(素數) 판별 프로그램 (중첩 반복문, 조건문) |
| `practice6.js` | 사칙연산 계산기 함수 모음 (함수, `switch`) |
| `practice7.js` | 별 찍기 패턴 (중첩 반복문, 문자열 이어붙이기) |

### lab3 — DOM 기초 (`Live Server`로 브라우저에서 실행)

| 파일 | 설명 |
|---|---|
| `example1.html` | 요소 선택하고 글자 바꾸기 (`getElementById`/`querySelector`) |
| `example2.html` | 클릭 이벤트로 카운터 만들기 (`addEventListener`) |
| `example3.html` | 입력값 읽어와 인사말 출력 (`input.value`) |
| `example4.html` | `classList.toggle`로 다크모드 전환 |
| `example5.html` | `createElement`/`appendChild`로 할 일 목록 추가·삭제 |

### lab5 — CSS 기초 (`Live Server`로 브라우저에서 실행)

| 파일 | 설명 |
|---|---|
| `example1.html` | 선택자(태그/클래스/id)와 텍스트 스타일 |
| `example2.html` | 박스 모델 (`padding`/`border`/`margin`) 비교 |
| `example3.html` | 배경, `border-radius`, `box-shadow`로 카드 꾸미기 |
| `example4.html` | Flexbox 레이아웃 기초 정렬 |
| `example5.html` | `position: relative`/`absolute`로 뱃지 배치 |
| `example6.html` | 종합 실습 — 프로필 카드 만들기 |
