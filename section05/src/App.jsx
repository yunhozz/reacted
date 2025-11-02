import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import Button from "./components/Button.jsx";
import Counter from "./components/Counter.jsx";
import Bulb from "./components/Bulb.jsx";
import Register from "./components/Register.jsx";
import HookExam from "./components/HookExam.jsx";

/*
[re-rendering이 발생하는 조건]
    1. 자신이 관리하는 State 값이 변경되었을 때
    2. 제공되는 props 값이 변경되었을 때
    3. 부모 컴포넌트(ex. App)가 re-rendering 되었을 때

-> 관련 없는 컴포넌트들을 서로 분리하여 성능 저하를 예방한다.
 */

// 루트(Root) 컴포넌트 -> Header, Main, Footer 컴포넌트를 자식으로 둔 계층 구조
function App() {
    const coffeeButtonProps = {
        text: "카페",
        color: "green"
    };

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
            <Counter/>
            <Bulb/>
            <Register/>
            <HookExam/>
            <Footer/>
        </>
    );
}

export default App;