import React, { useState } from "react";
import pic from "../../public/profile.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import "./Navbar.css"; // Importing CSS file

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <img src={pic} className="profile-pic" alt="Profile" />
            <h1 className="title">
              Lokesh Khadse<span className="highlight"></span>
              <p className="subtitle">Java Full Stack Developer</p>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <ul className="nav-links">
            {navItems.map(({ id, text }) => (
              <li key={id}>
                <Link to={text} smooth={true} duration={500} offset={-70}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div className="menu-icon" onClick={() => setMenu(!menu)}>
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>

        {/* Mobile Navbar */}
        {menu && (
          <div className="mobile-menu">
            <ul>
              {navItems.map(({ id, text }) => (
                <li key={id} onClick={() => setMenu(false)}>
                  <Link 
                  onClick={() => setMenu(!menu)}
                    to={text} smooth={true} duration={500} offset={-70}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
