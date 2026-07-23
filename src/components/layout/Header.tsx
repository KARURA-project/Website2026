'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/rover', label: 'Rover' },
    { href: '/members', label: 'Members' },
    // { href: '/news', label: 'News' }, // News & Transmissions disabled site-wide
    { href: '/join', label: 'Join' },
    { href: '/support', label: 'Support' },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#0A0A0A]/8 z-50 transition-all duration-300">
        <div className="max-w-[1400px] h-full mx-auto px-8 md:px-16 lg:px-20 xl:px-28 flex items-center justify-between">

          {/* KARURA LOGO */}
          <Link
            href="/"
            className="flex items-center transition-opacity duration-200 hover:opacity-80"
            aria-label="KARURA Home"
            onClick={closeMenu}
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

          {/* MOBILE BURGER */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px bg-[#0A0A0A] origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15 }}
              className="block w-5 h-px bg-[#0A0A0A] origin-center"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px bg-[#0A0A0A] origin-center"
            />
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-[#0A0A0A]/40 z-40 md:hidden"
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.nav
              key="drawer"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-0 right-0 z-40 md:hidden bg-[#FAFAFA] border-b border-[#0A0A0A]/8"
            >
              <div className="divide-y divide-[#0A0A0A]/8">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`flex items-center justify-between px-8 py-5 font-display text-sm tracking-wider uppercase font-medium transition-colors duration-200 ${
                          isActive
                            ? 'text-[#E63946]'
                            : 'text-[#0A0A0A]/70 hover:text-[#0A0A0A]'
                        }`}
                      >
                        {link.label}
                        {isActive && (
                          <span className="w-4 h-px bg-[#E63946]" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}