import "../styles/navbar.css"
// Can you try importing the style sheet as a CSS Module? What's the difference?
//import ... from "...";

//import ACMLogo from "";


const Navbar = () => {
    return(
        <header>
            <nav>
                <img alt=""/>
                {
                    /*
                    Locate our logo in the files tab, and add it with a relevant description!
                    */
                }
                <div className="">
                    <a href="https://projects.acmucsd.com/">Home</a>
                    <a href="https://projects.acmucsd.com/about">About</a>
                    <a href="https://projects.acmucsd.com/archive">Archive</a>
                    {/*
                        We are missing one more page, please add another anchor tag! Link:https://projects.acmucsd.com/gallery
                        Feel free to remove comment when done.
                    */}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;