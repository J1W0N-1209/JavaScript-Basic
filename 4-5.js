// 객체 생성과 프로퍼티 접근
const food1 = {
  name: '햄버거',
  price: 5000,
  vegan: false,
};

console.log(food1);

console.log(
  food1.name, // 💡 마침표 프로퍼티 접근 연산자
  food1['price'] // 💡 대괄호 프로퍼티 접근 연산자
);

// 식별자 명명 규칙에 벗어나는 키 이름 사용시

const obj = {
  1: '하나', // 숫자도 객체의 키로는 사용 가능
  'ab-cd': 'ABCD', // 문자 포함 시 키도 따옴표로 감싸야 함
  's p a c e': 'Space',
};

// 대괄호 프로퍼티 접근 연산자로만 가능
console.log(obj[1], obj['ab-cd'], obj['s p a c e']);

// ⚠️ 오류 발생
// console.log(
//   obj.1,
//   obj.ab-cd,
//   obj.s p a c e
// );

// 표현식으로 키값 정의하기
let idx = 0;
const obj = {
  ['key-' + ++idx]: `value-${idx}`,
  ['key-' + ++idx]: `value-${idx}`,
  ['key-' + ++idx]: `value-${idx}`,
  [idx ** idx]: 'POWER',
};

console.log(obj);

// 🗑 프로퍼티 삭제 - delete 연산자
const person1 = {
  name: '홍길동',
  age: 24,
  school: '한국대',
  major: '컴퓨터공학',
};

console.log(person1);

delete person1.age;
console.log(person1);

// ES6 추가 문법
function createProduct(name, price, quantity) {
  return { name, price, quantity };
}

const product1 = createProduct('선풍기', 50000, 50);
const product2 = createProduct('청소기', 125000, 32);

console.log(product1, product2);

// 메서드
// ⭐️ 메서드 정의
const person = {
  name: '홍길동',

  salutate(formal) {
    return formal
      ? `안녕하십니까, ${this.name}입니다.`
      : `안녕하세요, ${this.name}이에요.`;
  },
};
console.log(person.salutate(true));
