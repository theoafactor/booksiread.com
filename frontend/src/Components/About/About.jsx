import React from "react";
import "./About.css";
import Navbar from "../Sections/Navbar";
import Shelf from "../../Images/bookshelf.jpg"


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
              <h1>We build a reading <br />community <span>for everyone <br/>to participate</span></h1>
            </div>

            <div className="about-title learn">
              <h6>Learn more ➡</h6>
            </div>
          </div>
          <div className="about-section-content-sub ">
           <p> This is a reading community where everyone shares a <br />synopsis of what the have read or currently reading, <br/> so individual can have an idea and pick interest</p>
          </div>
          
      </div>

      <div className="about-banner">
        <img src={Shelf} alt="books-shelf" />
      </div>

      <div className="about-details">
        <div className="about-details-title">
          <h3>We read together</h3>
        </div>

        <div className="about-details-content">
          <h5>As a community we transform the reading habit of everyone give a better meaning to reading making fun and exicting</h5>


          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio alias voluptas a placeat dolorum exercitationem qui illo dolores sunt labore.</p>
        </div>
      </div>
    </>
  );
};

export default About;
