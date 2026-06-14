// src/app/page.tsx
import Header from '@/components/Header';
import DepartmentCard from '@/components/DepartmentCard';
import { HomeTransmissions } from '@/components/home';
import Footer from '@/components/Footer';
import SponsorsCarousel from '@/components/SponsorsCarousel';
import { HeroWithRover, RoverHistory, VideoReel, TeamIntroduction, Countdown as TelemetryCountdown } from '@/components/home';
import transmissions from '@/data/transmissions';

export default function Home() {
  const departments = [
    {
      department: 'mechanical',
      title: 'Mechanical',
      description: 'Designing and fabricating the physical structure and mobility systems.',
      members: 12,
    },
    {
      department: 'electrical',
      title: 'Electrical',
      description: 'Developing power distribution and electronic communication systems.',
      members: 8,
    },
    {
      department: 'software',
      title: 'Software',
      description: 'Creating autonomous navigation and control algorithms.',
      members: 15,
    },
    {
      department: 'science',
      title: 'Science',
      description: 'Conducting research on astrobiology and life-detection protocols.',
      members: 6,
    },
    {
      department: 'business',
      title: 'Business',
      description: 'Managing sponsorships, outreach, and team operations.',
      members: 5,
    },
  ];

  const sponsors = [
    { id: '1', name: 'Sanso', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x740_v-frms_webp_47ab9e3a-894f-4fa5-ae7e-e04e6f6ff0a7_small.webp' },
    { id: '2', name: 'Kikusui', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-738x150_v-fs_webp_35ab6be7-00ff-45b5-b575-6589198d4233_small.webp' },
    { id: '3', name: 'Tenchijin', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1482x370_v-fms_webp_392f814c-2b0f-4bfa-9b98-a4c136832d54_small.webp' },
    { id: '4', name: 'Crecia', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x900_v-frms_webp_e4afed17-bd2a-46bb-bc4d-ac6e68d37be9_small.webp' },
    { id: '5', name: 'Hiwin', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-738x150_v-fs_webp_a7752d8d-06eb-465b-bcac-89b642aeef58_small.webp' },
    { id: '6', name: 'Spacegoods', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-800x209_v-fs_webp_5abd98f2-f13a-48f4-924d-29d9c0312265_small.webp' },
    { id: '7', name: 'OptoSigma', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1812x452_v-frms_webp_db352a0c-c6d2-4509-9518-9d34e1c6636a_small.webp' },
    { id: '8', name: 'Amulapo', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-666x140_v-fs_webp_c2904793-5b05-4517-8245-9c3657d440e2_small.webp' },
    { id: '9', name: 'Argo', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1088x228_v-fs_webp_68261acd-1c79-40e8-8a5c-2d016f970f3b_small.webp' },
    { id: '10', name: 'Gutenberg', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1540x146_v-fms_webp_aa43e6b3-9a3b-4b50-8c88-5390ab14c413_small.webp' },
    { id: '11', name: 'Innovation City', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1188x568_v-fs_webp_9ed63bcb-6917-4760-9158-4461e22c4ae4_small.webp' },
    { id: '12', name: 'terminal.O', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-900x900_v-fs_webp_f39876b7-01b8-4f2a-aa81-8bc0b983fc95_small.webp' },
  ];

  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <Header />

      {/* ── 1. Hero — milestone headline + sharp rover image ── */}
      <HeroWithRover />

      {/* ── 2. Video Reel — directly beneath hero fold ── */}
      <VideoReel />

      {/* ── 3. Telemetry Countdown ── */}
      <TelemetryCountdown />

      {/* ── 4. Team Introduction ── */}
      <TeamIntroduction />

      {/* ── 5. Members Teaser ── */}
      <section className="py-20 bg-[#FAFAFA] border-t border-[#0A0A0A]/8">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#0A0A0A]/40">
                  The Team
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A]">Meet the Members</h2>
              <p className="text-[#0A0A0A]/50 mt-3 max-w-md text-sm leading-relaxed">
                From founders to subteam leads — students driving KARURA forward across Japan and the United States.
              </p>
            </div>
            
            <a
              href="/members"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0A0A0A] text-white text-sm font-medium tracking-wide hover:bg-[#E63946] transition-colors duration-300 self-start"
            >
              View All Members
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. Rover History ── */}
      <RoverHistory />

      {/* ── 7. Departments ── */}
      <section className="py-24 bg-[#FAFAFA] border-t border-[#0A0A0A]/8">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-[#E63946]" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#0A0A0A]/40">
                Structure
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A]">Our Departments</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0A0A0A]/8">
            {departments.map((dept) => (
              <div key={dept.department} className="bg-[#FAFAFA]">
                <DepartmentCard {...dept} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. News & Transmissions — synced with news page style ── */}
      <HomeTransmissions transmissions={transmissions} />

      {/* ── 9. Sponsors ── */}
      <SponsorsCarousel
        sponsors={sponsors.map((s) => ({ id: s.id, name: s.name, logo: s.logo }))}
      />

      <Footer />
    </main>
  );
}