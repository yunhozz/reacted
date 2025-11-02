import { useInput } from "../hooks/useInput.jsx";

/*
[Hook 관련 팁]

1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출되어야 한다.
2. 조건부(if, for, etc.)로 호출될 수 없다.
3. Custom Hook을 직접 만들 수 있다. -> 'hooks' 디렉토리에 따로 관리

 */

export default () => {
    const [input, onChange] = useInput();

    return (
        <div>
            <input value={input} onChange={onChange}/>
        </div>
    );
}