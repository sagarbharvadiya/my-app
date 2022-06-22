// import React from "react";
import React, { useState } from "react";
import logo from "../img/logo.png";
import './Header.css';
import './Mobile.css';


function Header() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return(
        <>
         <div className="Krushna53-header gridspaceWithCenter">
            <div className="Krushna53-logo">
                <a href="index.html">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            
            <div className={showMediaIcons ? "Krushna53-navbar mobile-menu-links": "Krushna53-navbar "}>
                <ul>
                    <li><a href="#home"><i className="fa fa-home"></i>Home</a></li>
                    <li><a href="#About"><i className="fa fa-info-circle" aria-hidden="true"></i>About</a></li>
                    <li><a href="#service"><i className="fa fa-wrench" aria-hidden="true"></i>Service</a></li>
                    <li><a href="#Clients"><i className="fa fa-user" aria-hidden="true"></i>Our Clients</a></li>
                    <li><a href="#blog"><i className="fa-solid fa-blog"></i>Blog</a></li>
                </ul>
            <div className="hamburger-menu">
                <a href="#" onClick={()=> setShowMediaIcons(!showMediaIcons)}>
                    <i className="fas fa-bars"></i>
                </a>
            </div>
            </div>
            <div className="Krushna53-Con-button">
                <button><i className="fa fa-phone" aria-hidden="true"></i>Contact Now</button>
            </div>
        </div>



        </>
    )

};
export default Header;