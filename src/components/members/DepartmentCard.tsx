import Link from 'next/link';
import { useMessages, useTranslations } from 'next-intl';
import { ArrowIcon } from '@/components/ui';
import type { Department } from '@/data/departments';

export default function DepartmentCard({ department }: { department: Department }) {
  const t = useTranslations('home.departments');
  const text = useMessages().departments[department.id];

  return (
    <Link
      href={`/members#${department.id}`}
      className="group flex flex-col p-8 lg:p-10 h-full hover:bg-white transition-colors duration-200"
    >
      <div className="font-mono text-[8px] tracking-[0.22em] uppercase text-ink/25 mb-6">{t('cardLabel')}</div>
      <h3 className="font-display text-xl font-bold text-ink leading-tight mb-3">{text.name}</h3>
      <p className="text-ink/50 text-sm leading-relaxed flex-1">{text.summary}</p>
      <div className="mt-8 pt-5 border-t border-ink/8 flex items-center justify-between">
        <div>
          <div className="font-mono text-xl font-bold text-ink leading-none">{department.members}</div>
          <div className="font-mono text-[8px] tracking-[0.18em] uppercase text-ink/25 mt-1">{t('membersLabel')}</div>
        </div>
        <ArrowIcon className="w-4 h-4 text-ink/20 group-hover:text-ink transition-colors" strokeWidth={1.5} />
      </div>
    </Link>
  );
}
