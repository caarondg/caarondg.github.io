import * as React from 'react';

const About = () => {
  return (
    <section className="sec-company">
      <div className="gradient-dimmer"></div>

      <div className="graphic">
        <img className="graphic-image" src="./images/graphic.png" alt="" />
      </div>

      <div className="container relative">

        <h2 className="sr-item">Whom I've worked for</h2>

        <div className="offices-wrapper sr-group">
          <div className="office">
            <a className="office-logo block lg:hidden mx-auto mb-4" href="https://www.infor.com/en-sg">
              <img src="./images/company/infor.png" alt="" />
            </a>

            <div className="header-wrapper">
              <div className="inline-flex items-center">
                <a className='office-logo hidden lg:block lg:mr-4' href="https://www.infor.com/en-sg">
                  <img src="./images/company/infor.png" alt="" />
                </a>
                <h3>
                  <a href="https://www.infor.com/en-sg">
                    Infor
                  </a>
                </h3>
              </div>

              <div className="date">2022 - Present</div>
            </div>

            <ul className="contributions">
              <li>Working as a Software Engineer for one of their technologies</li>
            </ul>
          </div>

          <div className="office">
            <a className="office-logo block lg:hidden mx-auto mb-4" href="https://www.rcksld.com/">
              <img src="./images/company/rcksld.png" alt="" />
            </a>

            <div className="header-wrapper">
              <div className="inline-flex items-center">
                <a className='office-logo hidden lg:block lg:mr-4' href="https://www.rcksld.com/">
                  <img src="./images/company/rcksld.png" alt="" />
                </a>
                <h3>
                  <a href="https://www.rcksld.com/">
                    Rock Solid Digital
                  </a>
                </h3>
              </div>

              <div className="date">2017 - 2022</div>
            </div>

            <ul className="contributions">
              <li>Contributed in the web development, and maintenance of an existing large multi-site hotel and hospitality website including its booking flow.</li>
              <li>Frontend developer for a cinema booking mobile application for Android and iOS that uses Ionic framework, AngularJS, SCSS.</li>
              <li>Frontend developer for all new website projects using more modern technologies such as Tailwind, and React.js, with accompanying frontend animation packages such as GSAP</li>
              <li>Primary go-to for frontend related insights and tasks. i.e. design or animation related (possible with existing technologies given the timeframe)</li>
            </ul>
          </div>

          <div className="office">
            <a className="office-logo block lg:hidden mx-auto mb-4" href="https://www.aqa.work/">
              <img src="./images/company/wideout.png" alt="" />
            </a>

            <div className="header-wrapper">
              <div className="inline-flex items-center">
                <a className="office-logo hidden lg:block lg:mr-4" href="https://www.aqa.work/">
                  <img src="./images/company/wideout.png" alt="" />
                </a>
                <h3>
                  <a href="https://www.aqa.work/">
                    WideOut
                  </a>
                </h3>
              </div>

              <div className="date">2015 - 2017</div>
            </div>

            <ul className="contributions">
              <li>Developed new and maintained/improved existing Hotel and Resorts websites that use different CMS’ such as Wordpress, OctoberCMS, and OpenCart. While following OOP and an MVC design pattern approach for cleaner code than the existing.</li>
              <li>Have set and shared a better standard for the company’s HTML5 Rich Media development and conversion turnover times with a better workflow and little to none defects during Quality Assurance improving efficiency by 66% more</li>
              <li>Creation of HTML5 Rich Media web banner ads based on provided design with inclusion of adding in complex animations.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
