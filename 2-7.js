// 부정 연산자
console.log(true, !true, false, !false);

console.log(true, !true, !!true, !!!true);

console.log(false, !false, !!false, !!!false);

// AND 연산자
console.log(true && true, true && false, false && true, false && false);

// OR 연산자
console.log(true || true, true || false, false || true, false || false);

// 단축 평가
// && : 앞의 것이 false면 뒤의 것을 평가할 필요 없음
// || : 앞의 것이 true면 뒤의 것을 평가할 필요 없음
let error = true;
// error = false;

// 앞의 것이 true일 때만 뒤의 코드 실행
error && console.warn('오류 발생!');

// 앞의 것이 false일 때만 뒤의 코드 실행
error || console.log('이상 없음.');

// 삼항 연산자
let x = true;
// x = false;

let y = x ? '참입니다.' : '거짓입니다.';
console.log(y);

// Truthy
console.log(
  1.23 ? true : false,
  -999 ? true : false,
  '0' ? true : false,
  ' ' ? true : false,
  Infinity ? true : false,
  -Infinity ? true : false,
  {} ? true : false,
  [] ? true : false
);

// Falsy
console.log(
  0 ? true : false,
  -0 ? true : false,
  '' ? true : false,
  null ? true : false,
  undefined ? true : false,
  NaN ? true : false
);

// Boolean으로 직접 변환
// ⭐️ 두 번 부정하여 해당 boolean값으로
console.log(!!1, !!-999, !!'hello', !!0, !!'', !!null);
