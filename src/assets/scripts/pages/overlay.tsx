import * as React from 'react';

const Overlay = () => {
  return (
    <div className="app-overlay">
      <div className="border-wrapper">
        <div className="overlay-border"></div>

        <div className="sidebar-socials">
          <a href="https://www.linkedin.com/in/caarondg/" target="_blank" className="social-icon">
            <div className="icon-bg"></div>
            <img src="./images/linkedin.png" alt="" className="icon" />
          </a>

          <a href="https://github.com/caarondg" target="_blank" className="social-icon">
            <div className="icon-bg"></div>
            <img src="./images/github.png" alt="" className="icon" />
          </a>

          <a href="mailto:caarondg@gmail.com" target="_blank" className="social-icon">
          <div className="icon-bg"></div>
            <img src="./images/mail.png" alt="" className="icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Overlay
