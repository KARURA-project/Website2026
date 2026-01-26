import Image from 'next/image';

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

interface SponsorsSectionProps {
  sponsors: Sponsor[];
  title?: string;
  subtitle?: string;
}

export default function SponsorsSection({ 
  sponsors, 
  title = 'Our Sponsors',
  subtitle = 'Thank you to our amazing sponsors who make our mission possible'
}: SponsorsSectionProps) {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual Sponsor Card Component
function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const CardContent = (
    <div className="group relative h-28 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex items-center justify-center border border-gray-100">
      <div className="relative w-full h-full">
        <Image
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          fill
          className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
        />
      </div>
    </div>
  );

  if (sponsor.website) {
    return (
      <a
        href={sponsor.website}
        target="_blank"
        rel="noopener noreferrer"
        className="block transform hover:scale-105 transition-transform duration-200"
        aria-label={`Visit ${sponsor.name} website`}
      >
        {CardContent}
      </a>
    );
  }

  return (
    <div className="transform hover:scale-105 transition-transform duration-200">
      {CardContent}
    </div>
  );
}