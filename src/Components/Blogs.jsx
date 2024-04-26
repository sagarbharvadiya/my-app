import React from "react";
import img1 from "./img/image1.png";

function Blogs() {
    return (
        <>
            <div className="commonWidth ">
                    <div className="commonWidth blog-section d-lg-flex justify-content-between p-lg-5 p-md-2 p-sm-0  d-sm-block d-md-block" id="blog">
                        <div className="blog-left d-flex flex-column">
                            <h2 className="commonTitleFontSize">Blogs</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type
                                specimen book.
                            </p>
                            <a href="#blog" className="read-more">Read more</a>
                        </div>
                        <div className="blog-right">
                            <img src={img1} alt="..." />
                        </div>
                    </div> 
            </div>
        </>
    )
};

export default Blogs;