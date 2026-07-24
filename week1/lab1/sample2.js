// sample2.js — 변수와 상수, 자료형

// let: 나중에 값이 바뀔 수 있는 변수를 선언할 때 사용
let age = 20;
age = 21; // 값 재할당 가능
console.log("age:", age);

// const: 한 번 정한 값이 바뀌지 않는 상수를 선언할 때 사용
const name = "홍길동";
console.log("name:", name);
// name = "김철수"; // 이 줄의 주석을 풀고 실행하면 에러가 난다 (const는 재할당 불가)

// var는 예전 방식의 변수 선언 키워드로, 요즘은 let/const를 주로 쓴다.
var oldStyle = "옛날 방식";
console.log("oldStyle:", oldStyle);

// 자료형(type) 살펴보기
let str = "문자열입니다";       // string
let num = 3.14;                 // number
let isStudent = true;           // boolean
let nothing = null;             // null (값이 없음을 명시)
let notDefined;                 // undefined (아직 값이 할당되지 않음)

console.log(typeof str, typeof num, typeof isStudent, typeof nothing, typeof notDefined);
