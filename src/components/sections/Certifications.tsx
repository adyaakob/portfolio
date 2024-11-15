import Image from 'next/image'
import SectionTitle from '../SectionTitle'
import { getBasePath } from '@/lib/utils'

export default function Certifications() {
  const basePath = getBasePath()

  const certificationsData = [
    {
      title: "Basic Fire Fighting & Emergency Response Plan",
      issuer: "Asian First Aid Academy",
      issueDate: "Issued Jan 2020",
      image: `${basePath}/images/certifications/fire-fighting.jpg`
    },
    {
      title: "Occupational First Aider Certification",
      issuer: "Asian First Aid Academy",
      issueDate: "Issued Jan 2020",
      image: `${basePath}/images/certifications/first-aid.jpg`
    }
  ]

  return (
    <section id="certifications" className="pt-20 -mt-20">
      <SectionTitle>Certifications</SectionTitle>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificationsData.map((cert, index) => (
          <div 
            key={index} 
            className="bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-gray-900 dark:text-white font-bold text-xl">
                {cert.title}
              </h3>
              <p className="text-gray-700 dark:text-[#94A3B8] mt-2">{cert.issuer}</p>
              <p className="text-gray-500 dark:text-[#64748B] text-sm mt-1">{cert.issueDate}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}