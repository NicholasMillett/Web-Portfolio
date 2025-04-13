'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Download } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] bg-background-light dark:bg-background-dark overflow-hidden flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground-light dark:text-foreground-dark"
              animate={{ scale: [1, 1.0005, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className="block">Hi, I'm</span>
              <span className="block 
                 bg-gradient-to-r from-brand-start to-brand-end 
                 bg-clip-text text-transparent 
                 dark:from-brand-darkStart dark:to-brand-darkEnd 
                 dark:bg-gradient-to-r dark:bg-clip-text dark:text-transparent">
                Nicholas Millett
              </span>

            </motion.h1>

            {/* Professional roles as h2 */}
            <motion.h2
              className="mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground-light dark:text-foreground-dark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Typewriter
                words={['Full Stack Developer', 'Music Producer', 'World Traveller']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </motion.h2>


            <div className="mt-6 flex items-center text-foreground-light dark:text-foreground-dark text-lg">
              <MapPin className="w-5 h-5 mr-2 text-mapPin-light dark:text-mapPin-dark" />
              Atlanta, Georgia
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-full 
                        bg-blue-600 text-background-light 
                        hover:bg-blue-700 
                        dark:bg-warmAccent dark:text-brand-start
                        dark:hover:brightness-110 
                        transition-all shadow-md hover:shadow-lg"
            >
              View My Projects
            </Link>

              <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-gray-300 dark:border-border-dark text-brand-start dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all backdrop-blur-md shadow-sm flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
{/*             <div
              className="w-80 h-80 bg-surface-light dark:bg-surface-dark overflow-hidden shadow-xl relative group"
              style={{
                clipPath:
                  'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
              }}
            >

              <img
                src="/profilepicture-sg.png"
                alt="Anime Style Nicholas"
                className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />
              <img
                src="/profilepicture-anime.png"
                alt="Portrait of Nicholas Millett"
                className="w-full h-full object-cover absolute inset-0 transition-opacity duration-700 group-hover:opacity-0"
              />
            </div> */}
            {/* Container for image + shapes */}
            <div className="relative w-80 h-80">
              {/* Image */}
              <div className="w-full h-full bg-white overflow-hidden shadow-xl rounded-[1rem]">
                <img
                  src="/profilepicseated.jpg"
                  alt="Portrait of Nicholas Millett"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
