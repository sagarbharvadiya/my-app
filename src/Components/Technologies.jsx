import React from "react";
// import Slider from "react-slick";
import data from "../data.json";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Technologies = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay:true
  // };

  return (
    <>
      <div className="commonWidth">
        <div className="technologies_text commonTitleFontSize">
          Technologies
        </div>
        <section className="Technologies">
          <div className="d_flex">
            {data.Technologies.map((d, i) => (
              <div className="wrapper" key={i}>
                <svg width="100" height="100">
                  <image
                    xlinkHref={d.img}
                    alt={d.img}
                    width="100%"
                    height="100%"
                  />
                </svg>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Technologies;
