import { useContext, useState } from "react";
import { DiaryStateContext } from "../App.jsx";
import Button from "../components/Button.jsx";
import DiaryList from "../components/DiaryList.jsx";
import Header from "../components/Header.jsx";
import usePageTitle from "../hooks/usePageTitle.jsx";

const getMonthlyDiaries = (pivotDate, diaries) => {
    const beginTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth(),
        1, 0, 0, 0
    ).getTime();

    const endTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth() + 1,
        0, 23, 59, 59
    ).getTime();

    return diaries.filter(diary => {
        const createdDate = diary.createdDate;
        return beginTime <= createdDate && createdDate <= endTime;
    });
};

export default () => {
    const diaries = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());
    usePageTitle("감정 일기장");

    const monthlyDiaries = getMonthlyDiaries(pivotDate, diaries);

    const onClickLeftButton = () =>
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));

    const onClickRightButton = () =>
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));

    return (
        <div className={"Home"}>
            <Header
                title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
                leftChild={<Button text={"<"} onClick={onClickLeftButton}/>}
                rightChild={<Button text={">"} onClick={onClickRightButton}/>}
            />
            <DiaryList diaries={monthlyDiaries}/>
        </div>
    );
}