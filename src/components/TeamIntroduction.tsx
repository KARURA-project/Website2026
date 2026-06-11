"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TeamIntroduction() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Who We Are</h2>
          <div className="w-16 h-1 bg-mars-red mx-auto mb-10"></div>
        </div>

        <div className="flex justify-center">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                KARURA is an international collaboration uniting passionate students from 
                Texas A&M University and leading universities across Japan. Together, we're 
                pushing the boundaries of Mars exploration technology.
              </p>
              
              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                Our team brings together expertise in mechanical engineering, electrical systems, 
                software development, scientific research, and business operations—all working 
                toward a common goal: advancing humanity's reach into space.
              </p>

              <div className="grid grid-cols-3 gap-10 mb-10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-mars-red mb-3">46+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-mars-red mb-3">5</div>
                  <div className="text-sm text-gray-600">Departments</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-mars-red mb-3">2</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>

              <a href="/about" className="inline-flex items-center text-charcoal hover:text-mars-red font-medium transition-colors">
                Meet Our Team
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] w-full"
            >
              <Image src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png" alt="KARURA Team" fill className="object-cover rounded-lg shadow-xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
