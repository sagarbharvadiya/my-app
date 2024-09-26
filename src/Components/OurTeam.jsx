import React from "react";
import harshal from "../img/harshal.jpg";
import sagar from "../img/WhatsApp Image 2023-07-12 at 12.25.14 PM.jpeg";
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
            <div className="image1">
              <img src={harshal} alt="Harshal" />
              <div className="caption">
                <h4>Harshal Pradhan </h4>
                <p>Drupal Developer</p>
                <a
                  href="https://bit.ly/harshal-pradhan-krushna53"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-linkedin-box-fill icon"></i>
                </a>
              </div>
            </div>
            <div className="image2">
              <img src={sagar} alt="Sagar" />
              <div className="caption">
                <h4>Sagar Bharvadiya</h4>
                <p>Frontend UI Developer (Reactjs)</p>
                <a
                  href="https://bit.ly/sagar-bharvadiya-krushna53"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-linkedin-box-fill icon"></i>
                </a>
              </div>
            </div>
            <div className="image3">
              <img src={vinod} alt="vinod" />
              <div className="caption">
                <h4>Vinod Keshariya</h4>
                <p>Frontend UI Developer</p>
                <a
                  href="https://bit.ly/vinod-keshariya-krushna53"
                  target="_blank"
                  rel="noreferrer"
                >
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
