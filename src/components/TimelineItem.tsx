import { LucideIcon } from 'lucide-react'

interface TimelineItemProps {
  year: number | string
  title: string
  category: string
  description: string
  icon: React.ReactNode
}

export default function TimelineItem({ 
  year, 
  title, 
  category, 
  description, 
  icon 
}: TimelineItemProps) {
  return (
    <div className="relative flex gap-8 mb-8 group">
      {/* Year bubble */}
      <div className="w-32 flex-shrink-0 flex items-center justify-end">
        <div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-semibold">
          {year}
        </div>
      </div>

      {/* Icon circle */}
      <div className="relative flex-shrink-0">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-0.5 bg-blue-500/20" />
        <div className="relative z-10 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-500/50 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
          {icon}
        </div>
      </div>

      {/* Content card */}
      <div className="flex-grow bg-white dark:bg-gray-800/50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 dark:border-gray-700/50">
        <div className="flex flex-col">
          <h3 className="text-base font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <span className="text-sm text-blue-500 font-medium">
            {category}
          </span>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
} 