import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Project</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Get Help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Booking status</a></li>
                            <li><a href="#">Payment Options</a></li>
                            <li><a href="#">Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Quick links</h4>
                        <ul>
                            <li><a href="#">Quick links</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Our blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow us</h4>
                        <div className="social-links">
                            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyRight text-center mt-4">
                <small style={{color:'white'}}> Copyright {(new Date()).getFullYear()} All Rights Reserved</small>
            </div>
        </footer>
    );
};

export default Footer;