import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import Button from "./components/Button.jsx";
import { useState } from "react";

// 루트(Root) 컴포넌트 -> Header, Main, Footer 컴포넌트를 자식으로 둔 계층 구조
function App() {
    const coffeeButtonProps = {
        text: "카페",
        color: "green"
    };

    /*
    useState 함수를 통해 re-rendering을 일으킬 수 있다.
        - 배열의 첫번째 요소 : State의 현재 값
        - 배열의 두번째 요소 : State를 변화시키는 상태 변화 함수
        - 인수 : State의 초기값
     */
    const [count, setCount] = useState(0);
    const [light, setLight] = useState("OFF");

    return (
        <>
            <Header/> {/* 부모 컴포넌트 */}
            <Main/>
            <h1>안녕 리액트!</h1>
            <Button text={"메일"} color={"red"}/>
            <Button {...coffeeButtonProps}/> {/* spread 연산자 이용 */}
            <Button text={"블로그"}>
                {/* children이라는 요소로 자동 할당됨 */}
                <div>자식 요소</div>
            </Button>
            <h2>{count}</h2>
            <button onClick={() => {
                setCount(count + 1);
            }}> +
            </button>
            <h2>{light}</h2>
            <button onClick={() => {
                setLight(light === "ON" ? "OFF" : "ON");
            }}>{light === "ON" ? "끄기" : "켜기"}
            </button>
            <Footer/>
        </>
    );
}

export default App;