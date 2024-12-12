'use client'

type TimelineEvent = {
  year: string
  title: string
}

const careerEvents: TimelineEvent[] = [
  {
    year: '2024',
    title: 'Tech Consultant'
  },
  {
    year: '2020',
    title: 'R&D GM'
  },
  {
    year: '2014',
    title: 'R&D HOD'
  },
  {
    year: '2010',
    title: 'Sys Integ Mgr'
  },
  {
    year: '2010',
    title: 'Tech Mgr'
  },
  {
    year: '2003',
    title: 'System Egr'
  },
  {
    year: '1997',
    title: 'Design Egr'
  }
]

export default function CVCareerTimeline() {
  return (
    <div>
      <h2 className="text-[14px] font-medium text-[#2E5077] uppercase mb-4">Career Timeline</h2>
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
        <div className="relative">
          {/* Horizontal line */}
          <div className="absolute w-full h-[2px] bg-[#2E5077] top-[15px]" />
          
          {/* Timeline points */}
          <div className="flex justify-between relative">
            {careerEvents.map((event, index) => (
              <div key={event.year} className="flex flex-col items-center">
                <div className="w-3 h-3 bg-[#2E5077] rounded-full relative z-10" />
                <span className="text-[8px] mt-1 font-medium text-[#2E5077]">{event.year}</span>
                <span className="text-[7px] text-[#5D6975]">{event.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
