import React from 'react';

import Overlay from './pages/overlay';
import Hero from './pages/hero';
import Works from './pages/works';
import About from './pages/about';
import Footer from './pages/footer';

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
