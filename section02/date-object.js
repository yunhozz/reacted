// 1. Date 객체를 생성하는 방법
let now = new Date(); // 생성자
let now2 = new Date("1996-01-11"); // 대쉬, 점, 슬래시 모두 가능
let now3 = new Date(1996, 1, 11, 22, 0);


// 2. 타임 스탬프 -> 특정 시간이 '1970/1/1 00시 00분 00초 (UTC)' 로부터 몇 ms가 지났는지를 의미하는 숫자값
let ts = now.getTime();
let dateWithTs = new Date(ts); // now 이랑 같음


// 3. 시간 요소들을 추출하는 방법
let year = now.getFullYear();
let month = now.getMonth() + 1; // [주의] JS의 Month는 0부터 시작!!!
let date = now.getDate();

let hour = now.getHours();
let minute = now.getMinutes();
let seconds = now.getSeconds();


// 4. 시간 수정하기
now.setFullYear(1996);
now.setMonth(1);
now.setDate(11);

now.setHours(23);
now.setMinutes(59);
now.setSeconds(59);


// 5. 시간을 여러 포맷으로 출력하기
console.log(now.toDateString());
console.log(now.toLocaleString());