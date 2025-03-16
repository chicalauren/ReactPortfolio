// Import the required library
import React from 'react';
import '../App.css';


// Create the component
// The component takes in three props: title, image, and description
function Project({title, image, description}) {
  return (
    <div>
        <h1>{title}</h1>
        <img src={image} alt={title} />
        <p>{description}</p>
    </div>
    );
}

// Export the component
export default Project;