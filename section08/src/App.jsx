import "./App.css";
import { createContext, useEffect, useReducer, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Diary from "./pages/Diary.jsx";
import Edit from "./pages/Edit.jsx";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Notfound from "./pages/Notfound.jsx";

const DispatchType = {
    INIT: "init",
    CREATE: "create",
    UPDATE: "update",
    DELETE: "delete"
};

const DIARIES_KEY = "diaries";

function reducer(state, action) {
    let nextState;
    switch (action.type) {
        case DispatchType.INIT:
            return action.data;
        case DispatchType.CREATE:
            nextState = [...state, action.data];
            break;
        case DispatchType.UPDATE:
            nextState = state.map(item =>
                String(item.id) === String(action.data.id)
                    ? action.data
                    : item
            );
            break;
        case DispatchType.DELETE:
            nextState = state.filter(item => String(item.id) !== String(action.targetId));
            break;
        default:
            return state;
    }

    localStorage.setItem(DIARIES_KEY, JSON.stringify(nextState));

    return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

export default () => {
    const [isLoading, setIsLoading] = useState(true);
    const [diaries, dispatch] = useReducer(reducer, []);
    const diaryIdRef = useRef(0);

    useEffect(() => {
        const storedDiaries = localStorage.getItem(DIARIES_KEY);
        if (!storedDiaries) {
            setIsLoading(false);
            return;
        }

        const parsedDiaries = JSON.parse(storedDiaries);

        if (!Array.isArray(parsedDiaries)) {
            setIsLoading(false);
            return;
        }

        let maxId = 0;
        parsedDiaries.forEach(diary => {
            maxId = Math.max(Number(diary.id), maxId);
        });

        diaryIdRef.current = maxId + 1;

        dispatch({
            type: DispatchType.INIT,
            data: parsedDiaries
        });

        setIsLoading(false);
    }, []);

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

    if (isLoading) {
        return <div>데이터 로딩중입니다...</div>;
    }

    return (
        <>
            <DiaryStateContext value={diaries}>
                <DiaryDispatchContext value={{ onCreateDiary, onUpdateDiary, onDeleteDiary }}>
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