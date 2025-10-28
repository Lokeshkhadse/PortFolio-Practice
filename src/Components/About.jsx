import React from "react";
import "./About.css"; // Import the About CSS file

function About() {
  return (
    <div name="About" className="about-section">
      <h1 className = "about-name">About</h1>
      <p>
        Hello, I'm Akhil, a passionate Web developer with a keen eye for MERN Stack.
        With a background in IT, I strive to create impactful and visually stunning
        software solutions that leave a lasting impression.
      </p>

      <h1 className="section-title">Education & Training</h1>
      <span>
        [Degree/Certification], [Institution], [Year] <br />
        [Degree/Certification], [Institution], [Year] <br />
        [Relevant Course], [Platform/Institution], [Year]
      </span>

      <h1 className="section-title">Skills & Expertise</h1>
      <span>
        Proficient in [Programming Languages] <br />
        Experienced with [Software Tools/Technologies] <br />
        Strong grasp of [Design Principles/Concepts] <br />
        Excellent problem-solving skills <br />
        Effective communicator and collaborator
      </span>

      <h1 className="section-title">Professional Experience</h1>
      <span>
        [Job Title], [Company/Organization], [Dates] <br />
        [Brief description of responsibilities and achievements] <br />
        [Freelance/Contract Work], [Client/Organization], [Dates] <br />
        [Brief description of projects and contributions]
      </span>

      <h1 className="section-title">Achievements & Awards</h1>
      <span>
        [Award/Recognition], [Organization/Institution], [Year] <br />
        [Achievement], [Organization/Platform], [Year]
      </span>

      <h1 className="section-title">Mission Statement</h1>
      <p>
        My mission is to leverage my skills and creativity to deliver innovative 
        software solutions that exceed client expectations and contribute positively 
        to the digital landscape. I am committed to continuous learning and growth, 
        always seeking new challenges and opportunities to expand my horizons.
      </p>
    </div>
  );
}

export default About;

