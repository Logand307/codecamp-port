import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  console.log(currentPage);
  return (
    <div>
      <main className="min-h-screen text-gray-400 bg-gray-900 body-font">
        <Navbar setCurrentPage={setCurrentPage} />
        {currentPage === "About" ? <About /> : null}
        {currentPage === "Projects" ? <Projects /> : null}
        {currentPage === "Contact" ? <Contact /> : null}
        {currentPage === "Skills" ? <Skills /> : null}
        {/* <Footer setCurrentPage={setCurrentPage} /> */}
      </main>
    </div>
  );
}

export default App;
