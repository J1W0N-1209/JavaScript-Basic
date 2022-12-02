// 자바스크립트에는 정수와 실수의 자료형이 따로 있지 않음
let integer = 100;
let real = 1.234;
let negative = -5.67;

console.log(typeof integer, typeof real, typeof negative);

// 무한대
let x = 1 / 0;
console.log(x, typeof x);

// NaN
let x_NaN = 1 / 'abc';
let y = 2 * '가나다';
let z = NaN;

console.log(x_NaN, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

// NaN Check
console.log(
  x_NaN,
  x_NaN == NaN,
  x_NaN === NaN,
  isNaN(x_NaN), // 숫자가 아닐 시 true
  Number.isNaN(x_NaN) // 보다 엄격한 버전
);

// 산술 연산
let x_num = 3;

x_num += 2;
console.log(x_num);

x_num -= 3;
console.log(x_num);

x_num *= 12;
console.log(x_num);

x_num /= 3;
console.log(x_num);

x_num %= 5;
console.log(x_num);

x_num **= 4;
console.log(x_num);
