// 1. 대입 연산자
let var0 = 1;


// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10; // 21


// 3. 복합 대입 연산자 (산술 + 대입)
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;


// 4. 증감 연산자
let num8 = 10;
console.log(++num8); // 11 (전위)
console.log(num8++); // 11 (후위)
console.log(num8); // 12


// 5. 논리 연산자
let or = true || false; // true
let and = true && false; // false
let not = !true; // false


// 6. 비교 연산자
let comp1 = 1 === 2; // false
let comp2 = 1 !== 2; // true
let comp3 = 1 == "1"; // true ( = 기호를 두 번만 사용 주의)

let comp4 = 2 > 1; // true
let comp5 = 5 <= 3; // false


// 7. null 병합 연산자 -> null, undefined가 아닌 값을 찾아내는 연산자
let var1; // undefined
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 10
let var5 = var1 ?? var3; // 20
let var6 = var2 ?? var3; // 10 (처음 값)


// 8. typeof 연산자 -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let var7 = 10;
var7 = "hello";
var7 = true;

let t1 = typeof var7; // boolean


// 9. 삼항 연산자
let var8 = 10;

let evenOrOdd = var8 % 2 === 0 ? "짝수" : "홀수";