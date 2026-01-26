import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DepartmentCard from '@/components/DepartmentCard';
import SponsorCarousel from '@/components/SponsorCarousel';
import NewsGrid from '@/components/Newsgrid';
import { NewsItem } from '@/components/NewsCard';
import { FiCpu, FiZap, FiCode, FiTrendingUp, FiUsers } from 'react-icons/fi';

export default function Home() {
  const departments = [
    {
      department: 'mechanical' as const,
      title: 'Mechanical',
      description: 'Design and build the physical structure of the rover',
      icon: <FiCpu />,
      members: 8,
    },
    {
      department: 'electrical' as const,
      title: 'Electrical',
      description: 'Develop power systems and electronic components',
      icon: <FiZap />,
      members: 6,
    },
    {
      department: 'software' as const,
      title: 'Software',
      description: 'Create autonomous navigation and control systems',
      icon: <FiCode />,
      members: 10,
    },
    {
      department: 'science' as const,
      title: 'Science',
      description: 'Research and conduct scientific experiments',
      icon: <FiTrendingUp />,
      members: 5,
    },
    {
      department: 'business' as const,
      title: 'Business',
      description: 'Manage outreach, sponsors, and team operations',
      icon: <FiUsers />,
      members: 4,
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
    { id: '9', name: 'Task-inc', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2103x855_v-frms_webp_fe6d0445-7cce-4fc3-9d9d-96b9e683d51c_small.webp' },
    //{ id: '10', name: 'Argo', logo: 'https://www.argocorp.com/common/img/logo@2x.png' },
    { id: '11', name: 'Gutenberg', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1540x146_v-fms_webp_aa43e6b3-9a3b-4b50-8c88-5390ab14c413_small.webp' },
    { id: '12', name: 'Haneda Innovation City', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1188x568_v-fs_webp_9ed63bcb-6917-4760-9158-4461e22c4ae4_small.webp' },
    { id: '13', name: 'terminal.O', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-900x900_v-fs_webp_f39876b7-01b8-4f2a-aa81-8bc0b983fc95_small.webp' },
    { id: '14', name: 'IDDK', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-850x850_v-fs_webp_e3e4575e-1057-4143-a29e-bde7a9ff5ea1_small.webp' },
    { id: '15', name: 'HULL Precision Instrument Corporation', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x1354_v-frms_webp_43068a6f-92c5-44d7-ba69-3453867f0c6b_small.webp' },
    { id: '16', name: 'Emdgroup', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1632x306_v-fms_webp_f59ffa9a-87d1-4a09-82ab-a8135b4d55a4_small.webp' },
    { id: '17', name: 'Hanpu', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-967x300_v-fs_webp_438232d1-0256-4f1f-8401-f83b5fafbea8_small.webp' },
    { id: '18', name: 'Sinsyo', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2154x236_v-frms_webp_316f9c06-5ada-4498-8776-b0159edc490d_small.webp' },
    { id: '19', name: 'Sugino', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x346_v-frms_webp_98a4e4ad-e8a8-4764-a861-b471d0281352_small.webp' },
    { id: '20', name: 'Japritech', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-610x97_v-fs_webp_a7dc40a6-bc2c-4fc2-a92b-03664e173b72_small.webp' },
    //{ id: '21', name: 'Nikkan', logo: '/logo/karura-logo.png' },
    //{ id: '22', name: 'Shinshu University', logo: '/logo/karura-logo.png' },
    { id: '23', name: 'NC-Toyama', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-334x61_webp_716ef7e6-a45a-4d90-a695-c99cd429b4e7.webp' },
    //{ id: '24', name: 'Wakasatokai', logo: '/logo/karura-logo.png' },
    { id: '25', name: 'Uchubiz', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1500x279_v-fms_webp_de41bd6a-1dcc-4c1d-a96a-fb8c634fd8ab_small.webp' },
    { id: '26', name: 'Sorae', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1920x480_v-frms_webp_601e4f16-3eb2-442b-b8b4-2a64277b460c_small.webp' },
    { id: '27', name: 'Uchu-Banashi', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2009x460_v-frms_webp_2f46553c-1401-4a5a-b120-312a267561b0_small.webp' },
    { id: '28', name: 'SPACE Media', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x715_v-frms_webp_fa8c543d-fa10-4945-90fd-d741124f764d_small.webp' },
    { id: '29', name: 'Space Development Forum', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1425x595_v-fms_webp_ac9fdcb5-0676-4897-a792-980a765faf30_small.webp' },
    //{ id: '30', name: 'ASE-Lab', logo: '/logo/karura-logo.png' },
    { id: '31', name: 'LYNCS', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-256x256_webp_fda42e6f-6d4a-4682-a1c4-866a5028a965.webp' },
    { id: '32', name: 'tohokuspaceelevato', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x1697_v-frms_webp_39fe14e6-8f7b-45ad-be8a-a4e7dc79fe0b_small.webp' },
    { id: '33', name: 'LIFT - 自走式昇降機を用いた社会課題の解決-', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1020x1008_v-fs_webp_12e15f05-1cce-4a0c-807d-fa3dfcccf844_small.webp' },
    { id: '34', name: 'TELSTAR', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2118x772_v-frms_webp_08f97322-7734-40c9-81a3-5a18da2465b0_small.webp' },
   //{ id: '35', name: 'FSIFOfficial', logo: '/logo/karura-logo.png' },

    // ...
    // Add more sponsors
  ];

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Title',
    description: 'description',
    date: 'date',
    imageUrl: '/images/rover-2025-prep.jpg', // Replace with actual image path
    imageAlt: 'image alt text',
    category: 'Achievement',
    link: '/news/urc',
  },
  {
    id: '2',
    title: 'Title',
    description: 'description',
    date: 'date',
    imageUrl: '/images/rover-2025-prep.jpg',
    imageAlt: 'image alt text',
    category: 'Competition',
    link: '/news/urc',
  },
  {
    id: '3',
    title: 'Title',
    description: 'description',
    date: 'date',
    imageUrl: '/images/science-equipment.jpg',
    imageAlt: 'image alt text',
    category: 'Update',
    link: '/news/urc',
  },
  {
    id: '4',
    title: 'Title',
    description: 'description',
    date: 'date',
    imageUrl: '/images/team-collaboration.jpg',
    imageAlt: 'image alt text',
    category: 'Team',
    link: '/news/urc',
  },
];


  return (
    <main>
      <Header />
      <Hero />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-bluewood mb-12">
            Our Departments
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <DepartmentCard key={dept.department} {...dept} />
            ))}
          </div>
        </div>
      </section>

      <SponsorCarousel sponsors={sponsors} />

      <NewsGrid 
        newsItems={newsItems}
        title="Latest News & Updates"
        subtitle="Follow our journey to Mars and beyond"
      />        
      
    </main>
  );
}