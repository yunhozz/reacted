import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button.jsx";
import Header from "../components/Header.jsx";
import Viewer from "../components/Viewer.jsx";
import useDiary from "../hooks/useDiary.jsx";
import usePageTitle from "../hooks/usePageTitle.jsx";
import { getStringDate } from "../utils/get-string-date.js";

export default () => {
    const params = useParams();
    const nav = useNavigate();
    usePageTitle(`${params.id}번 일기`);

    const onClickLeftButton = () => nav(-1);
    const onClickEditButton = () => nav(`/edit/${params.id}`);

    const currentDiary = useDiary(params.id);
    if (!currentDiary) {
        return <div>데이터 로딩중...!</div>;
    }

    const { createdDate, emotionId, content } = currentDiary;
    const title = getStringDate(new Date(createdDate));

    return (
        <div>
            <Header
                title={`${title} 기록`}
                leftChild={<Button text={"< 뒤로 가기"} onClick={onClickLeftButton}/>}
                rightChild={<Button text={"수정하기"} onClick={onClickEditButton}/>}
            />
            <Viewer emotionId={emotionId} content={content}/>
        </div>
    );
}