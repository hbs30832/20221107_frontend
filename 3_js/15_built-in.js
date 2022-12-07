/* 
    1. 빌트인(Built-in)
        - ECMAScript 사양에 정의 객체. 전역 공통의 기능을 제공한다.
        - 표준이기 때문에 실행환경에 상관없이 사용이 가능한다.
    
    2. 호스트 객체
        - 개발의 편의성을 위해서 실행환경에서 제공하는 객체.
        - 대표적인 예로 document는 html 문서엔 대한 메서드와 프로퍼티를 제공하는 객체. => 브라우저가 제공.
        - 실행환경에 따라서 제공되는 호스트 객체가 달라진다.

    3. 사용자 정의 객체
        - 사용자 필요에 따라 정의한 객체.
*/

/* 
    전역 객체
        - JavaScript 엔진이 가장 먼저 만드는 특수한 객체.
        - JavaScript가 실행되는 환경에 따라 달라진다. => 브라우저에서는 window, Node.js에서는 global을 통해서 접근 가능하다.
        - 어디에도 속하지 않는 최상위 객체. => 프로토타입 상에서의 최상의를 의미하는게 아니다.
        - 표준 빌트인 객체와 호스트 객체, var 키워드로 선언된 전역 변수, 전역 함수를 프로퍼티 갖는다.
            => 전역 객체의 프로퍼티를 참조할 때 전역 객체를 생략할 수 있다. => window.document와 document는 동일한 객체를 가리킨다.
        - 여기서는 브라우저 환경에서 생성되는 window 객체 위주로 설명한다.
        - ES11에서 도입된 globalThis를 통해서 실행환경 상관없이 접근이 가능하다.
*/

console.log(globalThis); // globalThis를 통해서 실행환경 관계없이 전역 객체에 접근이 가능하다.

window.console.log("console");

var a = 1; // 전역 객체의 프로퍼티가 된다.
console.log(window.a);
{
  aa = 10;
}
function sum(a, b) {
  num = 10; // var 생략시 함수안에서 작성해도 함수 레벨 스코프가 지원 안되기 때문에 window.num 프로퍼티로 등록된다.
  return a + b;
}

for (var i = 0; i < 5; i++) {} // var 키워드는 블록 레벨 스코프를 지원 안하기 때문에 window.i 프로퍼티에 등록된다.

sum(10, 20);

/* 
    빌트인 객체
*/

// Date() : 날짜와 시간과 관련된 메서드와 프로퍼티를 제공하는 객체를 생성 => 생성된 객체를 참조하면 로컬 시간이 출력된다.
//  => 1970년 1월 1일 기준으로 ms단위로 경과한 시간
//  => 생성된 시점이 기준이 된다.
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1; // 1월이 0부터 시작한다.
let date = today.getDate();
let day = today.getDay(); // 0(일요일) ~ 6(토요일)

console.log(`${year}년 ${month}월 ${date}일 ${day}`);

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
console.log(hours, minutes, seconds);

// Date.prototype.toLocaleDateString() : 사용자의 문화권에 맞게 시간 표기를 해준다.
// let dateStr = today.toLocaleDateString("ko-KR", {
//   year: "numeric",
//   month: "short",
//   day: "numeric",
//   hour: "numeric",
// });
let dateStr = today.toLocaleDateString("ko-KR", {
  dateStyle: "full",
});

let timeStr = today.toLocaleTimeString("ko-KR", {
  timeStyle: "full",
});
console.log(dateStr, timeStr);

today.setFullYear(2021);
today.setMonth(9);
today.setDate(30);

today.setDate(today.getDate() - 1);

// 날짜로 변환 가능한 문자열을 통해서 특정 날짜를 생성할 수 있다.
let yesterday = new Date("2021.11.6 11:20:00");

console.log(yesterday);

console.log(today);

// Math : 수학관련 프로퍼티와 메서드 제공 => 주로 정적 프로퍼티(메서드 포함)를 사용한다.
console.log(Math.PI * 2 * 10);

console.log(Math.sin(Math.PI / 4));

let float = 1.42412321;
let int = parseInt(float); // parseInt() : 실수를 정수로 바꿀 때도 사용한다. 소수점 이하의 숫자를 버린다(내림).
console.log(float, int);

// 소수점 이하 내림
console.log(Math.floor(float)); // 내림 처리한다. 소수점 이하의 숫자를 버린다.

// 소수점 이하 올림
console.log(Math.ceil(float)); // 올림 처리한다. 소수점 이하의 숫자를 버리고 숫자를 증가시킨다.

// 소수점 이하 반올림
console.log(Math.round(float)); // 반올림 처리한다.

// 111 => 120 만들기
console.log(Math.ceil(111 / 100) * 100);

// Math.random() : 0~1 사이의 랜덤한 실수를 반환한다(실제 랜덤은 아니다).
console.log(Math.floor(Math.random() * 5) + 5);

// 1~45 로또 6개 번호 추첨하기(중복 x) => 반환하는 함수 만들기
//  => 1. 1~45가 들어있는 배열에서 랜덤한 인덱스 6번 꺼내면 됨 => 인덱스 범위가 넘지 않게 주의
//  => 2. result 담으면서 이미 있는 값인지 확인하기(배열 관련 함수)
function getLottoNum() {
  let result = [];

  // result 배열의 길이가 6이 되기전까지만 실행 => 요소가 6개가 되는 순간 반복을 멈춘다.
  while (result.length < 6) {
    // result 배열에 랜덤한 수 num이 없을 때에만 push
    let num = Math.floor(Math.random() * 45) + 1;
    if (!result.includes(num)) result.push(num);
  }

  return result;
}

console.log(getLottoNum());
