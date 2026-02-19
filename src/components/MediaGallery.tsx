'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  title: string;
  date: string;
  category: string;
}

interface MediaGalleryProps {
  items: MediaItem[];
}

export default function MediaGallery({ items }: MediaGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(items.map(item => item.category)))];
  const filteredItems = filter === 'All' 
    ? items 
    : items.filter(item => item.category === filter);

  return (
    <div className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === category
                  ? 'bg-mars-red text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedItem(item)}
              className="relative aspect-square cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-bold text-sm">{item.title}</h4>
                  <p className="text-white/80 text-xs">{item.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 text-white hover:text-mars-red transition-colors"
              >
                <FiX size={32} />
              </button>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full"
              >
                <div className="relative aspect-video">
                  {selectedItem.type === 'image' ? (
                    <Image
                      src={selectedItem.src}
                      alt={selectedItem.title}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <video controls className="w-full h-full">
                      <source src={selectedItem.src} type="video/mp4" />
                    </video>
                  )}
                </div>
                <div className="text-white mt-4">
                  <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
                  <p className="text-gray-400">{selectedItem.date}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}