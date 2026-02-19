'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import DepartmentCard from '@/components/DepartmentCard';
import NewsGrid from '@/components/Newsgrid';
import Footer from '@/components/Footer';
import { NewsItem } from '@/components/NewsCard';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const departments = [
    {
      department: 'mechanical',
      title: 'Mechanical',
      description: 'Designing and fabricating the physical structure and mobility systems.',
      members: 12,
    },
    {
      department: 'electrical',
      title: 'Electrical',
      description: 'Developing power distribution and electronic communication systems.',
      members: 8,
    },
    {
      department: 'software',
      title: 'Software',
      description: 'Creating autonomous navigation and control algorithms.',
      members: 15,
    },
    {
      department: 'science',
      title: 'Science',
      description: 'Conducting research on astrobiology and life-detection protocols.',
      members: 6,
    },
    {
      department: 'business',
      title: 'Business',
      description: 'Managing sponsorships, outreach, and team operations.',
      members: 5,
    },
  ];

  const sponsors = [
    { id: '1', name: 'Sanso', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x740_v-frms_webp_47ab9e3a-894f-4fa5-ae7e-e04e6f6ff0a7_small.webp' },
    { id: '2', name: 'Kikusui', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-738x150_v-fs_webp_35ab6be7-00ff-45b5-b575-6589198d4233_small.webp' },
    { id: '3', name: 'Tenchijin', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1482x370_v-fms_webp_392f814c-2b0f-4bfa-9b98-a4c136832d54_small.webp' },
    { id: '4', name: 'Crecia', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x900_v-frms_webp_e4afed17-bd2a-46bb-bc4d-ac6e68d37be9_small.webp' },
    { id: '5', name: 'Hiwin', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-738x150_v-fs_webp_a7752d8d-06eb-465b-bcac-89b642aeef58_small.webp' },
    { id: '6', name: 'Spacegoods', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-800x209_v-fs_webp_5abd98f2-f13a-48f4-924d-29d9c0312265_small.webp' },
    { id: '7', name: 'OptoSigma', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1812x452_v-frms_webp_db352a0c-c6d2-4509-9518-9d34e1c6636a_small.webp' },
    { id: '8', name: 'Amulapo', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-666x140_v-fs_webp_c2904793-5b05-4517-8245-9c3657d440e2_small.webp' },
  ];

  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'KARURA Makes History as First Japanese Team in URC Finals',
      description: 'In 2024, we became the first international and Japanese team to reach the finals of the University Rover Challenge.',
      date: '2024-06-15',
      imageUrl: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-462x174_webp_eeddf8f4-d769-4e9a-968b-9f9551bda5d7.webp',
      imageAlt: 'KARURA at URC Finals',
      category: 'Achievement',
      link: '/news/urc-finals-2024',
    },
    {
      id: '2',
      title: 'Preparing for URC 2025: Our Winning Strategy',
      description: 'The team is in the final stages of System Acceptance Review for our 2025 rover.',
      date: '2025-01-20',
      imageUrl: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
      imageAlt: 'KARURA 2025 rover preparation',
      category: 'Competition',
      link: '/news/urc-2025-preparation',
    },
    {
      id: '3',
      title: 'New Science Mission Capabilities',
      description: 'Our science department has developed advanced systems using high-resolution cameras.',
      date: '2025-01-10',
      imageUrl: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
      imageAlt: 'KARURA science equipment',
      category: 'Update',
    },
    {
      id: '4',
      title: 'International Collaboration: Japan & Texas A&M',
      description: 'KARURA unites 60 students from Texas A&M and universities across Japan.',
      date: '2024-12-01',
      imageUrl: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
      imageAlt: 'KARURA international team',
      category: 'Team',
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroWithRover />
      
      {/* Added more vertical spacing with py-32 */}
      <div className="py-16"></div>
      
      {/* Team Introduction Section */}
      <TeamIntroduction />
      
      {/* Added more vertical spacing */}
      <div className="py-16"></div>
      
      {/* Rover History Section */}
      <RoverHistory />
      
      {/* Added more vertical spacing */}
      <div className="py-16"></div>
      
      {/* Departments Section with increased padding */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Our Departments
            </h2>
            <div className="w-16 h-1 bg-mars-red mx-auto"></div>
          </div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
              {departments.map((dept) => (
                <DepartmentCard key={dept.department} {...dept} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Added more vertical spacing */}
      <div className="py-16"></div>
      
      {/* News Section */}
      <NewsGrid newsItems={newsItems} />
      
      {/* Added more vertical spacing */}
      <div className="py-16"></div>
      
      {/* Sponsors Carousel Section */}
      <SponsorsCarousel sponsors={sponsors} />
      
      {/* Added more vertical spacing before footer */}
      <div className="py-16"></div>
      
      <Footer />
    </main>
  );
}

// Hero Section
function HeroWithRover() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-30">
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
          <h1 className="text-7xl md:text-9xl font-bold text-charcoal mb-8 tracking-tight">
            KARURA
          </h1>
          
          <div className="w-24 h-1 bg-mars-red mb-10"></div>
          
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-light max-w-4xl">
            International Mars Rover Development
          </p>
          
          <p className="text-lg text-gray-600 mb-16 max-w-3xl leading-relaxed">
            We are an international student-led initiative based in Japan and the U.S. 
            working to develop a Mars rover and further the development of space exploration.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/about"
              className="px-10 py-5 bg-charcoal text-white font-medium hover:bg-mars-red transition-colors duration-300 text-center"
            >
              Learn More
            </a>
            <a
              href="/support"
              className="px-10 py-5 border-2 border-charcoal text-charcoal font-medium hover:border-mars-red hover:text-mars-red transition-colors duration-300 text-center"
            >
              Support Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Team Introduction
function TeamIntroduction() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Who We Are
          </h2>
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

              <a
                href="/about"
                className="inline-flex items-center text-charcoal hover:text-mars-red font-medium transition-colors"
              >
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
              <Image
                src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png"
                alt="KARURA Team"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Rover History
function RoverHistory() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Our Journey
          </h2>
          <div className="w-16 h-1 bg-mars-red mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Three years of innovation, dedication, and groundbreaking achievements in Mars rover development.
          </p>
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
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={`relative h-96 w-full ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Image
                    src={rover.image}
                    alt={rover.name}
                    fill
                    className="object-cover rounded-lg shadow-xl"
                  />
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="inline-block px-4 py-1 bg-mars-red text-white text-sm font-bold mb-6">
                    {rover.year}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                    {rover.name}
                  </h3>
                  
                  <p className="text-xl text-mars-red font-semibold mb-6">
                    {rover.achievement}
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {rover.description}
                  </p>

                  <a
                    href={`/rover/${rover.year}`}
                    className="inline-flex items-center text-charcoal hover:text-mars-red font-medium transition-colors"
                  >
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

// Sponsors Carousel Component
function SponsorsCarousel({ sponsors }: { sponsors: Array<{ id: string; name: string; logo: string }> }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Double the sponsors array for infinite loop effect
  const extendedSponsors = [...sponsors, ...sponsors];
  const sponsorsPerView = 6;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        // Reset to 0 when we've scrolled through the first set
        return next >= sponsors.length ? 0 : next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, sponsors.length]);

  return (
    <section className="py-32 bg-white border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Our Sponsors
          </h2>
          <div className="w-16 h-1 bg-mars-red mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thank you to our valued partners who make our mission possible.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <motion.div
            className="flex gap-8"
            animate={{
              x: `-${(currentIndex * 100) / sponsorsPerView}%`,
            }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
            }}
            style={{
              width: `${(extendedSponsors.length * 100) / sponsorsPerView}%`,
            }}
          >
            {extendedSponsors.map((sponsor, index) => (
              <div
                key={`${sponsor.id}-${index}`}
                className="flex-shrink-0"
                style={{ width: `${100 / extendedSponsors.length}%` }}
              >
                <div className="relative h-32 bg-gray-50 border border-gray-200 rounded-lg p-6 flex items-center justify-center hover:border-mars-red transition-colors duration-300 mx-2">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-4 filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {sponsors.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-mars-red w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <a
            href="/sponsors"
            className="inline-flex items-center px-10 py-4 border-2 border-charcoal text-charcoal font-medium hover:border-mars-red hover:text-mars-red transition-colors duration-300"
          >
            View All Sponsors
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}