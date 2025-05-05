import ProjectCard from './ProjectCard';
import React from 'react';
import NewslyImage from '../assets/Newsly Favorites.png'
import FoodFriendImage from '../assets/FoodFriendsHP.png'

const projectsData = [
  {
    title: 'Newsly',
    description: 'A News search and discussion app',
    tech: ['React', 'Node'],
    github: 'https://github.com/rna3',
    demo: 'https://newsly-frontend-fu8j.onrender.com/',
    image: NewslyImage
  },
  {
    title: 'FoodFriends',
    description: 'A recipe search and social site',
    tech: ['Python', 'Flask'],
    github: 'https://github.com/rna3',
    demo: 'https://foodfriends.onrender.com/',
    image: FoodFriendImage
  },
  // {
  //   title: 'Jobly',
  //   description: 'A web app built during my bootcamp...',
  //   tech: ['React', 'Node','Express'],
  //   github: 'https://github.com/rna3',
  //   demo: 'live-link',
  // },
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