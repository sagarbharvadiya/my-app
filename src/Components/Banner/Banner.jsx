import React from "react";
import './Banner.css';
import '../Mobile.css';
import blank from "../img/banner.jpg";

function Banner() {
    return (
        <>
            <div className=" container-fluid">
                <div className="">
                    <div className="commonWidth Krushna53-banner" id="home">
                        <div className="Krushna53-paragraph">
                            <h1>Lorem Ipsum</h1>
                            <p>We offer web development services and leverage Drupal to provide services in different domains like E-commerce, marketing and nonprofits.
                            </p>
                            <div className="Krushna53-Con-button btn-box">
                                <a href="#home" className="btn-1"><button>Know More </button></a>
                            </div>
                        </div>
                        <div className=" Krushna53-banner-img">
                            <img src={blank} alt="blank" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Banner;