// 비교
// x == y	값이 같다.
// x === y	자료형도 값도 같다.
// x != y	값이 다르다.
// x !== y	자료형 또는 값이 다르다.
// x < y	사전순상 x가 먼저 온다.
// x <= y	사전순상 x가 먼저 오거나 같다.
// x > y	사전순상 y 먼저 온다.
// x >= y	사전순상 y 먼저 오거나 같다.

// 표기방식 구분 X
console.log(
  '안녕하세요~' === '안녕하세요~',
  '안녕하세요~' === `안녕하세요~`,
  '안녕하세요~' === `안녕하세요~`
);

// 대소문자 구분
'Hello!' === 'hello!';

// ==,!= 자료형 구분 X
console.log('1' == '1', '1' == 1, '1' == 2);

console.log('1' != '1', '1' != 1, '1' != 2);

// ===,!== 자료형 구분
console.log('1' === '1', '1' === 1, '1' === 2);

console.log('1' !== '1', '1' !== 1, '1' !== 2);

// <,<=,>,>= 사전순 비교
console.log(
  'ABC' < 'abc',
  'apple' <= 'banana',
  '가나다' > '라마바',
  '안녕' >= '안녕'
);

// 숫자 문자열 관련 주의 !
// ⚠️ 숫자 문자열 관련 주의!
console.log(
  100 > 12, // 숫자는 그 자체로 비교
  '100' > '12', // 문자는 사전순으로 비교
  '100' > 12 // 문자와 숫자를 비교하면 문자를 숫자로 변환
);

// + 연산자
let str1 = 'Hello';

// 값 반환
let str2 = ' ' + 'World';

console.log(str1);
console.log(str2);

// += 연산자
let str3 = '헬로';
str3 += ' 월드';

// 부수효과
console.log(str3);

// 다른 자료형과 더하면 문자열 반환
let result = '안녕' + 1 + true;

console.log(result);
console.log(typeof result);
result += null;
result += undefined;

console.log(result);
console.log(typeof result);
