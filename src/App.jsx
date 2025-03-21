/// imports
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// components
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main class="mainColor">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

// export
export default App;