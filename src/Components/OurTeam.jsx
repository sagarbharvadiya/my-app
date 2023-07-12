import React from "react";
import harshal from "./img/harshal.jpg";
import sagar from "./img/WhatsApp Image 2023-07-12 at 12.25.14 PM.jpeg";
import vinod from "./img/WhatsApp_Image_2023-07-12_at_12.32.14_PM-removebg-preview (1).png";
const OurTeam = () => {
  return (
    <>
      <section className="team">
        <div class="container">
          <div class="title">
            <h1>Our Team</h1>
          </div>
          <div class="team_image">
            <div class="image1">
              <img src={harshal} alt="Harshal" />
              <div class="caption">
                <h4>Harshal Pradhan </h4>
                <p>Co Founder</p>
                <a href="https://shorturl.at/abp49" target="_blank" rel="noreferrer">
                  <i class="ri-linkedin-box-fill icon"></i>
                </a>
              </div>
            </div>
            <div class="image2">
              <img src={sagar} alt="Sagar" />
              <div class="caption">
                <h4>Sagar Bharvadiya</h4>
                <p>Frontend Ui Developer</p>
                <a href="https://shorturl.at/RS589" target="_blank" rel="noreferrer">
                  <i class="ri-linkedin-box-fill icon"></i>
                </a>
              </div>
            </div>
            <div class="image3">
              <img src={vinod} alt="vinod" />
              <div class="caption">
                <h4>Vinod Keshariya</h4>
                <p>Frontend Developer</p>
                <a href="https://shorturl.at/bqyRY" target="_blank" rel="noreferrer">
                  <i class="ri-linkedin-box-fill icon"></i>
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
