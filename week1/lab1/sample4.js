// sample4.js — 문자열 다루기

const firstName = "길동";
const lastName = "홍";

// 템플릿 리터럴: 백틱(`)과 ${} 를 사용해 변수를 문자열 안에 바로 넣을 수 있다.
console.log(`제 이름은 ${lastName}${firstName} 입니다.`);

// 문자열 이어붙이기 (+ 연산자로도 가능)
console.log(lastName + firstName);

// 문자열 길이
const greeting = "Hello, JavaScript!";
console.log("문자열 길이:", greeting.length);

// 대소문자 변환
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

// 부분 문자열 잘라내기
console.log(greeting.slice(0, 5)); // 0번째부터 5번째 앞까지

// 특정 문자열이 포함되어 있는지 확인
console.log(greeting.includes("Java"));

// 공백 제거
const padded = "   여백 있는 문자열   ";
console.log(`[${padded.trim()}]`);
