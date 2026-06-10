import React from 'react';

interface InfoCardProps {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  subtitle?: string;
  description: string;
  linkUrl?: string;
  linkText?: string;
  reverseLayout?: boolean;
}

/**
 * InfoCard component for flexible text and image box configurations.
 * Avoids page-specific constraints via flexible layout properties.
 */
export default function InfoCard({ 
  imageSrc, 
  imageAlt, 
  title, 
  subtitle, 
  description, 
  linkUrl, 
  linkText = "See Details",
  reverseLayout = false 
}: InfoCardProps) {
  return (
    <div className={`flex flex-col md:flex-row ${reverseLayout ? 'md:flex-row-reverse' : ''} gap-6 items-center p-6 bg-white text-charcoal border border-gray-200 rounded-xl shadow-md transition-all duration-300 hover:scale-[1.02] hover:border-mars-red/50`}>
      {imageSrc && (
        <div className="w-full md:w-1/2 overflow-hidden rounded-lg aspect-video md:aspect-square bg-gray-100">
          <img 
            src={imageSrc} 
            alt={imageAlt || title} 
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
      )}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-3">
        {subtitle && (
          <span className="text-xs font-semibold tracking-wider text-mars-red uppercase">
            {subtitle}
          </span>
        )}
        <h3 className="text-2xl font-bold tracking-tight text-charcoal">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600">
          {description}
        </p>
        {linkUrl && (
          <a 
            href={linkUrl} 
            className="inline-flex items-center text-sm font-medium text-mars-red hover:text-deep-red transition-colors pt-2 group"
          >
            {linkText}
            <svg 
              className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}