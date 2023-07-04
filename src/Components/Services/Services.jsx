import React from "react";
import "./Services.css";
import "../Mobile.css";
import img1 from "../img/E-commerce.jpg";
import img2 from "../img/CMS-DRUPAL.webp";
import img3 from "../img/Project-Management.jpg";
import img4 from "../img/Consulting.jpg";

function Services() {
  return (
    <>
      <div className=" container-fluid">
        <div className="commonWidth service-section" id="service">
          <div className="servicewrapper">
            <div className="service-text commonTitleFontSize">Services</div>
            <div className="service-blog">
              <div className="blog-image">
                <img src={img2} alt="..." />
                <div>
                  <h2>Drupal Development</h2>
                  <p>
                    Client satisfaction is at the core of our business. We
                    strive to build long-term relationships with our clients by
                    delivering exceptional Drupal solutions and providing
                    top-notch customer support.
                  </p>
                </div>
              </div>
              <div className="blog-image">
                <img src={img1} alt="..." />

                <div>
                  <h2>Web Application Development</h2>
                  <p>
                    We offer comprehensive support and maintenance services to
                    ensure that your web applications remain secure, up-to-date,
                    and optimized for performance, allowing you to focus on your
                    core business activities.
                  </p>
                </div>
              </div>
              <div className="blog-image">
                <img src={img3} alt="..." />
                <div>
                  <h2>Support & Maintenance</h2>
                  <p>
                    Our commitment to customer satisfaction is at the heart of
                    our support and maintenance services. We strive to build
                    long-term partnerships with our clients, providing attentive
                    support and guidance every step of the way.
                  </p>
                </div>
              </div>
              <div className="blog-image">
                <img src={img4} alt="..." />
                <div>
                  <h2>Consulting</h2>
                  <p>
                    We provide end-to-end consulting services, from initial
                    planning and strategy development to implementation,
                    monitoring, and ongoing support, ensuring a seamless and
                    successful journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;
