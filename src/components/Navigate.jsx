import { useState } from "react";
import { Link } from "react-router-dom";
import './css/Navigate.css';

function Navigate() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav id="main-nav">
            <button onClick={toggleMenu}>⧩</button>
            <ul className={menuOpen?"":"hide-small"}>
            <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/trucking">Trucking</Link>
                </li>
                <li>
                    <Link to="/currentinventory">Current Inventory</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigate;