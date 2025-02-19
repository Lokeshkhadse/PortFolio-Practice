import React from "react";
import pic from "../../public/profile.png";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";
import "./Home.css"; // Importing CSS file

function Home() {
  return (
    <>
      <div name="Home"
            className="home-section">
        <div className="home-content">
          <div className="home-text">
          {/* <span className="welcome-text">Welcome In My Feed</span> */}
              <div className="title">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="typed-text"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quisquam, recusandae consequatur. Accusamus sint libero eligendi
              laborum fuga repudiandae? Asperiores tempore eos animi dolores
              corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio
              cum delectus sit voluptatum aut ratione quaerat veniam aperiam!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quisquam, recusandae consequatur. Accusamus sint libero eligendi
              laborum fuga repudiandae? Asperiores tempore eos animi dolores
              corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio
              cum delectus sit voluptatum aut ratione quaerat veniam aperiam!
            </p>

            {/* Social Media Icons */}
            <div className="social-container">
              <div className="available">
                <h1>Available on</h1>
                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook className="social-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="social-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="social-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="social-icon" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="working-on">
                <h1>Currently working on</h1>
                <div className="tech-icons">
                  <SiMongodb className="tech-icon" />
                  <SiExpress className="tech-icon" />
                  <FaReact className="tech-icon" />
                  <FaNodeJs className="tech-icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="home-image">
            <img src={pic} className="profile-pic" alt="Profile" />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Home;
