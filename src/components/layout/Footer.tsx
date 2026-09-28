import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui';
import { LOGO_URL } from '@/data/assets';

const columnLabel = 'font-mono text-[9px] tracking-[0.25em] text-ink/30 uppercase block mb-4';
const navLink = 'text-xs text-ink/60 hover:text-ink transition-colors';

export default function Footer() {
  const t = useTranslations('nav');
  const tFooter = useTranslations('footer');

  return (
    <footer className="bg-canvas border-t border-ink/10 py-16">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr] gap-12 items-start pb-12 border-b border-ink/8">
          <div>
            <Link href="/" className="inline-block mb-4 transition-opacity hover:opacity-70">
              <Image src={LOGO_URL} alt={tFooter('logoAlt')} width={116} height={44} className="h-9 w-auto object-contain" />
            </Link>
            <p className="text-ink/40 text-xs max-w-sm leading-relaxed font-mono">{tFooter('description')}</p>
          </div>

          <div>
            <span className={columnLabel}>{tFooter('navStackLabel')}</span>
            <div className="flex flex-col gap-2.5">
              <Link href="/about" className={navLink}>{t('about')}</Link>
              <Link href="/rover" className={navLink}>{t('rover')}</Link>
              <Link href="/members" className={navLink}>{tFooter('ourTeam')}</Link>
            </div>
          </div>

          <div>
            <span className={columnLabel}>{tFooter('gatewaysLabel')}</span>
            <div className="flex flex-col gap-2.5">
              <Link href="/join" className="text-xs text-mars-red font-semibold hover:underline">{tFooter('joinUs')}</Link>
              <Link href="/support" className={navLink}>{tFooter('supportUs')}</Link>
            </div>
          </div>

          <div>
            <span className={columnLabel}>{tFooter('nonprofitLabel')}</span>
            <div className="flex flex-col gap-1.5 font-mono text-[10px] text-ink/45 leading-relaxed">
              <span>{tFooter('organizationName')}</span>
              <span>{tFooter('addressLine1')}</span>
              <span>{tFooter('addressLine2')}</span>
              <span className="pt-2 text-ink/30">{tFooter('ein')}</span>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] text-ink/30 tracking-widest uppercase">
          <span>{tFooter('copyright')}</span>
          <span>{tFooter('stations')}</span>
        </div>
      </Container>
    </footer>
  );
}
