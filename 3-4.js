// for
// 💡 변수이므로 let이 사용됨
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 중첩
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// 객체 for문
const lunch = {
  name: '라면',
  taste: '매운맛',
  kilocalories: 500,
  cold: false,
};

for (const key in lunch) {
  // 💡 변할 것이 아니므로 const 사용
  console.log(key, ':', lunch[key]);
}

// 배열 for문
const list = [1, '가나다', false, null];

for (const item of list) {
  console.log(item);
}
for (const el of list) {
  console.log(el);
}

// continue
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}

console.log('for 루프 종료');

// break
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}

console.log('for 루프 종료');
