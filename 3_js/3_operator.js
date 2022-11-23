/* 
    연산자(Operator) : 산술, 할당, 비교 등을 통해서 새로운 값을 생성.
    피연산자 : 연산에 사용되 값.
*/

console.log(5 - 1); // 5에서 1을 빼서 4이라는 새로운 값 생성.
console.log(10 > 4); // 10과 4를 비교해서 true라는 새로운 생성.

// 산술 연산자 : 피연산자에 산술을 통해서 새로운 값 생성.
console.log(5 + 1);
console.log(10 - 4);
console.log(10 * 2);
console.log(10 / 3);
console.log(10 % 6); // 나머지를 구하는 연산자
console.log(4 - 2 * 4); // 사칙연산 적용 => 4 - ( 2 * 4) => -4

// 할당 연산자 : 우항의 값을 좌항에 할당한다.
var num = 10;
num = num + 10;
console.log(num);

// 산술 할당 연산자 : 자기 자신에 우항을 산술한 결과를 바로 할당한다.
var num02 = 20;
num02 *= 10 - 5;
console.log(num02);

/* 
    단항 산술 연산자 : 1개의 피연산자에 산술을 적용하여 할당.
    ++ : 1을 증가시켜 할당.
    -- : 1을 감소시켜 할당.
    + : 값의 변화가 없다.
    - : 양수는 음수로, 음수는 양수로 반전시켜 할당.

    전위 연산자 : 피연산자의 앞에 사용. => 우선순위가 가장 먼저다.
    후위 연산자 : 피연산자의 뒤에 사용. => 우선순위가 가장 마지막이다. => 심지어 할당 연산자보다 늦다.
*/
var num03 = 5;
num03++; // 1을 증가시켜 num03에 할당
console.log(num03);
++num03;
var num04 = 10 + ++num03;
console.log(num03);
console.log(num04);

// 비교 연산자 : 좌항과 우항을 비교해 true 혹은 false를 반환
// 동등 연산자(==) : 암묵전 형변환(데이터 타입 변환)
console.log("3 == 1 + 2 :", 3 == 1 + 2);
console.log("3 == '3' : ", 3 == "3");
console.log("0 == false : ", 0 == false);

// 일치 연산자(===) : 암묵적 형변환(데이터 타입 변환)을 하지 않는다.
console.log("3 === 1 + 2 :", 3 === 1 + 2);
console.log("3 === '3' : ", 3 === "3");
console.log("0 === false : ", 0 === false);

// 부정 연산자(!) : 논리를 반전시킨다.
console.log(3 !== 1 + 2);
var isTrue = true;
console.log(!isTrue);

// 대소 관계 비교 연산자 : 좌항과 우항의 대소 관계를 비교 => boolean 값을 반환
var num1 = 4;
var num2 = 10;
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= 4);

/* 
    논리 연산자 : 좌항과 우항의 논리값을 조합해서 새로운 논리값을 생성.
        => 여러개의 조건을 한번에 확인할 때 사용한다.
    ||(or) : 둘 중 하나라도 true => true, 둘 모두 false일 때만 false
    &&(and) : 둘 모두 true일 때만 true, 둘 중 하나라도 false면 false
*/
console.log(10 > 4 || 7 < 5);
console.log(10 > 4 && 7 < 5);

// 문자열 연결 연산자 : 좌항과 우항의 문자열을 연결한다.
//      => +를 사용한다.  => 피연산자가 문자열이면 연결 연산자, 숫자면 산술 연산자
//      => 문자와 숫자를 더하면 연결 연산자가 된다.
//      => 템플릿 리터럴 사용을 권장한다.
var str1 = "hwangbo";
var str2 = "seok";
var str3 = str1 + str2;
console.log(str3);

var name = "seok hwangbo";
var address = "인천";
var age = 30;

console.log(
  "안녕하세요 저는 " + address + "에 사는 " + age + "세 ",
  name + "입니다."
);

console.log(`안녕하세요 저는 ${address}에 사는 ${age}세 ${name}입니다.`); // 템플릿 리터럴

console.log(1 + "1"); // 숫자 1이 문자열로 암묵적 형변환

// typeof 연산자 : 피연산자의 데이터 타입을 반환한다.
console.log(typeof "안녕하세요");

// 문자열을 숫자로 바꾼다 => 숫자로 변환 가능한 문자열만 바꾼다.
//  => 숫자로 변환 불가능한 경우엔 NaN(Not a Number)을 반환한다.
console.log(parseInt("123123123"));
