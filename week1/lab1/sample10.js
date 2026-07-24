// sample10.js — 종합 실습: 학생 성적 관리

// 여기까지 배운 변수, 배열, 객체, 함수, 조건문, 반복문을 모두 활용한다.

const students = [
  { name: "홍길동", score: 85 },
  { name: "김철수", score: 92 },
  { name: "이영희", score: 58 },
  { name: "박민수", score: 74 },
];

// 함수: 점수를 받아 학점을 반환
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

// 반복문 + 조건문으로 학생별 결과 출력
for (let i = 0; i < students.length; i++) {
  const s = students[i];
  const grade = getGrade(s.score);
  console.log(`${s.name} - 점수: ${s.score}, 학점: ${grade}`);
}

// map으로 학점 정보를 추가한 새로운 배열 만들기
const studentsWithGrade = students.map((s) => ({
  ...s,
  grade: getGrade(s.score),
}));
console.log(studentsWithGrade);

// filter + reduce로 평균 점수, 합격자 수 계산
const total = students.reduce((sum, s) => sum + s.score, 0);
const average = total / students.length;
console.log("평균 점수:", average.toFixed(1));

const passed = students.filter((s) => s.score >= 60);
console.log(`합격자 수: ${passed.length}명 / 전체 ${students.length}명`);
