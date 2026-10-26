# subject GET / POST 예제

기존 `subject(id, subject, score)` 테이블과 `db.js`의 MySQL 연결을 사용합니다.
`db.js`에서 host, user, password, database를 실제 환경에 맞게 설정하세요.
테이블이 들어 있는 데이터베이스를 지정해야 합니다.

```bash
npm install
node sample_get1.js
```

브라우저에서 http://localhost:3000 에 접속하세요.
각 서버는 독립 예제입니다. 다른 예제를 실행하려면 Ctrl+C로 종료한 뒤
`node sample_post1.js`처럼 원하는 파일을 실행하세요.
`PORT` 환경 변수로 포트를 바꾸면 여러 서버를 실행할 수도 있습니다.

| 파일 | 기능 | 요청 |
|---|---|---|
| sample_get1.js | 전체 조회 | GET / |
| sample_get2.js | 과목명 부분 검색 | GET /?keyword=수학 |
| sample_get3.js | 점수 범위 조회 | GET /?min=60&max=100 |
| sample_get4.js | 점수 정렬 | GET /?order=asc |
| sample_get5.js | ID 상세 조회 | GET /subjects/1 |
| sample_post1.js | 과목 등록 | POST /subjects |
| sample_post2.js | ID로 과목명·점수 수정 | POST /subjects |
| sample_post3.js | ID로 과목 삭제 | POST /subjects |
| sample_post4.js | 과목명 부분 검색 | POST /search |
| sample_post5.js | 최소 점수 이상 조회 | POST /filter |

POST 예제는 GET /에서 입력 폼을 보여 주고, 제출한 본문을 `req.body`로 읽습니다.
GET 예제는 `req.query` 또는 `req.params`를 사용합니다.
POST 1~3은 실제 데이터를 변경하며 처리 후 303 응답으로 목록으로 이동합니다.
POST 4~5는 POST 본문 전달을 연습하기 위한 조회 예제입니다.
점수는 테이블 정의에 맞춰 MySQL INT 범위를 허용합니다.
LIKE 검색에서 `%`와 `_`는 SQL 검색 와일드카드로 동작합니다.

각 파일은 `views/sample_get1.ejs`와 같은 이름의 EJS 뷰를 사용합니다.
`sample_common.js`는 서버 설정과 입력 검사, 오류 처리를 공유하고,
`views/partials/sample_table.ejs`는 결과 표를 공유합니다. CSS는 포함하지 않습니다.
사용자 입력은 SQL 매개변수로 전달하고 EJS의 `<%=`로 이스케이프하여 출력합니다.
