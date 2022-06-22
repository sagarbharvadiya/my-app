import React from "react";
import './Blogs.css';
import './Mobile.css';
import img1 from "../img/image1.png";

function Blogs() {
    return (
        <>
                <div className="commonWidth blog-section" id="blog">
                    <div className="blogwrapper">
                        <div className="blogtext">
                            <div className="blog-left">
                                <h2>Blogs</h2>
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
                </div>
           
        </>
    )
};

export default Blogs;