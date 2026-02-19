'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Images Grid - Inspired by https://www.shueisha.co.jp/saiyo/ */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-20">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="relative"
          >
            <Image
              src={`/images/grid/rover-${i}.jpg`}
              alt=""
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl md:text-9xl font-black text-charcoal mb-6 leading-none">
            KAR<span className="text-mars-red">U</span>RA
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-700 mb-4 font-light"
          >
            International Mars Rover Development
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Uniting students from Japan and Texas A&M University to push the boundaries of space exploration
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#about"
              className="px-8 py-4 bg-mars-red text-white rounded-full font-bold hover:bg-deep-red transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Discover Our Mission
            </a>
            <a
              href="/support"
              className="px-8 py-4 bg-white text-mars-red border-2 border-mars-red rounded-full font-bold hover:bg-mars-red hover:text-white transition-all"
            >
              Support Us
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FiArrowDown className="text-mars-red text-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}