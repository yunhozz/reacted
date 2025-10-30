import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";

// 루트(Root) 컴포넌트 -> Header, Main, Footer 컴포넌트를 자식으로 둔 계층 구조
function App() {
    return (
        <>
            <Header/> {/* 부모 컴포넌트 */}
            <Main/>
            <h1>안녕 리액트!</h1>
            <Footer/>
        </>
    );
}

export default App;