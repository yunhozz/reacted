const Button = ({ text, color = "black", children }) => { // 구조분해할당으로 color 값에 기본값 정의
    console.log(`text=${text}, color=${color}`);

    const onButtonClick = (event) => {
        /*
        통합된 이벤트 객체를 제공해준다 (Synthetic Base Event, 합성 이벤트)
            -> 브라우저 별 스펙이 달라 발생하는 문제 (Cross Browsing Issue)
            -> 합성 이벤트 객체(=통일된 규칙)를 통해 해결 가능
         */
        console.log(event);
        console.log(text);
    };

    return <button
        // 이벤트 핸들러
        onClick={onButtonClick}
        onMouseEnter={onButtonClick}
        style={{ color }}>
        {text} - {children}
    </button>;
};

export default Button;