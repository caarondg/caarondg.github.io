import React from 'react';

const About = () => {
  return (
    <section className="sec-about">
      <div className="container">

        <div className="flex flex-wrap -mx-4">
          <div className="side-title">
            <div className="inner-title">About</div>
          </div>

          <div className="side-content">
            <h3 className="mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit animi, ducimus facere officia non delectus, molestiae sed, itaque et beatae dolorem quisquam quis fugiat dolores expedita nobis nesciunt. Est, modi.</h3>

            <div className="expertise-wrapper">
              <div className="single-expertise">
                <div className="title">Design</div>
                <div className="short-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nihil recusandae iusto nam facilis expedita laboriosam enim ipsam! Quasi at ad doloribus voluptatibus. Molestiae unde pariatur quo dolores explicabo iste illum odio sunt officia reiciendis error, voluptate nisi soluta deleniti.</div>

                <div className="tools">
                  [Tools Here]
                </div>
              </div>

              <div className="single-expertise">
                <div className="title">Frontend</div>
                <div className="short-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nihil recusandae iusto nam facilis expedita laboriosam enim ipsam! Quasi at ad doloribus voluptatibus. Molestiae unde pariatur quo dolores explicabo iste illum odio sunt officia reiciendis error, voluptate nisi soluta deleniti.</div>

                <div className="tools">
                  [Tools Here]
                </div>
              </div>

              <div className="single-expertise">
                <div className="title">Backend</div>
                <div className="short-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nihil recusandae iusto nam facilis expedita laboriosam enim ipsam! Quasi at ad doloribus voluptatibus. Molestiae unde pariatur quo dolores explicabo iste illum odio sunt officia reiciendis error, voluptate nisi soluta deleniti.</div>

                <div className="tools">
                  [Tools Here]
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
