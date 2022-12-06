// 매개변수
// 오류를 일으키지 않고 무시됨
function add(a, b) {
  return a + b;
}

console.log(add(1, 3), add(1, 3, 5), add(1, 3, 5, 7));

// arguments - 함수 내에서 사용가능한 지역 변수
function add(a, b) {
  console.log('1.', arguments);
  console.log('2.', arguments[0]);
  console.log('3.', typeof arguments);
  return a + b;
}

console.log('4.', add(1, 3, 5, 7));

// 💡 타입에 안전한 버전
function getAverage() {
  let result = 0,
    count = 0;
  for (const num of arguments) {
    if (typeof num !== 'number') continue;
    result += num;
    count++;
  }
  return result / count;
}

console.log(getAverage(2, '가', 8, true, 5));

// 나머지 변수
console.log('3.', classIntro(3, '김민지', '영희', '철수', '보라')); // 호이스팅

function classIntro(classNo, teacher, ...children) {
  console.log('1.', children);
  console.log('2.', arguments);

  let childrenStr = '';
  for (const child of children) {
    if (childrenStr) childrenStr += ', ';
    childrenStr += child;
  }
  return (
    `${classNo}반의 선생님은 ${teacher}, ` + `학생들은 ${childrenStr}입니다.`
  );
}
