// import React from "react";
import React, { useState } from "react";
import logo from "../img/logo.png";
import './Header.css';
import '../Mobile.css';


function Header() {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <>
            <div className=" container-fluid">
                <div className="">
                    <div className="Krushna53-header gridspaceWithCenter">
                        <div className="Krushna53-logo">
                            <a href="index.html">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>

                        <div
                            className={isMobile ? "nav-links-mobile" : "nav-links"}
                            onClick={() => setIsMobile(false)}
                        >
                            <ul className="menu nav-links Krushna53-navbar">
                                <li><a href="#home"><i className="fa fa-home"></i>Home</a></li>
                                <li><a href="#About"><i className="fa fa-info-circle" aria-hidden="true"></i>About</a></li>
                                <li><a href="#service"><i className="fa fa-wrench" aria-hidden="true"></i>Services</a></li>
                                <li><a href="#Clients"><i className="fa fa-user" aria-hidden="true"></i>Our Clients</a></li>
                                {/* <li><a href="#blog"><i className="fa-solid fa-blog"></i>Blog</a></li> */}
                        <div className="Krushna53-Con-button">
                            <button><i className="fa fa-phone" aria-hidden="true"></i><a href="http://bit.ly/chat-krushna53" target="_blank">Contact Now</a></button>
                        </div>
                            </ul>
                        </div>
                        <button
                            className="mobile-menu-icon"
                            onClick={() => setIsMobile(!isMobile)}
                        >
                            {isMobile ? (
                                <i className="fas fa-times"></i>
                            ) : (
                                <i className="fas fa-bars"></i>
                            )}
                        </button>
                       
                    </div>
                </div>
            </div>


        </>
    )

};
export default Header;