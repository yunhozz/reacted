import "./TodoItem.css";

export default ({ id, isDone, content, date, onUpdateTodo, onDeleteTodo }) => {
    const onChangeCheckBox = () => {
        onUpdateTodo(id);
    };

    const onClickDeletedButton = () => {
        onDeleteTodo(id);
    };

    return (
        <div className={"TodoItem"}>
            <input onChange={onChangeCheckBox} checked={isDone} type={"checkbox"}/>
            <div className={"content"}>{content}</div>
            <div className={"date"}>{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeletedButton}>삭제</button>
        </div>
    );
}