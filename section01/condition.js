// 1. if 조건문
let num = 9;

if (num >= 10) {
    console.log("num은 10 이상입니다.");
} else if (num >= 5) {
    console.log("num은 5 이상입니다.");
} else {
    console.log("num은 4 이하입니다.");
}


// 2. switch 문
let animal = "cat";

switch (animal) {
    case "cat": {
        console.log("고양이");
        break;
    }
    case "dog": {
        console.log("강아지");
        break;
    }
    case "bear": {
        console.log("곰");
        break;
    }
    case "tiger": {
        console.log("호랑이");
        break;
    }
    default: {
        console.log("동물이 아닙니다")
    }
}