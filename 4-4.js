// 중첩된 함수
function outer() {
  const name = '바깥쪽';
  console.log(name, '함수');

  function inner() {
    const name = '안쪽';
    console.log(name, '함수');
  }
  inner();
}

outer();

// 재귀함수
function upto5(x) {
  console.log(x);
  if (x < 5) {
    upto5(x + 1);
  } else {
    console.log('- - -');
  }
}

upto5(1);
upto5(3);
upto5(7);

// 팩토리얼
function fact(x) {
  return x === 0 ? 1 : x * fact(x - 1);
}

console.log(
  fact(1),
  fact(2),
  fact(3),
  fact(4)
)(
  // 즉시 실행 함수
  function () {
    console.log('IIFE');
  }
)();

// 불변성
let x = 1;
let y = {
  name: '홍길동',
  age: 15,
};
let z = [1, 2, 3];

function changeValue(a, b, c) {
  a++;
  b.name = '전우치';
  b.age++;
  c[0]++;

  console.log(a, b, c);
}

changeValue(x, y, z);
