import { FaBriefcase } from 'react-icons/fa';

const timelineData = [
  {
    period: "2020 - 2024",
    role: "R&D General Manager",
    company: "Sapura Thales Electronics"
  },
  {
    period: "2015 - 2020",
    role: "R&D Head Of Department",
    company: "Sapura Thales Electronics"
  },
  {
    period: "2010 - 2015",
    role: "System Integration Manager",
    company: "Sapura Thales Electronics"
  },
  {
    period: "2006 - 2010",
    role: "Technical Manager",
    company: "Sapura Thales Electronics"
  },
  {
    period: "2003 - 2006",
    role: "Senior Design Engineer (System Engineer)",
    company: "Sapura Thales Electronics"
  },
  {
    period: "2000 - 2003",
    role: "Design Engineer",
    company: "Sapura Thales Electronics"
  },
  {
    period: "1998 - 2000",
    role: "Preventive Maintenance Technician",
    company: "Harris Corporation"
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 print:bg-white print:py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-600 dark:text-purple-400 print:text-black print:mb-4">
          Career Timeline
        </h2>

        <div className="max-w-3xl mx-auto">
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex gap-6 pb-6 print:pb-3 print:gap-4 group">
              {/* Vertical line */}
              {index !== timelineData.length - 1 && (
                <div className="absolute left-[2.25rem] top-8 w-0.5 h-full bg-purple-200 dark:bg-purple-900 print:bg-gray-300 print:left-6" />
              )}

              {/* Timeline content */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-10 h-10 print:w-8 print:h-8 rounded-full bg-purple-100 dark:bg-purple-900/50 print:bg-gray-100 flex items-center justify-center">
                  <FaBriefcase className="w-4 h-4 text-purple-600 dark:text-purple-400 print:text-gray-600" />
                </div>
                <div className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 print:text-gray-600 print:text-xs whitespace-nowrap">
                  {item.period}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800/50 rounded-lg p-4 print:p-2 shadow-md hover:shadow-lg transition-shadow print:shadow-none print:border print:border-gray-200 flex-grow">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white print:text-black mb-1">
                  {item.role}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 print:text-gray-600 font-medium text-sm">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
