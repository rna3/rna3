import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-flex"></div>
        <img src="src/assets/Ghibli Ryo n Subi.png" alt="Picture of Richard" className="about-image" />
        <div className="about-content">
          <p>
            I’m a versatile software engineer, recently graduated from Springboard’s 700+ hour bootcamp, where I mastered full-stack development using JavaScript, Python, React, Node.js, Flask, SQL, and more. My portfolio includes projects like “FoodFriends” (a Flask/PostgreSQL social platform) and “Newsly” (a React/Node.js app), both reviewed by industry experts, plus mini-projects like Connect Four and an Express Calculator.
          </p>
          <p>
            With 8+ years in tech sales at Indeed, I drove 155% account growth using SQL-driven insights, blending client focus with technical problem-solving. Now, I’m passionate about crafting scalable, user-centric solutions, whether it’s frontend interfaces, backend systems, or data-driven apps. I thrive in collaborative, dynamic environments and love tackling challenges.
          </p>
          <p>
            Outside of tech I spend time with my wife and dog, exploring new places to eat, or planning where in the world we'll visit next. Let’s connect over code, innovation, or dog tales!
          </p>
        </div>
        <button className="about-button" onClick={() => window.open('https://www.linkedin.com/in/richard-alcaraz-62b34135', '_blank')}>
          Find More on LinkedIn
        </button>
      </div>
    </section>
  );
}

export default About;