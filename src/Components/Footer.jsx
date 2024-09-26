import React from "react";
import logo from "../img/krushna53Logo.png";

function Footer(params) {
  return (
    <>
      <div className="footer-section">
        <div className="footerwrapper">
          <div className="logo">
            <img src={logo} alt="..." />
          </div>
          <p>Copyright All Rights Reserved</p>
          <div className="footer-icons">
            <a
              href="https://bit.ly/3KhlwNE"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <i class="ri-github-fill icon"></i>
            </a>
            <a
              href="http://bit.ly/chat-krushna53"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <i className="ri-whatsapp-line icon"></i>
            </a>
            <a
              href="mailto:harshal.pradhan@krushna53.com"
              className="footer-icon"
            >
              <i className="fas fa-envelope icon"></i>
            </a>
            {/* <a href="#" className="footer-icon"><i className="ri-instagram-line icon"></i></a> */}
            <a
              href="https://www.linkedin.com/company/krushna53"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <i className="ri-linkedin-box-fill icon"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
