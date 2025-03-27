import { Link } from "react-router-dom";
import "./css/Navigate.css";

function Navigate() {
    return (
        <>
        <nav id="main-nav">
            <ul>
                <li><Link to = "/"> Home </Link></li>
                <li><Link to = "/About"> About Us</Link></li>
                <li><Link to = "/services"> Services </Link></li>
                <li><Link to = "/trucking"> Trucking </Link></li>
                <li><Link to = "/currentinventory"> Current Inventory </Link></li>
            </ul>
        </nav>
        </>
    );
};

export default Navigate;