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
    <div className="tw-w-full tw-py-2.5 tw-px-5 tw-rounded tw-bg-gray-100">
      <div className="tw-text-4xl tw-text-black tw-font-bold tw-py-4 tw-text-center tw-leading-normal">Contact Us</div>
      <form onSubmit={handleSubmit}>
        <div className="tw-mb-[15px]">
          <label htmlFor="name" className="tw-mb-1.5">Name:</label>
          <input className="tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-p-2.5 tw-w-full "
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="tw-mb-[15px]">
          <label htmlFor="email" className="tw-mb-1.5">Email:</label>
          <input className="tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-p-2.5 tw-w-full"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="tw-mb-[15px]">
          <label htmlFor="message" className="tw-mb-1.5" >Message:</label>
          <textarea className="tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-p-2.5 tw-w-full"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        {error && <div className="error tw-text-red-600 tw-mb-2.5">{error}</div>}
        {isSent ? (
          <div className="success tw-mb-2.5 tw-text-green-700">Message sent successfully!</div>
        ) : (
          <button type="submit" className="tw-text-white tw-py-2.5 tw-px-5 tw-border-none tw-bg-blue-700 tw-cursor-pointer">Send Message</button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;