// 1. 변수
let age;
console.log(age); // undefined

age = 29;
console.log(age); // 29


// 2. 상수
const birth = "1996.01.11"; // 선언과 동시에 초기값 필수!!


// 3. 변수 명명규칙 (네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name = "박윤호";

// 3-2. 숫자로 시작할 수 없다.
let name1 = "Yunho";
let $2name = "Park";

// 3-3. 예약어를 사용할 수 없다.


// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;