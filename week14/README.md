# 14주차 — AWS EC2 배포와 마무리

11주차 Todo 앱을 인터넷에 공개한다. 아키텍처: **브라우저 → nginx(80) → Node.js(3000) → MySQL**

## 실습 1. EC2 인스턴스 생성
1. AWS 프리티어 계정으로 로그인 → EC2 → 인스턴스 시작
2. 설정:
   - AMI: **Ubuntu Server 24.04 LTS**
   - 유형: t2.micro (프리티어)
   - 키페어: 새로 생성해 `.pem` 파일 안전하게 보관
   - 보안그룹: **22(SSH), 80(HTTP)** 인바운드 허용
3. 인스턴스가 `실행 중`이 되면 퍼블릭 IP를 확인한다.

## 실습 2. 접속과 서버 환경 설치
```bash
# 내 컴퓨터에서 SSH 접속
chmod 400 my-key.pem
ssh -i my-key.pem ubuntu@퍼블릭IP

# 서버에서 실행
sudo apt update
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs nginx mysql-server
node -v && nginx -v && mysql --version
```

## 실습 3. 앱 배포와 pm2 상시 실행
```bash
# DB 준비
sudo mysql
# → CREATE USER 'todo'@'localhost' IDENTIFIED BY '비밀번호';
# → GRANT ALL PRIVILEGES ON todo_app.* TO 'todo'@'localhost';
# → exit 후: sudo mysql < schema.sql

# 코드 받기
git clone https://github.com/내아이디/web-tutorials.git
cd web-tutorials/week11
npm install
# db.js의 user/password를 서버 DB 계정으로 수정

# pm2: 터미널을 꺼도 서버가 계속 돈다
sudo npm install -g pm2
pm2 start app.js --name todo
pm2 save && pm2 startup   # 재부팅 시 자동 시작
pm2 status
```

## 실습 4. nginx 리버스 프록시 (80 → 3000)
```bash
sudo cp nginx_todo.conf /etc/nginx/sites-available/todo
sudo ln -s /etc/nginx/sites-available/todo /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t            # 설정 문법 검사
sudo systemctl reload nginx
```
브라우저에서 `http://퍼블릭IP` 접속 → Todo 앱이 보이면 성공!

## 실습 5. 제출 (최종)
`RETROSPECTIVE_TEMPLATE.md`를 작성해 아래 3가지를 제출한다.
1. 배포된 서비스 URL (http://퍼블릭IP)
2. GitHub 레포지토리 주소
3. 한 학기 회고

## 문제 해결
- 접속 안 됨 → 보안그룹 80 포트 확인, `pm2 status`로 앱 확인
- 502 Bad Gateway → Node 앱이 죽어 있음: `pm2 logs todo`로 원인 확인
- DB 오류 → db.js의 계정/비밀번호, `sudo systemctl status mysql` 확인
