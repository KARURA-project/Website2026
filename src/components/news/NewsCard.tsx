import Image from 'next/image';
import Link from 'next/link';
import type { NewsItem } from '@/types';

export type { NewsItem };

interface NewsCardProps {
  news: NewsItem;
  featured?: boolean;
}

export default function NewsCard({ news, featured = false }: NewsCardProps) {
  const categoryColors: Record<NonNullable<NewsItem['category']>, string> = {
    Competition: 'bg-red-500',
    Team: 'bg-blue-500',
    Achievement: 'bg-yellow-500',
    Update: 'bg-green-500',
    Sponsor: 'bg-purple-500',
  };

  const CardContent = (
    <article
      className={`group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? 'h-96' : 'h-56'}`}>
        <Image
          src={news.imageUrl}
          alt={news.imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
        />
        {news.category && (
          <div className="absolute left-4 top-4">
            <span className={`${categoryColors[news.category]} rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg`}>
              {news.category}
            </span>
          </div>
        )}
      </div>

      <div className={`p-6 ${featured ? 'md:p-8' : ''}`}>
        <time className="text-sm text-gray-500" dateTime={news.date}>
          {new Date(news.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>

        <h3 className={`mt-2 font-bold text-charcoal transition-colors group-hover:text-mars-red ${
          featured ? 'text-2xl md:text-3xl' : 'text-xl'
        }`}>
          {news.title}
        </h3>

        <p className={`mt-3 text-gray-600 ${featured ? 'text-base md:text-lg' : 'text-sm line-clamp-3'}`}>
          {news.description}
        </p>

        {news.link && (
          <div className="mt-4 flex items-center text-sm font-semibold text-mars-red transition-colors hover:text-deep-red">
            Read More
            <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </article>
  );

  if (news.link) {
    return <Link href={news.link} className="block">{CardContent}</Link>;
  }

  return CardContent;
}
