import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import Header from "../components/Header.jsx";
import usePageTitle from "../hooks/usePageTitle.jsx";

export default () => {
    const { onCreateDiary } = useContext(DiaryDispatchContext);
    const nav = useNavigate();
    usePageTitle("새 일기 쓰기");

    const onClickLeftButton = () => nav(-1);

    const onSubmitNewDiary = (input) => {
        const { createdDate, emotionId, content } = input;
        onCreateDiary(createdDate.getTime(), emotionId, content);
        nav("/", { replace: true }); // 홈페이지 이동, 뒤로가기 방지
    };

    return (
        <div>
            <Header
                title={"새 일기 쓰기"}
                leftChild={<Button text={"< 뒤로 가기"} onClick={onClickLeftButton}/>}
            />
            <Editor onSubmit={onSubmitNewDiary}/>
        </div>
    );
}