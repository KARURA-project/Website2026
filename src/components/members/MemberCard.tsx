import React from 'react';

interface MemberCardProps {
  avatarSrc?: string;
  name: string;
  role: string;
  department: string;
  university?: string;
  country?: 'JP' | 'US';
  bio?: string;
}

export default function MemberCard({
  avatarSrc,
  name,
  role,
  department,
  university,
  country,
  bio,
}: MemberCardProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="border border-[#0A0A0A]/10 bg-[#FAFAFA] flex flex-col group hover:border-[#0A0A0A]/30 transition-colors duration-200">
      {/* Avatar block */}
      <div className="relative w-full aspect-square bg-[#F0F0F0] overflow-hidden">
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt={name}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-mono text-3xl font-bold text-[#0A0A0A]/20 select-none">
              {initials}
            </span>
          </div>
        )}
      </div>

      {/* Info block */}
      <div className="p-5 flex flex-col flex-1 border-t border-[#0A0A0A]/8">
        <div className="font-mono text-[8px] tracking-[0.18em] uppercase text-[#0A0A0A]/30 mb-2">
          {department}
          {country && (
            <span className="ml-2 text-[#0A0A0A]/20">· {country}</span>
          )}
        </div>
        <h4 className="font-display text-sm font-bold text-[#0A0A0A] leading-snug mb-1">
          {name}
        </h4>
        <p className="font-mono text-[9px] tracking-[0.1em] text-[#0A0A0A]/45 mb-3">
          {role}
        </p>
        {university && (
          <p className="font-mono text-[9px] text-[#0A0A0A]/30 mt-auto pt-3 border-t border-[#0A0A0A]/6">
            {university}
          </p>
        )}
        {bio && !university && (
          <p className="text-[#0A0A0A]/45 text-[10px] leading-relaxed mt-auto pt-3 border-t border-[#0A0A0A]/6 line-clamp-2">
            {bio}
          </p>
        )}
      </div>
    </div>
  );
}