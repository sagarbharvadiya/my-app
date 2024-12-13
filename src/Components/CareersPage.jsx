import React from "react";
import fild_img from "../img/jobimg.png";
import { Link } from "react-router-dom";
function CareersPage() {
  return (
    <>
      <section className="CareersPage" id="careers">
        <div className="commonWidth">
         
          <div className="job_openings" id="possition">
            <div className="title">
              <h2>Jobs</h2>
            </div>
            <div className="job_fild">
              <div className="fild_img">
                <img src={fild_img} alt="job" />
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
        </div>
      </section>
    </>
  );
}
export default CareersPage;
