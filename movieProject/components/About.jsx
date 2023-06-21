import React from "react";
import AudioAbout from "./AudioAbout";
import '../components/Styles/About.css'

function About() {

    

  
  return (
    <div className="aboutBox">
      <AudioAbout />
      <h1 className="titles">About Section</h1>
      <br />
      <p className="plot">
        Potential Jr Full Stack Developer
        <br />
        Newbie
        <br />
        Career Change : Tech
      </p>
    </div>
  );
}

export default About;
