// practice3.js — 최댓값 / 최솟값 / 평균 계산기
//
// 목적: 함수와 배열을 사용해 숫자 목록을 분석하는 프로그램을 작성한다.
//
// 요구사항:
// 1. 아래와 같은 숫자 배열을 준비한다.
//    const numbers = [12, 45, 7, 89, 34, 3, 67];
// 2. getMax(arr), getMin(arr), getAverage(arr) 세 개의 함수를 각각 만든다.
//    - getMax: 배열에서 가장 큰 값을 반환
//    - getMin: 배열에서 가장 작은 값을 반환
//    - getAverage: 배열 값들의 평균을 반환
// 3. 반복문을 사용해도 되고, reduce 등 배열 메서드를 사용해도 된다.
// 4. 세 함수의 결과를 각각 console.log로 출력한다.
//
// 실행: node practice3.js

const numbers = [12, 45, 7, 89, 34, 3, 67];

function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function getMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function getAverage(arr) {
  const total = arr.reduce((sum, n) => sum + n, 0);
  return total / arr.length;
}

console.log("최댓값:", getMax(numbers));
console.log("최솟값:", getMin(numbers));
console.log("평균:", getAverage(numbers).toFixed(2));
