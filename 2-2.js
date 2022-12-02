// 자바스크립트는 동적타입을 가진 언어 입니다.
// 특정 값이 할당된 변수에, 그와 다른 자료형의 값을 넣을 수 있습니다.
// 자유롭지만 그만큼 자료형 관련 오류에 취약합니다

// 자료형의 다름으로 일어날 수 있는 오류

function getUpperCase(str) {
  return str.toUpperCase();
}

console.log(getUpperCase('hello'));

// ⚠️ 오류 발생!
console.log(getUpperCase(1));

// 의도와 다른 연산 - 논리 오류
'1' + 1;
