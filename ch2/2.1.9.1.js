//Set 실습
const arr = [1,2,6,7,2,10];
const set = new Set(arr); //Array -> Set  (Set은 중복이 없음)
const result = Array.from(set); // Set -> Array

console.log(result);