import React from "react";
import Drupal from '../img/drupal9.png'
import WebApp from '../img/Web-app.png'
import Support from '../img/Support&m.png'
import Consulting from '../img/Consulting.png'
import Fronted from '../img/Reactjs.png'
import CiviCrm from '../img/civiCrm.png'
const servicesData = [
  {
    img:Drupal,
    title: "Drupal Development",
    description:
      "Client satisfaction is at the core of our business. We strive to build long-term relationships with our clients by delivering exceptional Drupal solutions and providing top-notch customer support.",
  },
  {
    img: WebApp,
    title: "Web App Development",
    description:
      "We offer comprehensive support and maintenance services to ensure that your web applications remain secure, up-to-date, and optimized for performance, allowing you to focus on your core business activities.",
  },
  {
    img: Support,
    title: "Support & Maintenance",
    description:
      "Our commitment to customer satisfaction is at the heart of our support and maintenance services. We strive to build long-term partnerships with our clients, providing attentive support and guidance every step of the way.",
  },
  {
    img:Consulting,
    title: "Consulting",
    description:
      "We provide consultations to Startups / NGO’s and SME’s to enrich their digital experience, maximise the benefits of Drupal’s powerful features while minimising risks and challenges associated with implementation and maintenance. We help clients to make informed decisions, optimise their Drupal projects, and achieve their desired outcomes effectively.",
  },
  {
    img:Fronted,
    title: "Front-end development",
    description:
      "Using ReactJs, Gatsby and other javascript frameworks  as a service enables businesses and organisations to create visually appealing, responsive, and interactive web interfaces.It leverages the power of JavaScript, HTML, and CSS to deliver engaging user experiences while adhering to modern web standards and best practices.",
  },
  {
    img: CiviCrm,
    title: "CiviCRM Services",
    description:
      "We provide consultation to non profits on implementing CiviCRM on Drupal and Wordpress. Also provide ongoing  support after CiviCRM implementation.",
  },
];

function Services() {
  return (
    <div className="commonWidth ">
      <div className="service-section" id="service">
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
