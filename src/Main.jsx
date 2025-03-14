// imports
import React from 'react';
import ReactDom from 'react-dom/client';

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

// render
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );

  // export
  export default App;