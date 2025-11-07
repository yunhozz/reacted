import "./App.css";
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import TodoList from "./components/TodoList.jsx";
import { useCallback, useReducer, useRef } from "react";

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

// reducer: 변환기
// 액션 객체(action)를 받아서 상태를 변화시키는 역할을 함
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
    // dispatch: 상태 변화를 요청하는 함수
    // 상태가 어떻게 변화되길 원하는지의 내용(=액션 객체)을 인수로 전달 -> dispatch(action)
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreateTodo = (content) => {
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

    // useMemo()의 자매품
    const onUpdateTodo = useCallback((targetId) => {
        dispatch({
            type: "UPDATE",
            targetId
        });
    }, []);

    const onDeleteTodo = useCallback((targetId) => {
        dispatch({
            type: "DELETE",
            targetId
        });
    }, []);

    return (
        <div className={"App"}>
            <Header/>
            <Editor onCreateTodo={onCreateTodo}/>
            <TodoList todos={todos} onUpdateTodo={onUpdateTodo} onDeleteTodo={onDeleteTodo}/>
        </div>
    );
}