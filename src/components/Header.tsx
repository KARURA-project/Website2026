'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-bluewood">
            KARURA PROJECT
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/about" 
              className="text-bluewood hover:text-neon-blue transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/projects" 
              className="text-bluewood hover:text-neon-blue transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/news" 
              className="text-bluewood hover:text-neon-blue transition-colors"
            >
              News
            </Link>
            <Link 
              href="/support" 
              className="text-bluewood hover:text-neon-blue transition-colors"
            >
              Support
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <span className="sr-only">Menu</span>
            {/* Add hamburger icon */}
          </button>
        </div>
      </nav>
    </motion.header>
  );
}