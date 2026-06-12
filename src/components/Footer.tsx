'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] border-t border-[#0A0A0A]/10 py-16">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12 items-start pb-12 border-b border-[#0A0A0A]/8">
          
          <div>
            <span className="font-display font-bold text-xl tracking-wider text-[#0A0A0A] block mb-4">
              KARURA<span className="text-[#E63946]">_</span>
            </span>
            <p className="text-[#0A0A0A]/40 text-xs max-w-sm leading-relaxed font-mono">
              Cross-Pacific Aerospace Engineering Node. Connecting Texas A&M University and 14+ technical cohorts across Japan.
            </p>
          </div>

          <div>
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#0A0A0A]/30 uppercase block mb-4">Nav Stack</span>
            <div className="flex flex-col gap-2.5">
              <Link href="/about" className="text-xs text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors">About Mission</Link>
              <Link href="/rover" className="text-xs text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors">Telemetry & Hardware</Link>
              <Link href="/members" className="text-xs text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors">Crew Roster</Link>
            </div>
          </div>

          <div>
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#0A0A0A]/30 uppercase block mb-4">Gateways</span>
            <div className="flex flex-col gap-2.5">
              <Link href="/join" className="text-xs text-[#E63946] font-semibold hover:underline">Recruitment Funnel 2026</Link>
              <Link href="/support" className="text-xs text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors">Sponsorship Matrix</Link>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] text-[#0A0A0A]/30 tracking-widest uppercase">
          <span>© 2026 KARURA PROJECT. ALL HARDWARE DEPLOYED.</span>
          <span>STATION: COLLEGE STATION, TX / TOKYO, JP</span>
        </div>
      </div>
    </footer>
  );
}