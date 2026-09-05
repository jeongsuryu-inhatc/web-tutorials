# WSL Ubuntu 설치 및 개발환경 구성 가이드

## 1. 목표

Windows 11에서 다음 개발환경을 구성한다.

- WSL 2
- Ubuntu 24.04 LTS
- VS Code + WSL 확장
- Git
- NVM
- Node.js 22 + npm
- MySQL Server
- Docker Engine
- Docker Compose
- netstat / ss 네트워크 도구

권장 구조:

```text
Windows 11
├── VS Code
│   └── WSL Extension
└── WSL 2
    └── Ubuntu 24.04 LTS
        ├── Git
        ├── NVM → Node.js 22 → npm
        ├── MySQL
        └── Docker → Docker Compose → MySQL Container
```

---

## 2. WSL 설치

PowerShell을 **관리자 권한**으로 실행한다.

```powershell
wsl --install -d Ubuntu-24.04
```

설치 후 Windows를 재부팅한다.

설치 가능한 배포판:

```powershell
wsl --list --online
```

WSL 상태:

```powershell
wsl -l -v
```

정상 예:

```text
NAME            STATE           VERSION
Ubuntu-24.04    Running         2
```

WSL 2를 기본값으로 지정:

```powershell
wsl --set-default-version 2
```

Ubuntu가 WSL 1이라면:

```powershell
wsl --set-version Ubuntu-24.04 2
```

---

## 3. Ubuntu 최초 설정

Windows 시작 메뉴에서 **Ubuntu 24.04 LTS**를 실행한다.

Linux 사용자와 비밀번호를 생성한다.

```text
Enter new UNIX username:
New password:
Retype new password:
```

비밀번호 입력 시 화면에 문자가 표시되지 않는 것이 정상이다.

Ubuntu 버전 확인:

```bash
lsb_release -a
```

---

## 4. Ubuntu 업데이트 및 기본 패키지

```bash
sudo apt update
sudo apt upgrade -y
```

개발 기본 패키지:

```bash
sudo apt install -y   build-essential   curl   wget   git   vim   unzip   zip   ca-certificates   gnupg   lsb-release
```

확인:

```bash
git --version
curl --version
```

---

## 5. Git 설정

```bash
git --version
```

사용자 정보:

```bash
git config --global user.name "정수"
git config --global user.email "본인의이메일@example.com"
```

확인:

```bash
git config --global --list
```

GitHub를 사용하는 경우 SSH Key 설정을 추가로 권장한다.

---

## 6. NVM 설치

Node.js 버전을 편리하게 관리하기 위해 NVM을 사용한다.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

설정 적용:

```bash
source ~/.bashrc
```

확인:

```bash
nvm --version
```

---

## 7. Node.js 22 설치

```bash
nvm install 22
```

기본 버전:

```bash
nvm alias default 22
```

사용:

```bash
nvm use 22
```

확인:

```bash
node -v
npm -v
```

예:

```text
v22.x.x
10.x.x
```

---

## 8. Node.js 테스트

```bash
mkdir -p ~/projects
cd ~/projects

mkdir node-test
cd node-test

npm init -y
```

테스트:

```bash
node -e "console.log('Node.js OK')"
```

---

## 9. Express 테스트

```bash
npm install express
```

`app.js`:

```javascript
const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('WSL Ubuntu + Node.js + Express OK!');
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
```

실행:

```bash
node app.js
```

Windows 브라우저:

```text
http://localhost:3000
```

---

## 10. VS Code 설치 및 WSL 연결

VS Code는 Windows에 설치한다.

VS Code Extensions에서:

```text
WSL
```

을 검색하여 Microsoft의 WSL 확장을 설치한다.

Ubuntu 프로젝트에서:

```bash
cd ~/projects/node-test
code .
```

VS Code 왼쪽 아래에 다음과 같이 표시되면 정상이다.

```text
WSL: Ubuntu-24.04
```

프로젝트는 가능하면 Windows 파일시스템보다 WSL 내부에 둔다.

권장:

```text
/home/사용자/projects
```

또는:

```bash
~/projects
```

---

# 11. MySQL Server 설치

## 11.1 설치

```bash
sudo apt update
sudo apt install -y mysql-server
```

확인:

```bash
mysql --version
```

## 11.2 상태 확인

```bash
sudo systemctl status mysql
```

정상 실행:

```text
Active: active (running)
```

## 11.3 MySQL 종료

```bash
sudo systemctl stop mysql
```

상태:

```bash
sudo systemctl status mysql
```

정상 종료:

```text
Active: inactive (dead)
```

## 11.4 MySQL 시작

```bash
sudo systemctl start mysql
```

재시작:

```bash
sudo systemctl restart mysql
```

간단한 상태 확인:

```bash
sudo systemctl is-active mysql
```

---

## 12. MySQL 접속

```bash
sudo mysql
```

버전:

```sql
SELECT VERSION();
```

DB 목록:

```sql
SHOW DATABASES;
```

종료:

```sql
exit;
```

---

## 13. 개발용 MySQL DB 및 사용자

MySQL 접속:

```bash
sudo mysql
```

DB 생성:

```sql
CREATE DATABASE testdb
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
```

사용자 생성:

```sql
CREATE USER 'testid'@'localhost'
IDENTIFIED BY 'testid';
```

권한:

```sql
GRANT ALL PRIVILEGES
ON testdb.*
TO 'testid'@'localhost';

FLUSH PRIVILEGES;
```

종료:

```sql
exit;
```

---

## 14. Node.js + MySQL 연결

프로젝트:

```bash
cd ~/projects
mkdir mysql-test
cd mysql-test
npm init -y
npm install mysql2
```

`dbtest.js`:

```javascript
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'testid',
  password: 'testid',
  database: 'testdb'
});

connection.connect((err) => {
  if (err) {
    console.error('MySQL 연결 실패:', err);
    return;
  }

  console.log('MySQL 연결 성공');

  connection.query(
    'SELECT VERSION() AS version',
    (err, results) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(results);
      connection.end();
    }
  );
});
```

실행:

```bash
node dbtest.js
```

정상 결과:

```text
MySQL 연결 성공
```

---

# 15. Docker 설치

Docker 공식 Ubuntu 저장소를 사용한다.

## 15.1 필수 패키지

```bash
sudo apt update

sudo apt install -y   ca-certificates   curl
```

## 15.2 Docker GPG Key

```bash
sudo install -m 0755 -d /etc/apt/keyrings

sudo curl -fsSL   https://download.docker.com/linux/ubuntu/gpg   -o /etc/apt/keyrings/docker.asc

sudo chmod a+r /etc/apt/keyrings/docker.asc
```

## 15.3 Docker Repository

```bash
sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")
Components: stable
Architectures: $(dpkg --print-architecture)
Signed-By: /etc/apt/keyrings/docker.asc
EOF
```

```bash
sudo apt update
```

## 15.4 Docker 설치

```bash
sudo apt install -y   docker-ce   docker-ce-cli   containerd.io   docker-buildx-plugin   docker-compose-plugin
```

---

## 16. Docker 확인

```bash
docker --version
docker compose version
```

Docker 상태:

```bash
sudo systemctl status docker
```

테스트:

```bash
sudo docker run hello-world
```

---

## 17. sudo 없이 Docker 사용

현재 사용자를 Docker 그룹에 추가한다.

```bash
sudo usermod -aG docker $USER
```

Ubuntu 종료:

```bash
exit
```

Windows PowerShell:

```powershell
wsl --shutdown
```

다시 Ubuntu를 실행한다.

```powershell
wsl
```

확인:

```bash
docker ps
```

---

## 18. Docker Compose MySQL

프로젝트:

```bash
mkdir -p ~/projects/mysql-docker
cd ~/projects/mysql-docker
```

`compose.yml`:

```yaml
services:
  mysql:
    image: mysql:8.0
    container_name: mysql8
    restart: unless-stopped

    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: testdb
      MYSQL_USER: testid
      MYSQL_PASSWORD: testid

    ports:
      - "3306:3306"

    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:
```

실행:

```bash
docker compose up -d
```

확인:

```bash
docker ps
```

로그:

```bash
docker logs mysql8
```

중지:

```bash
docker compose down
```

주의: Ubuntu에 직접 설치한 MySQL이 `3306` 포트를 사용 중이면 Docker MySQL도 `3306:3306`으로 실행할 수 없다.

Ubuntu MySQL을 종료하려면:

```bash
sudo systemctl stop mysql
```

그 후:

```bash
docker compose up -d
```

---

# 19. netstat 설치

Ubuntu에서 `netstat`이 없다면 `net-tools`를 설치한다.

```bash
sudo apt update
sudo apt install -y net-tools
```

확인:

```bash
netstat --version
```

또는:

```bash
which netstat
```

---

## 20. netstat 사용법

LISTEN 포트:

```bash
netstat -tuln
```

옵션:

| 옵션 | 의미 |
|---|---|
| `-t` | TCP |
| `-u` | UDP |
| `-l` | LISTEN |
| `-n` | 숫자로 표시 |

프로세스까지:

```bash
sudo netstat -tulpn
```

특정 포트:

```bash
netstat -tuln | grep 3306
netstat -tuln | grep 3000
netstat -tuln | grep 80
```

---

# 21. ss 명령어

최근 Ubuntu에서는 `netstat`보다 `ss` 사용을 권장한다.

```bash
ss -tuln
```

프로세스까지:

```bash
sudo ss -tulpn
```

MySQL:

```bash
sudo ss -tulpn | grep 3306
```

Node.js:

```bash
sudo ss -tulpn | grep 3000
```

Nginx:

```bash
sudo ss -tulpn | grep 80
```

주요 포트:

```bash
sudo ss -tulpn | grep -E ':(22|80|3000|3306)'
```

---

# 22. 주요 포트

| 포트 | 용도 |
|---:|---|
| 22 | SSH |
| 80 | HTTP / Nginx |
| 443 | HTTPS |
| 3000 | Node.js / Express |
| 3306 | MySQL |

---

# 23. WSL 종료

현재 Ubuntu 세션:

```bash
exit
```

모든 WSL 배포판 종료:

```powershell
wsl --shutdown
```

특정 배포판 실행:

```powershell
wsl -d Ubuntu-24.04
```

배포판 확인:

```powershell
wsl -l -v
```

---

# 24. 최종 개발환경 확인

다음 명령을 실행하여 설치 여부를 확인한다.

```bash
lsb_release -a
git --version
nvm --version
node -v
npm -v
mysql --version
docker --version
docker compose version
ss -tuln
```

VS Code:

```bash
code --version
```

---

# 25. 권장 프로젝트 구조

```text
/home/사용자/
│
├── projects/
│   ├── nodejs-homepage/
│   ├── express-api/
│   ├── prisma-project/
│   ├── ai-chatbot/
│   └── docker-project/
│
└── .nvm/
```

Node.js 웹 서비스의 일반적인 구조:

```text
Browser
   │
   ▼
Nginx :80 / :443
   │
   ▼
Node.js + Express :3000
   │
   ├── EJS
   ├── REST API
   └── Prisma / mysql2
           │
           ▼
         MySQL :3306
```

---

# 26. 설치 완료 체크리스트

- [ ] Windows 11
- [ ] WSL 2
- [ ] Ubuntu 24.04 LTS
- [ ] Linux 사용자 계정
- [ ] Ubuntu 업데이트
- [ ] Git
- [ ] NVM
- [ ] Node.js 22
- [ ] npm
- [ ] VS Code
- [ ] VS Code WSL Extension
- [ ] MySQL Server
- [ ] Docker Engine
- [ ] Docker Compose
- [ ] net-tools 또는 ss
- [ ] `~/projects` 개발 디렉터리

---

# 27. 핵심 명령어 모음

## WSL

```powershell
wsl --install -d Ubuntu-24.04
wsl -l -v
wsl --set-default-version 2
wsl --shutdown
```

## Ubuntu

```bash
sudo apt update
sudo apt upgrade -y
```

## Git

```bash
git --version
git config --global user.name "정수"
git config --global user.email "본인의이메일@example.com"
```

## NVM / Node.js

```bash
nvm --version
nvm install 22
nvm alias default 22
nvm use 22
node -v
npm -v
```

## MySQL

```bash
mysql --version
sudo systemctl status mysql
sudo systemctl start mysql
sudo systemctl stop mysql
sudo systemctl restart mysql
sudo mysql
```

## Docker

```bash
docker --version
docker compose version
docker ps
docker run hello-world
docker compose up -d
docker compose down
```

## 네트워크

```bash
sudo apt install -y net-tools
netstat -tuln
sudo netstat -tulpn
ss -tuln
sudo ss -tulpn
```

---

# 28. 실무 권장사항

1. WSL 2를 사용한다.
2. Ubuntu 프로젝트는 `~/projects` 아래에 둔다.
3. Node.js는 NVM으로 관리한다.
4. Git으로 소스코드를 관리한다.
5. VS Code는 WSL Remote 환경으로 사용한다.
6. MySQL은 직접 설치하거나 Docker로 운영한다.
7. MySQL 직접 설치와 Docker MySQL을 동시에 `3306` 포트로 실행하지 않는다.
8. 팀 프로젝트에서는 Docker Compose로 개발환경을 재현하는 것을 권장한다.
9. 새로운 Ubuntu 환경에서는 `ss`를 우선 사용한다.
10. 웹 서비스는 필요에 따라 `Nginx → Node.js/Express → MySQL` 구조로 확장한다.
11. 실무에서는 DB 비밀번호를 소스코드에 직접 기록하지 말고 `.env`와 비밀관리 방식을 사용한다.
12. 개발용 계정에 필요한 최소 권한만 부여하는 것을 권장한다.

---

# 29. 참고 자료

- Microsoft WSL: https://learn.microsoft.com/en-us/windows/wsl/install
- NVM: https://github.com/nvm-sh/nvm
- Docker Engine Ubuntu: https://docs.docker.com/engine/install/ubuntu/
- VS Code WSL: https://code.visualstudio.com/docs/remote/wsl

---

# 30. 완료 기준

다음 명령이 정상적으로 동작하면 기본 개발환경 구축이 완료된 것이다.

```bash
git --version
nvm --version
node -v
npm -v
mysql --version
docker --version
docker compose version
ss -tuln
```

최종 구성:

```text
Windows 11
    │
    └── WSL 2
          │
          └── Ubuntu 24.04
                │
                ├── VS Code Remote WSL
                ├── Git
                ├── NVM
                │    └── Node.js 22
                ├── MySQL
                └── Docker
                     └── Docker Compose
                          └── MySQL / 기타 Container
```
