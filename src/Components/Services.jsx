import React from "react";
import './Services.css';
import './Mobile.css';
import img1 from "../img/image1.png";
import img2 from "../img/image2.png";
import img3 from "../img/image3.png";
function Services(){
    return(
        <>
       <div className="commonWidth service-section" id="service">
            <div className="servicewrapper">
                <div className="service-text">Services</div>
                <div className="service-blog">
                    <div className="blog-image">
                        <img src={img1} alt="..."/>
                        <h2>Services</h2>
                    </div>
                    <div className="blog-image">
                        <img src={img2} alt="..."/>
                        <h2>Services</h2>
                    </div>
                    <div className="blog-image">
                        <img src={img3} alt="..." />
                        <h2>Services</h2>
                    </div>
                    <div className="blog-image">
                        <img src={img3} alt="..."/>
                        <h2>Services</h2>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Services;