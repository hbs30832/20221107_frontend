/* 
    생성자(Constructor) 함수
        - 객체의 형태를 미리 작성해놓고 필요할 때 객체를 생성하는 함수.
            => 제품의 틀과 역할.
            => 생성자 함수를 통해서 생성된 객체를 인스턴스(Instance). => 메모리에 실재하는 데이터.
        - this를 통해 프로퍼티 할당을 하면 함수가 생성자 함수로 바뀐다.
        - 인스턴스를 생성할 때는 new 키워드와 함께 생성자 함수를 실행하면 된다.
        - prototype을 통해서 메서드나 프로퍼티를 상속할 수 있다.
            => 인스턴스에는 없지만 상속받는 메서드 및 프로퍼티를 사용할 수 있다.
            => 메모리를 낭비하지 않는다.
            => 인스턴스를 통해서만 부를 수 있다.
        - 생성자를 통해서 실행하는 메서드는 정적 메서드(Static Method)라고 한다.
 */

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.introduce = function () {
  console.log(`안녕하세요 저는 ${this.age}세 ${this.name}입니다.`);
};

let user = new User("seok", 30);
let user03 = new User("minsu", 32);

console.log(Array.isArray([]));

console.log(user);
user.introduce();
console.log(user03);

let user01 = {
  name: "seok",
  age: 30,
  introduce: function () {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
  },
};

let user02 = {
  name: "minsu",
  age: 32,
  introduce: function () {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
  },
};

user01.introduce();
user02.introduce();

/* 
    클래스(class)
        - 생성자 함수와 동일한 역할을 한다.
            => 결국은 프로토타입 기반으로 동작한다.
            => 그냥 문법적으로 클래스 기반 언어처럼 사용할 수 있게 해주는 것이다.
            => 문법적 설탕(Syntax Sugar)
        - constructor를 통해서 초기화를 진행할 수 있다.
            => 전달해야하는 초기값을 constructor의 매개 변수로 전달받을 수 있다.
            => 초기화할 값이 없다면 생략할 수 있다.
        - new 없이 호출하면 오류가 발생한다.
        - extends를 통해 클래스를 상속 받을 수 있다.
            => 상속하는 클래스를 슈퍼 클래스, 상속받는 클래스를 서브 클래스라고 한다.
        - 서브(하위) 클래스에 추가적으로 초기화할 값이 있다면 먼저 super(상위 클래스의 constructor)를 호출해야한다.
            => super통해 상위클래스의 초기화값을 전달하고 추가적으로 값을 초기화하면 된다.
        
*/
class Animal {
  constructor(legs) {
    this.legs = legs;
  }
}

class Dog extends Animal {
  constructor(color) {
    super(4);
    this.color = color;
  }

  // 인스턴스 메서드 => 무조건 함축표현으로 작성해야한다.
  bow() {
    console.log("멍멍!", this.color);
  }

  // 정적 메서드 => 메서드 앞에 static 키워드를 붙인다.
  static isDog(obj) {
    // intanceof : 특정 생성자의 인스턴스가 맞는지 true, false를 반환한다.
    console.log(obj instanceof Dog);
  }
}

let animal = new Animal(4);
let dog = new Dog("black");
dog.bow();
Dog.isDog(dog);

// Animal을 상속받는 Cat 클래스 만들어보기
// species(고양이 종류) 속성 추가
// meow 함수(인스턴스 메서드) => 고양이 울음 소리 내는 메서드
class Cat extends Animal {
  constructor(species) {
    super(4);
    this.species = species;
  }

  meow() {
    console.log("야옹~");
  }
}

let cat = new Cat("Korean Short hair");
console.log(cat);
cat.meow();
