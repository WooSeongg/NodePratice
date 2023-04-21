const answer = `Node.js에서 모듈을 불러올 때 사용하는 방식은 두 가지가 있습니다.

첫번째로 Node.js에서의 가장 기본적인 방식으로 CommonJS표준인 require방식입니다.
require()함수로 모듈을 불러올 수 있습니다. 
require은 런타임으로 로딩합니다. 즉, 코드가 실행 중일 때 필요한 모듈이 필요한 시점에 로딩됩니다
모듈 전체를 가져오며, 객체를 반환합니다. 따라서 해당 모듈에서 내보낸 모든 속성과 메서드에 액세스할 수 있습니다.
두번째로 ES6에서 도입된 방식인 import방식입니다.
js 확장자가 아닌 mjs확장자를 사용합니다
런타임 이전에 로딩합니다. 즉, 모듈이 사용되기 전에 이미 로딩되어야 합니다.
개별적인 항목만 가져오며, 중괄호를 사용하여 명시적으로 가져옵니다.
`;
console.log(answer);



const adult = require('./require.js');
console.log(adult.name);

//import 코드는 importTest.mjs에 작성
// import child from './import.js';
// console.log(child.name);
