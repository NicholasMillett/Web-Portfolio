'use client';

import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Hi, I'm <span className="text-blue-600">Your Name</span>
              <br />
              <span className="text-gray-900">Web Developer</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              I create beautiful and functional websites with focus on user experience, 
              performance, and modern design principles.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all shadow-sm hover:shadow"
              >
                View My Projects
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-all"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-red-200 rounded-lg overflow-hidden shadow-lg">
              {/* This would be replaced with an actual image */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Your Image Here
              </div>
            </div>
            {/* Visual elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-300 rounded-lg z-[-1]"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-lg z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}; 