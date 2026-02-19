'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Simple heading with red accent */}
          <h1 className="text-6xl md:text-8xl font-bold text-charcoal mb-8 tracking-tight">
            KARURA
          </h1>
          
          <div className="w-16 h-1 bg-mars-red mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            International Mars Rover Development Team
            <br />
            <span className="text-gray-400">Japan × Texas A&M University</span>
          </p>

          {/* Simple CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="px-8 py-4 bg-charcoal text-white font-medium hover:bg-mars-red transition-colors duration-300"
            >
              Learn More
            </Link>
            <Link
              href="/support"
              className="px-8 py-4 border-2 border-charcoal text-charcoal font-medium hover:border-mars-red hover:text-mars-red transition-colors duration-300"
            >
              Support Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}