// 1. 함수 선언
function greeting() {
    console.log("안녕하세요~!");
}

let area = getArea(10, 20);
console.log(area); // 200

// 호이스팅 (최상단으로 끌어올림) -> callback
function getArea(width, height) {
    let area = width * height;

    // 중첩 함수
    function logger() {
        console.log(area);
    }

    logger(); // 200

    return area;
}


// 2. 함수 표현식
function funcA() {
    console.log("funcA");
}

let varA = funcA;
console.log(varA); // 함수 자체가 출력됨
varA(); // funcA

// 익명 함수
let varB = function () {
    console.log("funcB");
}

varB(); // funcB


// 3. 화살표 함수
let varC = () => {
    console.log("hi");
    return "bro";
}

let varD = (value) => value + 1;


// 4. 콜백 함수 -> 자신이 아닌 다른 함수에, 인수로써 전달된 함수
function main(value) {
    console.log(value); // sub 함수 자체가 출력됨
    value(); // I am sub
}

function sub() {
    console.log("I am sub");
}

main(sub);

main(() => {
    console.log("I am sub");
});

function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat(5, (idx) => {
    console.log(idx);
});

repeat(10, (idx) => {
    console.log(idx * 2);
});