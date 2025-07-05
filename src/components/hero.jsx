/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

// Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2 } },
};

const Hero = () => {
  return (
    <section
      id='hero'
      className='min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 pt-24 bg-black text-white'
    >
      {/* TEXT */}
      <motion.div
        className='flex-1 text-center md:text-left'
        variants={container}
        initial='hidden'
        animate='show'
      >
        <motion.h2
          className='text-4xl sm:text-5xl font-bold mb-4'
          variants={fadeInLeft}
        >
          Hi, I'm <span className='text-sky-400'>Dzaky Anwar Zein</span>
        </motion.h2>

        <motion.p className='text-lg text-gray-300 mb-2' variants={fadeInLeft}>
          A passionate <strong>Frontend Developer</strong> crafting intuitive
          and visually striking web experiences with clean code and modern
          tools.
        </motion.p>

        <motion.p
          className='text-sm italic text-gray-400 mb-6'
          variants={fadeInLeft}
        >
          Building sleek digital experiences since 2023.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className='flex flex-wrap justify-center md:justify-start gap-4'
          variants={fadeUp}
        >
          {[
            { label: "View my work", href: "#projects", primary: true },
            { label: "Contact me", href: "#contact", primary: false },
            { label: "View CV", href: "/cv-dzaky.pdf", download: true },
          ].map((btn, i) => (
            <motion.a
              key={i}
              href={btn.href}
              target={btn.download ? "_blank" : "_self"}
              rel='noopener noreferrer'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${
                btn.primary
                  ? "bg-sky-500 hover:bg-sky-600 text-white"
                  : btn.download
                  ? "text-sky-400 underline hover:text-sky-300"
                  : "border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white"
              } font-semibold px-6 py-2 rounded transition`}
            >
              {btn.label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        className='flex-1'
        variants={scaleIn}
        initial='hidden'
        animate='show'
      >
        <img
          src='/hero-img.png'
          alt='Hero Illustration'
          className='rounded-2xl shadow-xl mx-auto w-72 md:w-96 object-cover'
        />
      </motion.div>
    </section>
  );
};

export default Hero;
