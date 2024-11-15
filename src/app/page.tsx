'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'

// Break down into components for better maintainability
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Education from '@/components/sections/Education'
import Certifications from '@/components/sections/Certifications'
import Contact from '@/components/sections/Contact'
import PrintButton from '@/components/PrintButton'
import Courses from '@/components/sections/Courses'
import ProjectsInMotion from '@/components/sections/ProjectsInMotion'

export default function Home() {
  const { theme, systemTheme } = useTheme()
  
  // Add these console logs
  console.log('Current theme:', theme)
  console.log('System theme:', systemTheme)
  console.log('localStorage theme:', typeof window !== 'undefined' ? localStorage.getItem('theme') : null)

  return (
    <main className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white print:bg-white print:text-black">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 space-y-16 print:space-y-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <ProjectsInMotion />
        <Projects />
        <Education />
        <Courses />
        <Certifications />
        <Contact />
        <div className="print:hidden">
          <PrintButton />
        </div>
      </div>
    </main>
  )
}