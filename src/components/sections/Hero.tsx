'use client'

import Image from 'next/image'
import { getBasePath } from '@/lib/utils'
import Link from 'next/link'
import { useTheme } from 'next-themes'

interface HeroProps {
  children?: React.ReactNode;
}

export default function Hero({ children }: HeroProps) {
  const basePath = getBasePath()
  const { theme, setTheme } = useTheme()

  const handlePrint = async () => {
    // Scroll through the page to trigger lazy loading
    const scrollStep = window.innerHeight / 2;
    const scrollDelay = 100;
    const originalPosition = window.scrollY;

    // Scroll down
    for (let i = 0; i <= document.documentElement.scrollHeight; i += scrollStep) {
      window.scrollTo(0, i);
      await new Promise(resolve => setTimeout(resolve, scrollDelay));
    }

    // Scroll back up
    window.scrollTo(0, originalPosition);

    // Wait a moment for any final loading
    await new Promise(resolve => setTimeout(resolve, 500));

    // Trigger print
    window.print();
  }

  return (
    <section className="py-16 sm:py-20 print:py-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white print:text-2xl print:mb-2">
              Ahmad Dahalan Yaakob
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-600 dark:text-gray-300 print:text-base print:mb-4">
              Experienced R&amp;D and Product Management Professional in Defense Communications
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-base print:text-sm">
              I bring over 25 years of experience in defense, telecommunications, and emerging technologies, 
              with a strong interest in Artificial Intelligence (AI) as a key driver for my career development, 
              aiming to bring transformative benefits to various industries. Throughout my career, I&apos;ve 
              successfully led multidisciplinary teams to create advanced communication solutions for military 
              and government clients. I am passionate about technology, innovation, and exploring AI&apos;s potential 
              to benefit not only defense but also other industries, consistently striving to deliver high-quality, 
              impactful solutions.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 print:text-xs print:mb-4">
              <span>51 years old</span>
              <span className="hidden print:inline">•</span>
              <span>+60 102369037</span>
              <span className="hidden print:inline">•</span>
              <span>adyaakob@gmail.com</span>
            </div>

            <div className="flex space-x-4 mt-4 print:hidden">
              <Link
                href="#contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md"
              >
                Contact Me
              </Link>
              <button
                onClick={handlePrint}
                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-6 py-2 rounded-md"
              >
                Save as PDF
              </button>
              <Link
                href="/cv"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md"
              >
                View My CV
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="w-48 h-48 md:w-64 md:h-64 relative">
            <Image
              src={`${basePath}/images/profile.jpg`}
              alt="Ahmad Dahalan Yaakob"
              width={256}
              height={256}
              className="rounded-full object-cover shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}