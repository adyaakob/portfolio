import Image from 'next/image'
import PrintButton from '../PrintButton'
import { getBasePath } from '@/lib/utils'
import { FaEnvelope, FaPhone, FaCalendar } from 'react-icons/fa'

export default function Hero() {
  const basePath = getBasePath()
  
  // Calculate age dynamically
  const calculateAge = () => {
    const birthDate = new Date('1973-01-03');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  return (
    <section className="pt-20 text-center">
      <div className="container mx-auto px-4">
        {/* Profile Image */}
        <div className="w-48 h-48 relative rounded-full overflow-hidden mx-auto mb-8">
          <Image
            src={`${basePath}/profile.jpg`}
            alt="Profile"
            width={300}
            height={300}
            className="object-cover"
            priority
          />
        </div>

        {/* Text Content */}
        <p className="text-purple-600 dark:text-purple-400 mb-4">I&apos;m</p>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#38BDF8] to-[#E879F9] bg-clip-text text-transparent">
          Ahmad Dahalan Yaakob
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
          Experienced R&D and Product Management Leader in Defense Communications
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 text-lg">
          A highly accomplished professional with over 25 years of experience in the defense 
          and telecommunications industries. I have a proven track record of success in leading 
          and managing multidisciplinary teams to develop and deliver cutting-edge communication 
          solutions for military and government clients. I am passionate about driving innovation 
          and delivering high-quality products that meet the most demanding requirements.
        </p>
        
        {/* Personal Information */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-8 print:mb-6 print:gap-x-4 print:text-sm">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 whitespace-nowrap">
            <FaCalendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm">{calculateAge()} years old</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 whitespace-nowrap">
            <FaPhone className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <a 
              href="tel:+60102369037" 
              className="text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors print:hover:text-current"
            >
              +60 102369037
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 whitespace-nowrap">
            <FaEnvelope className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <a 
              href="mailto:adyaakob@gmail.com" 
              className="text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors print:hover:text-current"
            >
              adyaakob@gmail.com
            </a>
          </div>
        </div>

        {/* Action buttons group */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a 
            href="#experience" 
            className="px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
          >
            View Experience
          </a>
          
          <a 
            href="#contact" 
            className="px-6 py-3 border border-purple-500 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition-colors"
          >
            Contact Me
          </a>
          
          <PrintButton className="px-6 py-3 border border-purple-500 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition-colors" />
        </div>
      </div>
    </section>
  )
}