# subject*.js Mermaid 설명서

## 파일 구성

각 파일은 독립적인 Express 서버다. 점선은 학습 순서이며 파일 사이의 import 관계는 아니다.

```mermaid
flowchart LR
    S["subject_select.js<br/>조회"] -.-> I["subject_ins.js<br/>조회 + 추가"]
    I -.-> E["subject_edit.js<br/>조회 + 추가 + 수정"]
    E -.-> D["subject_del.js<br/>전체 CRUD"]
    S --> C["subject_common.js"]
    I --> C
    E --> C
    D --> C
    S --> DB["db.js"]
    I --> DB
    E --> DB
    D --> DB
    DB --> T[("MySQL subject 테이블")]
```

| 파일 | 역할 |
|---|---|
| subject_select.js | GET /subjects로 목록 조회, subject_select 뷰 렌더링 |
| subject_ins.js | 목록 조회와 POST /subjects 추가, subject_ins 뷰 사용 |
| subject_edit.js | 조회·추가·수정, subject_edit 목록 뷰와 subject_form 수정 뷰 사용 |
| subject_del.js | 조회·추가·수정·삭제, subject_del 목록 뷰와 subject_form 수정 뷰 사용 |
| subject_common.js | asyncHandler, validSubject, setupApp, startServer 제공 |

## 공통 초기화와 종료

setupApp은 EJS와 views 경로를 설정하고 URL 인코딩 폼 본문 파서를 등록한다. GET / 요청은 /subjects로 이동한다.

```mermaid
flowchart TD
    A["Express 앱 생성<br/>PORT 환경 변수 또는 3000"] --> B["setupApp"]
    B --> C["파일별 라우트 등록"]
    C --> D["startServer<br/>오류 미들웨어 등록"]
    D --> Q["SELECT id FROM subject LIMIT 1"]
    Q --> R{"DB 확인 성공?"}
    R -->|"아니요"| F["실패 로그<br/>db.end<br/>process.exitCode = 1"]
    R -->|"예"| L["app.listen"]
    L --> OK["수신 성공 시 서버 주소 출력"]
    L -->|"error 이벤트"| ERR["오류 로그<br/>db.end<br/>process.exitCode = 1"]
    L -->|"SIGINT 또는 SIGTERM"| STOP["server.close 후<br/>콜백에서 db.end"]
```

시작 쿼리는 DB 연결과 테이블의 id 조회 가능 여부를 확인한다. 테이블에 행이 없어도 성공한다.

## 조회 흐름

모든 실행 파일은 같은 SQL을 사용하며, 파일별 목록 EJS에 subjects 배열을 전달한다.

```mermaid
sequenceDiagram
    actor U as 사용자
    participant A as Express
    participant DB as MySQL 풀
    participant V as 목록 EJS
    U->>A: GET /subjects
    A->>DB: SELECT * FROM subject ORDER BY id DESC
    DB-->>A: rows와 fields
    Note over A: const [subjects]로 행 배열 추출
    A->>V: res.render(뷰 이름, { subjects })
    V-->>U: HTML 응답
```

id 내림차순으로 정렬하므로 더 큰 ID의 과목이 먼저 나타난다.

## 추가 흐름과 검증

subject_ins.js, subject_edit.js, subject_del.js에서 제공한다.

```mermaid
flowchart TD
    A["POST /subjects"] --> V{"validSubject 통과?"}
    V -->|"아니요"| R["/subjects로 리다이렉트"]
    V -->|"예"| N["과목명 trim<br/>점수 Number 변환"]
    N --> I["INSERT INTO subject<br/>(subject, score) VALUES (?, ?)"]
    I --> R
    R --> G["브라우저 GET /subjects<br/>목록 다시 조회"]
```

validSubject는 다음 조건을 모두 검사한다.

- 과목명은 문자열이며 trim 후 길이가 1~100자다.
- 점수 원본은 문자열이며 공백만 있는 값이 아니다.
- Number로 변환한 점수는 0~100 범위의 정수다.

검증 실패 시 오류 메시지 없이 목록으로 이동한다. SQL의 물음표에는 변환한 값을 매개변수로 전달한다.

## 수정 흐름

subject_edit.js와 subject_del.js는 수정 화면 요청과 저장 요청을 구분한다.

```mermaid
flowchart TD
    G["GET /subjects/:id/edit"] --> S["SELECT * FROM subject WHERE id = ?"]
    S --> X["const [[subject]]로 첫 행 추출"]
    X --> E{"과목 존재?"}
    E -->|"아니요"| R["/subjects로 리다이렉트"]
    E -->|"예"| F["subject_form 렌더링<br/>{ subject } 전달"]
    F -.->|"폼 제출"| P["POST /subjects/:id/edit"]
    P --> V{"validSubject 통과?"}
    V -->|"아니요"| R
    V -->|"예"| U["UPDATE subject SET subject = ?, score = ?<br/>WHERE id = ?"]
    U --> R
```

조회 ID는 req.params.id다. 수정에서는 trim한 과목명, Number로 변환한 점수, ID 순으로 값을 바인딩한다. UPDATE 결과의 영향받은 행 수는 확인하지 않으므로 대상 ID가 없어도 SQL 오류가 없으면 목록으로 이동한다.

## 삭제 흐름

subject_del.js에만 삭제 라우트가 있다. 파일 이름과 달리 조회·추가·수정도 모두 포함한 완성본이다.

```mermaid
sequenceDiagram
    actor U as 사용자
    participant A as subject_del.js
    participant DB as MySQL 풀
    U->>A: POST /subjects/:id/delete
    A->>DB: DELETE FROM subject WHERE id = ?
    Note over A,DB: req.params.id를 매개변수로 바인딩
    DB-->>A: 실행 결과
    A-->>U: 302 리다이렉트 /subjects
    U->>A: GET /subjects
    A->>DB: 목록 SELECT
    DB-->>A: 현재 목록
    A-->>U: subject_del 뷰로 생성한 HTML
```

삭제는 validSubject를 호출하지 않으며 영향받은 행 수도 확인하지 않는다.

## 비동기 오류 처리

모든 CRUD 라우트는 asyncHandler로 감싼다. 반환된 Promise가 거부되면 catch(next)가 공통 오류 미들웨어로 전달한다.

```mermaid
flowchart LR
    A["HTTP 요청"] --> B["asyncHandler"]
    B --> C["async 라우트 처리"]
    C -->|"성공"| D["렌더링 또는 리다이렉트"]
    C -->|"Promise 거부"| E["catch(next)"]
    E --> F["공통 오류 미들웨어"]
    F --> G["콘솔에 오류 코드 또는 메시지"]
    F --> H["HTTP 500<br/>데이터베이스 처리 중 오류가 발생했습니다."]
```

입력 검증 실패는 리다이렉트 경로다. 서버 시작 전 DB 확인 실패는 startServer 내부 try/catch가 별도로 처리한다.

## 실행 방법과 DB 준비

1. npm install로 의존성을 설치한다.
2. db.js의 접속 설정과 subject_schema.sql의 데이터베이스 이름을 맞추고 스키마를 실행한다.
3. 아래 명령 중 하나를 실행하고 http://localhost:3000/subjects 에 접속한다.

현재 db.js는 testdb를 사용하지만 subject_schema.sql은 todo_app을 생성·선택한다. 같은 데이터베이스를 사용하도록 맞춰야 한다.

| 명령 | 실행 파일 |
|---|---|
| npm run subject:select | subject_select.js |
| npm run subject:insert | subject_ins.js |
| npm run subject:edit | subject_edit.js |
| npm run subject:delete 또는 npm run subject:crud | subject_del.js |

기본 포트가 같으므로 다음 단계로 넘어갈 때 Ctrl+C로 기존 서버를 종료한다. PORT 환경 변수로 포트를 바꿀 수도 있다.

테이블 컬럼은 id(INT 자동 증가 기본 키), subject(VARCHAR 100, NOT NULL), score(INT, NOT NULL)다. 제공된 스키마에는 점수 범위 CHECK 제약이 없으며, 0~100 검증은 JavaScript에서 수행한다.