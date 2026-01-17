'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-gray-50">
      {/* Wavy background decoration */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0">
          <path 
            fill="#00D9FF" 
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,154.7C672,160,768,192,864,197.3C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-bluewood mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          KARURA PROJECT
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-bay mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We are an international student-led initiative
based in Japan and the U.S. working to develop a Mars rover and further the development of space exploration.
        </motion.p>

      </div>
    </section>
  );
}