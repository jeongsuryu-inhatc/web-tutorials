// sample3.js — 연산자 (산술, 대입, 비교, 논리)

// 산술 연산자
let a = 10;
let b = 3;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b); // 나머지 연산

// 대입 연산자
let count = 1;
count += 1; // count = count + 1 과 동일
console.log("count:", count);

// 비교 연산자 (결과는 항상 true / false)
console.log(5 == "5");   // 값만 비교 -> true
console.log(5 === "5");  // 값과 타입까지 비교 -> false
console.log(5 > 3);
console.log(5 !== 3);

// 논리 연산자
let isAdult = true;
let hasTicket = false;
console.log("둘 다 참이어야 함:", isAdult && hasTicket);
console.log("하나라도 참이면 됨:", isAdult || hasTicket);
console.log("반대로 뒤집기:", !isAdult);
