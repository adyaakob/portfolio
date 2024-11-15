import Image from 'next/image'
import SectionTitle from '../SectionTitle'
import { getBasePath } from '@/lib/utils'

// Define the interface for project data
interface Project {
  title: string;
  period: string;
  date: string;
  image: string;
  description: string;
  // Add any other properties your projects might have
}

const basePath = getBasePath()

const projectsData = [
  {
    title: "Combat Net Radio CNR9 and CNR10",
    period: "Jan 2010 - Jan 2020",
    date: "Jan 2010 - Jan 2020",
    image: `${basePath}/images/projects/cnr9-10.jpg`,
    description: "The CNR9 and CNR10 programs for the Malaysian Army encompass the provision of equipment and services, including next-generation HF and VHF radio systems, data terminals, and Blue Force Tracking software."
  },
  {
    title: "TRC5200 Tactical VHF Handheld",
    period: "Jan 2017 - Jan 2020",
    date: "Jan 2017 - Jan 2020",
    image: `${basePath}/images/projects/trc5200.jpg`,
    description: "The second generation of VHF radios, developed by Sapura Thales Electronics (STE) and fully designed in Malaysia, has been deployed by the Malaysian Navy. This system includes radios and accessories that support data transmission and position tracking."
  },
  {
    title: "Future Soldier System (FSS)",
    period: "Jan 2015 - Jan 2018",
    date: "Jan 2015 - Jan 2018",
    image: `${basePath}/images/projects/fss.jpg`,
    description: "The Future Soldier System (FSS) was introduced as part of the Malaysian Army's Network Centric Operations (NCO) program to enhance long-distance synergy and coordination. In this system, each soldier functions as a sensor, transmitting vital battlefield information back to command. The FSS was entirely developed by local engineers"
  },
  {
    title: "OICS for Deftech 8x8 GEMPITA",
    period: "Jan 2015 - Jan 2018",
    date: "Jan 2015 - Jan 2018",
    image: `${basePath}/images/projects/oics.jpg`,
    description: "Thales, through its joint venture STE, is part of the AV8 programme for the Royal Malaysian Army. STE provides communication, vetronics, sensors, command & control, mortar, and optronics"
  },
  {
    title: "Radio Communication Installation for 4x4 Lipan Bara",
    period: "Jan 2015 - Dec 2015",
    date: "Jan 2015 - Dec 2015",
    image: `${basePath}/images/projects/lipan-bara.jpg`,
    description: ""
  },
  {
    title: "TRC5100 Tactical VHF Handheld",
    period: "Jan 1997 - Jan 2015",
    date: "Jan 1997 - Jan 2015",
    image: `${basePath}/images/projects/trc5100.jpg`,
    description: "First-generation of tactical handheld, designed and produced locally"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="pt-20 -mt-20">
      <SectionTitle>Projects</SectionTitle>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-gray-900 dark:text-white font-bold text-xl">
                {project.title}
              </h3>
              <p className="text-gray-500 dark:text-[#64748B] text-sm mt-1">{project.date}</p>
              {project.description && (
                <p className="text-gray-700 dark:text-[#94A3B8] mt-2">{project.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 