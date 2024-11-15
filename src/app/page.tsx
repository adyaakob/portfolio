'use client'

import { useTheme } from 'next-themes'
import Navbar from '@/components/Navbar'
import PersonalInterests from '@/components/PersonalInterests'
import {
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Education,
  Certifications,
  Contact,
  Courses,
  ProjectsInMotion,
  ToolsTechnologies,
  References,
  Timeline,
  Methodology
} from '@/components/sections'

export default function Home() {
  const { theme } = useTheme()
  
  return (
    <main className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white print:bg-white print:text-black">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 space-y-16 print:space-y-8">
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Methodology />
        <Experience />
        <ProjectsInMotion />
        <Projects />
        <ToolsTechnologies />
        <Education />
        <Certifications />
        <Courses />
        <PersonalInterests />
        <References />
        <Contact />
      </div>
    </main>
  )
}