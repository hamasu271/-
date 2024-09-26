
// 문제 1
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log("짝수입니다");
    } else {
        console.log("홀수입니다");
    }
}

function checkEvenOdd(number) {
    console.log(number % 2 === 0 ? "짝수입니다" : "홀수입니다");
}




// 문제 2
function checkAge(age) {
    if (age >= 18) {
        console.log("성인입니다");
    } else {
        console.log("미성년자입니다");
    }
}

function checkAge(age) {
    console.log(age >= 18 ? "성인입니다" : "미성년자입니다");
}



// 문제 3
function getDayName(dayNumber) {
    switch (dayNumber) {
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

            //디폴트값은 임의로 추가해두었습니다 :)
        default:
            console.log("유효하지 않은 번호입니다.");
    }
}



// 문제 4

//1부터시작 짝수출력
function printEvenNumbers() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

//2부터시작 2씩증가
function printEvenNumbers() {
    for (let i = 2; i <= 100; i += 2) {
        console.log(i);
    }
}


// 문제 5
function printNumbers() {
    let i = 5;
    while (i <= 15) {
        console.log(i);
        i++;
    }
}

// 문제 6
function inputUntilTen() {
    let number;
    do {
        number = parseInt(prompt("입력할 숫자"));
        console.log(number);
    } while (number !== 10);
}


// 문제 7
function addNumbers(a, b) {
    return a + b;
}

const addNumbers = (a, b) => a + b;
console.log(addNumbers(a, b));


// 문제 8
function multiplyNumbers(a, b, c) {
    return a * b * c;
}

// 문제 9
function greet(name) {
    console.log(`안녕하세요, ${name}님!`);
}


// 문제 10
const subtract = function(a, b) {
    return a - b;
};

// 문제 11
const sum = function(a, b, c) {
    return a + b + c;
};


// 문제 12
const add = (a, b) => a + b;

// 문제 13
const square = (n) => n * n;

// 문제 14
const doubleArray = (arr) => arr.map(x => x * 2);

// 문제 15
const checkAgeArrow = (age) => age >= 18 ? "성인" : "미성년자";


// 문제 16
function findMax(a, b) {
    return a > b ? a : b;
}

// 문제 17
function grade(score) {
    if (score >= 90) {
        console.log('A');
    } else if (score >= 80) {
        console.log('B');
    } else if (score >= 70) {
        console.log('C');
    } else {
        console.log('F');
    }
}

// 문제 18
function getSeason(month) {
    switch (month) {
        case 3:
        case 4:
        case 5:
            console.log("봄");
            break;
        case 6:
        case 7:
        case 8:
            console.log("여름");
            break;
        case 9:
        case 10:
        case 11:
            console.log("가을");
            break;
        case 12:
        case 1:
        case 2:
            console.log("겨울");
            break;
//디폴트값 임의 추가
        default:
            console.log("12월 이상의 달은 존재하지 않습니다");
    }
}


// 문제 19
function sumNumbers() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    console.log(sum);
}

function sumNumbers() {
    let sum = 0;
    let i = 1;
    while (i <= 10) {
        sum += i;
        i++;
    }
    console.log(sum);
}

// 문제 20
function printMultiplesOfThree() {
    let i = 1;
    while (i <= 20) {
        if (i % 3 === 0) {
            console.log(i);
        }
        i++;
    }
}

// 문제 21
function printMultiplesOfTen() {
    let i = 0;
    do {
        if (i % 10 === 0) {
            console.log(i);
        }
        i++;
    } while (i <= 100);
}


// 문제 22
function findMaxOfThree(a, b, c) {
    return Math.max(a, b, c);
}

// 문제 23
function compareStrings(str1, str2) {
    if (str1 === str2) {
        console.log("동일함");
    } else {
        console.log("동일하지 않음");
    }
}

// 문제 24
//a,b,c부분을 숫자로 대체해서 넣습니다!
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
console.log(calculateAverage([a, b, c])); 


function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    return sum / numbers.length;
}
console.log(calculateAverage([a, b, c]));

// 문제 25
const squareArray = function(arr) {
    return arr.map(x => x * x);
};

// 문제 26
const combineAndLength = function(str1, str2) {
    return (str1 + str2).length;
};

// 문제 27
const findMaxInArray = function(arr) {
    return Math.max(...arr);
};


// 문제 28
const getLongerString = (str1, str2) => str1.length >= str2.length ? str1 : str2;

// 문제 29
const addFiveToArray = (arr) => arr.map(x => x + 5);

// 문제 30
const checkSum = (a, b, c) => (a + b + c) >= 100 ? "합격" : "불합격";
