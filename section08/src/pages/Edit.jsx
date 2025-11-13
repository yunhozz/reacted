import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext } from "../App.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import Header from "../components/Header.jsx";
import useDiary from "../hooks/useDiary.jsx";
import usePageTitle from "../hooks/usePageTitle.jsx";

export default () => {
    const { onUpdateDiary, onDeleteDiary } = useContext(DiaryDispatchContext);
    const params = useParams();
    const nav = useNavigate();
    usePageTitle(`${params.id}번 일기 수정`);

    const onClickLeftButton = () => nav(-1);

    const onClickDeleteButton = () => {
        const isConfirmed = window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!");
        if (isConfirmed) {
            onDeleteDiary(params.id);
            nav("/", { replace: true });
        }
    };

    const currentDiary = useDiary(params.id);

    const onSubmitUpdatedDiary = (input) => {
        const isConfirmed = window.confirm("일기를 정말 수정할까요?");
        if (isConfirmed) {
            const { createdDate, emotionId, content } = input;
            onUpdateDiary(params.id, createdDate.getTime(), emotionId, content);
            nav("/", { replace: true });
        }
    };

    return (
        <div>
            <Header
                title={"일기 수정하기"}
                leftChild={<Button text={"< 뒤로 가기"} onClick={onClickLeftButton}/>}
                rightChild={<Button type={"NEGATIVE"} text={"삭제하기"} onClick={onClickDeleteButton}/>}
            />
            <Editor currentDiary={currentDiary} onSubmit={onSubmitUpdatedDiary}/>
        </div>
    );
}