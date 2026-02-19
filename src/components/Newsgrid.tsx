'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { NewsItem } from './NewsCard';

interface NewsGridProps {
  newsItems: NewsItem[];
}

export default function NewsGrid({ newsItems }: NewsGridProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Simple section header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Latest Updates
          </h2>
          <div className="w-16 h-1 bg-mars-red"></div>
        </div>

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={item.link || '#'} className="group block">
                {/* Image */}
                <div className="relative h-64 mb-6 overflow-hidden bg-gray-100">
                  <Image
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Date */}
                <time className="text-sm text-gray-400 font-mono">
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                </time>

                {/* Title */}
                <h3 className="text-xl font-bold text-charcoal mt-3 mb-2 group-hover:text-mars-red transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 line-clamp-2">
                  {item.description}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <Link
            href="/news"
            className="inline-flex items-center text-charcoal hover:text-mars-red font-medium transition-colors"
          >
            View All News
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}