import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import './Footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="links">
                <a href="">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>

            </div>
            <h4>•</h4>
            <img src="src/assets/images/logo.png" alt="" width='90px'/>
            <h4>•</h4>
            <h2>© 2025</h2>
        </div>
    )
}