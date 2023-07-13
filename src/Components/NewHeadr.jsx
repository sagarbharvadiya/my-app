import React, { useState } from "react";
import logo from "../img/logo.png";

function NewHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="nav_new">
        <nav className={`header__nav ${isNavOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li> 
            <li>
              <a href="#Clients">Our Clients</a>
            </li>
            <li>
              <a href="#team">Our Team</a>
            </li>
          </ul>
          <div className="social show_mobile">
            <div className="Krushna53-Con-button">
              <button>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <a
                  href="http://bit.ly/chat-krushna53"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact Now
                </a>
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className="social hide-mobile">
        <div className="Krushna53-Con-button">
          <button>
            <i className="fa fa-phone" aria-hidden="true"></i>
            <a
              href="http://bit.ly/chat-krushna53"
              target="_blank"
              rel="noreferrer"
            >
              Contact Now
            </a>
          </button>
        </div>
      </div>
      <button className="header__toggle" onClick={toggleNav}>
        <span className="header__toggle-icon">
          <div className="hamburger-menu">
            <div className="hamburger-menu-line"></div>
            <div className="hamburger-menu-line"></div>
            <div className="hamburger-menu-line"></div>
          </div>
        </span>
      </button>
    </header>
  );
}

export default NewHeader;
