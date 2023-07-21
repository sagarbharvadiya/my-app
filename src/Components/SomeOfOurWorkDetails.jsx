import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataJson from "../data.json";

const SomeOfOurWorkDetails = () => {
  const { productId } = useParams();
  const thisProduct = dataJson.SomeOfOurWorkDetails.find(
    (prod) => prod.id === productId
  );

  // Customize the settings for the slider
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="commonWidth">
        <section className="SomeOfOurWorkDetails">
          <div className="title">
            <h2>{thisProduct.title}</h2>
          </div>
          <div className="tag">
            <h5>{thisProduct.tag}</h5>
            <h5>{thisProduct.tag1} </h5>
            <h5>{thisProduct.tag2}</h5>
          </div>
          <div className="banner_image">
            {/* Display the video */}

            <video
              autoPlay
              muted
              loop
              id="video-background"
              className="h-auto w-auto"
            >
              <source src={thisProduct.img} type="video/mp4" />
              {/* Add additional source tags for other formats if needed  */}
            </video>
          </div>
          <div className="text_image">
            <div className="left">
              <h4>{thisProduct.Client}</h4>
              <p>{thisProduct.dis}</p>
            </div>
            <div className="right">
              {/* Slider */}
              <Slider {...sliderSettings}>
                <div className="image_slider1">
                  <img src={thisProduct.slider1} alt="field_image" />
                </div>
                <div className="image_slider1">
                  <img src={thisProduct.slider2} alt="field_image" />
                </div>
                <div className="image_slider1">
                  <img src={thisProduct.slider3} alt="field_image" />
                </div>
              </Slider>
            </div>
          </div>
          <div className="description">
            <div className="subhedding">
              <p>{thisProduct.subhedding}</p>
            </div>
            <div className="overview">
              <h4>{thisProduct.Overview}</h4>
              <p>{thisProduct.des}</p>
              <ul>
                <li>{thisProduct.list1}</li>
                <li>{thisProduct.list2}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SomeOfOurWorkDetails;
