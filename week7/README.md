# 7주차 — Git을 활용한 형상관리

이번 주는 코드가 아니라 **명령어를 직접 실행하는 실습**이다. 지금까지의 실습 폴더(week1~week6)를 Git으로 관리하고 GitHub에 올린다.

## 실습 1. Git 설치와 사용자 설정
```bash
# 설치 확인 (https://git-scm.com 에서 설치)
git --version

# 사용자 정보 설정 (커밋에 기록됨)
git config --global user.name "홍길동"
git config --global user.email "hong@example.com"

# 설정 확인
git config --list
```

## 실습 2. 로컬 저장소와 첫 커밋
```bash
cd 내-실습-폴더        # week1~6이 들어있는 폴더로 이동
git init               # Git 저장소로 만들기
git status             # 현재 상태 보기 (수시로 실행할 것!)
git add .              # 모든 파일을 스테이징
git commit -m "feat: 1~6주차 실습 결과물 추가"
git log                # 커밋 이력 확인
```

## 실습 3. GitHub 원격 저장소에 push
1. https://github.com 에서 계정을 만들고 `web-tutorials` 레포지토리를 생성한다 (README 없이).
2. 로컬 저장소와 연결하고 올린다.
```bash
git remote add origin https://github.com/내아이디/web-tutorials.git
git branch -M main
git push -u origin main
```
3. GitHub 페이지를 새로고침해 파일이 올라갔는지 확인한다.

## 실습 4. 브랜치 생성과 병합
```bash
git switch -c feature/readme   # 브랜치 만들고 이동
# README.md를 수정한 뒤...
git add README.md
git commit -m "docs: README에 실습 목록 추가"
git switch main                # main으로 돌아와서
git merge feature/readme       # 병합
git push
```

## 실습 5. README 작성 (최종 제출물)
`README_TEMPLATE.md`를 참고해 레포지토리 README.md를 작성한다.
**제출: GitHub 레포지토리 주소** (의미 있는 커밋 5개 이상, 브랜치 병합 1회 포함)

## 좋은 커밋 메시지 규칙
- `feat:` 새 기능 · `fix:` 버그 수정 · `docs:` 문서 · `style:` 스타일
- 예) `feat: 방명록 페이지에 삭제 기능 추가`

## 실습 6. github > codespace IDE 

index.html 생성 

## install package: live server 

## 챗봇 - 행운볼 추천 게임 생성  
index.html 파일에 행운볼 추첨 게임 (로또와 가장 유사하며 랜덤 알고리즘 학습)을 사이트로 만들어줘


## vi 사용법 배우기 
- directory 생성 
- directory 이동 
- 파일 생성
- 파일 편집 (text 입력/수정/삭제)
- 파일 커서 이동(처음/맨뒤/페이지/라인)
- 파일 이름 변경 
- 파일 복사/이동/삭제 

## antigravity cli 설치 
antigravity.google/download 

Antigravity CLI
Work with Antigravity directly in your codebase. Build, debug, and ship from your terminal. Describe what you need, and Antigravity handles the rest.

macOS|Linux
curl -fsSL https://antigravity.google/cli/install.sh | bash

✅ Antigravity CLI installed successfully at /home/codespace/.local/bin/agy
Run 'agy' to start the CLI

--- 

## 실습 7 - Stitch - Design with AI - Google

웹 > 챗봇 메시지 
물방울 모양의 투명하고 세련되게 APPLE 스타일을 메인 디자인 시안으로 작성해줘

## Stitch - Design with AI - Google

웹 > 챗봇 메시지 
물방울 모양의 투명하고 세련되게 APPLE 스타일을 메인 디자인 시안으로 작성해줘


## ... 더보기 메뉴 
- Download 하기 
- stitch_sleek_glass_drop 폴더 
- 폴더의 파일 3개를 codespace에 업로드(탐색기 - 드래그&드롭)

# agy 실행 
@code.html @Design.md @screen.png 파일을 참조하여 index.html 파일의 디자인을 변경해줘.


## 실습 8 - cloudflare - cloudflare.com
- 결과: https://html-demo-project.pages.dev
### 과정 
- 가입 
- Workers & Pages 
- Create Application 
- Upload
  [폴더]/index.html 
  glassdrop/index.html 

