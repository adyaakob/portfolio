import Image from 'next/image'
import SectionTitle from '../SectionTitle'
import { getBasePath } from '@/lib/utils'

const educationData = [
  {
    institution: "University of Plymouth",
    logo: "/images/education/plymouth-logo.jpg",
    degree: "B.Eng (Hons), Electrical and Electronics Engineering",
    period: "1995 - 1997",
  },
  {
    institution: "Universiti Teknologi Malaysia",
    logo: "/images/education/utm-logo.jpg",
    degree: "Diploma in Electrical Engineering (Communications)",
    period: "1991 - 1994",
  },
]

export default function Education() {
  const basePath = getBasePath()
  
  return (
    <section id="education" className="pt-20 -mt-20">
      <SectionTitle>Education</SectionTitle>
      
      <div className="max-w-3xl mx-auto space-y-8">
        {educationData.map((edu, index) => (
          <div 
            key={index} 
            className="education-item bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 relative flex-shrink-0">
              <Image
                src={`${basePath}${edu.logo}`}
                alt={`${edu.institution} logo`}
                fill
                className="object-contain"
              />
            </div>
            
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold text-xl">
                {edu.institution}
              </h3>
              <p className="text-gray-700 dark:text-[#94A3B8]">{edu.degree}</p>
              <p className="text-gray-500 dark:text-[#64748B] text-sm">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 