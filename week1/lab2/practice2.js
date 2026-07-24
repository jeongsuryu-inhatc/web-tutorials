// practice2.js — FizzBuzz
//
// 목적: 반복문과 조건문, 나머지 연산자(%)를 함께 사용해
//       규칙에 따라 다른 값을 출력하는 프로그램을 작성한다.
//
// 요구사항:
// 1. 1부터 100까지 반복한다.
// 2. 숫자가 3의 배수이면 "Fizz"를 출력한다.
// 3. 숫자가 5의 배수이면 "Buzz"를 출력한다.
// 4. 숫자가 3과 5의 공배수(둘 다 해당)이면 "FizzBuzz"를 출력한다.
// 5. 그 외의 경우에는 숫자 자체를 출력한다.
//
// 실행: node practice2.js

for (let n = 1; n <= 100; n++) {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log("FizzBuzz");
  } else if (n % 3 === 0) {
    console.log("Fizz");
  } else if (n % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(n);
  }
}
