import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import TransmissionHero from '@/components/news/TransmissionHero';
import { transmissions } from '@/data/transmissions';

export function generateStaticParams() {
  return transmissions.map((item) => ({ slug: item.id }));
}

export default async function TransmissionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const transmission = transmissions.find((item) => item.id === slug);
  if (!transmission) notFound();

  // Article body lives in messages → news.articles.<id>.content; blank lines separate paragraphs.
  const { content } = (await getMessages()).news.articles[transmission.id];
  const paragraphs = content.split(/\n\s*\n/);

  return (
    <>
      <TransmissionHero item={transmission} />
      <section className="pb-24">
        <article className="max-w-[900px] mx-auto px-8 space-y-5 text-ink/70 leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>
      </section>
    </>
  );
}
