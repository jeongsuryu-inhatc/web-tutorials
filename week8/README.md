# 8주차 — Node.js와 Express 기초

첫 웹 서버를 만든다. 각 실습은 독립된 서버 파일로 제공된다.

## 준비 (실습 1)
```bash
cd week8
npm init -y            # package.json 생성 (이 폴더엔 이미 있음)
npm install express    # Express 설치
```

## 실행 방법
```bash
node lab2_server.js    # 실습별 파일을 실행
# 브라우저에서 http://localhost:3000 접속
# 종료: Ctrl + C
```

| 실습 | 파일 | 배우는 것 |
|---|---|---|
| 실습 1 | `package.json` | npm init과 express 설치 |
| 실습 2 | `lab2_server.js` | 첫 Express 서버 |
| 실습 3 | `lab3_routes.js` | GET 라우트 3개 (/, /about, /time) |
| 실습 4 | `lab4_post.js` | POST 라우트와 urlencoded 미들웨어 |
| 실습 5 | `lab5_static.js` + `public/` | 정적 파일 제공 (최종 제출물 — GitHub push) |
