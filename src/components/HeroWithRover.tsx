"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroWithRover() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png"
          alt="KARURA Mars Rover"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="text-7xl md:text-9xl font-bold text-charcoal mb-8 tracking-tight">KARURA</h1>

          <div className="w-24 h-1 bg-mars-red mb-10"></div>

          <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-light max-w-4xl">International Mars Rover Development</p>

          <p className="text-lg text-gray-600 mb-16 max-w-3xl leading-relaxed">
            We are an international student-led initiative based in Japan and the U.S. 
            working to develop a Mars rover and further the development of space exploration.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/about" className="px-10 py-4 bg-charcoal text-white rounded-full font-medium hover:bg-mars-red shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 text-center">Learn More</a>
            <a href="/support" className="px-10 py-4 border-2 border-charcoal text-charcoal rounded-full font-medium hover:border-mars-red hover:text-mars-red shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 text-center">Support Us</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
