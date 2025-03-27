import { Link } from "react-router-dom";
import "./css/Navigate.css";

function Navigate() {
    return (
        <>
        <nav id="main-nav">
            <ul>
                <li><Link to = "/"> Home </Link></li>
                <li><Link to = "/about"> About </Link></li>
                <li><Link to = "/blog"> Blog </Link></li>
            </ul>
        </nav>
        </>
    );
};

export default Navigate;