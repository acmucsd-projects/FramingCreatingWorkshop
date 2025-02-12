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
            <div className="socialSection">
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
                <div className="footer-newsletter">
                    <p id="newsletter-header">Weekly Newsletter</p>
                    <a href="https://acmurl.us3.list-manage.com/subscribe?u=978957f92e1a32a93f942ce1c&id=d7c95c0d6a">
                        <button id="subscribe-button">Subscribe</button>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;