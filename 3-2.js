// if문
// 여러줄 코드 - 블록문 사용
if (open) {
  console.log('환영합니다.');
  console.log('즐거운 쇼핑하세요!');
}

// if ... else문
const x = 20;

if (x % 2) {
  console.log('홀수입니다.');
} else {
  console.log('짝수입니다.');
}

// if ... else if ... else문
if (x % 2) {
  console.log('홀수입니다.');
} else if (x % 4) {
  console.log('짝수입니다.');
} else {
  console.log('4의 배수입니다.');
}

// 권장되는 방식
function evalNum() {
  const x = 21;

  if (x % 2) {
    console.log('홀수입니다.');
    return;
  }

  if (x % 4) {
    console.log('짝수입니다.');
    return;
  }

  console.log('4의 배수입니다.');
}

evalNum();
console.log('블록문 바깥');
