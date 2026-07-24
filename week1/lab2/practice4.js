// practice4.js — 간단한 성적 처리기 (lab1 sample10 확장판)
//
// 목적: 객체 배열, 함수, 조건문, 배열 메서드(map/filter/reduce)를
//       함께 사용해 학생들의 성적을 처리하는 프로그램을 작성한다.
//
// 요구사항:
// 1. 아래와 같이 이름과 점수를 가진 학생 객체 배열을 준비한다.
//    const students = [
//      { name: "홍길동", score: 88 },
//      { name: "김철수", score: 95 },
//      { name: "이영희", score: 52 },
//      { name: "박민수", score: 67 },
//      { name: "최영수", score: 73 },
//    ];
// 2. getGrade(score) 함수를 만들어 점수를 A/B/C/D/F 학점으로 변환한다.
// 3. 각 학생의 이름, 점수, 학점을 한 줄씩 출력한다.
// 4. 전체 학생의 평균 점수를 계산해 출력한다. (소수점 첫째 자리까지)
// 5. 60점 이상인 합격자만 걸러 이름 목록을 출력한다.
//
// 실행: node practice4.js

const students = [
  { name: "홍길동", score: 88 },
  { name: "김철수", score: 95 },
  { name: "이영희", score: 52 },
  { name: "박민수", score: 67 },
  { name: "최영수", score: 73 },
];

function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

students.forEach((s) => {
  console.log(`${s.name} - 점수: ${s.score}, 학점: ${getGrade(s.score)}`);
});

const total = students.reduce((sum, s) => sum + s.score, 0);
const average = total / students.length;
console.log("평균 점수:", average.toFixed(1));

const passed = students.filter((s) => s.score >= 60).map((s) => s.name);
console.log("합격자 명단:", passed);
