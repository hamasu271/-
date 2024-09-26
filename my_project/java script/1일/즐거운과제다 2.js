// 1. var, let, const를 사용하여 각각 변수를 선언하고 값을 할당하세요.
var x = 1;
let i = 10;
const y = 2;
console.log(i); // 10

// 2. 다음 변수들의 데이터 타입을 콘솔에 출력하세요.
let a = 42;
let b = 'hello';
let c = true;
let d = null;
let e;

console.log(typeof a); // number
console.log(typeof b); // string
console.log(typeof c); // boolean
console.log(typeof d); // null
console.log(typeof e); // undefined

// 3. 두 개의 숫자를 더하고, 뺄셈, 곱셈, 나눗셈을 하는 코드를 작성하세요.
let num1 = 10;
let num2 = 5;
console.log(num1 + num2); // 15
console.log(num1 - num2); // 5
console.log(num1 * num2); // 50
console.log(num1 / num2); // 2

// 4. 두 개의 숫자를 비교하고 결과를 콘솔에 출력하세요. 
//(현재num1=10, num2=5)
console.log(num1 > num2); // true
console.log(num1 < num2); // false
console.log(num1 == num2); // false
console.log(num1 !== num2); // true

// 5. 논리 연산자를 사용하여 두 개의 불리언 변수를 조합하세요.
let c = true;
let d = false;

console.log(c && d);  // false (둘 다 true여야만 true)
console.log(c || d);  // true (하나라도 true면 true)
console.log(!c);      // false (true의 반대)

// 6. 할당 연산자를 사용하여 변수에 값을 더하고 빼세요.
let f = 10;
f += 5; // a = a + 5
console.log(f); // 15
f -= 3; // a = a - 3
console.log(f); // 12

// 7. 두 개의 문자열을 연결하고 결과를 출력하세요.
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;
console.log(result); // Hello World

// 8. 템플릿 리터럴을 사용하여 변수를 문자열에 포함하세요.
let name = "Alice";
let age = 25;
let message = `제이름은 ${name} 이고 저는 ${age} 세 입니다.`;
console.log(message); //제이름은 Alice 이고  저는 25세 입니다.

// 9. 배열을 선언하고 요소에 접근하여 출력하세요.
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Cherry

// 10. 객체를 선언하고 속성에 접근하여 출력하세요.
let person = {
  name: "John",
  age: 30,
  city: "New York"
};
console.log(person.name); // John
console.log(person.age); // 30
console.log(person.city); // New York

// 11. 두 수를 더하는 함수를 선언하고 호출하여 결과를 출력하세요.
function add(a, b) {
  return a + b;
}
console.log(add(3, 5)); // 8

// 12. 주어진 수가 짝수인지 홀수인지 판단하는 조건문을 작성하세요.
let num = 7;
if (num % 2 === 0) {
  console.log("짝수입니다.");
} else {
  console.log("홀수입니다."); // 홀수
}

// 13. 1부터 10까지의 숫자를 출력하는 for 반복문을 작성하세요.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 14. 1부터 10까지의 숫자를 출력하는 while 반복문을 작성하세요.
let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}

// 15. 배열의 각 요소를 출력하는 forEach 반복문을 작성하세요.
let fruits2 = ['Apple', 'Banana', 'Cherry'];
fruits2.forEach(function(fruit) {
  console.log(fruit);
});

// 16. 배열의 각 요소에 2를 곱한 새로운 배열을 반환하는 코드를 작성하세요.
let numbers = [1, 2, 3, 4];
let doubledNumbers = numbers.map(function(num) {
  return num * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8]

// 17. 배열에서 짝수만 필터링하는 코드를 작성하세요.
let numbers2 = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers2.filter(function(num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4, 6]

// 18. 문자열을 대문자로 변환하고 출력하는 코드를 작성하세요.
let str = 'hello world';
let upperStr = str.toUpperCase();
console.log(upperStr); // HELLO WORLD

// 19. 현재 날짜와 시간을 출력하는 코드를 작성하세요.
let now = new Date();
console.log(now); // 현재 날짜와 시간이 출력됨(new Date코드)

// 20. Math 객체를 사용하여 주어진 수의 제곱근을 구하는 코드를 작성하세요.
let num3 = 16;
let sqrtNum = Math.sqrt(num3);
console.log(sqrtNum); // 4