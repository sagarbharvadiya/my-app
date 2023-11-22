import React, { useState, useEffect } from "react";
import logo from "../img/logo.png";

function NewHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [activeMenu, setActiveMenu] = useState(""); // State for active menu item

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleSetActiveMenu = (menu) => {
    setActiveMenu(menu);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header className={navbar ? "header active" : "header"}>
      <div className="header__logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="nav_new">
        <nav className={`header__nav ${isNavOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a
                href="/home"
                className={activeMenu === "home" ? "active" : ""}
                onClick={() => handleSetActiveMenu("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#About"
                className={activeMenu === "about" ? "active" : ""}
                onClick={() => handleSetActiveMenu("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#service"
                className={activeMenu === "services" ? "active" : ""}
                onClick={() => handleSetActiveMenu("services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#Clients"
                className={activeMenu === "clients" ? "active" : ""}
                onClick={() => handleSetActiveMenu("clients")}
              >
                Our Clients
              </a>
            </li>
            <li>
              <a
                href="#team"
                className={activeMenu === "team" ? "active" : ""}
                onClick={() => handleSetActiveMenu("team")}
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#careers"
                className={activeMenu === "careers" ? "active" : ""}
                onClick={() => handleSetActiveMenu("careers")}
              >
                Careers
              </a>
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
