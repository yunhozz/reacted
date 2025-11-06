import "./App.css";
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import TodoList from "./components/TodoList.jsx";
import { useReducer, useRef, useState } from "react";

const mockData = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        date: new Date().getTime()
    },
    {
        id: 1,
        isDone: false,
        content: "빨래하기",
        date: new Date().getTime()
    },
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        date: new Date().getTime()
    }
];

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE":
            return state.map((item) => item.id === action.targetId ? { ...item, isDone: !item.isDone } : item);
        case "DELETE":
            return state.filter((item) => item.id !== action.targetId);
        default:
            return state;
    }
}

export default () => {
    // const [todos, setTodos] = useState(mockData);
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreateTodo = (content) => {
        // setTodos([
        //     {
        //         id: idRef.current++,
        //         isDone: false,
        //         content,
        //         date: new Date().getTime()
        //     },
        //     ...todos
        // ]);

        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                isDone: false,
                content,
                date: new Date().getTime()
            }
        });
    };

    const onUpdateTodo = (targetId) => {
        // setTodos(todos.map(todo =>
        //     todo.id === targetId
        //         ? { ...todo, isDone: !todo.isDone }
        //         : todo
        // ));

        dispatch({
            type: "UPDATE",
            targetId
        });
    };

    const onDeleteTodo = (targetId) => {
        // setTodos(todos.filter(todo => todo.id !== targetId));

        dispatch({
            type: "DELETE",
            targetId
        });
    };

    return (
        <div className={"App"}>
            <Header/>
            <Editor onCreateTodo={onCreateTodo}/>
            <TodoList todos={todos} onUpdateTodo={onUpdateTodo} onDeleteTodo={onDeleteTodo}/>
        </div>
    );
}