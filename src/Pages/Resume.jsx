// imports
import React from 'react';

// component
function Resume () {
    return (
      <section>
        <h2>Resume</h2>
        <a href="../assets/resume.pdf" download>Download Resume</a>
  
        {/* Skills List */}
        <div className="skills-container">
          <h3>Front-end Proficiencies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
  
          <h3>Back-end Proficiencies</h3>
          <ul>
            <li>APIs</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MySQL</li>
          </ul>
  
          <h3>Additional Skills</h3>
          <ul>
            <li>Project Managment</li>
            <li>HR</li>
            <li>Accounting</li>
          </ul>
        </div>
      </section>
    );
  }

  // export
    export default Resume;