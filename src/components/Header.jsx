import { Navigate } from "react-router-dom";
import "./css/Header.css";

function Header() {
    return (
    <header>
        <h1>Title of the Site</h1>
        <Navigate/>
    </header>
    )
};

export default Header;