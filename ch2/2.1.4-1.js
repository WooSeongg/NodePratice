function add1(x, y) {
  return x + y;
}

const add2 = (x, y) => {
  return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

function not1(x) {
  return !x;
}

const not2 = x => !x;

//add1,2,3,4는 모두 동일한 기능을 하는 함수
//not1,2도 모두 동일한 기능을 하는 함수

console.log(not1('a')); //false

var a = undefined;
var b = 2;
console.log(not1(a)); //true
console.log(not1(b)); //false
console.log(not1(true)); //false
console.log(not1(false)); //true