// 쉼표 연산자
// 왼쪽부터 차례로 실행, 마지막 것 반환
let x = 1,
  y = 2,
  z = 3;
console.log(x, y, z);

// 마지막으로 실행한 것 반환
console.log((++x, (y += x), (z *= y)));

// ?? - null 병합 연산자
// ||와 달리, falsy가 아닌 null 또는 undefined만 대체
let x_;
x_ ?? console.warn(x_, 'x_에 값이 없습니다.');

x_ = 0;
x_ ?? console.warn(x_, 'x에 값이 없습니다.');

x_ = null;
x_ ?? console.warn(x_, 'x에 값이 없습니다.');

// 연산자의 우선순위
console.log(
  2 > 3 || 4 % 2 === 0,
  2 > (3 || 4) % 2 === 0,
  2 > 3 || 4 % (2 === 0)
);
