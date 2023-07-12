import React from "react";
import "./Services.css";
import "../Mobile.css";
import img1 from "../img/5995339.jpg";
import img2 from "../img/4380747.jpg";
import img3 from "../img/2001.i402.023_Online support FAQ flat composition.jpg";
import img4 from "../img/4884785.jpg";
import img5 from "../img/Consulting.jpg";
import img6 from "../img/7098132(1).jpg"
const servicesData = [
  {
    img: img2,
    title: "Drupal Development",
    description: "Client satisfaction is at the core of our business. We strive to build long-term relationships with our clients by delivering exceptional Drupal solutions and providing top-notch customer support.",
  },
  {
    img: img1,
    title: "Web Application Development",
    description: "We offer comprehensive support and maintenance services to ensure that your web applications remain secure, up-to-date, and optimized for performance, allowing you to focus on your core business activities.",
  },
  {
    img: img3,
    title: "Support & Maintenance",
    description: "Our commitment to customer satisfaction is at the heart of our support and maintenance services. We strive to build long-term partnerships with our clients, providing attentive support and guidance every step of the way.",
  },
  {
    img: img5,
    title: "Consulting",
    description: "We provide consultations to Startups / NGO’s and SME’s to enrich their digital experience, maximise the benefits of Drupal’s powerful features while minimising risks and challenges associated with implementation and maintenance. We help clients to make informed decisions, optimise their Drupal projects, and achieve their desired outcomes effectively.",
  },
  {
    img: img4,
    title: "Front-end JavaScript development",
    description: "Using ReactJs, Gatsby and other javascript frameworks  as a service enables businesses and organisations to create visually appealing, responsive, and interactive web interfaces.It leverages the power of JavaScript, HTML, and CSS to deliver engaging user experiences while adhering to modern web standards and best practices.",
  },
  {
    img: img6,
    title: "CiviCRM Services",
    description: "We provide consultation to non profits on implementing CiviCRM on Drupal and Wordpress. Also provide ongoing  support after CiviCRM implementation.",
  },
];

function Services() {
  return (
    <div className="container-fluid">
      <div className="commonWidth service-section" id="service">
        <div className="servicewrapper">
          <div className="service-text commonTitleFontSize">Services</div>
          <div className="service-blog">
            {servicesData.map((service, index) => (
              <div className="blog-image" key={index}>
                <img src={service.img} alt="..." />
                <div>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
