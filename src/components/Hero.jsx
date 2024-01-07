import React from "react";
import { Link } from "react-router-dom";
import pdf from "../assets/Resume.pdf";
import "../style.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="">
          <img
            src="../images/profile.JPEG"
            alt="profile-img"
            className="my-img"
          />
          <h1>Hello, I&apos;m Bashik A!</h1>
          <p className="discription">Full Stack Web Developer</p>
          <div className="download-btn-section">
            <div className="downloadBtn">
              <button className="abt-section-btn">
                <Link
                  to={pdf}
                  download={pdf}
                  target="_blank"
                  className="cv-link"
                >
                  DOWNLOAD CV
                </Link>
              </button>
            </div>
            <div className="contact-btn-section">
              <button className="abt-section-btn">
                <Link to='/contact' className="cm-link">
                  CONTACT ME
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
