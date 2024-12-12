'use client'

import { motion } from 'framer-motion'
import SectionTitle from '../SectionTitle'
import { FaBriefcase, FaLaptopCode, FaProjectDiagram, FaCogs, FaWrench, FaTools } from 'react-icons/fa';
import Image from 'next/image';

type TimelineEvent = {
  year: string
  title: string
  company?: string
  description?: string
}

const careerEvents: TimelineEvent[] = [
  {
    year: '1994 - Dec 1995',
    title: 'PM Tech'
  },
  {
    year: 'Aug 1997 - Dec 2002',
    title: 'Des Eng'
  },
  {
    year: '2003 - 2007',
    title: 'Sr Des Eng'
  },
  {
    year: '2008 - 2009',
    title: 'Tech Mgr'
  },
  {
    year: '2010 - 2013',
    title: 'Sys Int Mgr'
  },
  {
    year: '2020 - Jun 2024',
    title: 'R&D GM'
  },
  {
    year: 'Now',
    title: 'Tech Consultant'
  }
]

const iconMap = {
  'R&D GM': <Image src="/images/timeline/manager.png" alt="Manager Icon" width={72} height={72} />,
  'Sys Int Mgr': <Image src="/images/timeline/coordinator.png" alt="Coordinator Icon" width={72} height={72} />,
  'Tech Mgr': <Image src="/images/timeline/tech-manager.png" alt="Tech Manager Icon" width={72} height={72} />,
  'Sr Des Eng': <Image src="/images/timeline/senior.png" alt="Senior Icon" width={72} height={72} />,
  'Des Eng': <Image src="/images/timeline/engineer.png" alt="Engineer Icon" width={72} height={72} />,
  'PM Tech': <Image src="/images/timeline/tech.png" alt="Tech Icon" width={72} height={72} />,
  'Tech Consultant': <Image src="/images/timeline/consultant.png" alt="Consultant Icon" width={72} height={72} />,
};

export default function CareerTimeline() {
  return (
    <section id="career-timeline" className="py-8 print:py-4">
      <h2 className="text-[14px] font-medium text-[#2E5077] uppercase mb-4">Career Timeline</h2>
      <div className="p-12">
        <div className="relative">
          {/* Main horizontal line */}
          <div className="absolute left-0 right-0 top-1/2 w-full h-0.5 bg-[#2E5077]"></div>

          <div className="relative grid grid-cols-4 gap-16">
            {/* Tech Consultant - Current */}
            <div className="col-span-1">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="text-center mb-2">
                  <div className="text-[16px] font-medium text-[#2E5077]">Now</div>
                  <div className="text-[14px] text-[#5D6975]">Tech Consultant</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-4 w-24 h-24 mx-auto flex items-center justify-center">
                  {iconMap['Tech Consultant']}
                </div>
              </motion.div>
            </div>

            {/* Tech Mgr */}
            <div className="col-span-1">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="text-center mb-2">
                  <div className="text-[16px] font-medium text-[#2E5077]">2008 - 2009</div>
                  <div className="text-[14px] text-[#5D6975]">Tech Mgr</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-4 w-24 h-24 mx-auto flex items-center justify-center">
                  {iconMap['Tech Mgr']}
                </div>
              </motion.div>
            </div>

            {/* Sr Des Eng */}
            <div className="col-span-1">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative"
              >
                <div className="text-center mb-2">
                  <div className="text-[16px] font-medium text-[#2E5077]">2003 - 2007</div>
                  <div className="text-[14px] text-[#5D6975]">Sr Des Eng</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-4 w-24 h-24 mx-auto flex items-center justify-center">
                  {iconMap['Sr Des Eng']}
                </div>
              </motion.div>
            </div>

            {/* PM Tech */}
            <div className="col-span-1">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative"
              >
                <div className="text-center mb-2">
                  <div className="text-[16px] font-medium text-[#2E5077]">1994 - Dec 1995</div>
                  <div className="text-[14px] text-[#5D6975]">PM Tech</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-4 w-24 h-24 mx-auto flex items-center justify-center">
                  {iconMap['PM Tech']}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom row with connecting lines */}
          <div className="relative grid grid-cols-3 gap-16 mt-16 ml-32">
            {/* R&D GM */}
            <div className="col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="relative"
              >
                <div className="absolute -top-16 left-1/2 w-0.5 h-16 bg-[#2E5077]"></div>
                <div className="bg-white rounded-lg shadow-lg p-4 w-24 h-24 mx-auto flex items-center justify-center">
                  {iconMap['R&D GM']}
                </div>
                <div className="text-center mt-2">
                  <div className="text-[16px] font-medium text-[#2E5077]">2020 - Jun 2024</div>
                  <div className="text-[14px] text-[#5D6975]">R&D GM</div>
                </div>
              </motion.div>
            </div>

            {/* Sys Int Mgr */}
            <div className="col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="relative"
              >
                <div className="absolute -top-16 left-1/2 w-0.5 h-16 bg-[#2E5077]"></div>
                <div className="bg-white rounded-lg shadow-lg p-4 w-24 h-24 mx-auto flex items-center justify-center">
                  {iconMap['Sys Int Mgr']}
                </div>
                <div className="text-center mt-2">
                  <div className="text-[16px] font-medium text-[#2E5077]">2010 - 2013</div>
                  <div className="text-[14px] text-[#5D6975]">Sys Int Mgr</div>
                </div>
              </motion.div>
            </div>

            {/* Des Eng */}
            <div className="col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="relative"
              >
                <div className="absolute -top-16 left-1/2 w-0.5 h-16 bg-[#2E5077]"></div>
                <div className="bg-white rounded-lg shadow-lg p-4 w-24 h-24 mx-auto flex items-center justify-center">
                  {iconMap['Des Eng']}
                </div>
                <div className="text-center mt-2">
                  <div className="text-[16px] font-medium text-[#2E5077]">Aug 1997 - Dec 2002</div>
                  <div className="text-[14px] text-[#5D6975]">Des Eng</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
