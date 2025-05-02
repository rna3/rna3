import React from 'react'

function ProjectCard({ title, description, tech, github, demo, image }) {
  return (
    <div className="project-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Tech: {tech.join(', ')}</p>
        <div className="project-card-links">
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
          <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;