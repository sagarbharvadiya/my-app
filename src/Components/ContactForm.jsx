import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (response) => {
          setIsSent(true);
          setName("");
          setEmail("");
          setMessage("");
          setError("");
          console.log("Email sent:", response);
        },
        (error) => {
          console.error("Failed to send the email:", error);
          setError("Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-form-container">
      <div className="contact_text commonTitleFontSize">Contact Us</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        {error && <div className="error">{error}</div>}
        {isSent ? (
          <div className="success">Message sent successfully!</div>
        ) : (
          <button type="submit">Send Message</button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
