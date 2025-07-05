/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

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
          {/* Card Project */}
          <motion.div
            className='bg-zinc-900 rounded-xl p-6 text-left shadow-lg hover:shadow-sky-500/30 transition duration-300 w-full'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src='/port-1.png'
              alt='CarlosTech Website'
              className='rounded-lg mb-4 object-cover h-40 w-full border border-white/5'
            />
            <h3 className='text-xl font-semibold text-sky-400'>
              CarlosTech Industrial Website
            </h3>
            <p className='text-gray-300 text-sm mt-2'>
              A responsive company profile site for CarlosTech, built with React
              and TailwindCSS to showcase their services and industrial
              expertise.
            </p>

            <div className='flex items-center gap-4 mt-4'>
              {/* <a
                href="https://github.com/dzakyzein/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline text-sm"
              >
                GitHub →
              </a> */}
              <a
                href='https://carlostech.web.id'
                target='_blank'
                rel='noopener noreferrer'
                className='text-sky-400 hover:underline text-sm'
              >
                Live Demo →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
