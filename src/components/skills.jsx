/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiExpress } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} className='text-sky-400' /> },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={40} className='text-cyan-400' />,
  },
  { name: "MySQL", icon: <SiMysql size={40} className='text-yellow-400' /> },
  { name: "Express", icon: <SiExpress size={40} className='text-white' /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className='text-green-400' /> },
  { name: "GitHub", icon: <FaGithub size={40} className='text-gray-200' /> },
];

const Skills = () => {
  return (
    <section id='skills' className='py-20 px-6 md:px-20 bg-zinc-950 text-white'>
      <div className='max-w-6xl mx-auto text-center'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold mb-12 border-b border-sky-500 inline-block pb-2'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Tools
        </motion.h2>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 place-items-center'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className='bg-zinc-900 rounded-xl py-6 px-4 shadow-md border border-white/10 hover:shadow-sky-500/30 transition duration-300 w-full text-center'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className='flex justify-center mb-2'>{skill.icon}</div>
              <p className='text-sm text-gray-300'>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
