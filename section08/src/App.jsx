import "./App.css";
import { createContext, useReducer, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Diary from "./pages/Diary.jsx";
import Edit from "./pages/Edit.jsx";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Notfound from "./pages/Notfound.jsx";

const mockData = [
    {
        id: 1,
        createdDate: new Date("2025-11-10").getTime(),
        emotionId: 1,
        content: "1번 일기"
    },
    {
        id: 2,
        createdDate: new Date("2025-11-09").getTime(),
        emotionId: 2,
        content: "2번 일기"
    },
    {
        id: 3,
        createdDate: new Date("2025-10-25").getTime(),
        emotionId: 3,
        content: "3번 일기"
    }
];

const DispatchType = {
    CREATE: "create",
    UPDATE: "update",
    DELETE: "delete"
};

function reducer(state, action) {
    switch (action.type) {
        case DispatchType.CREATE:
            return [...state, action.data];
        case DispatchType.UPDATE:
            return state.map(item =>
                String(item.id) === String(action.data.id)
                    ? action.data
                    : item
            );
        case DispatchType.DELETE:
            return state.filter(item => String(item.id) !== String(action.targetId));
        default:
            return state;
    }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

export default () => {
    const [diaries, dispatch] = useReducer(reducer, mockData);
    const diaryIdRef = useRef(3);

    const onCreateDiary = (createdDate, emotionId, content) => {
        const newDiary = {
            id: diaryIdRef.current++,
            createdDate,
            emotionId,
            content
        };
        dispatch({
            type: DispatchType.CREATE,
            data: newDiary
        });
    };

    const onUpdateDiary = (diaryId, createdDate, emotionId, content) => {
        const updatedDiary = {
            id: diaryId,
            createdDate,
            emotionId,
            content
        };
        dispatch({
            type: DispatchType.UPDATE,
            data: updatedDiary
        });
    };

    const onDeleteDiary = (diaryId) => {
        dispatch({
            type: DispatchType.DELETE,
            targetId: diaryId
        });
    };

    return (
        <>
            <DiaryStateContext value={diaries}>
                <DiaryDispatchContext value={
                    {
                        onCreateDiary,
                        onUpdateDiary,
                        onDeleteDiary
                    }
                }>
                    <Routes className={"App"}>
                        <Route path={"/"} element={<Home/>}></Route>
                        <Route path={"/new"} element={<New/>}></Route>
                        <Route path={"/diary/:id"} element={<Diary/>}></Route>
                        <Route path={"/edit/:id"} element={<Edit/>}></Route>
                        <Route path={"*"} element={<Notfound/>}></Route>
                    </Routes>
                </DiaryDispatchContext>
            </DiaryStateContext>
        </>
    );
}

/*
[프로젝트 개발 순서]

페이지 라우팅 -> 글로벌 레이아웃 설정 -> 공통 컴포넌트 구현 -> 개별 페이지 및 복잡한 기능 구현

 */