// imports
import React from 'react';
import '../App.css';
import image1 from '../assets/employee.jpg';
import image2 from '../assets/builder.jpg';
import image3 from '../assets/readme.png';
import image4 from '../assets/weather.png';
import image5 from '../assets/files.jpg';
import image6 from '../assets/portfolio.jpg';


// Project component
const Project = ({title, image, description, link}) => {
    return (
    <div className="project card container mt-4" style={{width: "18rem"}}>
      <h3>{title}</h3>
      {/* image of the project */}
      <img className="card-img-top" src={image} alt={title} />
      {/* description of the project */}
      <p>{description}</p>
      {/* link to the repository */}
      <div class="d-flex justify-content-center">
      <a  href={link} target="_blank" rel="noopener noreferrer" className="project-link" class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
        View the Repository
      </a>
      </div>
    </div>
  );
};

// projects componets
const Projects = () => {
  return (
    <section>
      <h1>Projects</h1>
  <Project
    title= 'Employee Tracker'
    image= {image1}
    description= 'A TypeScript command-line application designed for non-developers to effortlessly access and interact with database-stored information. This interface, known as a Content Management System (CMS), enables business owners to efficiently view and manage departments, roles, and employees.'
    link= 'https://github.com/chicalauren/employeeTracker'
  />
  <p></p>
  <Project
    title= 'Vehicle Builder'
    image= {image2}
    description= 'A command-line application where users can create a new vehicle or select an existing one, then perform various actions with their chosen vehicle. After each action, the user returns to the actions menu until they choose to exit.'
    link= 'https://github.com/chicalauren/Vehicle-Builder'
  />
    <p></p>
  <Project
    title= 'Readme Generator'
    image= {image3}
    description= 'A command-line application that dynamically generates a professional README.md file from a users input using the Inquirer package.'
    link= 'https://github.com/chicalauren/readmeGenerator'
    />
    <Project
    title= 'weatherDashboard'
    image= {image4}
    description= 'A weather dashboard that allows users to search for a city and view the current weather conditions as well as the 5-day forecast.'
    link= 'https://github.com/chicalauren/weatherDashboard'
    />
    <Project
    title= 'File Apprender'
    image= {image5}
    description= 'A command-line application that appends text to a file.'
    link= 'https://github.com/chicalauren/Uni-Systems-File-Appender'
    />
    <Project
    title= 'React Portfolio'
    image= {image6}
    description= 'A portfolio created using React.'
    link= 'https://github.com/chicalauren/ReactPortfolio'
    />
    
      <p></p>
    </section>
  );
};

// export
export default Projects;
