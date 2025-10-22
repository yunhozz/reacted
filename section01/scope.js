let a = 1; // 전역 스코프

// 지역 스코프 (b, c, d, funcB)
function funcA() {
    let b = 2;
    console.log(a);

    function funcB() {
        console.log(a * 2);
    }
}

if (true) {
    let c = 1;
}

for (let i = 0; i < 10; i++) {
    let d = 10;
}