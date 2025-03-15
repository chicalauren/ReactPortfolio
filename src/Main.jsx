// imports
import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';


// components
function App() {
  return (
    <div>
    <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
      </div>
  );
}

// commenting out
// ReactDOM.createRoot(document.getElementById('root')).render(
   // <RouterProvider router={router} />
 // );

const root = createRoot(document.getElementById('root')); // Updated line
root.render(<App />); // Updated line

  // export
  export default App;