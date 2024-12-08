import { Code2, Brain, Rocket } from 'lucide-react'

const skills = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Technical Leadership',
    description: 'Leading R&D teams and architecting solutions'
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Product Strategy',
    description: 'Developing product roadmaps and market analysis'
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Innovation Management',
    description: 'Driving research initiatives and innovation programs'
  }
]

export default function About() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
            With over 10 years of experience in R&D and product management, 
            I specialize in bridging the gap between technical innovation and 
            business strategy. My passion lies in transforming complex technical 
            challenges into successful market solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 