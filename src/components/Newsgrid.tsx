import NewsCard, { NewsItem } from './NewsCard';

interface NewsGridProps {
  newsItems: NewsItem[];
  title?: string;
  subtitle?: string;
}

export default function NewsGrid({ newsItems, title = 'Latest News & Updates', subtitle }: NewsGridProps) {
  if (newsItems.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500">No news items available.</p>
        </div>
      </section>
    );
  }

  const [featuredNews, ...otherNews] = newsItems;

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle}</p>}
        </div>

        {/* News Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured News - Takes up more space */}
          {featuredNews && <NewsCard news={featuredNews} featured />}

          {/* Other News Items */}
          {otherNews.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </div>
    </section>
  );
}