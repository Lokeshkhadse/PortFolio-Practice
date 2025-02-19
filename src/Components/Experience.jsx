import React from "react";
import "./Experience.css"; // Importing CSS file


import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";

function Experiance() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: java, name: "Java" },
    { id: 4, logo: javascript, name: "JavaScript" },
    { id: 5, logo: oracle, name: "Oracle" },
    { id: 6, logo: spring, name: "Spring" },
    { id: 7, logo: springBoot, name: "Spring Boot" },
  ];

  return (
    <div name="Experience" className="experiance-section">
      <h1>Experience</h1>
      <p className="experiance-description">
        I have more than 2 years of experience in the following technologies:
      </p>
      <div className="experiance-grid">
        {cardItem.map(({ id, logo, name }) => (
          <div className="experiance-card" key={id}>
            <img src={logo} className="experiance-image" alt={name} />
            <div className="experiance-title">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiance;
