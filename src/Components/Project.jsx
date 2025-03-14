// Import the required library
import React from 'react';

// Create the component
// The component takes in three props: title, image, and description
function Project({tile, image, description}) {
  return (
    <div>
        <h1>{title}</h1>
        <img src={image} alt={tile} />
        <p>{description}</p>
    </div>
    );
}

// Export the component
export default Project;