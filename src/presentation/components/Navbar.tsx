'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ThemeToggle } from '@/presentation/components/ThemeToggle';

export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-navbar-light dark:bg-navbar-dark backdrop-blur-md border-b border-gray-100 dark:border-gray-600">
      <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="relative flex justify-center items-center h-16">
          {/* Pill-style nav */}
          <div className="hidden md:flex bg-navbar-light dark:bg-navbar-dark border border-gray-200 dark:border-gray-600 shadow-sm rounded-full px-3 py-1.5 max-w-fit">
            <nav className="flex gap-3 sm:gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`
                    relative px-3 py-1 text-sm font-medium transition-all
                    ${pathname === link.path
                      ? 'text-blue-600 dark:text-warmAccent after:w-full after:bg-blue-600 dark:after:bg-warmAccent'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-warmAccent'}
                    after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 
                    hover:after:w-full after:transition-all after:duration-300
                    hover:after:bg-blue-600 dark:hover:after:bg-warmAccent
                  `}
                >
                  {link.name}
                </Link>

              ))}
            </nav>
          </div>

          {/* Home button */}
          <div className="fixed top-4 left-4 z-50 hidden md:flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight 
                        bg-gradient-to-r from-brand-start to-brand-end 
                        bg-clip-text text-transparent 
                        dark:from-brand-darkStart dark:to-brand-darkEnd 
                        dark:bg-gradient-to-r dark:bg-clip-text dark:text-transparent"
            >
              Nicholas<span className="text-transparent">.</span>
            </Link>
          </div>


          
          {/* Theme toggle */}
          <div className="fixed top-4 right-6 z-50 hidden md:flex items-center">
            <ThemeToggle />
          </div>


          {/* Mobile menu button */}
          <div className="absolute right-0 md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-navbar-light dark:bg-navbar-dark">
            {navLinks.map((link) => (
              <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors relative px-3 py-1
                after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 
                after:transition-all after:duration-300
                ${
                  pathname === link.path
                    ? 'text-blue-600 dark:text-warmAccent after:w-full after:bg-blue-600 dark:after:bg-warmAccent'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-warmAccent hover:after:w-full hover:after:bg-blue-600 dark:hover:after:bg-warmAccent'
                }`}
            >
              {link.name}
            </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
