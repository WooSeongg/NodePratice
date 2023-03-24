// const a = false;

// if (a){ //다이나믹 임포트 불가 > 에러
//     import '.func.mjs';
// }

// console.log('성공!');
const a =true;
if (a) {
    const m1 = await import('./func.mjs');
    console.log(m1);
    const m2 = await import('./var.mjs');
    console.log(m2);
}