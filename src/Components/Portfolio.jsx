import React from "react";
import "./portfolio.css"; // Import Portfolio CSS

import java from "../../public/java.png";
// import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

function Portfolio() {
  const cardItem = [
    { id: 1, logo: mongoDB, name: "MongoDB" },
    { id: 2, logo: express, name: "Express" },
    { id: 3, logo: reactjs, name: "ReactJS" },
    { id: 4, logo: nodejs, name: "NodeJS" },
    { id: 5, logo: java, name: "Java" },
    { id: 6, logo: java, name: "Java" },
  ];

  return (
    <div name="Portfolio" className="portfolio-section">
      <h1>Portfolio</h1>
      <span className="portfolio-subtitle">Featured Projects</span>
      <div className="portfolio-grid">
        {cardItem.map(({ id, logo, name }) => (
          <div className="portfolio-card" key={id}>
            <img src={logo} className="portfolio-image" alt={name} />
            <div className="portfolio-content">
              <h2 className="portfolio-title">{name}</h2>
              <p className="portfolio-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="portfolio-buttons">
                <button className="video-btn">Video</button>
                <button className="code-btn">Source Code</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
