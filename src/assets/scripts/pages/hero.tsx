import * as React from 'react';

const Hero = () => {
  return (
    <section className="sec-hero">
      <div className="background-image">
        <img src="./images/placeholder_image.jpg" alt="" className="img-cover" />
        <div className="dimmer"></div>
        <div className="gradient-dimmer"></div>
      </div>

      <div className="graphic">
        <img className="graphic-image" src="./images/graphic.png" alt="" />
      </div>

      <div className="container relative">
        <div className="heading-wrapper sr-item">
          <h1 className="text-center">I'm Aaron.</h1>
          <div className="font-roboto-slab text-center text-5xl mt-2 mb-4">And I'm a Web Developer</div>
        </div>
      </div>
    </section>
  )
}

export default Hero

// TODO: https://github.com/jscottsmith/react-scroll-parallax
