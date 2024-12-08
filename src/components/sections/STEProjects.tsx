'use client'

import Timeline from '../Timeline'
import { steProjects } from '@/data/timelineData'

export default function STEProjects() {
  return (
    <Timeline 
      items={steProjects}
      title="STE Projects Portfolio"
      id="ste-projects"
    />
  )
} 