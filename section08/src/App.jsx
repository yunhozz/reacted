import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import Diary from "./pages/Diary.jsx";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Notfound from "./pages/Notfound.jsx";

export default () => {
    const nav = useNavigate();

    const onClickButton = () => nav("/new");

    return (
        <>
            <Header
                title={"Header"}
                leftChild={<Button text={"Left"}/>}
                rightChild={<Button text={"Right"}/>}
            />
            <Button text={"1"} onClick={onClickButton}/>
            <Button type={"POSITIVE"} text={"2"} onClick={onClickButton}/>
            <Button type={"NEGATIVE"} text={"3"} onClick={onClickButton}/>
            <Routes className={"App"}>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/new"} element={<New/>}></Route>
                <Route path={"/diary/:id"} element={<Diary/>}></Route>
                <Route path={"*"} element={<Notfound/>}></Route>
            </Routes>
        </>
    );
}

/*
[프로젝트 개발 순서]

페이지 라우팅 -> 글로벌 레이아웃 설정 -> 공통 컴포넌트 구현 -> 개별 페이지 및 복잡한 기능 구현

 */