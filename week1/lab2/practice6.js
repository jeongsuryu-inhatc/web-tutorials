// practice6.js — 간단 계산기 함수 모음
//
// 목적: 함수와 조건문(switch 또는 if)을 사용해
//       사칙연산 계산기를 만드는 프로그램을 작성한다.
//
// 요구사항:
// 1. add(a, b), subtract(a, b), multiply(a, b), divide(a, b)
//    네 개의 함수를 각각 만든다.
// 2. calculate(a, operator, b) 함수를 만든다.
//    - operator로 "+", "-", "*", "/" 문자를 받아
//      switch문(또는 if/else if)으로 알맞은 함수를 호출해 결과를 반환한다.
//    - "/"이면서 b가 0인 경우에는 에러 대신 "0으로 나눌 수 없습니다"를 반환한다.
// 3. calculate(10, "+", 5), calculate(10, "/", 0) 등 여러 경우를 호출해
//    결과를 console.log로 확인한다.
//
// 실행: node practice6.js

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function calculate(a, operator, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) {
        return "0으로 나눌 수 없습니다";
      }
      return divide(a, b);
    default:
      return "지원하지 않는 연산자입니다";
  }
}

console.log(calculate(10, "+", 5));
console.log(calculate(10, "-", 5));
console.log(calculate(10, "*", 5));
console.log(calculate(10, "/", 5));
console.log(calculate(10, "/", 0));
