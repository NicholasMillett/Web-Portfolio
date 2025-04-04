'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

export const Hero = () => {
  return (
<section className="relative min-h-[80vh] flex items-center bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900"
          animate={{ scale: [1, 1.000, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span className="block">Hi, I'm</span>
          <span className="block bg-gradient-to-r from-blue-900 to-slate-600 bg-clip-text text-transparent">
            Nicholas Millett
          </span>
          <span className="block text-gray-900 text-2xl md:text-3xl lg:text-4xl">
          <Typewriter
                  words={['Full Stack Developer', 'Music Producer', 'Fighting Game Player']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}/>
          </span>
        </motion.h1>

        <div className="mt-6 flex items-center text-gray-600 text-lg">
          <svg
            className="w-5 h-5 mr-2 text-blue-600"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18l-4.95-4.05a7 7 0 010-9.9zm2.122 1.414a5 5 0 007.071 7.071L10 15.657l-4.243-4.243a5 5 0 017.07-7.071z"
              clipRule="evenodd"/>
          </svg>
          Atlanta, Georgia
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
            View My Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-white/40 transition-all backdrop-blur-md shadow-sm">
            Contact Me
          </Link>
        </div>
      </motion.div>


        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end">
            
          {/* Hexagonal Profile Image */}
          <div className="w-80 h-80 bg-white overflow-hidden shadow-xl" style={{ clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)' }}>
            <img
              src="/profilepicture.jpg"
              alt="Portrait of Nicholas Millett"
              className="w-full h-full object-cover"/>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};
