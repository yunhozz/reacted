// 1. Falsy 한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // big integer


// 2. Truthy 한 값 (Falsy를 제외한 모든 값)
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {
};


// 3. 활용 사례
function printName1(person) {
    if (!person) {
        console.log("");
    }
    console.log(person.name);
}

const printName2 = (person) => console.log(person?.name ?? ""); // 더 간단하게

let person; // undefined
printName1(person);