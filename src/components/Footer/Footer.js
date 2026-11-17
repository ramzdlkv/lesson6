import "./Footer.css";
import logo from "./icons/logo.png";
import instIcon from "./icons/instagram.png";
import fbIcon from "./icons/facebook.png";
import twIcon from "./icons/twitter.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <img src={logo} className="footer-logo" />
                    <p className="footer-desc">
                        Bringing you closer to your dream home, one click at a time.
                    </p>
                </div>

                <div className="footer-column">
                    <h4>About</h4>
                    <a href="#">Our Story</a>
                    <a href="#">Careers</a>
                    <a href="#">Our Team</a>
                    <a href="#">Resources</a>
                </div>

                <div className="footer-column">
                    <h4>Support</h4>
                    <a href="#">FAQ</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Help Center</a>
                    <a href="#">Terms of Service</a>
                </div>

                <div className="footer-column">
                    <h4>Find Us</h4>
                    <a href="#">Events</a>
                    <a href="#">Locations</a>
                    <a href="#">Newsletter</a>
                </div>

                <div className="footer-column">
                    <h4>Our Social</h4>
                    <a href="#" className="social-link">
                        <img src={instIcon} className="social-icon" />
                        Instagram
                    </a>
                    <a href="#" className="social-link">
                        <img src={fbIcon} className="social-icon" />
                        Facebook
                    </a>
                    <a href="#" className="social-link">
                        <img src={twIcon} className="social-icon" />
                        Twitter (x)
                    </a>
                </div>
            </div>
        </footer>
    );
}