class Person {
  name = "theG"; // property
  call = () => {
    "010-1234-5678";
  }; // method
}

const myPerson = new Person();
myPerson.call();
console.log(myPerson.name);

// ES6
class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super(); // ★ 서브클래스에는 super 생성자를 먼저 호출해야함.
    // 다른 클래스를 확장하고 생성자를 실행한다면 필요 없지만,
    // 그렇지않다면 생성자 함수 안에 super() 메소드를 추가해야함.
    // 상위 클래스의 생섲아 함수를 실행하는 역할
    this.name = "theG";
  }

  printMyName() {
    console.log(this.name);
  }
}

const Person = new Person();
person.printMyName();
person.printGender();

// ES7 ( ES6 / Babel )
class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "theG";

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
person.printGender();
