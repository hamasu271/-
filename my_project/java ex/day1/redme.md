### 1. **DOM 문제**

- DOM이란 무엇이며, JavaScript가 DOM을 조작할 수 있는 방법 중 하나를 설명하고, 해당 방법을 사용하는 예제 코드를 작성하세요.

웹 페이지의 HTML 및 XML 문서를 트리 구조로 표현한 객체 모델, JavaScript가 웹 페이지의 구조, 콘텐츠, 스타일을 동적으로 수정할 수 있습니다.


document.getElementById("myElement").innerHTML = "내용!";

위코드는 myElement요소의 내부값을 내용!으로 변경해줍니다.



### 2. **DOM 선택자 문제**

- `getElementById`, `querySelector`, `getElementsByClassName`의 차이점을 설명하고, 각각의 예시 코드를 작성하세요.

getElementById(id): 주어진 id 속성을 가진 단일 요소를 반환합니다.
const element = document.getElementById("myId");
console.log(element);

querySelector(selector): CSS 선택자를 사용해 일치하는 첫 번째 요소를 반환합니다. 
const element = document.querySelector(".myClass");
console.log(element);

getElementsByClassName(className): 주어진 클래스 이름을 가진 모든 요소를 반환하며, HTMLCollection을 반환합니다.
const elements = document.getElementsByClassName("myClass");
console.log(elements);


### 3. **DOM 이벤트 문제**

- `addEventListener`를 사용해 버튼을 클릭할 때 콘솔에 "Button clicked!"를 출력하는 코드를 작성하세요.

const button = document.getElementById("myButton");
button.addEventListener("click", function() {
  console.log("Button clicked!");
});



### 4. **BOM 문제** *(Extra)*

- BOM이란 무엇인지 정의하고, `window` 객체의 몇 가지 주요 기능을 설명하세요. 또한, `window.location` 객체를 사용하여 페이지를 리다이렉트하는 예시 코드를 작성하세요.

BOM(Browser Object Model)은 브라우저 창과 관련된 객체 모델로, 브라우저와 상호작용할 수 있는 다양한 객체들을 제공합니다. 
window 객체는 BOM의 최상위 객체로, 브라우저 창을 나타냅니다.

window 객체의 주요 기능:

window.alert(): 경고창을 띄움
window.open(): 새 창을 엶
window.location: 현재 페이지의 URL 정보를 제공하고 페이지 리다이렉션 기능을 제공

window.location.href = "페이지의 링크";


### 5. **BOM history 문제** *(Extra)*

- BOM에서 `window.history` 객체는 어떤 기능을 제공하나요? `history.back()`과 `history.forward()`를 사용하는 예시를 작성하세요.

window.history 객체는 사용자의 브라우저 방문 기록을 조작할 수 있는 기능을 제공합니다. 이를 통해 이전 또는 다음 페이지로 이동할 수 있습니다.

// 이전 페이지로 이동
history.back();

// 다음 페이지로 이동
history.forward();


### 6. **CSSOM 문제**

- CSSOM이 무엇인지 설명하고, JavaScript를 사용해 HTML 요소의 CSS 스타일을 동적으로 변경하는 코드를 작성하세요.

CSSOM(CSS Object Model)은 CSS를 객체 형태로 표현한 모델로, JavaScript에서 CSS 스타일을 동적으로 조작할 수 있게 해줍니다. 
이를 통해 웹 페이지의 스타일을 실시간으로 변경할 수 있습니다.

const element = document.getElementById("myElement");
element.style.color = "green";
element.style.fontSize = "20px";

id코드가 myElement인 요소들의 텍스트 색상을 녹색, 20px로 수정하는 코드


### 7. **Reflow와 Repaint 문제**

- Reflow와 Repaint의 차이점을 설명하고, DOM 조작을 최소화하여 성능을 향상시킬 수 있는 방법을 예시와 함께 설명하세요.

Reflow: DOM의 구조나 레이아웃이 변경될 때 발생하며, 브라우저는 문서의 레이아웃을 다시 계산합니다. 성능에 더 큰 영향을 미칩니다.

Repaint: 요소의 스타일(색상, 배경 등)만 변경될 때 발생하며, 레이아웃 변경이 없기 때문에 비교적 가볍습니다.

성능 최적화 예시: DOM 조작을 최소화하려면 변경 사항을 배치하여 한 번에 처리하거나, 가상 DOM 같은 방법을 사용할 수 있습니다.

const fragment = document.createDocumentFragment();

for (let i = 0; i < 500; i++) {
  const newDiv = document.createElement("div");
  newDiv.textContent = "Element " + i;
  fragment.appendChild(newDiv);
}
document.body.appendChild(fragment);

위 코드는 500개의 새로운 <div> 요소를 한 번에 DOM에 추가하여 불필요한 Reflow를 줄입니다.


### 8. **JavaScript 실행 맥락 문제** *(Extra)*

- JavaScript의 실행 맥락이란 무엇인가요? 전역 실행 맥락과 함수 실행 맥락의 차이를 설명하세요.

실행 맥락(Execution Context)은 자바스크립트 코드가 실행되는 환경을 나타냅니다. 각각의 실행 맥락에는 변수, 함수, this 값이 포함됩니다.

전역 실행 맥락: 자바스크립트 코드가 로드될 때 생성되며, 전역 변수와 전역 객체(window)가 포함됩니다.
함수 실행 맥락: 함수가 호출될 때마다 생성되며, 해당 함수의 지역 변수 및 this 값이 포함됩니다.


### 9. **콜 스택 문제**

- JavaScript에서 콜 스택이 무엇이며, 함수 호출이 콜 스택에서 어떻게 처리되는지 설명하세요. 예시 코드를 포함하세요.

콜 스택(Call Stack)은 자바스크립트 함수 호출이 관리되는 LIFO(Last In, First Out) 구조의 메커니즘입니다. 함수가 호출되면 콜 스택에 추가되고, 함수가 완료되면 콜 스택에서 제거됩니다.

function first() {
  console.log("First function");
}

function second() {
  first();
  console.log("Second function");
}

second();

위코드의 두번째 함수가 콜되면 처음함수가 콜스택에 추가되어 실행, 이후 두번째 함수가 실행됩니다.

### 10. **이벤트 루프 문제** *(Extra)*

- 이벤트 루프의 개념을 설명하고, 비동기 작업이 어떻게 이벤트 루프에 의해 처리되는지 설명하세요. `setTimeout`을 사용한 비동기 예시 코드를 작성하세요.

이벤트 루프(Event Loop)는 자바스크립트가 비동기 작업을 처리하는 방식입니다. 
자바스크립트는 싱글 스레드지만, 비동기 작업을 이벤트 루프에 의해 처리하여 블로킹 없이 실행할 수 있습니다. 
비동기 작업은 콜백 큐에 들어가며, 콜 스택이 비었을 때 실행됩니다.

console.log("로그1");

setTimeout(() => {
  console.log("비동기 작업 완료");
}, 2000);

console.log("로그2");

위 코드는 "로그1"과 "로그2"가 먼저 출력되고, 2초 후 "비동기 작업 완료"가 출력됩니다.