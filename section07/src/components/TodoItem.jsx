import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App.jsx";

const TodoItem = ({ id, isDone, content, date }) => {
    const { onUpdateTodo, onDeleteTodo } = useContext(TodoDispatchContext);
    const onChangeCheckBox = () => onUpdateTodo(id);
    const onClickDeletedButton = () => onDeleteTodo(id);

    return (
        <div className={"TodoItem"}>
            <input onChange={onChangeCheckBox} checked={isDone} type={"checkbox"}/>
            <div className={"content"}>{content}</div>
            <div className={"date"}>{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeletedButton}>삭제</button>
        </div>
    );
};

export default memo(TodoItem);

// 고차 컴포넌트(HOC)
memo(TodoItem, (prevProps, nextProps) => {
    // 반환값에 따라 props의 변경 여부를 판단
    // true: props 변경되지 않음 -> 리렌더링 X
    // false: props 변경됨 -> 리렌더링 O

    const keys = ["id", "isDone", "content", "date"];
    return keys.some((key) => prevProps[key] !== nextProps[key]);
});

/*
React.memo()는 기본적으로 인수로 받은 컴포넌트의 props간 얕은 비교를 수행하여 메모이제이션 여부를 결정함.
따라서, 객체 타입의 값(ex. onUpdateTodo, onDeleteTodo)을 매번 새롭게 전달이 될 때마다 다른 주소값을 가지게 됨
props가 변경이 되었다고 판단하여 메모이제이션이 수행되지 않고 리렌더링 발생!!

[해결 방안]
1. useCallback() 리액트 훅 이용
2. 두 번째 인수로 콜백 함수를 전달하여 최적화 커스터마이징
 */