import "../styles/body.css"
//import mainPicture from "";
import mainPicture from "../assets/imageprojects.png"
import aiLogo from "../assets/ai.svg"
import hackLogo from "../assets/hack.svg"
import dsgnLogo from "../assets/dsgn.svg"
const Main = () => {
    return(
        <>
            <main>
                <aside>
                    <h1 id="body-header">ACM Projects</h1>
                    <p>ACM Projects is our quarterly projects program where students work in a tight knit team. The program gives students the opportunity to be hands-on outside of courses in fields such as <strong> AI, design, and software engineering </strong>. The program culminates in a projects showcase and the finished product looks great on resumes. We welcome all skill levels to apply!</p>
                    <br/>
                    <b>Applications due Feb 14, 11:59PM</b>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfR_Ep_UGX_DVgxf_yNDvPxmR_UYLWS8hxqtoN9QpZdLBueMA/closedform">
                        <button id="apply-button">
                        Apply Now
                        </button>
                    </a>
                </aside>
                <img src={mainPicture} alt="Project Picture"/>
            </main>
            <div className="communities">
                <header>
                    <h2 id="community-header">Communities</h2>
                    <img src={aiLogo}alt="AI Logo"/>
                    <img src={hackLogo}alt="Hack Logo"/>
                    <img src={dsgnLogo}alt="Design Logo"/>
                </header>
                <div className="communityBoxes">
                    <div id="ai-box">
                        <p>
                        <span id="ai">AI</span> projects focus on building a project related to all things AI, from natural language processing to computer vision and more!
                        </p>
                    </div>
                    <div id="hack-box">
                        <p>
                        <span id="hack">Hack</span> projects works to build a full MERN stack website, emulating a software engineering team working on the Agile process!
                        </p>
                    </div>
                    <div id="design-box">
                        <p>
                        <span id="design">Design</span> projects work on creating or redesigning a platform, working through the design process from research to prototyping and more!
                        </p>
                    </div>
                </div>

            </div>
            <a id="button2" href="https://docs.google.com/forms/d/e/1FAIpQLSfR_Ep_UGX_DVgxf_yNDvPxmR_UYLWS8hxqtoN9QpZdLBueMA/closedform">
                <button id="past-projects-button">
                Explore Past Projects
                </button>
            </a>
        </>
    )
}

export default Main;