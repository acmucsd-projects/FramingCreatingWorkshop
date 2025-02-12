import "../styles/footer.css"
import mailLogo from '../assets/mail.svg'
import discordLogo from '../assets/jam_discord.svg'
import linkedLogo from '../assets/mdi_linkedin.svg'
import instaLogo from '../assets/mdi_instagram.svg'
import githubLogo from '../assets/mdi_github.svg'

const Footer = () => {
    return(
        <footer>
            <h1 id="footer-header"> Connect With Us!</h1>
            <div className="socials">
                <div className="email">
                    <img src={mailLogo} alt=""/>
                    <p className="socialNames">Email</p>
                </div>
                <div className="discord">
                    <img src={discordLogo} alt=""/>
                    <p className="socialNames">Discord</p>
                </div>
                <div className="linkedin">
                    <img src={linkedLogo} alt=""/>
                    <p className="socialNames">LinkedIn</p>
                </div>
                <div className="instagram">
                    <img src={instaLogo} alt=""/>
                    <p className="socialNames">Instagram</p>
                </div>
                <div className="github">
                    <img src={githubLogo} alt=""/>
                    <p className="socialNames">Github</p>
                </div>        
            </div>
            <a href="">
                <button></button>
            </a>
        </footer>
    )
}

export default Footer;