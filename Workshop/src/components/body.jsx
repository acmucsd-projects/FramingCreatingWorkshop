import aiLogo from "../assets/ai.svg"
/*
Challenge: What's another way to write the function below and export it at the same time? 
What's the difference?
*/
const Main = () => {
    return(
        <>
            <main>
                <aside>
                    {/*
                    Create a button wrapped in an anchor tag to create a clickable link! Link:https://docs.google.com/forms/d/e/1FAIpQLSfR_Ep_UGX_DVgxf_yNDvPxmR_UYLWS8hxqtoN9QpZdLBueMA/closedform
                    */}
                </aside>
                {/*
                Add the main picture here with the proper imported module and alt description!
                */}
            </main>
            <div className="">
                <header>
                    <h2 id="community-header">Communities</h2>
                    <img src={aiLogo}alt="AI Logo"/>
                    {/*
                    Add the remaining two logos here similar to above. Don't forget to import the right logos!
                    */}
                </header>
                {/*Challenge for below: After completing these these boxes, is there a way to map over the content instead of hardcoding from a data file?
                */}
                <div className="">
                    <div id="ai-box">
                        <p>
                        <span id="ai">AI</span> projects focus on building a project related to all things AI, from natural language processing to computer vision and more!
                        </p>
                    </div>
                    <div id="box">
                    </div>
                    {/*Add the last box for the design community. Hint:Very similar to above! */}
                </div>

            </div>
            {/*Add a button to explore past projects! 
            Can you try using input element instead of button?
            */}
            <a id="button2" href="https://docs.google.com/forms/d/e/1FAIpQLSfR_Ep_UGX_DVgxf_yNDvPxmR_UYLWS8hxqtoN9QpZdLBueMA/closedform">
                <button id="past-projects-button">
                Explore Past Projects
                </button>
            </a>
        </>
    )
}

export default Main;