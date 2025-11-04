import "./App.css";
import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import { useState, useEffect, useRef } from "react";
import Even from "./components/Even.jsx";

export default function App() {
    // Viewer 컴포넌트에 전달할 State
    const [count, setCount] = useState(0);

    // Controller 컴포넌트에 전달할 이벤트 핸들러
    const onClickButton = (value) => {
        setCount(count + value);
    };

    const [input, setInput] = useState("");
    const isMount = useRef(false);

    // 의존성 함수(dependency array, deps)가 변경될 때마다 콜백 함수가 계속 실행됨
    useEffect(() => {
        console.log(`count: ${count}, input: ${input}`);
    }, [count, input]);


    // React 컴포넌트의 3가지 사이클

    // 1. 마운트 -> 탄생
    useEffect(() => {
        console.log("mount");
        // deps가 비어있으면 마운트 시 한 번만 실행!
    }, []);

    // 2. 업데이트 -> 변화, 리렌더링
    useEffect(() => {
        // 최초 렌더링 시 isMount 값을 true로 변경하고 아무 일도 발생하지 않음
        // 이후 업데이트가 발생할 때마다 콘솔에 update 출력
        if (!isMount.current) {
            isMount.current = true;
            return;
        }
        console.log("update");
        // deps를 선언하지 않음
    });

    // 3. 언마운트 -> 죽음

    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <input value={input} onChange={(e) => {
                    setInput(e.target.value);
                }}/>
            </section>
            <section>
                <Viewer count={count}/>
                {count % 2 === 0 ? <Even/> : null}
            </section>
            <section>
                <Controller onClickButton={onClickButton}/>
            </section>
        </div>
    );
}

/*
[State Lifting]

React.js에서는 props 라는 기능을 이용해서 부모에서 자식 방향으로만 데이터를 전달할 수 있다.

따라서, Viewer, Controller 컴포넌트가 서로 형제이고 App 컴포넌트가 이들을 자식으로 두었을 때,
Viewer와 Controller 컴포넌트 사이 데이터 교환이 불가능하다.

하나의 State를 여러 컴포넌트에서 공유할 경우, 반드시 이들의 상위 컴포넌트(=App 컴포넌트)에서 관리해야 함.

 */