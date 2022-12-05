// 일급 객체의 특성
// 1.상수 또는 변수에 할당될 수 있음
// 2.다른 함수에 인자로 전달될 수 있음
// 3.다른 함수의 결과값으로서 반환될 수 있음

// 할당
function isOddNum(number) {
  console.log((number % 2 ? '홀' : '짝') + '수입니다.');
  return number % 2 ? true : false;
}

const checkIfOdd = isOddNum; // 뒤에 괄호 없음 유의

console.log(checkIfOdd(23));

// 인자로 전달
let list = [1, 2, 3, 4, 5];

function doInArray(array, func) {
  for (item of array) {
    func(item);
  }
}

// console.log - console이란 객체에서 log란 키에 할당된 함수
doInArray(list, console.log);

// 결과값으로 반환
function getIntroFunc(name, formal) {
  return formal
    ? function () {
        console.log(`안녕하십니까, ${name}입니다.`);
      }
    : function () {
        console.log(`안녕하세요~ ${name}이라고 해요.`);
      };
}

const hongIntro = getIntroFunc('홍길동', true);
const jeonIntro = getIntroFunc('전우치', false);

// 커링
// ⭐ 커링으로 작성된 함수
function curryAddMultSubt(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return (a + b) * c - d;
      };
    };
  };
}

const curryAddMultSubt2 = (a) => (b) => (c) => (d) => (a + b) * c - d;

console.log(curryAddMultSubt(2)(3)(4)(5), curryAddMultSubt2(2)(3)(4)(5));
