/*
    변수(Variable)
        - 메모리 공간에 접근할 수 있는 식별자
        - 데이터 저장될 공간을 마련을 마련하고 공간에 접근할 수 있는 주소에 이름을 붙인다.
            => 이름을 붙이는 걸 '변수를 선언한다'고 한다.
            => 변수 선언에는 var, let, const(상수) 키워드 사용한다.
*/
var num = 1;

// 변수 선언 => 공간을 마련하고 result라는 식별자를 만든다. => ,를 통해 여러개의 변수를 한번에 선언할 수 있다.
var result, birthday;

// 변수에 값 할당 => '='을 사용한다. 좌항(왼쪽) 할당될 변수를 우항(오른쪽)에는 할당할 값을 작성한다.
result = "성공";

// 값을 꺼내보는 걸 '변수를 참조한다'라고 표현한다.
console.log(num * 10);

// 변수 초기화 : 변수 선언과 할당을 동시에 진행. => 선언만 하면 undefined라는 값으로 초기화.
var userName = "seok hwangbo";
userName = "hwangbo seok"; // 변수에 다른 값을 할당 즉, 변경할 수 있다.
var age;
console.log(userName);

// 변수 이름을 짓는 규칙

// 1. 키워드는 사용할 수 없다. => 키워드 : JS에서 약속된 예악어.
// var var; var은 키워드이기 때문에 변수명으로 사용할 수 없다.

// 2. 변수명으로는 문자, 숫자, $, _ 만 사용할 수 있다. => 숫자로 시작할 순 없다.
var number;
var num_1;
// var num+1; $,_ 이외의 특수문자를 변수명으로 사용할 수 없다.
// var 1_nmm; 변수명은 숫자로 시작할 수 없다.

// 3. 변수명은 대소문자를 구분한다.
var Username;
var USERNAME;

// user name; => 여러 단어를 표현하는 방법
// 1. 카멜 케이스 => userName => 단어를 대문자로 구분
// 2. 스네이크 케이스 => user_name => 단어를 _(언더바)로 구분
// 3. 파스칼 케이스 => UserName => 카멜 케이스와 동일하게 대문자로 구분 + 대문자로 시작 => 생성자 함수, 클래스명으로 주로 사용

// 문제 1. num1과 num2를 선언하고 각각 20, 30을 할당
var num1 = 20;
var num2 = 30;
var num3, num4;
num3 = num4 = 40;

// 문제 2. num1과 num2를 더한 값을 result02 변수에 할당
var result02 = num1 + num2;
console.log("result02 : ", result02);

// 문제 3. num1과 num2의 값을 서로 바꿔서 할당
var temp; // num2 값을 임시로 저장할 변수 temp 선언
temp = num2; // temp에 num2 값을 임시로 저장
num2 = num1;
num1 = temp;

console.log(num1, num2);
