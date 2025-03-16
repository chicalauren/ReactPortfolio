//input
import React from 'react';
import App from './App'; // Updated line
import { createRoot } from 'react-dom/client'; // Updated import

const root = createRoot(document.getElementById('root')); // Updated line
root.render(<App />); // Updated line

  // export
  export default App;