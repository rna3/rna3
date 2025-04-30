import React from 'react';
  
  function ProjectCard({ title, description, tech, github, demo }) {
    return (
      <div className="project-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Tech: {tech.join(', ')}</p>
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
        <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
    );
  }

  export default ProjectCard;