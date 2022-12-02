// 작은 따옴표
let word = '안녕하세요! 🙂';
console.log(word);

// 큰 따옴표
let word1 = '반갑습니다~ 👋';
console.log(word1);

// 문자열 안에서 따옴표 사용
let word2 = '작은따옴표 안에 "큰따옴표" 사용';
let word3 = "큰따옴표 안에 '작은따옴표' 사용";
console.log(word2, word3);

// 긴 문자열을 여러줄에 표현

let longName =
  '김수한무 거북이와 두루미 \
삼천갑자 동방삭 치치카포 사리사리센타 \
워리워리 세브리깡 무두셀라 구름이 \
허리케인에 담벼락 담벼락에 서생원 \
서생원에 고양이 고양이엔 바둑이 \
바둑이는 돌돌이';

// ⚠️ 줄바뀜 되는 것이 아님
// 큰따옴표도 마찬가지
console.log(longName);

// 백틱

let word4 = `헬로헬로~ 🤩`;
console.log(word4);

// 템플릿 리터럴

const NAME = '홍길동';
let age = 20;
let married = false;

console.log(
  `제 이름은 ${NAME}, 나이는 ${age}세구요, \
${married ? '기혼' : '미혼'}입니다.`
);
