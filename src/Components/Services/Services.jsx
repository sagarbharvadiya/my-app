import React from "react";
import './Services.css';
import '../Mobile.css';
import img1 from "../img/E-commerce.jpg";
import img2 from "../img/CMS-DRUPAL.webp";
import img3 from "../img/Project-Management.jpg";
import img4 from "../img/Consulting.jpg"
function Services() {
    return (
        <>
            <div className=" container-fluid">
              
                    <div className="commonWidth service-section" id="service">
                        <div className="servicewrapper">
                            <div className="service-text commonTitleFontSize">Services</div>
                            <div className="service-blog">
                                <div className="blog-image">
                                    <img src={img1} alt="..." />
                                    <h2>E-commerce</h2>
                                </div>
                                <div className="blog-image">
                                    <img src={img2} alt="..." />
                                    <h2>Development</h2>
                                </div>
                                <div className="blog-image">
                                    <img src={img3} alt="..." />
                                    <h2>Project Management</h2>
                                </div>
                                <div className="blog-image">
                                    <img src={img4} alt="..." />
                                    <h2>Consulting</h2>
                                </div>
                            </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}
export default Services;