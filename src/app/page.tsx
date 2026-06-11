import Header from '@/components/Header';
import DepartmentCard from '@/components/DepartmentCard';
import NewsGrid from '@/components/Newsgrid';
import Footer from '@/components/Footer';
import SponsorsCarousel from '@/components/SponsorsCarousel';
import { NewsItem } from '@/components/NewsCard';
import HeroWithRover from '@/components/HeroWithRover';
import TeamIntroduction from '@/components/TeamIntroduction';
import RoverHistory from '@/components/RoverHistory';


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

  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'KARURA Makes History as First Japanese Team in URC Finals',
      description: 'In 2024, we became the first international and Japanese team to reach the finals of the University Rover Challenge.',
      date: '2024-06-15',
      imageUrl: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-462x174_webp_eeddf8f4-d769-4e9a-968b-9f9551bda5d7.webp',
      imageAlt: 'KARURA at URC Finals',
      category: 'Achievement',
      link: '/news/urc-finals-2024',
    },
    {
      id: '2',
      title: 'Preparing for URC 2025: Our Winning Strategy',
      description: 'The team is in the final stages of System Acceptance Review for our 2025 rover.',
      date: '2025-01-20',
      imageUrl: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
      imageAlt: 'KARURA 2025 rover preparation',
      category: 'Competition',
      link: '/news/urc-2025-preparation',
    },
    {
      id: '3',
      title: 'New Science Mission Capabilities',
      description: 'Our science department has developed advanced systems using high-resolution cameras.',
      date: '2025-01-10',
      imageUrl: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
      imageAlt: 'KARURA science equipment',
      category: 'Update',
    },
    {
      id: '4',
      title: 'International Collaboration: Japan & Texas A&M',
      description: 'KARURA unites 60 students from Texas A&M and universities across Japan.',
      date: '2024-12-01',
      imageUrl: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
      imageAlt: 'KARURA international team',
      category: 'Team',
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroWithRover />
      
      {/* Added more vertical spacing with py-32 */}
      <div className="py-24"></div>
      
      {/* Team Introduction Section */}
      <TeamIntroduction />
      
      {/* Added more vertical spacing */}
      <div className="py-24"></div>
      
      {/* Rover History Section */}
      <RoverHistory />
      
      {/* Added more vertical spacing */}
      <div className="py-24"></div>
      
      {/* Departments Section*/}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Our Departments
            </h2>
            <div className="w-16 h-1 bg-mars-red mx-auto"></div>
          </div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
              {departments.map((dept) => (
                <DepartmentCard key={dept.department} {...dept} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Added more vertical spacing */}
      <div className="py-24"></div>
      
      {/* News Section */}
      <NewsGrid newsItems={newsItems} />
      
      {/* Added more vertical spacing */}
      <div className="py-16"></div>
      
      {/* Sponsors Carousel Section */}
      <SponsorsCarousel
        sponsors={sponsors.map((s) => ({ id: s.id, name: s.name, logo: s.logo }))}
      />
      
      {/* Added more vertical spacing before footer */}
      <div className="py-24"></div>
      
      <Footer />
    </main>
  );
}



