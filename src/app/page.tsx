'use client'

import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'
import Navbar from '@/components/Navbar'
import PersonalInterests from '@/components/PersonalInterests'
import ClientSideApp from '@/components/ClientSideApp'
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
} from '@/components/sections'

const WorldMap = dynamic(() => import('@/components/sections/WorldMap'), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen">
      <ClientSideApp>
        <div className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-purple-600 dark:text-purple-400">
              Skills Visualization
            </h2>
            <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg">
              <p className="text-center text-gray-800 dark:text-gray-200">
                Testing visibility of this section
              </p>
            </div>
          </div>
        </div>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Courses />
        <ProjectsInMotion />
        <ToolsTechnologies />
        <References />
        <Methodology />
        <STETimeline />
      </ClientSideApp>
    </main>
  )
}