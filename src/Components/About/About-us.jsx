import React from "react";
import './About-us.css';
import '../Mobile.css';
import blank from "../img/13038.jpg";
function AboutUs(){
    return(
        <>
        <div className="commonWidth Krushna53-AboutUs" id="About">
            <div className=" Krushna53-AboutUs-flex">
                <div className="aboutus-image">
                    <img src={blank} alt="blank" className="blank-img" />
                </div>
                <div className="AboutUs-info">
                    <h2 className="commonTitleFontSize">About Us</h2>
                    <h3>Ecology is Your Best Investment</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type
                        specimen book. </p>
                    <a href="#About" className="read-more">Read more.</a>
                </div>
            </div>
        </div>
        </>
    )
}
export default AboutUs;