// While
let x = 0;

while (x < 10) {
  console.log(x++);
}

// 무한 루프
// 인위적인 무한반복에 널리 쓰이는 코드
while (true) {
  console.log('무한반복');
}

// break문으로 반복 탈출
x = 0;

while (true) {
  if (x++ >= 5) break; // 😎
  console.log(x);
}

// do whilte
x = 12;

do {
  console.log(x++);
} while (x < 10);
