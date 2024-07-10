import React, { useState, useEffect } from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import data from "../data.json";

function NewHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
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
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuItemClick = (link) => {
    if (link.startsWith("#")) {
      const currentUrl = location.pathname;
      if (currentUrl.startsWith("/blogs/")) {
        navigate("/", { replace: true });
        setTimeout(() => {
          navigate(`/#${link.replace("#", "")}`, { replace: true });
        }, 100);
      } else if (currentUrl === "/blogs" || currentUrl === "/blogs/") {
        setTimeout(() => {
          navigate(`/#${link.replace("#", "")}`, { replace: true });
        }, 100);
      } else {
        navigate(`/#${link.replace("#", "")}`);
      }
      scrollToElement(link.replace("#", ""));
    } else {
      navigate(`/${link}`);
    }
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
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
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav_new">
        <nav className={`header__nav ${isNavOpen ? "open" : ""}`}>
          <ul>
            {data.Navbar.map((item, i) => (
              <React.Fragment key={i}>
                <li>
                  <Link
                    to={item.link}
                    onClick={() => handleMenuItemClick(item.link)}
                  >
                    {item.menu}
                  </Link>
                </li>
              </React.Fragment>
            ))}
          </ul>
          <div className="social show_mobile">
            <div className="Krushna53-Con-button">
              <button>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <Link
                  href="https://bit.ly/3WbQEoH"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact Now
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className="social hide-mobile">
        <div className="Krushna53-Con-button">
          <button>
            <i className="fa fa-phone" aria-hidden="true"></i>
            <a href="https://bit.ly/3WbQEoH" target="_blank" rel="noreferrer">
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
