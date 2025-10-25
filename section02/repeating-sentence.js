// 1. 배열 순회
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6, 7, 8];

// 1-1. 배열 인덱스
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

// 1-2. for of 반복문
for (let item of arr1) {
    console.log(item);
}


// 2. 객체 순회
let person = {
    name: "박윤호",
    age: 29,
    hobby: "드러눕기"
};

// 2-1. Object.keys 사용
let keys = Object.keys(person);

for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
}

for (let key of keys) {
    let value = person[key];
    console.log(key, value);
}

// 2-2. Object.values 사용
let values = Object.values(person);

for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}

// 2-3. for in (객체에만 사용할 수 있음)
for (let key in person) {
    let value = person[key];
    console.log(key, value);
}