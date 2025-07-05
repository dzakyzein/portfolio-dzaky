/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const GithubStats = () => {
  return (
    <section id='github' className='py-20 px-6 md:px-20 bg-zinc-950 text-white'>
      <div className='max-w-5xl mx-auto text-center'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold mb-6 border-b border-sky-500 inline-block pb-2'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          GitHub Activity
        </motion.h2>
        <motion.p
          className='text-gray-400 mb-10'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A quick look at my coding habits and most used languages.
        </motion.p>

        <motion.div
          className='flex flex-col md:flex-row justify-center items-center gap-6'
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* GitHub Streak */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className='rounded-xl overflow-hidden border border-white/10 shadow-lg'
          >
            <img
              src='https://github-readme-streak-stats.herokuapp.com/?user=dzakyzein&theme=radical&hide_border=true'
              alt='GitHub Streak'
              className='w-full h-auto'
            />
          </motion.div>

          {/* Top Languages */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className='rounded-xl overflow-hidden border border-white/10 shadow-lg'
          >
            <img
              src='https://github-readme-stats.vercel.app/api/top-langs/?username=dzakyzein&layout=compact&theme=radical&hide_border=true'
              alt='Top Languages'
              className='w-full h-auto'
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;
