import { useMessages, useTranslations } from 'next-intl';
import { Container, Eyebrow, Reveal, indexLabel } from '@/components/ui';
import MemberCard, { initials } from '@/components/members/MemberCard';
import { departments, type Department } from '@/data/departments';
import { orgStats } from '@/data/stats';
import type en from '../../../messages/en.json';

type Country = 'JP' | 'US';
type Messages = typeof en;

// Role, bio, university and location text: messages/*.json → members.founders.<key>
const founders: { key: keyof Messages['members']['founders']; name: string; country: Country }[] = [
  { key: 'hirokuni', name: 'Hirokuni Kakiuchi', country: 'US' },
  { key: 'haruto', name: 'Haruto Seto', country: 'JP' },
];

// `role` is a key into messages → members.roles. University defaults to Texas A&M (members.defaultUniversity)
// and country to US; set them on a member to override.
type Member = { name: string; role: keyof Messages['members']['roles']; university?: string; country?: Country };

const roster: Record<Department['id'], Member[]> = {
  hardware: [
    { name: 'Ellie Person', role: 'coManagerHardware' },
    { name: 'MJ Seelke', role: 'hardwareLead' },
    { name: 'Carter Boland', role: 'droneLead' },
    { name: 'Cindy Long', role: 'hardwareMember' },
    { name: 'Harry Phan', role: 'hardwareMember' },
    { name: 'Sean Birdwell', role: 'hardwareMember' },
    { name: 'Supreet Sudharshana', role: 'hardwareMember' },
    { name: 'Kevin Shu', role: 'hardwareMember' },
    { name: 'Hannah Liu', role: 'hardwareMember' },
    { name: 'Aidan Salazar', role: 'hardwareMember' },
    { name: 'Will Mascorro', role: 'hardwareMember' },
    { name: 'Kevin Progatsky', role: 'hardwareMember' },
    { name: 'Karthik Somashekhar', role: 'hardwareMember' },
  ],
  electrical: [
    { name: 'Nicolas Medina Deleon', role: 'electricalDirector' },
    { name: 'Atharva Agarwal', role: 'powerDistributionMember' },
    { name: 'Siddharth Rajasekaran', role: 'armEmbeddedMember' },
    { name: 'Amulya Bissaria', role: 'hardwareMember' },
    { name: 'Zayan Alam', role: 'hardwareMember' },
    { name: 'Ishaan Khosla', role: 'hardwareMember' },
    { name: 'Amogh Kaji', role: 'hardwareMember' },
    { name: 'Victor Bao', role: 'hardwareMember' },
    { name: 'Rayyan Arshad', role: 'hardwareMember' },
  ],
  software: [
    { name: 'Zachary Renkema', role: 'coManagerSoftware' },
    { name: 'Ethan Do', role: 'controlStationAiLead' },
    { name: 'Pranav Kalaiselvan', role: 'armSoftwareLead' },
    { name: 'Ikaika Mendoza', role: 'droneScienceCommsLead' },
    { name: 'Matthew Culver', role: 'navMobilityLead' },
    { name: 'Gauri Agrawal', role: 'softwareMember' },
    { name: 'Ryo Kato', role: 'softwareMember' },
    { name: 'Dunsin Komolafe', role: 'softwareMember' },
    { name: 'Yashvi Mehta', role: 'softwareMember' },
    { name: 'Rhea Goyal', role: 'softwareMember' },
    { name: 'Muhammad Ibrahim Khurram', role: 'softwareMember' },
    { name: 'Anvay Todkar', role: 'softwareMember' },
    { name: 'Aidan Morris', role: 'softwareMember' },
  ],
  science: [
    { name: 'Shakti Sridhar', role: 'lifeSciencesDirector' },
    { name: 'Camille Cordell', role: 'microscopyLead' },
    { name: 'Alex Jonasz', role: 'geologyLead' },
    { name: 'Hana Blair', role: 'microscopyMember' },
    { name: 'Jyotsana Nagarapu', role: 'geologyMember' },
    { name: 'Ruksana Faizal', role: 'geologyMember' },
  ],
  business: [
    { name: 'Brady Wood', role: 'businessDirector' },
    { name: 'Fareed Badamosi', role: 'financeLead' },
    { name: 'Victoria Corral', role: 'marketingLead' },
    { name: 'Jacob Hanel', role: 'sponsorshipLead' },
    { name: 'Nick Evans', role: 'engagementLead' },
    { name: 'Tati Meza', role: 'graphicDesigner' },
    { name: 'Tiago Silva', role: 'businessMember' },
    { name: 'Evan Haack', role: 'businessMember' },
  ],
};

const stats = orgStats.filter((s) => s.key !== 'competitionCycles');

const smallLabel = 'font-mono text-[8px] tracking-[0.18em] uppercase text-ink/20';

export default function MembersPage() {
  const t = useTranslations('members');
  const tStats = useTranslations('stats');
  const messages = useMessages();

  return (
    <>
      <section className="pt-36 pb-16 border-b border-ink/8">
        <Container>
          <Reveal onMount y={20} duration={0.5}>
            <Eyebrow className="mb-6">{t('hero.eyebrow')}</Eyebrow>
          </Reveal>

          <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-end">
            <Reveal onMount y={24} duration={0.6} delay={0.08}>
              <h1 className="font-display text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.92] tracking-tight text-ink mb-6">
                {t('hero.titleLine1')}<br />
                {t('hero.titleLine2')}<br />
                <span className="text-ink/20">{t('hero.titleLine3')}</span>
              </h1>
              <p className="text-ink/50 text-base leading-relaxed max-w-[480px]">{t('hero.description')}</p>
            </Reveal>

            <Reveal onMount duration={0.5} delay={0.2} className="grid grid-cols-2 border border-ink/10">
              {stats.map((s, i) => (
                <div key={s.key} className={`px-6 py-6 border-ink/10 ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b' : ''}`}>
                  <div className="font-mono text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-ink leading-none mb-1">{s.value}</div>
                  <div className="font-display text-xs font-semibold text-ink/60 mb-0.5">{tStats(`${s.key}.label`)}</div>
                  <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-ink/25">{tStats(`${s.key}.sub`)}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Founders */}
      <section className="py-24 border-b border-ink/8">
        <Container>
          <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24 mb-14">
            <div>
              <Eyebrow tone="text-ink/35">{t('foundersEyebrow')}</Eyebrow>
              <h2 className="font-display text-2xl font-bold text-ink leading-tight">{t('foundersHeading')}</h2>
            </div>
            <p className="text-ink/45 text-sm leading-relaxed self-end max-w-[540px]">{t('foundersIntro')}</p>
          </div>

          <div className="grid lg:grid-cols-2 border-t border-l border-ink/10">
            {founders.map((founder, i) => {
              const text = messages.members.founders[founder.key];
              return (
                <Reveal key={founder.key} delay={i * 0.1} className="border-b border-r border-ink/10 flex flex-col">
                  <div className="relative w-full aspect-[4/3] bg-mist overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-[4rem] font-bold text-ink/10 select-none leading-none">{initials(founder.name)}</span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="font-mono text-[9px] tracking-[0.18em] uppercase bg-ink/80 text-white/70 px-2.5 py-1 backdrop-blur-sm">
                        {founder.country} — {text.node}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 lg:p-10 flex-1 flex flex-col">
                    <div className="font-mono text-[8px] tracking-[0.2em] uppercase text-ink/25 mb-2">{t('foundersEyebrow')}</div>
                    <h3 className="font-display text-xl font-bold text-ink mb-1 leading-tight">{founder.name}</h3>
                    <p className="font-mono text-[10px] tracking-[0.1em] text-ink/45 mb-5">{text.role}</p>
                    <p className="text-ink/55 text-sm leading-relaxed mb-6 flex-1">{text.bio}</p>

                    <div className="border-t border-ink/8 pt-5">
                      <div className={`${smallLabel} mb-2`}>{t('scopeLabel')}</div>
                      <p className="font-mono text-[9px] text-ink/40 leading-relaxed">{text.scope}</p>
                    </div>
                    <div className="mt-4">
                      <div className={`${smallLabel} mb-1`}>{t('institutionLabel')}</div>
                      <p className="font-mono text-[10px] text-ink/55">{text.university}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* One section per department */}
      {departments.map((dept, i) => {
        const deptText = messages.departments[dept.id];
        return (
          <section key={dept.id} id={dept.id} className="border-b border-ink/8 py-20 scroll-mt-24">
            <Container>
              <Reveal y={12} className="flex flex-wrap items-end justify-between gap-6 mb-12">
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink/20">{indexLabel(i)}</span>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-ink leading-tight">{deptText.title}</h2>
                    <p className="font-mono text-[9px] tracking-[0.12em] text-ink/35 mt-1">{deptText.scope}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-xl font-bold text-ink">{dept.members}</div>
                  <div className="font-mono text-[8px] tracking-[0.18em] uppercase text-ink/25">{t('membersLabel')}</div>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {roster[dept.id].map((member) => (
                  <div key={member.name} className="p-2">
                    <MemberCard
                      name={member.name}
                      role={messages.members.roles[member.role]}
                      department={deptText.title}
                      university={member.university ?? t('defaultUniversity')}
                      country={member.country ?? 'US'}
                    />
                  </div>
                ))}
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
