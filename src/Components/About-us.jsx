import React from "react";
import blank from "../img/13038.png";
function AboutUs() {
    return (
        <>
            <div className="commonWidth ">   
                    <div className="Krushna53-AboutUs" id="About">
                        <div className=" Krushna53-AboutUs-flex">
                            <div className="aboutus-image">
                                <img src={blank} alt="blank" className="blank-img" />
                            </div>
                            <div className="AboutUs-info">
                                <h2 className="commonTitleFontSize">About Us</h2>

                                <p>Krushna53 specializes in building web apps using Drupal as CMS. It provides end-to-end solutions. We are a small yet dedicated team catering to our clients.
                                    Currently, we are catering to clients from the UK, USA, and India. We are working on projects that deal with providing digital marketing services.
                                    Additionally, Krushna53 also provides expert consultations to SMEs, NGOs, and startups to enrich their Digital Experience.
                                    Some of our past clients were from FMCG Sector, Space technologies, and other major industries.  </p>
                                {/* <a href="#About" className="read-more">Read more.</a> */}
                            </div>
                        </div>
                  </div>    
            </div>
        </>
    )
}
export default AboutUs;