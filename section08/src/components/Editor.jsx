import "../styles/Editor.css";
import { useEffect, useState } from "react";
import { emotionList } from "../utils/constants.js";
import { getStringDate } from "../utils/get-string-date.js";
import Button from "./Button.jsx";
import EmotionItem from "./EmotionItem.jsx";

export default ({ currentDiary, onSubmit }) => {
    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: ""
    });

    useEffect(() => {
        if (currentDiary) {
            setInput({
                ...currentDiary,
                createdDate: new Date(Number(currentDiary.createdDate))
            });
        }
    }, [currentDiary]);

    const onChangeInput = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (name === "createdDate") {
            value = new Date(value);
        }

        setInput({
            ...input,
            [name]: value
        });
    };

    const onClickEmotionItem = (emotion) => onChangeInput({
        target: {
            name: "emotionId",
            value: emotion.emotionId
        }
    });

    const onClickSubmitButton = () => onSubmit(input);

    return (
        <div className={"Editor"}>
            <section className={"date_section"}>
                <h4>오늘의 날짜</h4>
                <input
                    type={"date"}
                    name={"createdDate"}
                    value={getStringDate(input.createdDate)}
                    onChange={onChangeInput}
                />
            </section>
            <section className={"emotion_section"}>
                <h4>오늘의 감정</h4>
                <div className={"emotion_list_wrapper"}>
                    {
                        emotionList.map(emotion =>
                            <EmotionItem
                                {...emotion}
                                key={emotion.emotionId}
                                isSelected={emotion.emotionId === input.emotionId}
                                onClick={() => onClickEmotionItem(emotion)}
                            />
                        )
                    }
                </div>
            </section>
            <section className={"content_section"}>
                <h4>오늘의 일기</h4>
                <textarea
                    name={"content"}
                    value={input.content}
                    onChange={onChangeInput}
                    placeholder={"오늘은 어땠나요?"}
                />
            </section>
            <section className={"button_section"}>
                <Button text={"취소하기"}/>
                <Button type={"POSITIVE"} text={"작성완료"} onClick={onClickSubmitButton}/>
            </section>
        </div>
    );
}