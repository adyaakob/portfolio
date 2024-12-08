'use client'

import Image from 'next/image'
import { getBasePath } from '@/lib/utils'
import SectionTitle from '../SectionTitle'

const projectsData = [
  {
    id: 1,
    title: "Combat Net Radio CNR9 and CNR10",
    type: "Radio Communication",
    period: "Jan 2010 - Jan 2020",
    date: "Jan 2010 - Jan 2020",
    image: `/images/projects/cnr9-10.jpg`,
    description: "The CNR9 and CNR10 programs for the Malaysian Army encompass the provision of equipment and services, including next-generation HF and VHF radio systems, data terminals, and Blue Force Tracking software."
  },
  {
    id: 2,
    title: "TRC5200 Tactical VHF Handheld",
    type: "Handheld Radio",
    period: "Jan 2017 - Jan 2020",
    date: "Jan 2017 - Jan 2020",
    image: `/images/projects/trc5200.jpg`,
    description: "The second generation of VHF radios, developed by Sapura Thales Electronics (STE) and fully designed in Malaysia, has been deployed by the Malaysian Navy. This system includes radios and accessories that support data transmission and position tracking."
  },
  {
    id: 3,
    title: "Future Soldier System (FSS)",
    type: "Soldier System",
    period: "Jan 2015 - Jan 2018",
    date: "Jan 2015 - Jan 2018",
    image: `/images/projects/fss.jpg`,
    description: "The Future Soldier System (FSS) was introduced as part of the Malaysian Army's Network Centric Operations (NCO) program to enhance long-distance synergy and coordination. In this system, each soldier functions as a sensor, transmitting vital battlefield information back to command. The FSS was entirely developed by local engineers"
  },
  {
    id: 4,
    title: "OICS for Deftech 8x8 GEMPITA",
    type: "Communication Solution",
    period: "Jan 2015 - Jan 2018",
    date: "Jan 2015 - Jan 2018",
    image: `/images/projects/oics.jpg`,
    description: "Thales, through its joint venture STE, is part of the AV8 programme for the Royal Malaysian Army. STE provides communication, vetronics, sensors, command & control, mortar, and optronics"
  },
  {
    id: 5,
    title: "Radio Communications Solution for various Armoured Vehicles",
    type: "Radio Communication",
    period: "2010 - 2018",
    date: "2010 - 2018",
    image: `/images/projects/lipan-bara.jpg`,
    description: "Led the development and implementation of tactical communication solutions for multiple armoured vehicle platforms including ADNAN, MIFV, BUMAR, AV8, SCORPION, PT91, and various 6x6 and 4x4 vehicles. The solutions encompassed radio integration, intercom systems, antenna systems, and command & control interfaces, ensuring robust battlefield communications across different military platforms."
  },
  {
    id: 6,
    title: "TRC5100 Tactical VHF Handheld",
    type: "Handheld Radio",
    period: "Jan 1997 - Jan 2015",
    date: "Jan 1997 - Jan 2015",
    image: `/images/projects/trc5100.jpg`,
    description: "Pioneered the development of Malaysia's first locally designed and manufactured tactical VHF handheld radio. The TRC5100 featured encrypted voice communications, frequency skipping capabilities, and ruggedized design for military operations. This groundbreaking project established local expertise in military radio development, with over 1000 units deployed across Malaysian Armed Forces, marking a significant milestone in Malaysia's defense industry capabilities."
  }
]

export default function Projects() {
  const basePath = getBasePath()

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-[25px]">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-purple-600 dark:text-purple-400 print:text-[#7c3aed]">
            Strategic Defense Projects Portfolio
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto">
            Showcasing key military and defense communication projects that demonstrate expertise in tactical systems, radio development, and strategic implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 print:grid-cols-2">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 print:shadow-none print:border print:border-gray-200"
            >
              {/* Screen version - hidden in print */}
              <div className="screen-only relative h-48 mb-6 bg-gray-100 dark:bg-gray-700">
                <Image
                  src={`${basePath}${project.image}`}
                  alt={project.title}
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={true}
                  loading="eager"
                  quality={40}
                />
              </div>

              {/* Print version */}
              <div className="hidden print:block w-full mb-6">
                <div className="h-40 relative">
                  <img
                    src={`${basePath}${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                    style={{ pageBreakInside: 'avoid' }}
                  />
                </div>
              </div>
              
              <div className="px-6 pb-6 print:px-4 print:pb-4">
                <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-2 print:text-base">
                  {project.title}
                </h3>
                <p 
                  className="text-sm text-gray-600 dark:text-gray-400"
                  data-project-type={project.type}
                >
                  {project.type}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.period}
                </p>
                <p className="text-gray-700 dark:text-gray-300 print:text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}