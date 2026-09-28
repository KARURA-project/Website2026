/** 'Ethan Do' -> 'ED' */
export const initials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

interface MemberCardProps {
  avatarSrc?: string;
  name: string;
  role: string;
  department: string;
  university?: string;
  country?: 'JP' | 'US';
  bio?: string;
}

export default function MemberCard({ avatarSrc, name, role, department, university, country, bio }: MemberCardProps) {
  const footnote = 'mt-auto pt-3 border-t border-ink/6';

  return (
    <div className="border border-ink/10 bg-canvas flex flex-col group hover:border-ink/30 transition-colors duration-200">
      <div className="relative w-full aspect-square bg-mist overflow-hidden">
        {avatarSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatarSrc} alt={name} className="w-full h-full object-cover object-top" loading="lazy" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-mono text-3xl font-bold text-ink/20 select-none">{initials(name)}</span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1 border-t border-ink/8">
        <div className="font-mono text-[8px] tracking-[0.18em] uppercase text-ink/30 mb-2">
          {department}
          {country && <span className="ml-2 text-ink/20">· {country}</span>}
        </div>
        <h4 className="font-display text-sm font-bold text-ink leading-snug mb-1">{name}</h4>
        <p className="font-mono text-[9px] tracking-[0.1em] text-ink/45 mb-3">{role}</p>
        {university ? (
          <p className={`font-mono text-[9px] text-ink/30 ${footnote}`}>{university}</p>
        ) : (
          bio && <p className={`text-ink/45 text-[10px] leading-relaxed line-clamp-2 ${footnote}`}>{bio}</p>
        )}
      </div>
    </div>
  );
}
