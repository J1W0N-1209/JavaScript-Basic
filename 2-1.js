// 원시 자료형
const a = true,
  b = 123.45,
  c = '안녕하세요!';

// typeof 연산자: 뒤에 오는 값의 자료형을 반환
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

// undefined은 값이 부여되지 않은 상태라는 의미이다
let x = 1; // undefined 반환

// null 의도적 빈 값을 의미 그러나 null 역시 값이다.
let y = null;
console.log(typeof null, typeof y);
// typeof가 object를 반환한다 초기오류 - 객체는 원시타입이 아니다..

// null 여부는 아래와 같이 확인할 것
console.log(y === null);
