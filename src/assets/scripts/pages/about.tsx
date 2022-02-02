import * as React from 'react';

const About = () => {
  return (
    <section className="sec-about">
      <div className="container">

        <h2>Where I've worked</h2>

        <div className="offices-wrapper">
          <div className="office">
            <h3>
              <a href="">Rock Solid Digital</a>
            </h3>
            <div className="date">2017 - Present</div>

            <ul className="contributions">
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat minima animi atque, consequatur est aliquid!</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus omnis soluta amet saepe distinctio sunt consequatur obcaecati ratione quo beatae.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus omnis soluta amet saepe distinctio sunt consequatur obcaecati ratione quo beatae.</li>
            </ul>
          </div>

          <div className="office">
            <h3>
              <a href="">WideOut</a>
            </h3>
            <div className="date">2015 - 2017</div>

            <ul className="contributions">
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat minima animi atque, consequatur est aliquid!</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus omnis soluta amet saepe distinctio sunt consequatur obcaecati ratione quo beatae.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus omnis soluta amet saepe distinctio sunt consequatur obcaecati ratione quo beatae.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
