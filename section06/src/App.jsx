import "./App.css";
import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import { useState } from "react";

export default function App() {
    // Viewer 컴포넌트에 전달할 State
    const [count, setCount] = useState(0);

    // Controller 컴포넌트에 전달할 이벤트 핸들러
    const onClickButton = (value) => {
        setCount(count + value);
    };

    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <Viewer count={count}/>
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