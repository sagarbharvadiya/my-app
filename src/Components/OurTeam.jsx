import React from "react";
// import harshal from "../img/harshal.jpg";
import sagar from "../img/sagar.jpeg";
import vinod from "../img/vinod.png";
const OurTeam = () => {
return (
<>
    <section className="team" id="team">
        <div className="commonWidth">
            <div className="title">
                <h2 className="commonTitleFontSize">Our Team</h2>
            </div>
            <div className="team_image">
{/*                 <<div className="image1">
                    <img src={harshal} alt="Harshal" />
                    <div className="caption">
                        <h4>Harshal Pradhan </h4>
                        <p>Drupal Developer</p>
                        <a href="https://bit.ly/harshal-pradhan-krushna53" target="_blank" rel="noreferrer">
                            <i className="ri-linkedin-box-fill icon"></i>
                        </a>
                    </div>
                </div>  */}
                <div className="image2">
                    <img src={sagar} alt="Sagar" loading="lazy"/>
                    <div className="caption">
                        <h4>Sagar Bharvadiya</h4>
                        <p>Frontend UI Developer (Reactjs)</p>
                        <a href="https://bit.ly/sagar-bharvadiya-krushna53" target="_blank" rel="noreferrer">
                            <i className="ri-linkedin-box-fill icon"></i>
                        </a>
                    </div>
                </div>
                <div className="image3">
                    <img src={vinod} alt="vinod" loading="lazy"/>
                    <div className="caption">
                        <h4>Vinod Keshariya</h4>
                        <p>Frontend UI Developer</p>
                        <a href="https://www.linkedin.com/in/ahir-vinod-keshariya-a747562b2/" target="_blank" rel="noreferrer">
                            <i className="ri-linkedin-box-fill icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
);
};

export default OurTeam;
