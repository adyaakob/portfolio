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
  Methodology,
  STETimeline,
  WorldMap
} from '@/components/sections'

export default function Home() {
  const { theme } = useTheme()
  
  return (
    <main className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white print:bg-white print:text-black">
      <Navbar />
      
      <div className="max-w-[21cm] mx-auto px-4 space-y-4 print:space-y-2 print:max-w-none print:px-0">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <WorldMap />
        <ProjectsInMotion />
        <Projects />
        <STETimeline />
        <ToolsTechnologies />
        <Education />
        <Certifications />
        <Methodology />
        <Courses />
        <PersonalInterests />
        <References />
        <Contact />
      </div>
    </main>
  )
}