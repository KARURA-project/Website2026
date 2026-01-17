'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import type { Department } from '@/types';

interface DepartmentCardProps {
  department: Department;
  title: string;
  description: string;
  icon: React.ReactNode;
  members: number;
}

export default function DepartmentCard({ 
  department, 
  title, 
  description, 
  icon, 
  members 
}: DepartmentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-neon-blue transition-all"
      whileHover={{ y: -5 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl text-neon-blue">{icon}</div>
          <span className="text-sm text-gray-500">{members} members</span>
        </div>
        
        <h3 className="text-2xl font-bold text-bluewood mb-2">{title}</h3>
        
        <p className="text-gray-600">{description}</p>
        
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 pt-4 border-t border-gray-200"
          >
            <h4 className="font-semibold mb-2">Responsibilities:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Design and development</li>
              <li>Testing and validation</li>
              <li>Competition preparation</li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
