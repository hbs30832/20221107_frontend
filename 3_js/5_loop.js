/* 
    for문
        - ()안의 조건이 false가 될 때까지 반복 실행한다.
        - (초기값 변수; 조건식; 증감식) 순으로 작성한다.
        - 코드블록 실행 후 증감식을 통해 값을 변화시켜 종료시점을 정할 수 있다.
            => 조건식과 증감식을 제대로 작성하지 않으면 무한루프에 빠진다.
        - 보통 초기값을 0부터 시작한다.
            => 배열의 인덱스가 0부터 시작하기 때문에 배열의 모든 요소에 접근하기가 쉽다.
            => 배열의 마지막 인덱스는 배열.length - 1과 동일하다.
            => 0부터시작해서 배열의 길이보다 작을 때(0 < 배열.length)라고 조건을 작성하면 배열의 모든 요소를 참조할 수 있다.
        - for문은 반복횟수가 명확할 때 사용한다.
*/
for (var i = 0; i < 5; i++) {
  console.log(i);
}

// 문제 1. numbers의 각 요소를 한번씩 출력하기.
var numbers = [1, 10, 4, 5, 70, 10, 10];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 문제 2. numbers의 모든 숫자의 합을 result 변수에 담기
var result = 0;
for (var i = 0; i < numbers.length; i++) {
  result = result + numbers[i];
}

console.log("result: ", result);
