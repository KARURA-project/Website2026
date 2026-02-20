'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';

export default function RoverPage() {
  const [selectedRover, setSelectedRover] = useState('karura-3');

  const rovers = [
    {
      id: 'karura-3',
      name: 'KARURA III',
      year: '2024-2025',
      status: 'Active Development',
      description: 'Our most advanced rover yet, featuring cutting-edge autonomous navigation, enhanced mobility systems, and state-of-the-art science instrumentation.',
      image: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
      specs: [
        { label: 'Weight', value: '? kg' },
        { label: 'Top Speed', value: '? m/s' },
        { label: 'Battery Life', value: '? hours' },
        { label: 'Arm Reach', value: '? meters' },
      ],
      features: [
        'Advanced Computer Vision',
        'Autonomous Navigation System',
        'High-Resolution Cameras',
        'Drill & Sample Collection',
        '6-DOF Robotic Arm',
        'Real-time Data Transmission',
      ],
    },
    {
      id: 'karura-2',
      name: 'KARURA II',
      year: '2023-2024',
      status: 'Competition Ready',
      description: 'Successfully qualified for URC finals, demonstrating significant improvements in reliability and performance.',
      image: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
      specs: [
        { label: 'Weight', value: '? kg' },
        { label: 'Top Speed', value: '? m/s' },
        { label: 'Battery Life', value: '? hours' },
        { label: 'Arm Reach', value: '? meters' },
      ],
      features: [
        'GPS Navigation',
        'Object Detection',
        'HD Camera System',
        'Sample Analysis Tools',
        '5-DOF Robotic Arm',
        'Wireless Communication',
      ],
    },
    {
      id: 'karura-1',
      name: 'KARURA I',
      year: '2022-2023',
      status: 'Prototype',
      description: 'Our first prototype that established the foundation for all future iterations.',
      image: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
      specs: [
        { label: 'Weight', value: '? kg' },
        { label: 'Top Speed', value: '? m/s' },
        { label: 'Battery Life', value: '? hours' },
        { label: 'Arm Reach', value: '? meters' },
      ],
      features: [
        'Manual Control',
        'Basic Sensors',
        'Standard Camera',
        'Basic Manipulation',
        'Simple Arm',
        'Radio Control',
      ],
    },
  ];

  const currentRover = rovers.find(r => r.id === selectedRover) || rovers[0];

  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hero Section - Added pt-24 md:pt-32 for header spacing */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-white overflow-hidden pt-24 md:pt-32">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={currentRover.image}
            alt="KARURA Rover"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20 py-32 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-charcoal mb-8">
              The Rover
            </h1>
            <div className="w-24 h-1 bg-mars-red mx-auto mb-10"></div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-12xl mx-auto">
              Engineering excellence meets Mars exploration
            </p>
          </motion.div>
        </div>
      </section>

      <div className="py-16"></div>

      {/* Rover Selector - Wrapped in flex justify-center */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Our Rovers
            </h2>
            <div className="w-16 h-1 bg-mars-red mx-auto"></div>
          </div>

          {/* Rover Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {rovers.map((rover) => (
              <button
                key={rover.id}
                onClick={() => setSelectedRover(rover.id)}
                className={`px-8 py-4 font-bold transition-all duration-300 ${
                  selectedRover === rover.id
                    ? 'bg-mars-red text-white shadow-lg'
                    : 'bg-white text-charcoal border-2 border-gray-200 hover:border-mars-red'
                }`}
              >
                {rover.name}
              </button>
            ))}
          </div>

          {/* Rover Details - Wrapped in flex justify-center with max-w-6xl */}
          <div className="flex justify-center">
            <motion.div
              key={selectedRover}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-20 items-start max-w-6xl w-full"
            >
              {/* Image */}
              <div className="relative h-[500px] w-full">
                <Image
                  src={currentRover.image}
                  alt={currentRover.name}
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
                <div className="absolute top-4 left-4 bg-mars-red text-white px-4 py-2 font-bold">
                  {currentRover.status}
                </div>
              </div>

              {/* Details */}
              <div>
                <h3 className="text-4xl font-bold text-charcoal mb-4">
                  {currentRover.name}
                </h3>
                <p className="text-xl text-mars-red font-semibold mb-6">
                  {currentRover.year}
                </p>
                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                  {currentRover.description}
                </p>

                {/* Specifications */}
                <div className="mb-10">
                  <h4 className="text-2xl font-bold text-charcoal mb-6">
                    Specifications
                  </h4>
                  <div className="grid grid-cols-2 gap-6">
                    {currentRover.specs.map((spec) => (
                      <div key={spec.label} className="bg-white p-6 rounded-lg border border-gray-200">
                        <div className="text-sm text-gray-500 mb-2">{spec.label}</div>
                        <div className="text-2xl font-bold text-charcoal">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-2xl font-bold text-charcoal mb-6">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {currentRover.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-mars-red rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="py-16"></div>

      {/* Subsystems Section - Wrapped in flex justify-center */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Rover Subsystems
            </h2>
            <div className="w-16 h-1 bg-mars-red mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-12xl mx-auto">
              Complex engineering systems working together
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
              {[
                {
                  title: 'Mobility System',
                  description: 'Advanced suspension and drive system for rough terrain navigation',
                  icon: '🚗',
                },
                {
                  title: 'Robotic Arm',
                  description: 'Multi-degree-of-freedom arm for manipulation and sampling',
                  icon: '🦾',
                },
                {
                  title: 'Science Station',
                  description: 'Analysis equipment for detecting signs of life',
                  icon: '🔬',
                },
                {
                  title: 'Autonomous Navigation',
                  description: 'Computer vision and AI for self-driving capabilities',
                  icon: '🤖',
                },
                {
                  title: 'Power System',
                  description: 'High-capacity batteries and power management',
                  icon: '🔋',
                },
                {
                  title: 'Communications',
                  description: 'Real-time data transmission and remote control',
                  icon: '📡',
                },
              ].map((subsystem, index) => (
                <motion.div
                  key={subsystem.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-5xl mb-6">{subsystem.icon}</div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">
                    {subsystem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {subsystem.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="py-16"></div>

      <Footer />
    </main>
  );
}