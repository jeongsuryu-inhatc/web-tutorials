// sample8.js — 배열

// 배열 생성과 인덱스 접근 (인덱스는 0부터 시작)
const fruits = ["사과", "바나나", "포도"];
console.log("첫 번째 과일:", fruits[0]);
console.log("배열 길이:", fruits.length);

// 요소 추가/제거
fruits.push("딸기");        // 맨 뒤에 추가
console.log(fruits);
fruits.pop();                // 맨 뒤 요소 제거
console.log(fruits);

// for문으로 배열 순회
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i}번: ${fruits[i]}`);
}

// forEach: 배열의 각 요소마다 함수를 실행
fruits.forEach((fruit, index) => {
  console.log(`forEach - ${index}: ${fruit}`);
});

// map: 각 요소를 변형해 새로운 배열을 만듦
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => n * 2);
console.log("두 배로:", doubled);

// filter: 조건에 맞는 요소만 골라 새로운 배열을 만듦
const evenNumbers = numbers.filter((n) => n % 2 === 0);
console.log("짝수만:", evenNumbers);

// reduce: 배열의 모든 요소를 하나의 값으로 누적 계산
const sum = numbers.reduce((total, n) => total + n, 0);
console.log("합계:", sum);
