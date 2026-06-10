'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { NewsItem } from '@/components/NewsCard';

const allNews: (NewsItem & { content: string; tags: string[] })[] = [
  {
    id: '1',
    title: 'KARURA Makes History as First Japanese Team in URC Finals',
    description:
      'In 2024, we became the first international and Japanese team to reach the finals of the University Rover Challenge — a milestone that redefined what student teams can achieve.',
    content:
      'After years of development and countless hours of engineering work, KARURA achieved the unprecedented. Competing against top universities from around the world, our team navigated every challenge the Utah desert could offer and punched our ticket to the URC Finals — something no Japanese or international team had ever done before.',
    date: '2024-06-15',
    imageUrl:
      'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-462x174_webp_eeddf8f4-d769-4e9a-968b-9f9551bda5d7.webp',
    imageAlt: 'KARURA at URC Finals',
    category: 'Achievement',
    link: '/news/urc-finals-2024',
    tags: ['URC', 'Competition', 'History'],
  },
  {
    id: '2',
    title: 'Preparing for URC 2025: Our Winning Strategy',
    description:
      'The team is deep in System Acceptance Review for our 2025 rover, with major upgrades to autonomy, science payload, and mobility.',
    content:
      'Building on the historic success of KARURA III, our engineering teams have been working around the clock to push the boundaries even further. This year\'s rover incorporates feedback from every task at URC 2024, focusing on improved terrain handling and a more robust science mission platform.',
    date: '2025-01-20',
    imageUrl:
      'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
    imageAlt: 'KARURA 2025 rover preparation',
    category: 'Competition',
    link: '/news/urc-2025-preparation',
    tags: ['URC 2025', 'Development', 'Engineering'],
  },
  {
    id: '3',
    title: 'New Science Mission Capabilities Unveiled',
    description:
      'Our science department has developed advanced astrobiology detection systems using high-resolution spectrometers and improved sample collection protocols.',
    content:
      'The Science Department has made significant strides in expanding KARURA\'s life-detection capabilities. The new instrument suite includes a portable spectrometer, improved soil sampling tools, and an onboard analysis protocol modeled after NASA\'s Mars Science Laboratory procedures.',
    date: '2025-01-10',
    imageUrl:
      'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
    imageAlt: 'KARURA science equipment',
    category: 'Update',
    link: '/news/science-capabilities',
    tags: ['Science', 'Research', 'Astrobiology'],
  },
  {
    id: '4',
    title: 'International Collaboration: Japan & Texas A&M',
    description:
      'KARURA unites over 60 students from Texas A&M and universities across Japan, creating one of the most diverse rover teams in URC history.',
    content:
      'What started as an idea to bridge engineering cultures has grown into a 60-person international team. Students from Tokyo, Kyoto, Tohoku, Osaka, and Shinshu collaborate daily with Aggies from College Station — sharing code, designs, and ideas across time zones.',
    date: '2024-12-01',
    imageUrl:
      'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
    imageAlt: 'KARURA international team',
    category: 'Team',
    link: '/news/international-collaboration',
    tags: ['Team', 'Japan', 'Texas A&M'],
  },
  {
    id: '5',
    title: 'Software Department Achieves Fully Autonomous Navigation',
    description:
      'After months of testing, KARURA\'s autonomous navigation stack successfully completed a 500-meter run in a simulated Mars terrain environment.',
    content:
      'The Software Department\'s autonomy team hit a major milestone — KARURA can now navigate rough terrain, detect and avoid obstacles, and reach GPS waypoints without any human input. This capability is critical for the URC Autonomous Navigation task.',
    date: '2024-11-14',
    imageUrl:
      'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
    imageAlt: 'KARURA autonomous navigation',
    category: 'Update',
    link: '/news/autonomous-navigation',
    tags: ['Software', 'Autonomy', 'AI'],
  },
  {
    id: '6',
    title: 'New Sponsorship Partnership with OptoSigma',
    description:
      'We are proud to announce OptoSigma as a new technical sponsor, providing optical components for our science payload.',
    content:
      'OptoSigma Corporation has joined KARURA as a technical partner, contributing precision optical components that will be integrated into our science station. Their support significantly upgrades our imaging and spectral analysis capabilities for URC 2025.',
    date: '2024-10-05',
    imageUrl:
      'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
    imageAlt: 'OptoSigma sponsorship announcement',
    category: 'Sponsor',
    link: '/news/optosigma-partnership',
    tags: ['Sponsor', 'Partnership'],
  },
];

const categories = ['All', 'Achievement', 'Competition', 'Update', 'Team', 'Sponsor'];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? allNews
      : allNews.filter((n) => n.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-white overflow-hidden pt-24 md:pt-32">
        <div className="absolute inset-0 opacity-100">
          <Image
            src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png"
            alt="KARURA News"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20 py-32 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-bold text-charcoal mb-8 tracking-tight">News</h1>
            <div className="w-24 h-1 bg-mars-red mx-auto mb-10" />
            <p className="text-xl md:text-2xl text-gray-700 max-w-12xl mx-auto leading-relaxed">
              Updates, milestones, and stories from the KARURA team
            </p>
          </motion.div>
        </div>
      </section>

      <div className="py-16" />

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-20">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-mars-red text-white'
                    : 'bg-white text-charcoal border border-gray-300 hover:border-mars-red hover:text-mars-red'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="py-16" />

      {/* Featured Article - Wrapped in flex justify-center */}
      {featured && (
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Featured Story</h2>
              <div className="w-16 h-1 bg-mars-red mx-auto" />
            </div>

            <div className="flex justify-center">
              <Link href={featured.link || '#'} className="w-full max-w-6xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid lg:grid-cols-2 gap-16 items-center group cursor-pointer"
                >
                  <div className="relative h-[420px] w-full overflow-hidden rounded-lg shadow-xl">
                    <Image
                      src={featured.imageUrl}
                      alt={featured.imageAlt || featured.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-4 py-1 bg-mars-red text-white text-sm font-bold">
                      {featured.category}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-4">
                      {new Date(featured.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 group-hover:text-mars-red transition-colors">
                      {featured.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">{featured.description}</p>
                    <p className="text-gray-500 leading-relaxed mb-8">{featured.content}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featured.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 text-slate-gray text-xs font-semibold rounded-full uppercase tracking-wide">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center text-charcoal group-hover:text-mars-red font-medium transition-colors">
                      Read More
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </section>
      )}

      <div className="py-16" />

      {/* Article Grid - Wrapped in flex justify-center */}
      {rest.length > 0 && (
        <section className="py-32 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">More Stories</h2>
              <div className="w-16 h-1 bg-mars-red mx-auto" />
            </div>

            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
                {rest.map((article, index) => (
                  <Link href={article.link || '#'} key={article.id}>
                    <motion.article
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-mars-red/50 hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col"
                    >
                      <div className="relative h-56 w-full overflow-hidden">
                        <Image
                          src={article.imageUrl}
                          alt={article.imageAlt || article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 px-3 py-1 bg-mars-red text-white text-xs font-bold">
                          {article.category}
                        </div>
                      </div>

                      <div className="p-8 flex flex-col flex-1">
                        <p className="text-sm text-gray-400 mb-3">
                          {new Date(article.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                        <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-mars-red transition-colors leading-snug">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed flex-1">{article.description}</p>
                        <div className="flex flex-wrap gap-2 mt-6">
                          {article.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-0.5 bg-gray-100 text-slate-gray text-xs font-semibold rounded-full uppercase tracking-wide">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="py-16" />

      <Footer />
    </main>
  );
}