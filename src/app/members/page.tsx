'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import MemberCard from '@/components/MemberCard';

const founders = [
  {
    name: 'Hirokuni Kakiuchi',
    role: 'Co-Founder & US Project Manager',
    department: 'Management',
    bio: 'Aerospace Engineering senior at Texas A&M University. Oversees all mechanical design and fabrication.',
    avatarSrc: '',
  },
  {
    name: 'Kurena Tsuji',
    role: 'Japan Project Manager',
    department: 'Management',
    bio: 'Mechanical and Aerospace Engineering Major at Tokyo University of Science. Leads coordination between Japanese partner universities and drives the international collaboration mission.',
    avatarSrc: '',
  },
  {
    name: 'Haruto Seto',
    role: 'Co-Founder',
    department: 'Management',
    bio: 'Mechanical Systems Engineering student at Shinsu University.',
    avatarSrc: '',
  },
];

const subteamLeaders = [
  {
    name: 'TBD',
    role: 'Mechanical Subteam Lead',
    department: 'Mechanical',
    bio: 'Responsible for rover chassis, suspension, and drive train design.',
    avatarSrc: '',
  },
  {
    name: 'TBD',
    role: 'Electrical Subteam Lead',
    department: 'Electrical',
    bio: 'Oversees power distribution, motor controllers, and PCB design.',
    avatarSrc: '',
  },
  {
    name: 'TBD',
    role: 'Autonomy Lead',
    department: 'Software',
    bio: 'Develops the ROS2-based navigation stack and computer vision pipeline.',
    avatarSrc: '',
  },
  {
    name: 'TBD',
    role: 'Science Mission Lead',
    department: 'Science',
    bio: 'Designs astrobiology detection protocols and the onboard science payload.',
    avatarSrc: '',
  },
  {
    name: 'TBD',
    role: 'Business & Outreach Lead',
    department: 'Business',
    bio: 'Manages sponsorships, public communications, and team operations.',
    avatarSrc: '',
  },
  {
    name: 'TBD',
    role: 'Robotic Arm Lead',
    department: 'Mechanical',
    bio: 'Designs and integrates the multi-DOF manipulator arm for sample collection.',
    avatarSrc: '',
  },
];

export default function MembersPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-white overflow-hidden pt-24 md:pt-32">
        <div className="absolute inset-0 opacity-100">
          <Image
            src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png"
            alt="KARURA Team Members"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20 py-32 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-charcoal mb-8 tracking-tight">
              Our Team
            </h1>
            <div className="w-24 h-1 bg-mars-red mx-auto mb-10" />
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The people behind the mission — students, engineers, and scientists united across two countries
            </p>
          </motion.div>
        </div>
      </section>

      <div className="py-24" />

      {/* Founders */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Founders</h2>
            <div className="w-16 h-1 bg-mars-red mx-auto mb-8" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              KARURA was built from the ground up by a small group of students who believed in the power of international collaboration to advance space exploration.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full">
              {founders.map((founder, index) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <MemberCard
                    name={founder.name}
                    role={founder.role}
                    department={founder.department}
                    bio={founder.bio}
                    avatarSrc={founder.avatarSrc}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="py-24" />

      {/* Subteam Leaders */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Subteam Leaders</h2>
            <div className="w-16 h-1 bg-mars-red mx-auto mb-8" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each discipline is led by a dedicated student engineer who drives their team toward competition-ready performance.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
              {subteamLeaders.map((member, index) => (
                <motion.div
                  key={`${member.role}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                >
                  <MemberCard
                    name={member.name}
                    role={member.role}
                    department={member.department}
                    bio={member.bio}
                    avatarSrc={member.avatarSrc}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="py-24" />

      {/* CTA */}
      <section className="py-32 bg-charcoal">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Want to Join Us?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            We're always looking for passionate students from any discipline. Whether you're an engineer, scientist, or business-minded — there's a place for you on KARURA.
          </p>

          <a
            href="mailto:zacharyrenkema@tamu.edu"
            className="inline-block px-10 py-4 bg-mars-red text-white rounded-full font-medium hover:bg-white hover:text-mars-red shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}