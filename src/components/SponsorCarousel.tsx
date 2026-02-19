'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';

interface Sponsor {
  id: string;
  name: string;
  logo: string;
}

interface SponsorCarouselProps {
  sponsors: Sponsor[];
}

export default function SponsorCarousel({ sponsors }: SponsorCarouselProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-bluewood mb-8">
          Our Sponsors
        </h2>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {sponsors.map((sponsor) => (
            <SwiperSlide key={sponsor.id}>
              <div className="flex items-center justify-center p-4 bg-white rounded-lg h-24">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={150}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}