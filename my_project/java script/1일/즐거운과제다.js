

//1번

var name = "하태웅";  
const age = 28;         
const location = "인천";  

//2번

console.log(typeof name);      
console.log(typeof age);       
console.log(typeof location);  

//3번

const num1 = 2;
const num2 = 1;

console.log(num1 + num2);  
console.log(num1 - num2);  
console.log(num1 * num2);  
console.log(num1 / num2);  
console.log(num1 % num2);  

//아래지문은 후위연산, 상수값이 변하므로 let 사용해야됨!

let num3 = 3;
let num4 = 4;

let result1 = ++num3;
let result2 = --num4;

console.log(num3)
console.log(num4)

//4번

const firstName = "하";
const lastName = "태웅";

console.log(firstName + " " + lastName);  

//5번

const userAge = 28;

if (userAge >= 18) {
  console.log("성인입니다.");
} else {
  console.log("미성년자입니다.");
}

//6번

const ageStatus = (userAge >= 18) ? "성인" : "미성년자";
console.log(ageStatus);  

//7번

const day = 1;

switch (day) {
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
      console.log("목요일");
    break;
  case 5:
      console.log("금요일");
    break;
  case 6:
      console.log("토요일");
    break;
  case 7:
      console.log("일요일");
    break;
  // 7 이상의수 처리
  default:
    console.log("1~7까지의 수를 넣어주세요");
}

//8번

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//9번

let i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}

//10번

const fruits = ["사과", "딸기", "레몬"];
fruits.push("포도");   
fruits.shift();        
console.log(fruits);   

//11번

for (const fruit of fruits) {
  console.log(fruit);  
}

//12번

const person = {
  name: "하태웅",
  age: 28,
  job: "예비 개발자"
};

console.log(person.name);  
console.log(person.age);   
console.log(person.job);  

//13번

person.address = "인천";    
person.job = "학생";   
console.log(person);       

//14번

function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(4, 7));  

//15번

const concatenateStrings = (str1, str2) => str1 + " " + str2;

console.log(concatenateStrings("딸기", "바나나"));  

//16번

function createPerson(name, age) {
  return { name: name, age: age };
}

console.log(createPerson("하태웅", 28));  

//17번

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("하태웅", 28);
console.log(person1.name); 
console.log(person1.age);   

//18번

class Employee extends Person {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
}

const employee1 = new Employee("하태웅", 28, "예비 개발자");
console.log(employee1.name);  
console.log(employee1.age);   
console.log(employee1.job);   

//19번

class PersonWithGreet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`안녕하세요, 저는 ${this.name}입니다.`);
  }
}

const person2 = new PersonWithGreet("하태웅", 28);
person2.greet();  

//20번

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);  

//const 대신 let 사용 가능! (8,9번 문항은 값이 변하므로 제외)