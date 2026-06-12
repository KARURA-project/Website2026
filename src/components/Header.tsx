'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/rover', label: 'Rover' },
    { href: '/members', label: 'Members' },
    { href: '/news', label: 'News' },
    { href: '/join', label: 'Join' },
    { href: '/support', label: 'Support' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#0A0A0A]/8 z-50 transition-all duration-300">
      <div className="max-w-[1400px] h-full mx-auto px-8 md:px-16 lg:px-20 xl:px-28 flex items-center justify-between">
        
        {/* KARURA LOGO ASSET HOME BUTTON */}
        <Link 
          href="/" 
          className="flex items-center transition-opacity duration-200 hover:opacity-80"
          aria-label="KARURA Home"
        >
          <Image 
            src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-462x174_webp_eeddf8f4-d769-4e9a-968b-9f9551bda5d7.webp"
            alt="KARURA Logo"
            width={116} 
            height={44}
            priority
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-xs tracking-wider uppercase font-medium transition-colors duration-200 ${
                  isActive ? 'text-[#E63946]' : 'text-[#0A0A0A]/60 hover:text-[#0A0A0A]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE ACTION TRIGGER */}
        <div className="md:hidden">
          <Link
            href="/join"
            className="font-mono text-[10px] tracking-widest uppercase bg-[#0A0A0A] text-white px-4 py-2"
          >
            JOIN
          </Link>
        </div>
      </div>
    </header>
  );
}