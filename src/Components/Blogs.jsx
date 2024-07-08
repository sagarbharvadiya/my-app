import React from "react";
import Blogimg from "../img/blog.jpg";
// import BlogPost from '../Components/BlogPost'
// import { Link } from 'react-router-dom';
// import img2 from '../img/Unknown.png'

function Blogs() {
  return (
    <>
      <div className="commonWidth ">
        <div className="blog-page">
          <div className="blog-title">
            <h1>Our Blogs</h1>
            <div className="title-img">
              <img src={Blogimg} alt="job" />
            </div>
          </div>

          <div
            className="commonWidth blog-section d-lg-flex justify-content-between p-lg-5 p-md-2 p-sm-0  d-sm-block d-md-block"
            id="blog"
          >
            <div className="blog-left d-flex flex-column">
              <h3 className="commonTitleFontSize">
                {" "}
                Top 3 Reasons Why Drupal Should Be Considered for Your Business
              </h3>
              <p>
                Explore the top three benefits of choosing Drupal for your
                business website: unmatched flexibility and customizability,
                robust security measures, and exceptional content management
                capabilities. Discover how Drupal can help your business grow
                and succeed in the digital world.
              </p>
              <div className="Krushna53-Con-button btn-box">
                <a
                  href="/blogs/why-drupal"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-1"
                >
                  <button> Read more</button>
                </a>
              </div>
            </div>
            <div className="blog-right">
              {/* <img src={img2} alt="..." /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
