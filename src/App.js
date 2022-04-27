import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Footer from "./components/Footer";
// import Resume from "./components/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  return (
    <div>
      <main className="min-h-screen text-gray-400 bg-gray-900 body-font">
        <Navbar setCurrentPage={setCurrentPage} />
        {currentPage === "About" ? <About /> : null}
        {currentPage === "Projects" ? <Projects /> : null}
        {currentPage === "Contact" ? <Contact /> : null}
        {currentPage === "Skills" ? <Skills /> : null}
        {/* {currentPage === "Resume" ? <Resume /> : null} */}
        {/* <Footer setCurrentPage={setCurrentPage} /> */}
      </main>
    </div>
  );
}

export default App;
