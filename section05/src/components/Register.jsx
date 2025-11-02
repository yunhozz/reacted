import { useRef, useState } from "react";

/*
useState() vs. useRef()

둘다 컴포넌트 내부의 변수로 활용 가능하다.

하지만, useState는 값이 변경되면 컴포넌트를 리랜더링하는 반면,
useRef는 어떤 경우에도 리랜더링을 유발하지 않는다.
 */

export default () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    const countRef = useRef(0);

    const onChange = (event) => {
        // event.target.value : 사용자의 입력값
        console.log(event.target.name, event.target.value);

        countRef.current++;
        console.log(countRef.current);

        setInput({
            ...input,
            [event.target.name]: event.target.value // event.target.name 값으로 key 설정
        });
    };

    const inputRef = useRef();

    const onSubmit = () => {
        if (input.name === "") {
            // 이름을 입력하는 DOM 요소 포커스
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <h2>회원가입</h2>
            <div>
                <input
                    name={"name"}
                    value={input.name}
                    onChange={onChange}
                    ref={inputRef}
                    placeholder={"이름"}
                />
            </div>
            <div>
                <input
                    name={"birth"}
                    value={input.birth}
                    type={"date"}
                    onChange={onChange}
                />
            </div>
            <div>
                <select
                    name={"country"}
                    value={input.country}
                    onChange={onChange}
                >
                    <option></option>
                    <option value={"kr"}>한국</option>
                    <option value={"us"}>미국</option>
                    <option value={"jp"}>일본</option>
                </select>
            </div>
            <div>
                <textarea
                    name={"bio"}
                    value={input.bio}
                    onChange={onChange}
                    placeholder={"자기소개를 입력해주세요"}
                />
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    );
}