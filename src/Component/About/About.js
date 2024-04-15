import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="left-about">
          <div className="circle">
            <div className="second"></div>
          </div>
          <div className="medicine">
            <img src="https://i.ibb.co/865KXdH/harbal.png" alt="" />
          </div>
        </div>
        <div className="about-right">
          <div className="about-contant">
            <div className="about-heading">
              <h2>About Us</h2>
              <span>Welcome To Aryavart Ayurveda</span>
            </div>
            <p>
              As a third-party herbal product manufacturer, we excel in crafting
              herbal health supplements, catering to various needs such as
              sexual health, weight loss, personal care, and more. Our products
              are meticulously formulated using natural ingredients and adhere
              strictly to FSSAI standards. Backed by certifications including
              GMP, FDA, ISO-22000, and HALAL, our manufacturing unit ensures the
              highest quality and safety standards. Our diverse range of health
              supplements encompasses sexual health enhancement, weight loss
              solutions, alcohol de-addiction aids, and personal care
              essentials. Trust us for premium-quality herbal supplements that
              promote overall well-being and vitality. care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
