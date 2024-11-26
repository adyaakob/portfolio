import React from 'react';
import { 
  Radio, 
  Shield, 
  Database, 
  FileText, 
  Network, 
  Laptop, 
  Flag, 
  Radar, 
  Globe,
  LucideIcon
} from 'lucide-react'

export interface TimelineData {
  year: number | string
  title: string
  category: string
  description: string
  icon: React.ReactNode
}

export const steProjects: TimelineData[] = [
  {
    year: 2009,
    title: "Tactical Communications for Benin",
    category: "Technical Proposal",
    icon: <Globe className="w-5 h-5 text-blue-400" />,
    description: "International tactical communications solution"
  },
  {
    year: 2010,
    title: "Military Communications System",
    category: "Defense Project",
    icon: <Radio className="w-5 h-5 text-green-400" />,
    description: "Integrated military communications solution"
  },
  {
    year: 2012,
    title: "Secure Network Infrastructure",
    category: "Infrastructure",
    icon: <Shield className="w-5 h-5 text-red-400" />,
    description: "Advanced secure network deployment"
  }
];

export const researchProjects: TimelineData[] = [
  {
    year: 2015,
    title: "AI in Defense Communications",
    category: "Research",
    icon: <Database className="w-5 h-5 text-purple-400" />,
    description: "Integration of AI in military communications"
  },
  {
    year: 2017,
    title: "Next-Gen Tactical Systems",
    category: "Innovation",
    icon: <Network className="w-5 h-5 text-yellow-400" />,
    description: "Advanced tactical communication systems"
  }
];
