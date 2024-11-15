const experiences = [
  {
    company: 'Tech Innovation Corp',
    position: 'Head of R&D',
    period: '2020 - Present',
    description: [
      'Led a team of 20+ researchers and engineers in developing cutting-edge technologies',
      'Managed $5M annual research budget and delivered 3 major product innovations',
      'Established strategic partnerships with leading research institutions'
    ]
  },
  {
    company: 'Product Labs',
    position: 'Senior Product Manager',
    period: '2017 - 2020',
    description: [
      'Drove product strategy and roadmap for enterprise SaaS platform',
      'Increased user engagement by 150% through data-driven improvements',
      'Launched 5 major features that generated $2M in additional revenue'
    ]
  },
  {
    company: 'Innovation Startup',
    position: 'Technical Product Manager',
    period: '2015 - 2017',
    description: [
      'Developed MVP for AI-powered analytics platform',
      'Coordinated cross-functional teams to deliver product releases',
      'Secured $1.5M in seed funding through product demonstrations'
    ]
  }
]

export default function Experience() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Professional Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li 
                    key={i}
                    className="text-gray-600 dark:text-gray-300 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 dark:before:text-blue-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 