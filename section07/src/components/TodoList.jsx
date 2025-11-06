import "./TodoList.css";
import TodoItem from "./TodoItem.jsx";
import { useState } from "react";

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

    return (
        <div className={"TodoList"}>
            <h4>Todo List 🌱</h4>
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