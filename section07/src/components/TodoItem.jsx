import "./TodoItem.css";

export default ({ id, isDone, content, date, onUpdateTodo }) => {
    const onChangeCheckBox = () => {
        onUpdateTodo(id);
    };

    return (
        <div className={"TodoItem"}>
            <input onChange={onChangeCheckBox} checked={isDone} type={"checkbox"}/>
            <div className={"content"}>{content}</div>
            <div className={"date"}>{new Date(date).toLocaleDateString()}</div>
            <button>삭제</button>
        </div>
    );
}