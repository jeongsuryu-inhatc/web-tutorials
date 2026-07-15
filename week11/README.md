# 11주차 — Todo 웹 서비스 통합 개발

Express + EJS + MySQL로 Todo CRUD를 완성한다. 이 폴더가 **14주차에 배포할 최종 프로젝트**다.

## 실행
```bash
cd week11
npm install
mysql -u root -p < schema.sql   # 또는 Workbench에서 schema.sql 실행
# db.js 비밀번호 수정
node app.js                      # → http://localhost:3000/todos
```

## 프로젝트 구조 (실습 1)
```
week11/
├── app.js            # 앱 시작점: 미들웨어·라우터 등록
├── db.js             # DB 연결
├── schema.sql        # 테이블 정의 (마감일 due_date 포함)
├── routes/
│   └── todos.js      # /todos 관련 라우트 모음
├── views/
│   ├── partials/     # header, footer
│   ├── todos.ejs     # 목록 + 등록 폼
│   └── edit.ejs      # 수정 폼
└── public/
    └── style.css
```

## 실습 단계
| 실습 | 내용 | 관련 코드 |
|---|---|---|
| 실습 1 | routes/views/public으로 구조화 | `app.js`, `routes/todos.js` |
| 실습 2 | 등록: POST → INSERT → redirect | `routes/todos.js`의 `POST /` |
| 실습 3 | 완료 체크·제목 수정 (UPDATE) | `POST /:id/toggle`, `POST /:id/edit` |
| 실습 4 | 삭제 (DELETE) — CRUD 완성 | `POST /:id/delete` |
| 실습 5 | 마감일 + 완료/미완료 필터, GitHub push | `due_date`, `?filter=` |
