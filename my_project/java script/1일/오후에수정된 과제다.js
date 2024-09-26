// 1. 변수 선언과 할당
var name = "하태웅";
let age = 28;
const residence = "인천";

// 2. const를 이용한 객체 선언
const person = {
    name: "하태웅",
    age: 28
};

// 3. console.log로 객체 속성 출력
console.log(person.name); // 하태웅
console.log(person.age);  // 28

// 4. 데이터 타입 확인
console.log(typeof name);      // string
console.log(typeof age);       // number
console.log(typeof residence); // string
console.log(typeof person);    // object

// 5. 산술 연산
let num1 = 10;
let num2 = 5;

console.log(num1 + num2); // 15
console.log(num1 - num2); // 5
console.log(num1 * num2); // 50
console.log(num1 / num2); // 2
console.log(num1 % num2); // 0

// 6. 문자열 연결
let firstName = "태웅";
let lastName = "하";
let fullName = lastName + " " + firstName;
console.log(fullName); // 하 태웅

// 7. 조건문
let userAge = 28;

if (userAge >= 18) {
    console.log("성인입니다.");
} else {
    console.log("미성년자입니다.");
}

// 8. 삼항 연산자
let userStatus = userAge >= 18 ? "성인" : "미성년자";
console.log(userStatus); // 성인

// 9. 배열 사용
let favoriteColors = ["빨간색", "초록색", "파란색"];
console.log(favoriteColors[0]); // 빨간색
console.log(favoriteColors[1]); // 초록색
console.log(favoriteColors[favoriteColors.length - 1]); // 파란색

// 10. 배열 반복과 합계 계산
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum); // 15

// 11. 논리 연산자1 (AND 연산)
let g = true;
let h = false;
console.log(g && h); // false

// 12. 논리 연산자2 (OR 연산)
let g = true;
let h = false;
console.log(g || h); // true

// 13. 논리 연산자3 (NOT 연산)
let g = true;
let h = false;
console.log(!g);  // false
console.log(!h); // true