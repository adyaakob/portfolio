'use client'

import Image from 'next/image'
import { getBasePath } from '@/lib/utils'
import Link from 'next/link'
import html2pdf from 'html2pdf.js'

export default function Hero() {
  const basePath = getBasePath()

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="py-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <Image
            src={`${basePath}/images/profile.jpg`}
            alt="Profile"
            width={128}
            height={128}
            className="rounded-full object-cover"
            priority
            quality={85}
          />
        </div>

        <p className="text-purple-600 dark:text-purple-400 mb-2">I&apos;m</p>
        
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-purple-400 bg-clip-text text-transparent">
          Ahmad Dahalan Yaakob
        </h1>
        
        <h2 className="text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300">
          Experienced R&D and Product Management Professional in Defense Communications
        </h2>
        
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          I bring over 25 years of experience in defense, telecommunications, and emerging technologies, 
          with a strong interest in Artificial Intelligence (AI) as a key driver for my career development, 
          aiming to bring transformative benefits to various industries. Throughout my career, I&apos;ve 
          successfully led multidisciplinary teams to create advanced communication solutions for military 
          and government clients. I am passionate about technology, innovation, and exploring AI&apos;s potential 
          to benefit not only defense but also other industries, consistently striving to deliver high-quality, 
          impactful solutions.
        </p>

        <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <span>51 years old</span>
          <span>+60 102369037</span>
          <span>adyaakob@gmail.com</span>
        </div>

        <div className="flex justify-center gap-4">
          <Link href="#experience">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-blue-400 transition-colors">
              View Experience
            </button>
          </Link>
          <Link href="#contact">
            <button className="px-6 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-blue-100 dark:hover:bg-blue-400/10 transition-colors">
              Contact Me
            </button>
          </Link>
          <button 
            onClick={handlePrint}
            className="px-6 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-blue-100 dark:hover:bg-blue-400/10 transition-colors"
          >
            Save as PDF
          </button>
        </div>
      </div>
    </section>
  )
}