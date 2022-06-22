import React from "react";
import './Clients.css';
import './Mobile.css';
import clients from '../img/happy_clients.png';
function Clients() {
    return(
        <>
         <div className="commonWidth Krushna53-Clients" id="Clients">
            <h2>Our happy Clients</h2>
            <div className="gallery-container">
                <div className="gallery-image">
                    <img src={clients} alt="happy_clients.png" />
                </div>
                <div className="gallery-image">
                    <img src={clients} alt="happy_clients.png" />
                </div>
                <div className="gallery-image">
                    <img src={clients} alt="happy_clients.png" />
                </div>
                {/* <div className="gallery-image">
                    <img src={clients} alt="happy_clients.png" />
                </div>
                <div className="gallery-image">
                    <img src={clients} alt="happy_clients.png" />
                </div>
                <div className="gallery-image">
                    <img src={clients} alt="happy_clients.png" />
                </div>
                <div className="gallery-image">
                    <img src={clients} alt="happy_clients.png" />
                </div>
                <div className="gallery-image">
                    <img src={clients} alt="happy_clients.png" />
                </div> */}
            </div>
        </div>
        </>
    )
    
};
export default Clients;