// 1. Spread 연산자 -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6]; // [4, 1, 2, 3, 5, 6]

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3, d: 4 }; // { a: 1, b: 2, c: 3, d: 4 }

const funcA = (p1, p2, p3) => console.log(p1, p2, p3);
funcA(...arr1); // 1 2 3


// 2. Rest 매개변수
const funcB = (one, ...rest) => console.log(rest); // rest 뒤에는 추가적으로 매개변수 선언 불가
funcB(...arr1); // one -> 1, rest -> [2, 3]