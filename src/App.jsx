import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Githubstats from "./components/githubstats";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";

import AOS from "aos";
import "aos/dist/aos.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Githubstats />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

      <ToastContainer position='top-right' autoClose={3000} theme='light' />
    </div>
  );
};

export default App;
