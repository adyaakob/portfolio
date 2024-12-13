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
const CareerTimeline = dynamic(() => import('@/components/sections/CareerTimeline'), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="max-w-[21cm] mx-auto px-4 print:max-w-none print:px-0">
        <Hero>
          <div className="flex justify-between items-center">
            <Contact />
            <a
              href="/cv/cv-ahmad-dahalan-yaakob.pdf"
              className="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors"
              download
            >
              Download CV
            </a>
            <a
              href="/cv"
              className="px-4 py-2 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-colors"
            >
              View My CV
            </a>
          </div>
        </Hero>
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-16 px-6 mb-16 rounded-xl shadow-lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-center">
              About My Professional Journey
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                This portfolio showcases my professional journey, skills, and projects. 
                It provides a comprehensive view of my technical expertise and professional experiences.
              </p>
              <p className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                🚀 I am actively seeking new challenges and opportunities to grow. 
                My passion for technology, especially in Artificial Intelligence, drives me to continuously learn and innovate.
              </p>
              <p className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                💡 I believe my expertise in AI can create significant value in future technological landscapes, 
                offering innovative solutions to complex problems across various industries.
              </p>
              <p className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                🤝 I am open to collaboration and excited to connect with potential employers, 
                partners, or projects that align with my skills and career aspirations.
              </p>
            </div>
          </div>
        </section>
        <div className="mb-24">
        </div>
        <div className="space-y-8 print:space-y-2">
          <About />
          <hr className="border-gray-200 dark:border-gray-700 my-8" />
          {/* <CareerTimeline /> */}
          <SkillsGraph />
          <hr className="border-gray-200 dark:border-gray-700 my-8" />
          <Skills />
          <hr className="border-gray-200 dark:border-gray-700 my-8" />
          <Experience />
          <hr className="border-gray-200 dark:border-gray-700 my-8" />
          <WorldMap />
          <hr className="border-gray-200 dark:border-gray-700 my-8" />
          <ProjectsInMotion />
          <hr className="border-gray-200 dark:border-gray-700 my-8" />
          <Projects />
          <hr className="border-gray-200 dark:border-gray-700 my-8" />
          <STETimeline />
          <hr className="border-gray-200 dark:border-gray-700 my-8" />
          <ToolsTechnologies />
          <hr className="border-gray-200 dark:border-gray-700 my-8" />
          <Education />
          <hr className="border-gray-200 dark:border-gray-700 my-8" />
          <Certifications />
          <hr className="border-gray-200 dark:border-gray-700 my-8" />
          <Methodology />
          <hr className="border-gray-200 dark:border-gray-700 my-8" />
          <Courses />
          <hr className="border-gray-200 dark:border-gray-700 my-8" />
          <PersonalInterests />
          <hr className="border-gray-200 dark:border-gray-700 my-8" />
          <References />
          <hr className="border-gray-200 dark:border-gray-700 my-8" />
          <Contact className="" />
        </div>
      </div>
    </main>
  )
}