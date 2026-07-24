// sample9.js — 객체

// 객체: 이름(key)과 값(value)의 쌍으로 데이터를 표현
const student = {
  name: "홍길동",
  age: 20,
  major: "컴퓨터공학과",
  isEnrolled: true,
};

// 속성 접근 방법 두 가지
console.log(student.name);      // 점(.) 표기법
console.log(student["age"]);    // 대괄호 표기법

// 속성 값 변경 및 새 속성 추가
student.age = 21;
student.email = "hong@example.com";
console.log(student);

// 객체 안에 함수(메서드) 넣기
const calculator = {
  a: 10,
  b: 5,
  add() {
    return this.a + this.b; // this는 이 객체 자신을 가리킴
  },
};
console.log("calculator.add():", calculator.add());

// 객체로 이루어진 배열 다루기
const students = [
  { name: "홍길동", score: 85 },
  { name: "김철수", score: 92 },
  { name: "이영희", score: 78 },
];

students.forEach((s) => {
  console.log(`${s.name}: ${s.score}점`);
});
