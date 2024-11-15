import Image from 'next/image'
import SectionTitle from '../SectionTitle'

// Define the interface for project data
interface Project {
  title: string;
  period: string;
  date: string;
  image: string;
  description: string;
  // Add any other properties your projects might have
}

const projectsData = [
  {
    title: "Combat Net Radio CNR9 and CNR10",
    period: "Jan 2010 - Jan 2020",
    date: "Jan 2010 - Jan 2020",
    image: "/portfolio/images/cnr9-10.jpg",
    description: ""
  },
  {
    title: "TRC5200 Tactical VHF Handheld",
    period: "Jan 2017 - Jan 2020",
    date: "Jan 2017 - Jan 2020",
    image: "/images/trc5200.jpg",
    description: "Second generation of VHF radio with Sapura Thales Electronics (STE), fully designed and developed in Malaysia"
  },
  {
    title: "Future Soldier System (FSS)",
    period: "Jan 2015 - Jan 2018",
    date: "Jan 2015 - Jan 2018",
    image: "/images/fss.jpg",
    description: "Fully developed by local engineers"
  },
  {
    title: "OICS for Deftech 8x8 GEMPITA",
    period: "Jan 2015 - Jan 2018",
    date: "Jan 2015 - Jan 2018",
    image: "/images/oics.jpg",
    description: "Thales, through its joint venture STE, is part of the AV8 programme for the Royal Malaysian Army. STE provides communication, vetronics, sensors, command & control, mortar, and optronics"
  },
  {
    title: "Radio Communication Installation for 4x4 Lipan Bara",
    period: "Jan 2015 - Dec 2015",
    date: "Jan 2015 - Dec 2015",
    image: "/images/lipan-bara.jpg",
    description: ""
  },
  {
    title: "TRC5100 Tactical VHF Handheld",
    period: "Jan 1997 - Jan 2015",
    date: "Jan 1997 - Jan 2015",
    image: "/images/trc5100.jpg",
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