'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
   <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png"
          alt="Mars rover background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-red-400 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          KARURA PROJECT
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-red-400 mb-12 max-w-2xl mx-auto"
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