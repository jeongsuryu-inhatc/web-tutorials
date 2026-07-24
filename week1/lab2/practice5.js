// practice5.js — 소수(素數) 판별 프로그램
//
// 목적: 중첩 반복문과 조건문을 사용해 소수를 판별하는 프로그램을 작성한다.
//
// 요구사항:
// 1. isPrime(n) 함수를 만든다. n이 소수이면 true, 아니면 false를 반환한다.
//    - 소수: 1과 자기 자신으로만 나누어떨어지는, 1보다 큰 자연수.
//    - 힌트: 2부터 n-1까지(또는 더 효율적으로 Math.sqrt(n)까지) 나누어
//      떨어지는 수가 하나라도 있으면 소수가 아니다.
// 2. 1부터 50까지의 숫자 중 isPrime(n)이 true인 숫자만 배열에 모은다.
// 3. 모아진 소수 배열을 한 번에 출력한다.
//
// 실행: node practice5.js

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const primes = [];
for (let n = 1; n <= 50; n++) {
  if (isPrime(n)) {
    primes.push(n);
  }
}

console.log("1~50 사이의 소수:", primes);
