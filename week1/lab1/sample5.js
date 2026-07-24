// sample5.js — 조건문 (if / else if / else, switch)

const score = 85;

if (score >= 90) {
  console.log("학점: A");
} else if (score >= 80) {
  console.log("학점: B");
} else if (score >= 70) {
  console.log("학점: C");
} else {
  console.log("학점: F");
}

// switch문: 하나의 값에 따라 여러 경우를 나눌 때 사용
const day = 3;

switch (day) {
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  default:
    console.log("그 외 요일");
}

// 삼항 연산자: 간단한 조건문을 한 줄로 표현
const age = 17;
const message = age >= 19 ? "성인입니다" : "미성년자입니다";
console.log(message);
