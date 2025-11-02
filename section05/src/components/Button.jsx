const Button = ({ text, color = "black", children }) => { // 구조분해할당으로 color 값에 기본값 정의
    console.log(`text=${text}, color=${color}`);
    return <button style={{ color }}>{text} - {children}</button>;
};

export default Button;