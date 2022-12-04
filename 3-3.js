// switch
// 주어진 평가에 일치하는 case로 실행위치 이동
const fingersOut = 2;

switch (fingersOut) {
  // 순서 상관없음
  case 2:
    console.log('가위');
    break;
  case 0:
    console.log('바위');
    break;
  case 5:
    console.log('보');
    break;
  default:
    console.log('무효');
}

// 객체를 사용하는 방법
// 💡 참고: 객체를 사용한 방법
const direction = 'north';

const directionKor =
  {
    north: '북',
    south: '남',
    east: '동',
    west: '서',
  }[direction] ?? '무효';

console.log(directionKor);
