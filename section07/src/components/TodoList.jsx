import "./TodoList.css";
import TodoItem from "./TodoItem.jsx";
import { useMemo, useState } from "react";

export default ({ todos, onUpdateTodo, onDeleteTodo }) => {
    const [keyword, setKeyword] = useState("");

    const onChangeKeyword = (e) => setKeyword(e.target.value);

    const findTodosByKeyword = () => {
        if (keyword === "") {
            return todos;
        }

        return todos.filter(todo =>
            todo.content.toLowerCase().includes(keyword.toLowerCase())
        );
    };

    // 첫 번째 콜백 함수의 리턴 값을 그대로 반환
    // 콜백 함수는 두 번째 deps 기준으로 메모이제이션 수행
    const { totalCount, doneCount, notDoneCount } = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;

        return { totalCount, doneCount, notDoneCount: totalCount - doneCount };
    }, [todos]);

    return (
        <div className={"TodoList"}>
            <h4>Todo List 🌱</h4>
            <div>total: {totalCount}</div>
            <div>done: {doneCount}</div>
            <div>notDone: {notDoneCount}</div>
            <input value={keyword} onChange={onChangeKeyword} placeholder={"검색어를 입력하세요"}/>
            <div className={"todos_wrapper"}>
                {
                    findTodosByKeyword().map(todo => {
                        return (
                            <TodoItem
                                {...todo}
                                key={todo.id}
                                onUpdateTodo={onUpdateTodo}
                                onDeleteTodo={onDeleteTodo}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}