import "./List.css";
import TodoItem from "./TodoItem.jsx";
import { useState } from "react";

export default ({ todos, onUpdateTodo, onDeleteTodo }) => {
    const [keyword, setKeyword] = useState("");

    const onChangeKeyword = (e) => {
        setKeyword(e.target.value);
    };

    const getFilteredData = () => {
        if (keyword === "") {
            return todos;
        }

        return todos.filter(todo =>
            todo.content.toLowerCase().includes(keyword.toLowerCase())
        );
    };

    const filteredTodos = getFilteredData();

    return (
        <div className={"List"}>
            <h4>Todo List 🌱</h4>
            <input value={keyword} onChange={onChangeKeyword} placeholder={"검색어를 입력하세요"}/>
            <div className={"todos_wrapper"}>
                {
                    filteredTodos.map(todo => {
                        return (
                            <TodoItem
                                key={todo.id}
                                {...todo}
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