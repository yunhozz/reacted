import "./Editor.css";
import { useRef, useState } from "react";

export default ({ onCreate }) => {
    const [content, setContent] = useState();
    const contentRef = useRef();

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    return (
        <div className={"Editor"}>
            <input
                ref={contentRef}
                value={content}
                onKeyDown={onKeyDown}
                onChange={onChangeContent}
                placeholder={"새로운 Todo..."}
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
}