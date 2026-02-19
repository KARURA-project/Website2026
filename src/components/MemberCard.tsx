'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Member } from '@/types';

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
    >
      <div className="relative h-64 bg-gray-200">
        <Image
          src={member.image}
          alt={member.name.en}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-bluewood">{member.name.en}</h3>
        <p className="text-sm text-gray-600">{member.name.jp}</p>
        <p className="text-neon-blue font-semibold mt-2">{member.role}</p>
        <span className="inline-block mt-2 px-3 py-1 bg-ghost rounded-full text-xs">
          {member.department}
        </span>
      </div>
    </motion.div>
  );
}