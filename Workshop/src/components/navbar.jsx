import "../styles/navbar.css"
// Can you try importing the style sheet as a CSS Module? What's the difference?
//import ... from "...";

import ACMLogo from "../assets/acmlogo.png";


const Navbar = () => {
    return(
        <header>
            <nav>
                <img id="acm-logo" src={ACMLogo} alt="ACM Logo"/>
                <div className="navigationLinks">
                    <a href="https://projects.acmucsd.com/">Home</a>
                    <a href="https://projects.acmucsd.com/about">About</a>
                    <a href="https://projects.acmucsd.com/archive">Archive</a>
                    <a href="https://projects.acmucsd.com/archive">Gallery</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;