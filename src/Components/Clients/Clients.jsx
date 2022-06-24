import React from "react";
import './Clients.css';
import '../Mobile.css';
// import clients from '../img/happy_clients.png';
import Sdata from '../Sdata';
function Clients() {
    return (
        <>
            <div className=" container-fluid">
                <div className="">
                    <div className="commonWidth Krushna53-Clients" id="Clients">
                        <h2>Our happy Clients</h2>
                        <div className="gallery-container">
                            <div className='logo-section'>
                                {
                                    Sdata.map((val) => {
                                        return <div className='image-folder'>
                                            <img src={val.image} alt=".." />
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};
export default Clients;