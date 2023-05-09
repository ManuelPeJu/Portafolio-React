import React from 'react'
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/About-me/About-me';
import Experiencia from './components/Experiencia/Experiencia';
import Hero from './components/Hero/Hero';
import Proyectos from './components/Proyectos/Proyectos';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* NAVBAR */}
      <header id="home" class='navbar container-fluid'>  
        <NavBar />
      </header>
      {/* HERO */}
      <section id='hero' className='hero container-fluid'>
        <Hero />
      </section>
      {/* ABOUT ME */}
      <section id='sobre-mi' className='about-me container-fluid'>
        <AboutMe />
      </section>
      {/* EXPERIENCIA */}
      <section id='experiencia' className='experiencia-wrap container-fluid'>
        <Experiencia />
      </section>
      {/* PROYECTOS */}
      <section id='proyectos' className='proyectos-wrap container-fluid'>
        <Proyectos />
      </section>
      {/* CONTACTO */}
      <section id='contacto' className='contacto-wrap container-fluid'>
        <Contacto />
      </section>
      {/* FOOTER */}
      <section id='footer' className='footer-wrap container-fluid'>
        <Footer />
      </section>
    </div>
  );
}

export default App;
