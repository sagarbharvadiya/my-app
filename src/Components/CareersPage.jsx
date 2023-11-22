import React from "react";
import job from "../img/jobimg.png";
import { Link } from "react-router-dom";
function CareersPage() {
  return (
    <>
      <section className="CareersPage" id="careers">
        <div className="commonWidth">
          <div className="title">
            <h1>Jobs</h1>
          </div>

          <div className="image-text">
            <div className="right_img">
              <img src={job} alt="job" />
            </div>
            <div className="left_text">
              <p>
                Innovating purposeful people-first experiences and products with
                a bunch of designers, engineers, and coders inspired by a
                problem-solving design approach, tech trends, and lots of
                creativity.{" "}
              </p>
              <div className="viewbtn">
                <a href="#possition" target="">
                  <button id="scroll">View Open Positions </button>
                </a>
              </div>
            </div>
          </div>
          <div className="job_openings" id="possition">
            <div className="title">
              <h2>Search Jobs</h2>
            </div>
            <div className="fild_card">
              <div className="d-flex">
                <div className="job">
                  <h5>DRUPAL</h5>
                </div>
                <div className="job_positison">
                  <h5>1 POSITION</h5>
                </div>
              </div>
              <h2>Associate Drupal Developer (Full Stack) </h2>
              <p>On-site</p>
              <Link to="/jobs" className="read-more">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default CareersPage;
