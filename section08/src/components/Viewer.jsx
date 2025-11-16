import "../styles/Viewer.css";
import { emotionList } from "../utils/constants.js";
import { getEmotionImage } from "../utils/get-emotion-image.js";

export default ({ emotionId, content }) => {
    const emotion = emotionList.find(emotion => String(emotion.emotionId) === String(emotionId));

    return (
        <div className={"Viewer"}>
            <section className={"img_section"}>
                <h4>오늘의 감정</h4>
                <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
                    <img src={getEmotionImage(emotionId)}/>
                    <div>{emotion.emotionName}</div>
                </div>
            </section>
            <section className={"content_section"}>
                <h4>오늘의 일기</h4>
                <div className={"content_wrapper"}>
                    <p>{content}</p>
                </div>
            </section>
        </div>
    );
}