import React from "react";
import './Testimonials.css';
import './Mobile.css';
import blank1 from '../img/blank1.jpg';

function Testimonials(params) {
    return(
        <>
        <div class="commonWidth Krushna53-Testimonials" id="Tesimonials">
            <div class=" Krushna53-Testimonials-img">
                <img src={blank1} alt="blank"/>
            </div>
            <div class="Krushna53-Testimonials-paragraph">
                <h1>Testimonials</h1>
                <p>Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour
                    randomised words.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur
                    arcu
                </p>
            </div>
        </div>
        </>
    )
};
export default Testimonials;