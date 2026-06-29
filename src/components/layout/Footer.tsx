'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] border-t border-[#0A0A0A]/10 py-16">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12 items-start pb-12 border-b border-[#0A0A0A]/8">

          <div>
            <Link href="/" className="inline-block mb-4 transition-opacity hover:opacity-70">
              <Image
                src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-462x174_webp_eeddf8f4-d769-4e9a-968b-9f9551bda5d7.webp"
                alt="KARURA Logo"
                width={116}
                height={44}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-[#0A0A0A]/40 text-xs max-w-sm leading-relaxed font-mono">
              Cross-Pacific Engineering Organization. Connecting 30+ technical cohorts across the world.
            </p>
          </div>

          <div>
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#0A0A0A]/30 uppercase block mb-4">Nav Stack</span>
            <div className="flex flex-col gap-2.5">
              <Link href="/about" className="text-xs text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors">About</Link>
              <Link href="/rover" className="text-xs text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors">Rover</Link>
              <Link href="/members" className="text-xs text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors">Our Team</Link>
            </div>
          </div>

          <div>
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#0A0A0A]/30 uppercase block mb-4">Gateways</span>
            <div className="flex flex-col gap-2.5">
              <Link href="/join" className="text-xs text-[#E63946] font-semibold hover:underline">Join Us</Link>
              <Link href="/support" className="text-xs text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors">Support Us</Link>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] text-[#0A0A0A]/30 tracking-widest uppercase">
          <span>© 2026 KARURA PROJECT.</span>
          <span>STATION: COLLEGE STATION, TX / TOKYO, JP</span>
        </div>
      </div>
    </footer>
  );
}