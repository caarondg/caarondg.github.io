import * as React from 'react';

import { scrollRevealInit } from './components/scrollreveal'

// Fonts
import "@fontsource/roboto/300.css"
import "@fontsource/roboto-slab/300.css"

// Sections
import Overlay from './pages/overlay';
import Hero from './pages/hero';
import Works from './pages/works';
import Company from './pages/company';
import Footer from './pages/footer';

const App = () => {
  React.useEffect(() => {
    scrollRevealInit();
  })

  return (
    <React.Fragment>
      <Hero />
      <Works />
      <Company />
      <Footer />
      <Overlay />
    </React.Fragment>
  )
}

export default App
