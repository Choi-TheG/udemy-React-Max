// 참조형 ( array, object )

// 객체 person은 메모리에 저장되어 있고
// 상수 person에는 메모리에 있는 주소를 가리키는 포인터를 저장
// person을 secondPerson에 할당하면 포인터가 복사.
const person = {
  name: "theG",
};
const secondPerson = person;
console.log(secondPerson);

/* result console
>> [object, Object] {
	name: " theG"
}
*/

// 포인터를 복사했고, person이 가리키는 메모리에 있는 동일한 객체를 가리키기 때문에
// person.name을 변경하고 secondPerson을 출력하면 name이 바뀌어서 출력됨.
// array 역시 같음
const person = {
  name: "theG",
};
const secondPerson = person;

person.name = "Khan";
console.log(secondPerson);

/* result console
>> [object Object] {
	name: "Khan"
}
*/
/////////////////// spread로 해결 가능 ! ///////////////////////////////////
// 참조형을 복사를 하고싶다면, 새로운 객체를 생성해 전체 객체를 복사하는 것이 아니라
// ★ 프로퍼티를 복사
const person = {
  name: "theG",
};
const secondPerson = {
  ...person,
};

person.name = "Khan";
console.log(secondPerson);

/* result console
>> [object Object] {
	name: "theG"
}
*/
// 기본형 ( string, number(integer), boolean )
const number = 1;
const secondNumber = number;
console.log(secondNumber);
