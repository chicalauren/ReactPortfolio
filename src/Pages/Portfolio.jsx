// imports
import React from 'react';

// Project component
const Project = ({title = 'Project Title', description = 'Project Description', link='link'}) => {
    return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} className="project-image" />
      <p>{description}</p>
      <a href={repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
        View Repository
      </a>
    </div>
  );
};

// projects componets
const Projects = [
  {
    title: 'Employee Tracker',
    description: 'A TypeScript command-line application designed for non-developers to effortlessly access and interact with database-stored information. This interface, known as a Content Management System (CMS), enables business owners to efficiently view and manage departments, roles, and employees.',
    link: 'https://github.com/chicalauren/employeeTracker',
  },
  {
    title: 'Vehicle Builder',
    description: 'A command-line application where users can create a new vehicle or select an existing one, then perform various actions with their chosen vehicle. After each action, the user returns to the actions menu until they choose to exit.',
    link: 'https://github.com/chicalauren/Vehicle-Builder',
  },
  {
    title: 'Readme Generator',
    description: 'A command-line application that dynamically generates a professional README.md file from a user\'s input using the Inquirer package.',
    link: 'https://github.com/chicalauren/readmeGenerator',
  },
];

// Portfolio component
const Portfolio = () => {
    return (
      <section className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-item">
            <div className="overlay">
              <p>{project.title}</p>
            </div>
            <img src={project.image} alt={project.title} />
          </a>
        ))}
      </div>
    </section>
    );
  };

export default Portfolio;