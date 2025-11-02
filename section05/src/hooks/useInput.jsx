import { useState } from "react";

export const useInput = () => { // 'use' 접두사를 붙여서 커스텀 훅을 만들 수 있다!!
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    };

    return [input, onChange];
};