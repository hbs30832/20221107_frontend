//userList 안의 객체들 중 age 프로퍼티의 값이 30이상인 객체의 이름만 result 배열에 담기

//배열의 고차함수들을 이용 > 필터링과 데이터 변형

let userList = [
  { name: "Minsu", age: 20 },
  { name: "Seok", age: 30 },
  { name: "Yeji", age: 23 },
  { name: "Minseok", age: 43 },
];

// filter의 콜백함수의 리턴값은 boolean(true/false)
let filterArr = userList.filter(function (user) {
  return user.age >= 30;
});
let result = filterArr.map(function (user) {
  return user.name;
});

// 메서드 체이닝 => 메서드의 반환 데이터를 예상하여 메서드를 연결해서 사용하는 것
let result02 = userList
  .filter((user) => user.age >= 30)
  .map((user) => user.name);

console.log(result02);

let numbers = [1, 2, 3, 4, 6, 7, 8];
let result03 = [];

// 조건에 따라 result03 배열에 필터링 => Array.prototype.filter
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    result03.push(numbers[i]);
  }
}

console.log(result03);
