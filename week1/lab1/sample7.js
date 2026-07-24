// sample7.js — 함수

// 함수 선언식: 이름 붙은 함수를 정의하는 기본 방법
function greet(name) {
  return `안녕하세요, ${name}님!`;
}
console.log(greet("홍길동"));

// 매개변수 여러 개, 반환값 활용하기
function add(a, b) {
  return a + b;
}
const result = add(3, 4);
console.log("3 + 4 =", result);

// 매개변수 기본값 지정
function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(5));    // b 생략 -> 기본값 2 사용
console.log(multiply(5, 3)); // b = 3

// 화살표 함수: function 키워드 없이 짧게 표현하는 방식
const square = (x) => x * x;
console.log("5의 제곱:", square(5));

// 화살표 함수 + 여러 줄 처리
const introduce = (name, age) => {
  const message = `저는 ${name}이고, 나이는 ${age}살입니다.`;
  return message;
};
console.log(introduce("김철수", 21));
