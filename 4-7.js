// 클래스 class를 사용하여 인스턴스 만들기

class YalcoChicken {
  constructor(name, no) {
    this.name = name;
    this.no = no;
  }
  introduce() {
    // 💡 메서드
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

const chain1 = new YalcoChicken('판교', 3);
const chain2 = new YalcoChicken('강남', 17);
const chain3 = new YalcoChicken('제주', 24);

console.log(chain1, chain1.introduce());
console.log(chain2, chain2.introduce());
console.log(chain3, chain3.introduce());

// 필드

// 필드값이 지정되어 있으므로 constructor 메서드 필요없음
class Slime {
  hp = 50;
  op = 4;
  attack(enemy) {
    enemy.hp -= this.op;
    this.hp += this.op / 4;
  }
}

const slime1 = new Slime();
const slime2 = new Slime();

console.log(slime1, slime2);

slime1.attack(slime2);

console.log(slime1, slime2);

// 정적 필드와 메서드

class YalcoChicken {
  // 정적 변수와 메서드
  static brand = '얄코치킨';
  static contact() {
    return `${this.brand}입니다. 무엇을 도와드릴까요?`;
  }

  constructor(name, no) {
    this.name = name;
    this.no = no;
  }
  introduce() {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

console.log(YalcoChicken);
console.log(YalcoChicken.contact());

// 클래스는 함수

class Dog {
  bark() {
    return '멍멍';
  }
}

console.log(typeof Dog);

const 개 = Dog; // 할당될 수 있는 일급 객체
const 바둑이 = new 개();

console.log(바둑이); // 💡 콘솔에 나타난 타입 확인
