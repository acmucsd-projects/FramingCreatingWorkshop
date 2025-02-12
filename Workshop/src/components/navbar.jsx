import "../styles/navbar.css"
// Can you try importing the style sheet as a CSS Module? What's the difference?
//import ... from "...";

import ACMLogo from "../assets/acmlogo.png";


const Navbar = () => {
    return(
        <header className="navBar">
            <nav>
                {/*
                Add the links using an anchor tag and try to find different ways to put the links in one line! Does span or flexbox box both work?
                */}
                <img id="acm-logo" src={ACMLogo} alt="ACM Logo"/>
            </nav>
        </header>
    )
}

export default Navbar;