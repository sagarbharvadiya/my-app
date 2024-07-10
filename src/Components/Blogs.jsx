import React from "react";
import Blogimg from "../img/blog.jpg";
import { Link } from "react-router-dom";
// import BlogPost from '../Components/BlogPost'
// import { Link } from 'react-router-dom';
// import img2 from '../img/Unknown.png'
import drupalimg from "../img/person-front-computer-working-html.jpg";
// import Reactimg from "../img/react-programming.jpg"

function Blogs() {
  return (
    <>
      <div className="commonWidth ">
        <div className="blog-page">
          <div className="blog-title">
            <h1>Our Blogs</h1>
            <div className="title-img">
              <img src={Blogimg} alt="job" loading="lazy" />
            </div>
          </div>

          <div
            className=" blog-section d-lg-flex justify-content-between p-lg-5 p-md-2 p-sm-0  d-sm-block d-md-block"
            id="blog"
          >
            <div className="blog-content">
              <div className="blog-left d-flex">
                <div className="d-flex">
                  <div className="left-text">
                    <h3 className="commonTitleFontSize">
                      {" "}
                      Top 3 Reasons Why Drupal Should Be Considered for Your
                      Business
                    </h3>
                    <p>
                      Explore the top three benefits of choosing Drupal for your
                      business website: unmatched flexibility and
                      customizability, robust security measures, and exceptional
                      content management capabilities. Discover how Drupal can
                      help your business grow and succeed in the digital world.
                    </p>
                    <div className="Krushna53-Con-button btn-box">
                      <div className="date">
                        <h6>8 july,2024</h6>
                      </div>
                      <Link
                        to="/blogs/why-drupal"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-1"
                      >
                        <button> Read more</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="right-img">
                  <img src={drupalimg} alt="job" loading="lazy" />
                </div>
              </div>
              {/* <div className="blog-left d-flex">
                <div className="d-flex">
                  <div className="left-text">
                    <h3 className="commonTitleFontSize">
                      {" "}
                      Top 3 Reasons Why Drupal Should Be Considered for Your
                      Business
                    </h3>
                    <p>
                      Explore the top three benefits of choosing Drupal for your
                      business website: unmatched flexibility and
                      customizability, robust security measures, and exceptional
                      content management capabilities. Discover how Drupal can
                      help your business grow and succeed in the digital world.
                    </p>
                    <div className="Krushna53-Con-button btn-box">
                      <div className="date">
                        <h6>8 july,2024</h6>
                      </div>
                      <Link
                        to="/blogs/why-drupal"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-1"
                      >
                        <button> Read more</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="right-img">
                  <img src={Reactimg} alt="job" loading="lazy" />
                </div>
              </div> */}
            </div>
            <div className="blog-right">
              <div className="sidebar">
                <div className="explore">
                  <h4>Explore more topics</h4>
                </div>
                <div className="blog-item">
                  <ul>
                    <li>
                      {" "}
                      <a href="/blogs/why-drupal">Drupal</a>{" "}
                    </li>
                    {/* <li>
                      {" "}
                      <a href="/">Drupal</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="/">Drupal</a>{" "}
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
