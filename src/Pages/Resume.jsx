// imports
import React from 'react';
import '../App.css';

// component
function Resume () {
    return (
      <section>
        <h2>Resume</h2>
        <a class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill d-flex justify-content-center" href="../assets/resume.pdf" download>Download Resume</a>
  
        {/* Skills List */}
        <div className="skills-container">
          <h3>Front-end Proficiencies</h3>
          <ul class="list-group list-group-flush">
            <li class="d-flex justify-content-center list-group-item">HTML</li>
            <li class="d-flex justify-content-center list-group-item">CSS</li>
            <li class="d-flex justify-content-center list-group-item">JavaScript</li>
            <li class="d-flex justify-content-center list-group-item">jQuery</li>
            <li class="d-flex justify-content-center list-group-item">Responsive Design</li>
            <li class="d-flex justify-content-center list-group-item">React</li>
            <li class="d-flex justify-content-center list-group-item">Bootstrap</li>
          </ul>
  
          <h3>Back-end Proficiencies</h3>
          <ul class="list-group list-group-flush">
            <li class="d-flex justify-content-center list-group-item">APIs</li>
            <li class="d-flex justify-content-center list-group-item">Node.js</li>
            <li class="d-flex justify-content-center list-group-item">Express</li>
            <li class="d-flex justify-content-center list-group-item">MySQL</li>
          </ul>
  
          <h3>Additional Skills</h3>
          <ul class="list-group list-group-flush">
            <li class="d-flex justify-content-center list-group-item">Project Managment</li>
            <li class="d-flex justify-content-center list-group-item">Human Resources</li>
            <li class="d-flex justify-content-center list-group-item">Customer Servie</li>
            <li class="d-flex justify-content-center list-group-item"></li>
          </ul>
        </div>
      </section>
    );
  }

  // export
    export default Resume;