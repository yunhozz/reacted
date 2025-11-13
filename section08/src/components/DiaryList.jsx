import "./DiaryList.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button.jsx";
import DiaryItem from "./DiaryItem.jsx";

const getSortedDiaries = (diaries, sortType) => diaries.toSorted((a, b) => {
    const ac = Number(a.createdDate);
    const bc = Number(b.createdDate);
    return sortType === "oldest" ? ac - bc : bc - ac;
});

export default ({ diaries }) => {
    const [sortType, setSortType] = useState("latest");
    const nav = useNavigate();

    const onChangeSortType = (e) => setSortType(e.target.value);

    const onClickNewButton = () => nav("/new");

    return (
        <div className={"DiaryList"}>
            <div className={"menu_bar"}>
                <select onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button type={"POSITIVE"} text={"새 일기 쓰기"} onClick={onClickNewButton}/>
            </div>
            <div className={"list_wrapper"}>
                {
                    getSortedDiaries(diaries, sortType).map(diary =>
                        <DiaryItem key={diary.id} {...diary}/>
                    )
                }
            </div>
        </div>
    );
}