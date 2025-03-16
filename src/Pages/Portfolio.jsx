// imports
import React from 'react';

// Project component
const Project = ({title, description, link}) => {
    return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        View the Repository
      </a>
    </div>
  );
};

// projects componets
const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
  <Project
    title= 'Employee Tracker'
    description= 'A TypeScript command-line application designed for non-developers to effortlessly access and interact with database-stored information. This interface, known as a Content Management System (CMS), enables business owners to efficiently view and manage departments, roles, and employees.'
    link= 'https://github.com/chicalauren/employeeTracker'
  />
  <Project
    title= 'Vehicle Builder'
    description= 'A command-line application where users can create a new vehicle or select an existing one, then perform various actions with their chosen vehicle. After each action, the user returns to the actions menu until they choose to exit.'
    link= 'https://github.com/chicalauren/Vehicle-Builder'
  />
  <Project
    title= 'Readme Generator'
    description= 'A command-line application that dynamically generates a professional README.md file from a users input using the Inquirer package.'
    link= 'https://github.com/chicalauren/readmeGenerator'
    />
    </section>
  );
};

// export
export default Projects;
