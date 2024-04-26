import React from "react";
import blank from "../img/banner.png";

function Banner() {
    return (
        <>
            <div className="commonWidth">
                <div className="">
                    <div className="Krushna53-banner" id="home">
                        <div className="Krushna53-paragraph">
                            <h1>Krushna53</h1>
                            <p>We offer web development services and leverage Drupal to provide services in different domains like E-commerce, marketing and nonprofits.
                            </p>
                            <div className="Krushna53-Con-button btn-box">
                                <a href="http://bit.ly/chat-krushna53" target="_blank" rel="noreferrer" className="btn-1"><button>Know More </button></a>
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