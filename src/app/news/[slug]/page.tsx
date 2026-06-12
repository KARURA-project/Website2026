import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TransmissionHero from '@/components/TransmissionHero';
import transmissions from '@/data/transmissions';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return transmissions.map((item) => ({
    slug: item.id,
  }));
}

export default function TransmissionPage({
  params,
}: {
  params: { slug: string };
}) {
  const transmission = transmissions.find(
    (item) => item.id === params.slug
  );

  if (!transmission) {
    notFound();
  }

  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <Header />

      <TransmissionHero item={transmission} />

      <section className="pb-24">
        <div className="max-w-[900px] mx-auto px-8">

          <div className="flex flex-wrap gap-2 mb-8">
            {transmission.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-2 border border-[#0A0A0A]/10 font-mono text-[10px] tracking-[0.15em] uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <article
            className="prose prose-neutral max-w-none"
            dangerouslySetInnerHTML={{
              __html: transmission.content,
            }}
          />

        </div>
      </section>

      <Footer />
    </main>
  );
}