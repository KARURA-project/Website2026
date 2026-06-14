import Image from 'next/image';
import { Transmission } from '@/data/transmissions';

export default function TransmissionHero({
  item,
}: {
  item: Transmission;
}) {
  return (
    <section className="pt-32 pb-16 bg-[#FAFAFA]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

        <div className="grid lg:grid-cols-[1fr_420px] border border-[#0A0A0A]/8">

          {/* LEFT PANEL */}
          <div className="p-10 lg:p-14 flex flex-col justify-between min-h-[420px]">

            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#0A0A0A]/40">
                  Mission Archive
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-[#0A0A0A] mb-8">
                {item.title}
              </h1>

              <p className="max-w-[720px] text-[#0A0A0A]/65 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-[#0A0A0A]/8">

              <div>
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30 mb-2">
                  Published
                </div>
                <div className="font-mono text-xs text-[#0A0A0A]/70">
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>

              {item.readTime && (
                <div>
                  <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30 mb-2">
                    Read Time
                  </div>
                  <div className="font-mono text-xs text-[#0A0A0A]/70">
                    {item.readTime}
                  </div>
                </div>
              )}

              {item.campaign && (
                <div>
                  <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30 mb-2">
                    Campaign
                  </div>
                  <div className="font-mono text-xs text-[#0A0A0A]/70">
                    {item.campaign}
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="relative border-l border-[#0A0A0A]/8 min-h-[420px]">
            <Image
              src={item.imageUrl}
              alt={item.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </div>

        </div>

      </div>
    </section>
  );
}