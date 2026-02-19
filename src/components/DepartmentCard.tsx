'use client';

import { motion } from 'framer-motion';
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
  members 
}: DepartmentCardProps) {
  return (
    <Link href={`/about#${department}`}>
      <motion.div
        whileHover={{ y: -4 }}
        className="group border border-gray-200 p-8 bg-white hover:border-mars-red transition-all duration-300 cursor-pointer"
      >
        {/* Simple number indicator */}
        <div className="text-sm text-gray-400 mb-4 font-mono">
          {members.toString().padStart(2, '0')}
        </div>
        
        <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-mars-red transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-4">
          {description}
        </p>
        
        {/* Minimal arrow indicator */}
        <div className="flex items-center text-sm font-medium text-gray-400 group-hover:text-mars-red transition-colors">
          <span>View Details</span>
          <svg 
            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </motion.div>
    </Link>
  );
}