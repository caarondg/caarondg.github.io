import * as React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">

        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/caarondg/" className="social-icon">
            <div className="icon-bg"></div>
            <img src="./images/linkedin.png" alt="" className="icon" />
          </a>

          <a href="https://github.com/caarondg" className="social-icon">
            <div className="icon-bg"></div>
            <img src="./images/github.png" alt="" className="icon" />
          </a>

          <a href="mailto:caarondg@gmail.com" className="social-icon">
          <div className="icon-bg"></div>
            <img src="./images/mail.png" alt="" className="icon" />
          </a>
        </div>

        <div className="copyright">
          <div className="block lg:hidden">Designed and Built by <br /> Aaron De Guzman. 2022</div>
          <div className="hidden lg:block">Designed and Built by Aaron De Guzman. 2022</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

