import React from "react";
import "./About.css";
import Navbar from "../Sections/Navbar";
import Shelf from "../../Images/bookshelf.jpg";
import Albert from "../../Images/bell.jpg";
import Hannah from "../../Images/albert.jpg";
import Dave from "../../Images/dave.jpg";
import Jody from "../../Images/jody.jpg";
import Steve from "../../Images/steve.jpg";

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
            <h1>
              We build a reading <br />
              community{" "}
              <span>
                for everyone <br />
                to participate
              </span>
            </h1>
          </div>

          <div className="about-title learn">
            <h6>Learn more ➡</h6>
          </div>
        </div>
        <div className="about-section-content-sub ">
          <p>
            {" "}
            This is a reading community where everyone shares a <br />
            synopsis of what the have read or currently reading, <br /> so
            individual can have an idea and pick interest
          </p>
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
          <h5>
            As a community we transform the reading habit of everyone give a
            better meaning to reading making fun and exicting
          </h5>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            alias voluptas a placeat dolorum exercitationem qui illo dolores
            sunt labore. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Iure sed necessitatibus repellat temporibus sunt labore
            cupiditate alias molestias, quo, culpa quis voluptatem porro
            laboriosam, at recusandae. Vero, quod cumque beatae voluptates ipsum
            odio optio facilis culpa numquam. Culpa, numquam? Laudantium, aut
            aperiam perferendis accusantium nam officiis dolore suscipit
            reprehenderit sapiente!
          </p>
        </div>
      </div>

      <div className="about-details">
        <div className="community-stats">
          <div className="stats">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
              libero. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Natus recusandae enim ducimus voluptatibus, tenetur velit dolore
              laboriosam numquam pariatur nostrum adipisci eveniet reiciendis
              nesciunt sed iste cum! Hic, obcaecati aliquam?
            </p>

            <h4>500 members</h4>
          </div>
          <div className="stats">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
              libero. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Natus recusandae enim ducimus voluptatibus, tenetur velit dolore
              laboriosam numquam pariatur nostrum adipisci eveniet reiciendis
              nesciunt sed iste cum! Hic, obcaecati aliquam?
            </p>

            <h4>1k+ books read </h4>
          </div>
          <div className="stats">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
              libero. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Natus recusandae enim ducimus voluptatibus, tenetur velit dolore
              laboriosam numquam pariatur nostrum adipisci eveniet reiciendis
              nesciunt sed iste cum! Hic, obcaecati aliquam?
            </p>

            <h4>3k+ books available </h4>
          </div>
        </div>
      </div>

      <div className="team-heading">
        <div className="team-heading-details">
          <h1>Meet our team</h1>
        </div>

        <div className="team-mate">
          <div className="team-mate-content">
            <img src={Albert} alt="Albert" />

            <div className="team-mate-details">
              <h6>Albert John</h6>
              <p>CEO</p>
            </div>
          </div>
          <div className="team-mate-content">
            <img src={Dave} alt="Albert" />

            <div className="team-mate-details">
              <h6>Dave brown</h6>
              <p>CTO / Co-founder</p>
            </div>
          </div>
          <div className="team-mate-content">
            <img src={Hannah} alt="Albert" />

            <div className="team-mate-details">
              <h6>Hannah Smith</h6>
              <p>Head, People & Culture</p>
            </div>
          </div>
          <div className="team-mate-content">
            <img src={Jody} alt="Albert" />

            <div className="team-mate-details">
              <h6>Jody Bells</h6>
              <p>Sales</p>
            </div>
          </div>
          <div className="team-mate-content">
            <img src={Steve} alt="Albert" />

            <div className="team-mate-details">
              <h6>Steve Blaks</h6>
              <p>Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
