import "./css/Header.css";
import Navigate from "./Navigate";

function Header() {
    return (
    <header>
            <div id="topscreen">
                <figure>
                    <img id="clalogo" src="images/cla.png" alt="CLA logo"/>
                    <figcaption>Image source: <a href="https://www.coscologam.com/">Ehttps://www.coscologam.com/</a></figcaption>
                </figure>
                <h3 id="user">nnicodin</h3>
            </div>
            <h1>CLA Warehouse Manager</h1>
        <Navigate/>
    </header>
    )
};

export default Header;