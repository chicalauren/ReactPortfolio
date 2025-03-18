// imports
import React from "react";
import '../App.css';


// component
function About() {
    return (
        <div>
            <h1>About Me</h1>
            <img src="./assets/lauren.jpg" class="rounded mx-auto d-block modal-dialog modal-sm" alt="Lauren Brown" />
            <p class="text-center">
                Hi, my name is Lauren. 
                I'm a web developer with a passion for coding. 
                I have experience working with a variety of technologies and languages. 
                I'm always looking to learn new things and improve my skills. 
                When I'm not coding, I enjoy spending time with my family and friends, hiking, knitting, and doing yoga.
            </p>
        </div>
    );
}

// export
export default About;
