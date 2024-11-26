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
} from '@/components/sections'

const WorldMap = dynamic(() => import('@/components/sections/WorldMap'), { ssr: false })

const ClientSideApp = dynamic(() => import('@/components/ClientSideApp'), {
  ssr: false
})

export default function Home() {
  return <ClientSideApp />
}