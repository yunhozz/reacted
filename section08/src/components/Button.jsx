import "../styles/Button.css";

export default ({ type, text, onClick }) => {
    return (
        <button className={`Button Button_${type}`} onClick={onClick}>{text}</button>
    );
}