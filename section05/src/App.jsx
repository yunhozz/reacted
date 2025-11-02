import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import Button from "./components/Button.jsx";

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
            <Footer/>
        </>
    );
}

export default App;