// src/sections/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/projectcard";

const Projects = () => {
  return (
    <section
      id='projects'
      className='py-20 px-6 md:px-20 bg-zinc-950 text-white'
    >
      <div className='max-w-6xl mx-auto text-center'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold mb-12 border-b border-sky-500 inline-block pb-2'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center'>
          <ProjectCard
            image='/port-1.png'
            title='CarlosTech Industrial Website'
            description='A responsive company profile site for CarlosTech, built with React and TailwindCSS to showcase their services and industrial expertise.'
            demoUrl='https://carlostech.web.id'
          />
          <ProjectCard
            image='/port-2.png'
            title='Mood Based Playlist Generator'
            description='A web app that generates music playlists based on your mood using Spotify API, built with React and TailwindCSS.'
            demoUrl='https://mood-based-playlist-generator-eta.vercel.app/'
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
