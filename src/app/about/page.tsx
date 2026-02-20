'use client';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const teamStats = [
    { number: '46+', label: 'Team Members' },
    { number: '5', label: 'Departments' },
    { number: '2', label: 'Countries' },
    { number: '3', label: 'Years Active' },
  ];

  const universities = [
    'Texas A&M University',
    'University of Tokyo',
    'Kyoto University',
    'Tohoku University',
    'Osaka University',
    'Shinshu University',
  ];

  const milestones = [
    {
      year: '2022',
      title: 'KARURA Founded',
      description: 'International collaboration between Japanese and American students begins.',
    },
    {
      year: '2023',
      title: 'First Rover Prototype',
      description: 'KARURA I successfully completes initial testing and qualifies for URC.',
    },
    {
      year: '2024',
      title: 'Historic URC Finals',
      description: 'First Japanese and international team to reach University Rover Challenge finals.',
    },
    {
      year: '2025',
      title: 'Continued Innovation',
      description: 'Developing KARURA III with advanced autonomous capabilities.',
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <Header />

{/* Hero Section */}
<section className="relative min-h-[60vh] flex items-center justify-center bg-white overflow-hidden pt-24 md:pt-32">
  <div className="absolute inset-0 opacity-20">
    <Image
      src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png"
      alt="KARURA Team"
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
      className="text-center"
    >
      <h1 className="text-6xl md:text-8xl font-bold text-charcoal mb-8">
        About KARURA
      </h1>
      <div className="w-24 h-1 bg-mars-red mx-auto mb-10"></div>
      <p className="text-xl md:text-2xl text-gray-700 max-w-12xl mx-auto leading-relaxed">
        Pioneering international collaboration in Mars rover development
      </p>
    </motion.div>
  </div>
</section>

      <div className="py-16"></div>

      {/* Mission Statement */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Our Mission
            </h2>
            <div className="w-16 h-1 bg-mars-red mx-auto mb-10"></div>
          </div>

          {/* Centered Grid Container */}
          <div className="flex justify-center">
            <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl w-full">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  KARURA is an international Mars rover development team that brings together 
                  passionate students from Texas A&M University and leading universities across 
                  Japan. Our mission is to advance space exploration technology through innovative 
                  engineering and international collaboration.
                </p>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  We compete annually in the University Rover Challenge (URC), the world's premier 
                  robotics competition for university students. Through this challenge, we develop 
                  cutting-edge technologies that could one day be used on Mars.
                </p>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our team represents a unique bridge between Japanese and American engineering 
                  excellence, combining different perspectives and approaches to create innovative 
                  solutions for Mars exploration.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[500px] w-full"
              >
                <Image
                  src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png"
                  alt="KARURA Rover"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16"></div>

      {/* Stats Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              KARURA by the Numbers
            </h2>
            <div className="w-16 h-1 bg-mars-red mx-auto"></div>
          </div>

          {/* Centered Stats Grid */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl w-full">
              {teamStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold text-mars-red mb-4">
                    {stat.number}
                  </div>
                  <div className="text-lg text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="py-16"></div>

      {/* Partner Universities */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Partner Universities
            </h2>
            <div className="w-16 h-1 bg-mars-red mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Students from leading institutions collaborate to make KARURA possible
            </p>
          </div>

          {/* Centered Universities Grid */}
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
              {universities.map((university, index) => (
                <motion.div
                  key={university}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white p-8 rounded-lg border border-gray-200 hover:border-mars-red transition-colors duration-300 text-center"
                >
                  <h3 className="text-xl font-bold text-charcoal">{university}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="py-16"></div>

      {/* Timeline */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Our Timeline
            </h2>
            <div className="w-16 h-1 bg-mars-red mx-auto"></div>
          </div>

          {/* Centered Timeline */}
          <div className="flex justify-center">
            <div className="max-w-4xl w-full">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative pl-8 pb-16 border-l-2 border-gray-300 last:pb-0"
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-mars-red rounded-full"></div>
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <span className="inline-block px-4 py-1 bg-mars-red text-white text-sm font-bold mb-4">
                      {milestone.year}
                    </span>
                    <h3 className="text-2xl font-bold text-charcoal mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="py-16"></div>

      {/* CTA Section */}
      <section className="py-32 bg-charcoal">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Interested in being part of KARURA? We're always looking for passionate students.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/support"
              className="px-10 py-5 bg-mars-red text-white font-medium hover:bg-white hover:text-mars-red transition-colors duration-300"
            >
              Support Us
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 border-2 border-white text-white font-medium hover:bg-white hover:text-charcoal transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}