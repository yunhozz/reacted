import "./App.css";
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import TodoList from "./components/TodoList.jsx";
import { useRef, useState } from "react";

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

function App() {
    const [todos, setTodos] = useState(mockData);
    const idRef = useRef(3);

    const onCreateTodo = (content) => {
        setTodos([
            {
                id: idRef.current++,
                isDone: false,
                content,
                date: new Date().getTime()
            },
            ...todos
        ]);
    };

    const onUpdateTodo = (targetId) => {
        setTodos(todos.map(todo =>
            todo.id === targetId
                ? { ...todo, isDone: !todo.isDone }
                : todo
        ));
    };

    const onDeleteTodo = (targetId) => setTodos(todos.filter(todo => todo.id !== targetId));

    return (
        <div className={"App"}>
            <Header/>
            <Editor onCreateTodo={onCreateTodo}/>
            <TodoList todos={todos} onUpdateTodo={onUpdateTodo} onDeleteTodo={onDeleteTodo}/>
        </div>
    );
}

export default App;