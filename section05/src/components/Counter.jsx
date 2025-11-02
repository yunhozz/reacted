import { useState } from "react";

/*
useState 함수를 통해 re-rendering을 일으킬 수 있다.
    - 배열의 첫번째 요소 : State의 현재 값
    - 배열의 두번째 요소 : State를 변화시키는 상태 변화 함수
    - 인수 : State의 초기값
 */

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => {
                setCount(count + 1);
            }}> +
            </button>
        </div>
    );
};

export default Counter;