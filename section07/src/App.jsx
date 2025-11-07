import "./App.css";
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import TodoList from "./components/TodoList.jsx";
import { createContext, useCallback, useMemo, useReducer, useRef } from "react";

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

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

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

    // useMemo: 값 및 계산 결과를 메모이제이션
    // useCallback: 전달된 함수 자체를 메모이제이션
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

    /*
    createContext()로 신규 컨텍스트(TodoContext)를 만들고,
    TodoContext.Provider로 Editor, List 컴포넌트의 부모로 설정한다.

    결국, App 컴포넌트에서 value props들을 TodoContext.Provider로 전달하게 되고,
    Editor, List 컴포넌트는 TodoContext의 데이터 공급 범위로 설정된다.

    이때, todos와 같이 변경될 수 있는 값을 포함하여 컨텍스트를 구성할 경우
    TodoContext.Provider 대상 컴포넌트의 메모이제이션이 제대로 동작하지 않는다.
        -> 변경될 수 있는 값은 TodoStateContext, 변경되지 않는 값은 TodoDispatchContext 로 구성!!

     */

    // 함수들을 메모이제이션하여 컨텍스트에 변하지 않는 값을 넣기 위해
    const memoizedDispatch = useMemo(() => {
        return { onCreateTodo, onUpdateTodo, onDeleteTodo };
    }, []);

    return (
        <div className={"App"}>
            <Header/>
            <TodoStateContext value={todos}>
                <TodoDispatchContext value={memoizedDispatch}>
                    <Editor/>
                    <TodoList/>
                </TodoDispatchContext>
            </TodoStateContext>
        </div>
    );
}