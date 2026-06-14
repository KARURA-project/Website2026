// src/components/DepartmentCard.tsx
import Link from 'next/link';

interface DepartmentCardProps {
  department: string;
  title: string;
  description: string;
  members: number;
}

export default function DepartmentCard({
  department,
  title,
  description,
  members,
}: DepartmentCardProps) {
  return (
    <Link
      href={`/members#${department}`}
      className="group flex flex-col p-8 lg:p-10 h-full hover:bg-white transition-colors duration-200"
    >
      <div className="font-mono text-[8px] tracking-[0.22em] uppercase text-[#0A0A0A]/25 mb-6">
        Department
      </div>
      <h3 className="font-display text-xl font-bold text-[#0A0A0A] leading-tight mb-3">
        {title}
      </h3>
      <p className="text-[#0A0A0A]/50 text-sm leading-relaxed flex-1">
        {description}
      </p>
      <div className="mt-8 pt-5 border-t border-[#0A0A0A]/8 flex items-center justify-between">
        <div>
          <div className="font-mono text-xl font-bold text-[#0A0A0A] leading-none">
            {members}
          </div>
          <div className="font-mono text-[8px] tracking-[0.18em] uppercase text-[#0A0A0A]/25 mt-1">
            members
          </div>
        </div>
        <svg
          className="w-4 h-4 text-[#0A0A0A]/20 group-hover:text-[#0A0A0A] transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
}