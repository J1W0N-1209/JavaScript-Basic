// 객체
const person1 = {
  name: '김철수',
  age: 25,
  married: false,
};

console.log(typeof person1);
console.log(person1);

// 속성값 접근
console.log(person1.name, person1.age, person1.married);

console.log(
  person1['name'], // 속성명을 string으로
  person1['age'],
  person1['married']
);

// 존재하지 않는 키로 접근
console.log(person1.birthdate); // undefined
console.log(person1['job']); // undefined

// 특정 키 포함 여부 확인
console.log('age' in person1, 'job' in person1);

// 프로퍼티 수정
person1.age = 26;
person1['married'] = true;

console.log(person1);

// 프로퍼티 추가
// 새 프로퍼티 추가
person1.job = 'developer';
person1['bloodtype'] = 'AB';

console.log(person1);

// 배열
const winners = [12, 592, 7, 48];
const weekdays = ['월', '화', '수', '목', '금', '토', '일'];

// 자료형에 관계없이 한 배열에 넣을 수 있음
const randoms = ['홍길동', -24, true, null, undefined];

console.log(typeof winners);
console.log(winners, weekdays, randoms);

// 수정
const numbers = [1, 2, 3];

// 특정 위치의 값 수정
numbers[2] = 5;

console.log(numbers);

// 추가
// 맨 끝에 값 추가
numbers.push(10);

console.log(numbers);
