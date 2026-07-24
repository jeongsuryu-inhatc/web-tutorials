// sample6.js — 반복문 (for, while)

// for문: 반복 횟수를 알 때 주로 사용
for (let i = 1; i <= 5; i++) {
  console.log(`for 반복 ${i}번째`);
}

// while문: 조건이 참인 동안 계속 반복
let count = 0;
while (count < 3) {
  console.log(`while 반복, count = ${count}`);
  count++;
}

// 반복문 안에서 조건문 함께 쓰기: 1~10 중 짝수만 출력
for (let n = 1; n <= 10; n++) {
  if (n % 2 === 0) {
    console.log(`${n}은 짝수입니다`);
  }
}

// break: 반복을 즉시 멈춤
for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    break;
  }
  console.log("break 예시:", i);
}

// continue: 이번 반복만 건너뛰고 다음으로 진행
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log("continue 예시:", i);
}
