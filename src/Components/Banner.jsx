import React  from "react";
import './Banner.css';
import './Mobile.css';
import blank from "../img/blank.jpg";

function Banner(){
    return(
        <>
         <div className="commonWidth Krushna53-banner" id="home">
            <div className="Krushna53-paragraph">
                <h1>Lorem Ipsum</h1>
                <p>Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour
                    randomised words.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur
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
        </>
    )
};
export default Banner;