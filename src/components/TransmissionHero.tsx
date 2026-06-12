import { Transmission } from '@/data/transmissions';

export default function TransmissionHero({ item }: { item: Transmission }) {
  return (
    <section className="py-12">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-sm font-mono text-[#0A0A0A]/40 mb-3">Mission Archive</div>
        <h1 className="font-display text-4xl font-bold mb-4">{item.title}</h1>
        <div className="text-sm text-[#0A0A0A]/60 mb-6">{new Date(item.date).toLocaleDateString()}</div>
        <p className="max-w-[680px] text-sm leading-relaxed text-[#0A0A0A]/70">{item.description}</p>
      </div>
    </section>
  );
}
