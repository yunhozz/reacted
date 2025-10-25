// 1. push -> 배열의 맨 뒤에 새로운 요소를 추가
let arr1 = [1, 2, 3];
const arr1Length = arr1.push(4, 5);

console.log(arr1Length, arr1); // 5 [1, 2, 3, 4, 5]


// 2. pop -> 배열의 맨 뒤에 있는 요소를 제거 후 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

console.log(arr2); // [1, 2]
console.log(poppedItem); // 3


// 3. shift -> 배열의 맨 앞에 있는 요소를 제거 후 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

console.log(arr3); // [2, 3]
console.log(shiftedItem); // 1


// 4. unshift -> 배열의 맨 앞에 새로운 요소를 추가
let arr4 = [1, 2, 3];
const arr4Length = arr4.unshift(0);

console.log(arr4Length, arr4); // 4 [0, 1, 2, 3]

/*
shift, unshift 메서드는 push, pop 메서드보다 상대적으로 느림
    -> 배열의 맨 앞의 요소를 추가하거나 삭제함으로써 index를 재정의 해야하기 때문
    -> 되도록이면 push, pop을 사용
 */


// 5. slice -> 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
const sliced1 = arr5.slice(2, 5); // end 값이 배열의 끝이면 생략 가능
const sliced2 = arr5.slice(-1);

console.log(arr5); // [1, 2, 3, 4, 5]
console.log(sliced1); // [3, 4, 5]
console.log(sliced2); // [5]


// 6. concat -> 서로 다른 두 개의 배열을 이어 붙여서 새로운 배열을 반환
let arr6_1 = [1, 2];
let arr6_2 = [3, 4, 5];
const concatArr = arr6_1.concat(arr6_2);

console.log(concatArr); // [1, 2, 3, 4, 5]


// 7. forEach -> 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행
let arr7 = [1, 2, 3];

arr7.forEach((item, idx, arr) => {
    console.log(idx, item * 2);
});

let doubledArr = [];
arr7.forEach((item) => {
    doubledArr.push(item * 2);
});


// 8. includes -> 배열에 특정 요소가 있는지 확인 (boolean)
let arr8 = [1, 2, 3];
const isInclude = arr8.includes(10);

console.log(isInclude); // false


// 9. indexOf -> 특정 요소의 인덱스를 반환
let arr9 = [1, 2, 2, 2, 3];
const index1 = arr9.indexOf(2); // 가장 앞 요소의 인덱스 기준
const index2 = arr9.indexOf(20);

console.log(index1); // 1
console.log(index2); // -1


// 10. findIndex -> 모든 요소를 순회하면서 콜백 함수를 만족, 특정 요소의 인덱스를 반환
let arr10 = [1, 2, 3];
const findIndex = arr10.findIndex((item, idx, arr10) => item % 2 !== 0);

console.log(findIndex); // 0

let objectArr = [
    { name: "박윤호" },
    { name: "Yunho Park" }
]

/*
indexOf : 얕은 복사로만 진행하기 때문에 객체 값으로 찾을 수 없음
findIndex : 콜백 함수를 이용해서 특정 프로퍼티를 기준으로 비교 가능

-> 단순 원시 타입의 값을 찾을 땐 indexOf, 복잡한 객체 타입을 찾을 땐 findIndex 사용!!
 */
console.log(
    objectArr.indexOf({ name: "박윤호" })
); // -1

console.log(
    objectArr.findIndex((item) => item.name === "박윤호")
); // 0


// 11. find -> 모든 요소를 순회하면서 콜백 함수를 만족하는 요소를 그대로 반환
let arr11 = [
    { name: "박윤호" },
    { name: "Yunho Park" }
];

const find = arr11.find((item) => item.name === "박윤호");
console.log(find); // { name: "박윤호" }


// 12. filter -> 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr12 = [
    { name: "박윤호", age: 29 },
    { name: "차은우", age: 28 },
    { name: "송강", age: 31 },
    { name: "홍길동", age: 29 }
];

const friends = arr12.filter((item) => item.age === 29);
console.log(friends); // [{ name: "박윤호", age: 29 }, { name: "홍길동", age: 29 }]


// 13. map -> 배열의 모든 요소를 순회하면서, 각각 콜백 함수를 실행하고 그 결과들을 모아서 새로운 배열로 반환
let arr13 = [1, 2, 3];
const mapResult = arr13.map((item) => item * 2);
console.log(mapResult); // [2, 4, 6]


// 14. sort -> 배열을 '사전순'으로 정렬
let arr14_1 = ["b", "a", "c"];
let arr14_2 = [10, 3, 5];

arr14_1.sort();
arr14_2.sort();

console.log(arr14_1); // ['a', 'b', 'c']
console.log(arr14_2); // [10, 3, 5] -> 숫자의 대소 관계로 정렬할 수 없음!! 아래와 같이 정렬 기준을 선언해야 함.

arr14_2.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
}); // 오름차순 정렬

console.log(arr14_2); // [3, 5, 10]


// 15. toSorted -> 정렬된 새로운 배열을 반환 (최신 함수)
let arr15 = ["b", "a", "c"];
const sorted = arr15.toSorted();

console.log(arr15); // ['b', 'a', 'c']
console.log(sorted); // ['a', 'b', 'c']


// 16. join -> 배열의 모든 요소를 하나의 문자열로 합쳐서 반환
let arr16 = ["hi", "im", "yunho", "park"];
const joined1 = arr16.join();
const joined2 = arr16.join(" ");

console.log(joined1); // hi,im,yunho,park (기본 separator: ,)
console.log(joined2); // hi im yunho park