/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan dikirim! (simulasi)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id='contact'
      className='py-20 px-6 md:px-20 bg-zinc-950 text-white'
    >
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold mb-10 text-center border-b border-sky-500 inline-block pb-2'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <div className='grid md:grid-cols-2 gap-10'>
          {/* LEFT: Form */}
          <motion.form
            onSubmit={handleSubmit}
            className='space-y-6'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <label className='block mb-1 text-sm text-gray-300'>Name</label>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 bg-zinc-800 text-white rounded-md border border-zinc-700 focus:outline-none focus:border-sky-400'
              />
            </div>
            <div>
              <label className='block mb-1 text-sm text-gray-300'>Email</label>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 bg-zinc-800 text-white rounded-md border border-zinc-700 focus:outline-none focus:border-sky-400'
              />
            </div>
            <div>
              <label className='block mb-1 text-sm text-gray-300'>
                Message
              </label>
              <textarea
                name='message'
                value={form.message}
                onChange={handleChange}
                rows='5'
                required
                className='w-full px-4 py-2 bg-zinc-800 text-white rounded-md border border-zinc-700 focus:outline-none focus:border-sky-400'
              ></textarea>
            </div>
            <motion.button
              type='submit'
              className='bg-sky-500 text-white px-6 py-2 rounded hover:bg-sky-600 transition'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* RIGHT: Contact Info */}
          <motion.div
            className='space-y-6 text-gray-300'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className='text-lg'>
              Whether you're looking to collaborate, hire, or just say hello —
              feel free to drop me a message. I'm always open to meaningful
              conversations and new opportunities.
            </p>

            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <FaEnvelope className='text-sky-400' />
                <a
                  href='mailto:dzakyanwar21@email.com'
                  className='hover:underline'
                >
                  dzakyanwar21@email.com
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <FaWhatsapp className='text-green-400' />
                <a
                  href='https://wa.me/6281229217715'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  +62 812-2921-7715
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <FaGithub className='text-white' />
                <a
                  href='https://github.com/dzakyzein'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  github.com/dzakyzein
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <FaLinkedin className='text-blue-400' />
                <a
                  href='https://linkedin.com/in/dzakyanwarzein'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  linkedin.com/in/dzakyzein
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
