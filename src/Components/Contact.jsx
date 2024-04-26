import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="commonWidth">
       
          <div className="d_flex">
            {/* <form className="php-email-form">
              <div className="d_flex">
                <div className="form-group">
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                    value=""
                  />
                </div>
                <div className="form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required=""
                    value=""
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required=""
                  value=""
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="6"
                  placeholder="Message"
                  required=""
                ></textarea>
              </div>
              <div className="my-3"></div>
              <div className="text-center">
                <button type="submit">Submit</button>
              </div>
            </form> */}
            <ContactForm/>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.652021227206!2d72.86073481744383!3d19.1229158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c99c2bce1fe9%3A0xd5cc65ca24ba6900!2sKrushna53!5e0!3m2!1sen!2sin!4v1689158039579!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                title="Krushna53"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
