// function
function allArithemics(x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
  console.log(`${x} - ${y} = ${x - y}`);
  console.log(`${x} * ${y} = ${x * y}`);
  console.log(`${x} / ${y} = ${x / y}`);
}

let a = 3,
  b = 4;
allArithemics(a, b);

let c = 10,
  d = 2;
allArithemics(c, d);

let e = 7,
  f = 5;
allArithemics(e, f);

// 호이스팅
// 함수는 실행문보다 나중에 정의하는 것이 가능
// 변수나 상수는 불가능! (var 제외)
console.log(add(2, 7));

function add(x, y) {
  return x + y;
}

// 상수나  변수에 대입
const subt = function (x, y) {
  return x - y;
};

console.log(subt(7, 2));

// 화살표 함수
// 한 줄 안에 값만 반환시
const mult = (x, y) => x * y;

console.log(mult(2, 7));

// 상수나 변수에 대입하거나 화살표 함수는 호이스팅이 안 된다 !
