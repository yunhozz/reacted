import Button from "../components/Button.jsx";
import DiaryList from "../components/DiaryList.jsx";
import Header from "../components/Header.jsx";

export default () => {
    return (
        <div className={"Home"}>
            <Header
                title={"2025년 11월"}
                leftChild={<Button text={"<"}/>}
                rightChild={<Button text={">"}/>}
            />
            <DiaryList/>
        </div>
    );
}