'use client'

import Timeline from '../Timeline.tsx'
import { steProjects } from '@/data/timelineData.tsx'

export default function STEProjects() {
  return (
    <Timeline 
      items={steProjects}
      title="STE Projects Portfolio"
      id="ste-projects"
    />
  )
} 