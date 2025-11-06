import "./Editor.css";
import { useRef, useState } from "react";

export default ({ onCreateTodo }) => {
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => setContent(e.target.value);

    const onClickAddedButton = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreateTodo(content);
        setContent("");
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onClickAddedButton();
        }
    };

    return (
        <div className={"Editor"}>
            <input
                value={content}
                ref={contentRef}
                onKeyDown={onKeyDown}
                onChange={onChangeContent}
                placeholder={"새로운 Todo..."}
            />
            <button onClick={onClickAddedButton}>추가</button>
        </div>
    );
}