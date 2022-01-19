import React from 'react';

import Overlay from './components/overlay';
import Hero from './components/hero';
import Works from './components/works';
import About from './components/about';
import Footer from './components/footer';

const App = () => {
  return (
    <React.Fragment>
      <Hero />
      <Works />
      <About />
      <Footer />
      <Overlay />
    </React.Fragment>
  )
}

export default App
