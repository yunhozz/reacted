import { useState } from "react";

export default () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    // event.target.value : 사용자의 입력값
    const onChange = (event) => {
        console.log(event.target.name, event.target.value);

        setInput({
            ...input,
            [event.target.name]: event.target.value // event.target.name 값으로 key 설정
        });
    };

    console.log(input);

    return (
        <div>
            <h2>회원가입</h2>
            <div>
                <input
                    name={"name"}
                    value={input.name}
                    onChange={onChange}
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
                    onChange={onChange}>
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
        </div>
    );
}