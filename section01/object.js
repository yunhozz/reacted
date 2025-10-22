// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)


// 2. 객체 프로퍼티
let person = {
    name: "박윤호",
    age: 29,
    hobby: "눕기",
    extra: {},
    10: 20,
    "like dog": true
};


// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
let age = person["age"];

let property = "hobby";
let hobby = person[property];

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = "BE developer";
person["favoriteFood"] = "만두";

// 3-3. 프로퍼티를 수정하는 방법
person.job = "FE developer";
person["favoriteFood"] = "등갈비찜";

// 3-4. 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; // true
let result2 = "dog" in person; // false


// 4. 상수 객체
const animal = {
    type: "강아지",
    name: "뽀삐",
    color: "white"
};

animal.age = 2; // 추가 ok
animal.name = "코코"; // 수정 ok
delete animal.color; // 삭제 ok

animal = "This is animal" // 새로 할당 x


// 5. 메서드 -> 값이 함수인 프로퍼티
const me = {
    name: "박윤호",
    sayHi() { // 메서드 선언
        console.log("안녕~!");
    }
};

me.sayHi();
me["sayHi"]();