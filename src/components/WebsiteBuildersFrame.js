import React, { useState } from "react";
import "./WebsiteBuildersFrame.css";

const WebsiteBuildersFrame = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="website-builders-frame1">
      <div className="rectangle263" />
      <div className="image-frame-empty">
        <div className="image-with-download">
          <div className="rectangle264" />
          <img className="search-bar" alt="Search" src="/image-22.png" />
          <input
            type="text"
            className="search-bar-input"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="image23" />
      <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
        <div className="wrapper-menu">
          <div className="categories-wrapper">
            <button className="transparent-bg">
              <div className="categories3">Categories</div>
            </button>
          </div>
          <div className="deal-frame">
            <div className="hosting-text1"></div>
            <button className="transparent-bg">
              <div className="website-builders">Website Builders</div>
            </button>
          </div>
          <div className="rectangle-parent32">
            <div className="rectangle265"></div>
            <button className="transparent-bg">
              <div className="todays-deals">Today's deals</div>
            </button>
          </div>
        </div>
        <button className="hamburger-icon" onClick={toggleMenu}>
          <img className="hamburger-image" alt="Menu" src="/image-23.png" />
        </button>
      </div>
      <div className="image24" />
    </div>
  );
};

export default WebsiteBuildersFrame;
