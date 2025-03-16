// imports
import React from 'react';
import {Link, useLocation} from 'react-router-dom';

// component
function Navigation() {
    const location = useLocation().pathname;
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">Portfolio Menu</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <Link to="/" className={location === "/" ? "active" : ""}>About Me</Link>
            </li>
            <li class="nav-item">
                <Link to="/portfolio" className= {location === "/portfolio" ? "active" : ""} >Portfolio</Link>
            </li>
            <li class="nav-item">
                <Link to="/contact" className={location === "/contact" ? "active" : ""}>Contact</Link>
            </li>
            <li class="nav-item">
                <Link to="/resume" className={location === "/resume" ? "active" : ""}>Resume</Link>
            </li>
        </ul>   
        </div>
        </div>
        </nav>
    );
}


// export
export default Navigation;                                                             