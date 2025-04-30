import React from 'react';

function Header() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <h1>Richard Alcaraz</h1>
      <nav>
        <a href="#hero" onClick={() => scrollToSection('hero')}>Home</a>
        <a href="#about" onClick={() => scrollToSection('about')}>About</a>
        <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
        <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
        <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;