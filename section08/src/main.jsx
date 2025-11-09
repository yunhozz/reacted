import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    // React Router DOM : Client Side Rendering(CSR) 방식으로 호출
    // React App의 모든 컴포넌트들이 페이지 라우팅과 관련된 모든 데이터들을 공급받을 수 있음
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);