import React from "react";
import "./About.css";
import Navbar from "../Sections/Navbar";
import book1 from "../../Images/book-cover.jpg"
import book2 from "../../Images/lady-reading.jpg"
import book3 from "../../Images/reading.jpg"

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-section">
          <div className="about-section-content">
            <div className="about-title">
              <h6>Our mission</h6>
            </div>

            <div className="about-content">
              <h1>We are a book community <br/> that allows induviduals to share the book they are reading or have read and write a short synopis about the book so that others can also pick interest and also read.
              </h1>
            </div>

            <div className="about-title learn">
              <h6>Learn more ➡</h6>
            </div>
          </div>
          <div className="about-section-content">
            <div className="about-img">
              <img src={book1} alt=""/>
              <img src={book2} alt=""/>
              <img src={book3} alt=""/>
              <img src={book2} alt=""/>
              <img src={book1} alt=""/>
              <img src={book3} alt=""/>
            </div>
          </div>


          
      </div>
    </>
  );
};

export default About;
