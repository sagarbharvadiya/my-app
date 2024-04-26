import React from "react";
import dataJson from "../data.json";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Clients() {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 2000,
  //   slidesToShow: 4,
  //   slidesToScroll: 2,
  //   autoplay: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         // autoplay:false,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         // autoplay:false,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="commonWidth">
      <div className="Krushna53-Clients" id="Clients">
        <h2 className="commonTitleFontSize">Our clients</h2>
        <p>Discover the brands we've partnered with for exceptional results.</p>
        <div className="gallery-container">
          {dataJson.Clients.map((d, i) => (
            <div className="image-folder" key={i}>
              <img src={d.image} alt={d.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
