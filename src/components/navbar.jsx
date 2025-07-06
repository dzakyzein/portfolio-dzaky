/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Stats", href: "#github" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className='fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-white/10'
    >
      <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
        {/* Logo */}
        <motion.h1
          className='text-xl font-bold text-white tracking-wide'
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          Dzaky.dev
        </motion.h1>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-6 text-base md:text-lg font-medium text-gray-300'>
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Link
                to={item.href.replace("#", "")}
                smooth={true}
                duration={500}
                offset={-80}
                className='cursor-pointer hover:text-white'
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.ul
          className='md:hidden px-4 pb-4 space-y-2 text-sm font-medium text-gray-300'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href.replace("#", "")}
                smooth={true}
                duration={500}
                offset={-80}
                className='block py-2 border-b border-white/10 hover:text-white'
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
