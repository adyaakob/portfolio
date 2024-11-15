import SectionTitle from '../SectionTitle'

const coursesData = [
  "AS 9100 REV D/ EN 9100:2016 Interpretation",
  "Basic Fire Fighting & Emergency Response Plan (ERP)",
  "Building Impactful Presentations with PowerPoint",
  "Business Model Canvas (BMC) and Setting Result-Oriented KPIs",
  "Combat Net Radio (CNR HF VHF) Operation Training for Managers",
  "Diplôme d'Études en Langue Française (DELF) A1",
  "Effective Root Cause Analysis (RCA)",
  "Performance and Motivation Workshop",
  "Project Risk Management and Compliance",
  "TRC9100 General and Technical Product Training",
  "VHF TRC9200 General and Technical Product Training"
]

export default function Courses() {
  return (
    <section id="courses" className="pt-20 -mt-20">
      <SectionTitle>Courses</SectionTitle>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {coursesData.map((course, index) => (
          <div 
            key={index} 
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800/80 transition-colors"
          >
            <p className="text-gray-700 dark:text-[#94A3B8]">
              {course}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
} 