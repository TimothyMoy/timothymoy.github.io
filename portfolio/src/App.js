import React from 'react';

import './CSS/skeleton.css';
import './CSS/normalize.css';
import './CSS/App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Hero />
        <Navbar />
        <About />
        <Project />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
