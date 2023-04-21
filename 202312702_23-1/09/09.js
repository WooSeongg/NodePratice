const answer = `일반함수의 특징으로는 
1,실행 시에는, 전역(window)객체를 가리킨다. 
2.메소드 실행 시에는 메소드를 소유하고 있는 객체를 가리킨다.
3.생성자 실행 시에는 새롭게 만들어진 객체를 가리킨다.
입니다. 
반면 화살표 함수는 언제나 상위 스코프의 this를 가리킵니다.
또한 call, apply, bind 메소드를 사용해 this를 변경할 수 없습니다.
`;
console.log(answer);

// 일반 함수
function normalFution(name) {
    console.log(`Hello, ${name}!`);
}
  
// 화살표 함수
const arrowFunction = (name) => {
    console.log(`Hello, ${name}!`);
}

normalFution('홍길동');
arrowFunction('김민수');
