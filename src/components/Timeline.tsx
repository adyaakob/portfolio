import TimelineItem from './TimelineItem.tsx'
import SectionTitle from './SectionTitle.tsx'
import { TimelineData } from '@/data/timelineData.tsx'

interface TimelineProps {
  items: TimelineData[]
  title: string
  id?: string
}

export default function Timeline({ items, title, id }: TimelineProps) {
  return (
    <section id={id} className="py-16">
      <SectionTitle>{title}</SectionTitle>
      
      <div className="max-w-4xl mx-auto mt-12 px-4">
        <div className="relative">
          {/* Main vertical line */}
          <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-500/50 to-blue-500/20" />

          {items.map((item, index) => (
            <TimelineItem 
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  )
}