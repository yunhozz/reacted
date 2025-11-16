import "../styles/EmotionItem.css";
import { getEmotionImage } from "../utils/get-emotion-image.js";

export default ({ emotionId, emotionName, isSelected, onClick }) => {
    return (
        <div
            className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`}
            onClick={onClick}
        >
            <img className={"emotion_img"} src={getEmotionImage(emotionId)}/>
            <div className={"emotion_name"}>{emotionName}</div>
        </div>
    );
}