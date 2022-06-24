import React from "react";
import './Banner.css';
import '../Mobile.css';
import blank from "../img/banner.jpg";

function Banner() {
    return (
        <>
            <div className=" container-fluid">
                <div className="">
                    <div className="commonWidth Krushna53-banner" id="home">
                        <div className="Krushna53-paragraph">
                            <h1>Lorem Ipsum</h1>
                            <p>Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour
                                randomised words.Vivamus magna justo, laconia eger consectetur sed, corvallis at tellus. Carabiner
                                arcu
                            </p>
                            <div className="Krushna53-Con-button btn-box">
                                <a href="#home" className="btn-1"><button>Know More </button></a>
                            </div>
                        </div>
                        <div className=" Krushna53-banner-img">
                            <img src={blank} alt="blank" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Banner;