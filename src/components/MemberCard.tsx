import React from 'react';

interface SocialLink {
  platform: string;
  url: string;
}

interface MemberCardProps {
  avatarSrc?: string;
  name: string;
  role: string;
  department: string;
  bio?: string;
  socialLinks?: SocialLink[];
}

/**
 * MemberCard component optimized for departmental grids.
 */
export default function MemberCard({ 
  avatarSrc, 
  name, 
  role, 
  department, 
  bio, 
  socialLinks = [] 
}: MemberCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-5 bg-white border border-gray-200 rounded-xl shadow-md group hover:border-mars-red/50 transition-all">
      <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-mars-red transition-colors bg-gray-100">
        <img 
          src={avatarSrc || "/placeholder-avatar.png"} 
          alt={name} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <span className="px-2.5 py-0.5 mb-2 text-xs font-semibold bg-gray-100 text-slate-gray rounded-full uppercase tracking-wide">
        {department}
      </span>
      <h4 className="text-lg font-bold text-charcoal">{name}</h4>
      <p className="text-xs text-mars-red font-medium mb-2">{role}</p>
      {bio && (
        <p className="text-xs text-gray-600 line-clamp-3 mb-4 max-w-xs px-2">
          {bio}
        </p>
      )}
      {socialLinks.length > 0 && (
        <div className="flex space-x-3 mt-auto pt-2">
          {socialLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-gray hover:text-charcoal transition-colors"
              title={link.platform}
            >
              <span className="sr-only">{link.platform}</span>
              <span className="text-xs font-mono underline">{link.platform.substring(0,2).toUpperCase()}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}