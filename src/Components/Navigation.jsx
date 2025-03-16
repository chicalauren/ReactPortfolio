// imports
import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../App.css';


// component
function Navigation() {
    const location = useLocation().pathname;
    return (
        <nav>
        <ul class="list-group">
            <li class="list-group-item">
                <Link to="/" className={location === "/" ? "active" : ""}>About Me</Link>
            </li>
            <li class="list-group-item">
                <Link to="/portfolio" className= {location === "/portfolio" ? "active" : ""} >Portfolio</Link>
            </li>
            <li class="list-group-item">
                <Link to="/contact" className={location === "/contact" ? "active" : ""}>Contact</Link>
            </li>
            <li class="list-group-item">
                <Link to="/resume" className={location === "/resume" ? "active" : ""}>Resume</Link>
            </li>
        </ul>
        </nav>
    );}

// export
export default Navigation;                                                 