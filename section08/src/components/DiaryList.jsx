import "./DiaryList.css";
import Button from "./Button.jsx";
import DiaryItem from "./DiaryItem.jsx";

export default () => {
    return (
        <div className={"DiaryList"}>
            <div className={"menu_bar"}>
                <select>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button type={"POSITIVE"} text={"새 일기 쓰기"}/>
            </div>
            <div className={"list_wrapper"}>
                <DiaryItem/>
            </div>
        </div>
    );
}