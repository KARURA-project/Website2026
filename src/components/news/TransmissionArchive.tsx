import Link from 'next/link';
import { Transmission } from '@/data/transmissions';

export default function TransmissionArchive({ items }: { items: Transmission[] }) {
  return (
    <section className="py-12 bg-[#FAFAFA]">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it) => (
            <article key={it.id} className="border border-[#0A0A0A]/8 p-6 rounded-lg bg-white">
              <h3 className="font-display font-bold text-lg mb-2">{it.title}</h3>
              <p className="text-sm text-[#0A0A0A]/60 mb-4">{it.description}</p>
              <div className="flex items-center justify-between">
                <div className="font-mono text-xs text-[#0A0A0A]/40">
                  {new Date(it.date).toLocaleDateString()}
                </div>
                <Link href={`/news/${it.id}`} className="text-sm text-[#E63946] font-medium">
                  Read
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}