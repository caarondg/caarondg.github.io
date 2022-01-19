import React from 'react';

const Hero = () => {
  return (
    <section className='sec-hero'>
      <div className="background-image">
        <img src="./images/placeholder_image.jpg" alt="" className="img-cover" />
        <div className="dimmer"></div>
        <div className="gradient-dimmer"></div>
      </div>

      <div className="graphic">
        <img src="./images/graphic.png" alt="" />
      </div>

      <div className='container relative'>
        <h1 className='text-center'>
          My name is Aaron <br /> And I'm a <span>&lt; Web Developer /&gt;</span>
        </h1>
      </div>
    </section>
  )
}

export default Hero

// TODO: https://github.com/jscottsmith/react-scroll-parallax
