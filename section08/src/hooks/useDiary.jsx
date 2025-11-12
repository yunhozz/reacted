import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App.jsx";

const useDiary = (diaryId) => {
    const diaries = useContext(DiaryStateContext);
    const [currentDiary, setCurrentDiary] = useState();
    const nav = useNavigate();

    useEffect(() => {
        const found = diaries.find(diary => String(diary.id) === String(diaryId));
        if (!found) {
            window.alert("존재하지 않는 일기입니다.");
            nav("/", { replace: true });
        }
        setCurrentDiary(found);
    }, [diaryId]);

    return currentDiary;
};

export default useDiary;