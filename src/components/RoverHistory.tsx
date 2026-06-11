"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function RoverHistory() {
  const rovers = [
    {
      year: '2024',
      name: 'KARURA III',
      achievement: 'Historic URC Finals - First Japanese Team',
      description: 'Made history as the first international and Japanese team to reach the University Rover Challenge finals.',
      image: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
    },
    {
      year: '2023',
      name: 'KARURA II',
      achievement: 'URC Qualifiers Success',
      description: 'Successfully qualified for the University Rover Challenge, demonstrating significant technical improvements.',
      image: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
    },
    {
      year: '2022',
      name: 'KARURA I',
      achievement: 'Team Formation & First Prototype',
      description: 'Launch of the KARURA project, bringing together students from Japan and Texas A&M University.',
      image: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
    },
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Our Journey</h2>
          <div className="w-16 h-1 bg-mars-red mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">Three years of innovation, dedication, and groundbreaking achievements in Mars rover development.</p>
        </div>

        <div className="flex justify-center">
          <div className="space-y-32 max-w-6xl w-full">
            {rovers.map((rover, index) => (
              <motion.div
                key={rover.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={`relative h-96 w-full ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Image src={rover.image} alt={rover.name} fill className="object-cover rounded-lg shadow-xl" />
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="inline-block px-4 py-1 bg-mars-red text-white text-sm font-bold mb-6">{rover.year}</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">{rover.name}</h3>
                  <p className="text-xl text-mars-red font-semibold mb-6">{rover.achievement}</p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">{rover.description}</p>

                  <a href={`/rover/${rover.year}`} className="inline-flex items-center text-charcoal hover:text-mars-red font-medium transition-colors">
                    Learn More About {rover.name}
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
