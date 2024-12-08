import SectionTitle from '../SectionTitle'
import { 
  FaGraduationCap, 
  FaFire, 
  FaChartLine, 
  FaMicrochip, 
  FaLanguage,
  FaTools,
  FaBrain
} from 'react-icons/fa'

interface Course {
  title: string;
  icon: React.ElementType;
  category: string;
}

const coursesData: Course[] = [
  {
    title: "AS 9100 REV D/ EN 9100:2016 Interpretation",
    icon: FaTools,
    category: "Quality Management"
  },
  {
    title: "Basic Fire Fighting & Emergency Response Plan (ERP)",
    icon: FaFire,
    category: "Safety & Emergency"
  },
  {
    title: "Building Impactful Presentations with PowerPoint",
    icon: FaChartLine,
    category: "Professional Skills"
  },
  {
    title: "Business Model Canvas (BMC) and Setting Result-Oriented KPIs",
    icon: FaChartLine,
    category: "Business Strategy"
  },
  {
    title: "Combat Net Radio (CNR HF VHF) Operation Training for Managers",
    icon: FaMicrochip,
    category: "Technical Training"
  },
  {
    title: "Diplôme d'Études en Langue Française (DELF) A1",
    icon: FaLanguage,
    category: "Language"
  },
  {
    title: "Effective Root Cause Analysis (RCA)",
    icon: FaBrain,
    category: "Problem Solving"
  },
  {
    title: "Performance and Motivation Workshop",
    icon: FaGraduationCap,
    category: "Professional Development"
  },
  {
    title: "Project Risk Management and Compliance",
    icon: FaTools,
    category: "Project Management"
  },
  {
    title: "TRC9100 General and Technical Product Training",
    icon: FaMicrochip,
    category: "Technical Training"
  },
  {
    title: "VHF TRC9200 General and Technical Product Training",
    icon: FaMicrochip,
    category: "Technical Training"
  }
]

export default function Courses() {
  return (
    <section id="courses" className="pt-20 -mt-20">
      <SectionTitle>Courses</SectionTitle>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coursesData.map((course, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800/80 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/70 transition-colors">
                  {<course.icon className="w-6 h-6" />}
                </div>
                <div>
                  <span className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-1 block">
                    {course.category}
                  </span>
                  <h3 className="text-gray-900 dark:text-white font-medium">
                    {course.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}