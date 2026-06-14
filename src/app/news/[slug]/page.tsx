import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TransmissionHero from '@/components/news/TransmissionHero';
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