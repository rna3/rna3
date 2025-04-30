import ProjectCard from './ProjectCard';
import React from 'react';

const projectsData = [
  {
    title: 'Newsly',
    description: 'A web app built during my bootcamp...',
    tech: ['React', 'Node'],
    github: 'https://github.com/rna3',
    demo: 'live-link',
  },
  {
    title: 'FoodFriends',
    description: 'A web app built during my bootcamp...',
    tech: ['Python', 'Flask'],
    github: 'https://github.com/rna3',
    demo: 'live-link',
  },
  {
    title: 'Jobly',
    description: 'A web app built during my bootcamp...',
    tech: ['React', 'Node','Express'],
    github: 'https://github.com/rna3',
    demo: 'live-link',
  },
  // Add more projects here
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;