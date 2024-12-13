import React from "react";
import logo from "../img/krushna53Logo.png";

function Footer(params) {
  return (
    <>
      <div className="tw-bg-custom-gray">
        <div className=" tw-flex tw-justify-between tw-w-[95%] tw-mx-auto">
          <div className="logo">
            <img src={logo} alt="..." className="tw-w-[100px]"/>
          </div>
          <p className="tw-flex tw-items-center tw-text-lg tw-text-center">Copyright All Rights Reserved</p>
          <div className="tw-flex tw-max-w-full">
            <a
              href="https://bit.ly/3KhlwNE"
              target="_blank"
              rel="noreferrer"
              className="tw-m-auto"
            >
              <i className="ri-github-fill tw-text-blue-700 tw-text-[27px] tw-inline-block tw-mx-1.5 hover:tw-text-customBrown"></i>
            </a>
            <a
              href="https://bit.ly/3WbQEoH"
              target="_blank"
              rel="noreferrer"
              className="tw-m-auto"
            >
              <i className="ri-whatsapp-line tw-text-blue-700 tw-text-[27px] tw-inline-block tw-mx-1.5 hover:tw-text-customBrown"></i>
            </a>
            <a
              href="mailto:info@krushna53.com"
              className="tw-m-auto"
            >
              <i className="fas fa-envelope   tw-text-blue-700 tw-text-[27px] tw-inline-block tw-mx-1.5 hover:tw-text-customBrown"></i>
            </a>
            {/* <a href="#" className="footer-icon"><i className="ri-instagram-line icon"></i></a> */}
            <a
              href="https://www.linkedin.com/company/krushna53"
              target="_blank"
              rel="noreferrer"
              className="footer-icon tw-m-auto"
            >
              <i className="ri-linkedin-box-fill  tw-text-blue-700 tw-text-[27px] tw-inline-block tw-mx-1.5 hover:tw-text-customBrown"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;