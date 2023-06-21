import React from "react";
import "../components/Styles/Contact.css";
import AudioContact from "./AudioContact";


function Contact() {
  
  return (
    <div className="contactWrap">
      <AudioContact />
      <h1 className="contact">CONTACT</h1>
      <p className="name">
        Anthony K Kelley
        <hr />
      
      <a href="https://github.com/Tu2kel" target="_blank">
        <img
          src="https://tinyurl.com/bdht6je2"
          alt="404"
          className="icon1"
          title="GitHub"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/anthony-k-kelley-sr/"
        target="_blank"
      >
        <img
          src="https://tinyurl.com/362wp7yr"
          alt="404"
          className="icon2"
          title="LinkedIn"
        />
      </a>
</p>

    </div>
  );
}

export default Contact;
