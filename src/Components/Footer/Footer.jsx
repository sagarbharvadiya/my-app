import React from "react";
import './Footer.css';
import logo from '../img/krushna53Logo.png';

function Footer(params) {
    return (
        <>
            <div class="commonWidth footer-section">
                <div class="footerwrapper">
                    <div class="logo"><img src={logo} alt="..."/></div>
                    <p>Copyright All Rights Reserved</p>
                    <div class="footer-icons">
                        <a href="#" class="footer-icon"><i class="ri-whatsapp-line icon"></i></a>
                        <a href="#" class="footer-icon"><i class="fas fa-envelope icon"></i></a>
                        {/* <a href="#" class="footer-icon"><i class="ri-instagram-line icon"></i></a> */}
                        <a href="#" class="footer-icon"><i class="ri-linkedin-box-fill icon"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Footer;