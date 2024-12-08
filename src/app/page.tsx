'use client'

import dynamic from 'next/dynamic'
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
  SkillsGraph,
} from '@/components/sections'

const WorldMap = dynamic(() => import('@/components/sections/WorldMap'), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-[21cm] mx-auto px-4 space-y-4 print:space-y-2 print:max-w-none print:px-0">
        <Hero />
        <About />
        <SkillsGraph />
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