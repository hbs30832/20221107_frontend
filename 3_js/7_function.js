/* 
    함수(Function)
        - 반복적으로 실행될 코드를 미리 작성 후 재사용한다.
        - function 뒤에 함수의 이름을 작성하고 ()를 붙인다.
            => ()안에는 함수 실행에 필요한 값을 매개 변수(Parameter)로 전달.
            => 매개 변수는 여러개도 가능하고, 없어도 된다.
        - 반환해줄 값이 있다면 return 뒤에 표현식을 작성한다.
            => 없다면 생략 가능. => undefined 반환
            => return은 함수의 종료를 의미한다. return 이후의 코드는 실행되지 않는다.
        - 작성한 함수를 실행할 때는 함수이름(매개변수)의 형태로 작성.
            => 함수를 호출한다(call)고 한다.
        - 표현식이 필요한 자리에 함수의 실행 결과가 올 수 있다.
*/
function sum(a, b) {
  return a + b;
}

function calculate(a, b) {
  return (a / b + b) / a + a + a;
}

console.log(sum(3, 4));
console.log(sum(5, 10));

var num = calculate(2, 3);
var num02 = calculate(4, 10);
console.log(num, num02);

let num03 = 10;
let percentage = 5;
// 매개변수와 return(반환값)이 없는 함수
function greeting() {
  console.log("안녕하세요");
}

// 외부에 실행하는데 필요한 값들이 있는 경우 매개 변수를 생략하기도한다.
function percentageToValue() {
  return (num03 * percentage) / 100;
  // return 이후의 코드는 실행되지 않는다.
  console.log("함수 종료");
}
console.log(percentageToValue());

greeting();
greeting();
greeting();

// 빼기, 곱하기, 나누기 함수 만들어보기(두개의 수)
function sub(num01, num02) {
  return num01 - num02;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// 세개의 수의 평균을 출력하는 함수 만들어보기
function consoleAverage(a, b, c) {
  console.log((a + b + c) / 3);
}

function getTotal(a, b, c) {
  return a + b + c;
}

// 함수는 작은 단위로 쪼개서 사용하는 것이 좋다.
var total = getTotal(3, 6, 9);
var avg = divide(total, 3);
console.log(avg);

console.log(divide(getTotal(3, 6, 9), 3));
