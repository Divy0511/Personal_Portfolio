import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="logo">
  <a href="#HeroSection">
    <img src="home.png"/>
  </a>

  <a href="#about">About</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
</div>


    

      {/* Social Icons and CTA */}
      <div className="icons">
        {/* Logo Section */}
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="/linkdin.png"/>
          </a>
       
           

          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            <img src="/github2.png"  />
          </a>
          
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
            <img src="/logotwiiter.png" />
          </a>
        </div>
        <a href="#hire" className="cta full-rounded">
  <span>Resume</span>
  <div className="border"></div>
</a>
      </div>
    </div>
  );
};

export default Navbar;


