import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-zinc-950 text-gray-400 text-center py-6 border-t border-zinc-800'>
      <p className='text-sm'>
        &copy; {year} Dzaky Anwar Zein. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
