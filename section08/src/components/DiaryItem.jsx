import "./DiaryItem.css";
import { useNavigate } from "react-router-dom";
import { getEmotionImage } from "../util/get-emotion-image.js";
import Button from "./Button.jsx";

export default ({ id, emotionId, createdDate, content }) => {
    const nav = useNavigate();
    const onClickDiaryDiv = () => nav(`/diary/${id}`);
    const onClickEditButton = () => nav(`/edit/${id}`);

    return (
        <div className={"DiaryItem"}>
            <div className={`img_section img_section_${emotionId}`} onClick={onClickDiaryDiv}>
                <img src={getEmotionImage(emotionId)}/>
            </div>
            <div className={"info_section"} onClick={onClickDiaryDiv}>
                <div className={"created_date"}>{new Date(createdDate).toLocaleDateString()}</div>
                <div className={"content"}>{content}</div>
            </div>
            <div className={"button_section"}>
                <Button text={"수정하기"} onClick={onClickEditButton}/>
            </div>
        </div>
    );
}