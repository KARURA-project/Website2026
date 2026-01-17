import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DepartmentCard from '@/components/DepartmentCard';
import SponsorCarousel from '@/components/SponsorCarousel';
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
    { id: '1', name: 'Sponsor 1', logo: '/logos/sponsor1.png' },
    { id: '2', name: 'Sponsor 2', logo: '/logos/sponsor2.png' },
    // Add more sponsors
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
    </main>
  );
}