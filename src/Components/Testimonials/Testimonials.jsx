import React from "react";
import './Testimonials.css';
import '../Mobile.css';
import blank1 from '../img/removebg.png';

function Testimonials(params) {
    return (
        <>
            <div className="container-fluid">
                <div className="">
                    <div class="commonWidth Krushna53-Testimonials" id="Tesimonials">
                        <div class=" Krushna53-Testimonials-img">
                            <img src={blank1} alt="blank" />
                        </div>
                        <div class="Krushna53-Testimonials-paragraph">
                            <h2 className="commonTitleFontSize">Testimonials</h2>
                            <p>Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour
                                randomised words.Vivamus magna justo, laconia eger consectetur sed, convallis at tellus. Curabitur
                                arcu
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Testimonials;