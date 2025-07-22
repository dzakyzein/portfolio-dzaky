// src/components/ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ image, title, description, demoUrl }) => {
  return (
    <motion.div
      className='bg-zinc-900 rounded-xl p-6 text-left shadow-lg hover:shadow-sky-500/30 transition duration-300 w-full'
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <img
        src={image}
        alt={title}
        className='rounded-lg mb-4 object-cover h-40 w-full border border-white/5'
      />
      <h3 className='text-xl font-semibold text-sky-400'>{title}</h3>
      <p className='text-gray-300 text-sm mt-2'>{description}</p>

      <div className='flex items-center gap-4 mt-4'>
        <a
          href={demoUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='text-sky-400 hover:underline text-sm'
        >
          Live Demo →
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
