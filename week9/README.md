# 9주차 — EJS 뷰 템플릿

서버의 데이터를 EJS 템플릿으로 렌더링한다.

## 준비
```bash
cd week9
npm install
```

## 실행 방법
```bash
node lab1_app.js   # 실습별 앱 파일 실행 → http://localhost:3000
```

| 실습 | 파일 | 배우는 것 |
|---|---|---|
| 실습 1 | `lab1_app.js` + `views/lab1.ejs` | 뷰 엔진 설정, <%= %>로 변수 출력 |
| 실습 2 | `lab2_app.js` + `views/lab2.ejs` | forEach 반복 렌더링, 조건 렌더링 |
| 실습 3 | `lab3_app.js` + `views/lab3.ejs`, `views/partials/` | header/footer partial 분리 |
| 실습 4 | `lab4_app.js` + `views/todos.ejs` | Todo 목록 페이지 (최종 제출물) |

## EJS 핵심 문법
- `<%= 값 %>` — 값을 출력 (HTML 이스케이프)
- `<% 코드 %>` — JS 코드 실행 (if, forEach 등)
- `<%- include("partials/header") %>` — 다른 파일 포함
