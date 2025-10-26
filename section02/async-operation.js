// 1과 3이 즉시 출력되고 3초 후 2가 출력됨
console.log(1);

// 내부적으로 콜백 함수 호출 (비동기)
setTimeout(() => {
    console.log(2);
}, 3000);

console.log(3);

/*
자바스크립트 엔진에는 기본적으로 쓰레드가 1개 밖에 없음.
    -> 자바 언어와 같이 멀티 쓰레드 환경에서처럼 여러 task들을 여러 쓰레드에서 동시에 수행하지 못함.
    -> 따라서, JS에서는 비동기 작업을 자바스크립트 엔진이 아닌 Web APIs에 위탁하여 실행.

[JS Engine] console.log(1) -> setTimeout(...) -> console.log(3) --...--> 콜백 함수 호출
                                    |                                          |
[Web APIs]                   타이머 + 콜백 함수 -------------------------------

 */


// 1. 비동기 작업 처리하기 - 콜백 함수
function orderFood(callback) {
    setTimeout(() => {
        const food = "떢볶이";
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownFood = `식은 ${food}`;
        callback(cooldownFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezeFood = `냉동된 ${food}`;
        callback(freezeFood);
    }, 1000);
}

orderFood((food) => {
    console.log(food);
    cooldownFood(food, (cooldownFood) => {
        console.log(cooldownFood);
        freezeFood(cooldownFood, (freezeFood) => {
            console.log(freezeFood);
        });
    });
}); // 3초 후 떡볶이 도착 -> 2초 후 식은 떡볶이 -> 1초 후 냉동된 식은 떡볶이


// 2. 비동기 작업 처리하기 - Promise -> 비동기 작업 실행, 작업 상태 관리, 작업 결과 저장, 병렬 실행, 다시 실행 등등...

/*
[Promise의 3가지 상태]
1. 대기 (Pending) - 아직 작업이 완료되지 않은 상태
2. 성공 (Fulfilled) - 비동기 작업이 성공적으로 마무리 된 상태
3. 실패 (Rejected) - 비동기 작업이 실패한 상태
 */

const promise = new Promise((resolve, reject) => {
    // resolve: Promise 상태를 성공으로 처리, reject: Promise 상태를 실패로 처리
    // 비동기 작업 -> executor
    setTimeout(() => {
        resolve("성공!!");
    }, 2000);

    setTimeout(() => {
        reject("실패...");
    }, 2000);
});

setTimeout(() => console.log(promise), 3000); // state: pending -> fulfilled or rejected

function addTen(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num === "number") {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다");
            }
        }, 2000);
    });
}

addTen(0)
    .then((result) => {
        console.log(result);
        return addTen(result);
    })
    .then((result) => {
        console.log(result);
        return addTen(undefined);
    })
    .then((result) => console.log(result))
    .catch((err) => console.log(err)); // 10 -> 20 -> num이 숫자가 아닙니다


// 3. 비동기 작업 처리하기 - async/await

/*
async : 어떤 함수를 비동기 함수로 만들어주는 키워드, Promise를 반환해주는 키워드
await : async 함수 내부에서만 사용 가능한 키워드, 비동기 함수가 다 처리되기를 기다리는 역할
 */

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "박윤호",
                id: "yunhozz"
            });
        }, 1500);
    });
}

async function printData() {
    const data = await getData();
    console.log(data);
}

printData();