import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../data.json";

const Technologies = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  // Responsive settings for the Slider component
  const sliderSettings = {
    asNavFor: nav2,
    ref: setNav1,
    responsive: [
      {
        breakpoint: 767, // Adjust the breakpoint value as per your requirements
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Adjust the breakpoint value as per your requirements
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1200, // Adjust the breakpoint value as per your requirements
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Responsive settings for the second Slider component
  const slider2Settings = {
    asNavFor: nav1,
    ref: setNav2,
    autoplay: true,
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 767, // Adjust the breakpoint value as per your requirements
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Adjust the breakpoint value as per your requirements
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200, // Adjust the breakpoint value as per your requirements
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="commonWidth">
      <div className="technologies_text commonTitleFontSize">Technologies</div>
      <section className="Technologies">
        <div className="d_flex">
          <Slider {...sliderSettings} className="slider_one">
            {data.Technologies.map((value, i) => (
              <div key={i} className="flex">
                {/* <img src={value.img} alt={`Technology ${i}`} width={100} /> */}
                <p>{value.description}</p>
              </div>
            ))}
          </Slider>
          <Slider {...slider2Settings} className="slider_two" centerMode>
            {data.Technologies.map((value, i) => (
              <div className="wrapper" key={i}>
                <svg width="100" height="100">
                  <image
                    xlinkHref={value.img}
                    alt={`Technology ${i}`}
                    width="100%"
                    height="100%"
                  />
                </svg>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
