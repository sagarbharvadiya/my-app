import React from "react";
import blank1 from './img/removebg.png';

function Testimonials(params) {
    return (
        <>
            <div className="commonWidth ">
                <div className="">
                    <div className="commonWidth Krushna53-Testimonials" id="Tesimonials">
                        <div className=" Krushna53-Testimonials-img">
                            <img src={blank1} alt="blank" />
                        </div>
                        <div className="Krushna53-Testimonials-paragraph">
                            <h2 className="commonTitleFontSize">Testimonials</h2>
                            <h6>“Excellent experience with Harshal for many years now.  He is a PHP/Drupal expert and can build and fix anything!  Very reliable and great communication as well.”</h6>
                            <p>-  Danielle Smith-Dino</p>
                          
            
            
                            <h6>“Harshal performed a very tricky Drupal 6 to Drupal 7 upgrade for me with success.
                                He worked diligently to get the project done quickly.
                                I recommend Harshal for any Drupal work you have.”</h6>
                                <p>-  Chapman Wodriff</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Testimonials;