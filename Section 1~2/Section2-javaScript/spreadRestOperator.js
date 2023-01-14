// 배열 oldArray에 1, 2를 추가
const newArray = [...oldArray, 1, 2]; // oldArray에 1, 2를 추가

// oldObject의 모든 프로퍼티 값을 꺼내 새 객체의 키 값으로 추가.
const newObject = { ...oldObject, newProp: 5 };

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
const newNums = [numbers, 4];
console.log(newNumbers);
console.log(newNums);

const person = {
  name: "theG",
};

const newPerson = {
  ...person,
  age: 28,
};
console.log(newPerson);

/////////////////////////////////////////////////////////

function sortArgs(...args) {
  return args.sort();
}

const filter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 3));
