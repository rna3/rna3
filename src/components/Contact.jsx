import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p>You can reach me on any of these social platforms or my direct email!</p>
        <div className="contact-links">
          <a
            href="https://linkedin.com/in/richard-alcaraz-62b34135"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button linkedin"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rna3"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button github"
          >
            GitHub
          </a>
          <a
            href="mailto:rnalcaraz3@gmail.com"
            className="contact-button gmail"
          >
            Gmail
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;