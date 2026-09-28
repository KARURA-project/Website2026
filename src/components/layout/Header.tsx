'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { Container } from '@/components/ui';
import { LOGO_URL } from '@/data/assets';

const localeButton =
  'font-mono text-[10px] tracking-[0.2em] uppercase border border-ink/15 px-3 py-1.5 text-ink/50 hover:text-ink hover:border-ink/30 transition-all duration-200 disabled:opacity-40';
const burgerLine = 'block w-5 h-px bg-ink origin-center';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const t = useTranslations('nav');
  const tFooter = useTranslations('footer');

  const navLinks = [
    { href: '/about', label: t('about') },
    { href: '/rover', label: t('rover') },
    { href: '/members', label: t('members') },
    // { href: '/news', label: t('news') }, // News & Transmissions disabled site-wide
    { href: '/join', label: t('join') },
    { href: '/support', label: t('support') },
  ];

  const closeMenu = () => setMenuOpen(false);

  // Locale lives in a cookie read by src/i18n.ts; refresh re-renders with the new messages.
  const toggleLocale = () => {
    document.cookie = `locale=${locale === 'en' ? 'ja' : 'en'}; path=/; max-age=31536000`;
    startTransition(() => router.refresh());
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-canvas/90 backdrop-blur-md border-b border-ink/8 z-50 transition-all duration-300">
        <Container className="h-full flex items-center justify-between">
          <Link href="/" className="flex items-center transition-opacity duration-200 hover:opacity-80" aria-label={t('homeLabel')} onClick={closeMenu}>
            <Image src={LOGO_URL} alt={tFooter('logoAlt')} width={116} height={44} priority className="h-9 w-auto object-contain" />
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-xs tracking-wider uppercase font-medium transition-colors duration-200 ${
                  pathname === link.href ? 'text-mars-red' : 'text-ink/60 hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button onClick={toggleLocale} disabled={isPending} className={localeButton}>
              {locale === 'en' ? 'JP' : 'EN'}
            </button>
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? t('closeMenu') : t('openMenu')}
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} className={burgerLine} />
            <motion.span animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.15 }} className={burgerLine} />
            <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} className={burgerLine} />
          </button>
        </Container>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-ink/40 z-40 md:hidden"
              onClick={closeMenu}
            />
            <motion.nav
              key="drawer"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-0 right-0 z-40 md:hidden bg-canvas border-b border-ink/8 divide-y divide-ink/8"
            >
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div key={link.href} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`flex items-center justify-between px-8 py-5 font-display text-sm tracking-wider uppercase font-medium transition-colors duration-200 ${
                        isActive ? 'text-mars-red' : 'text-ink/70 hover:text-ink'
                      }`}
                    >
                      {link.label}
                      {isActive && <span className="w-4 h-px bg-mars-red" />}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="px-8 py-5">
                <button onClick={() => { toggleLocale(); closeMenu(); }} disabled={isPending} className={localeButton}>
                  {locale === 'en' ? 'Switch to Japanese / 日本語' : 'Switch to English / 英語'}
                </button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
