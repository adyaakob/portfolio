import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Innovation Platform',
    description: 'Enterprise-scale platform for managing R&D projects and innovation initiatives',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    image: '/project1.jpg',
    github: '#',
    demo: '#'
  },
  {
    title: 'Research Dashboard',
    description: 'Analytics dashboard for tracking research metrics and KPIs',
    technologies: ['Python', 'Django', 'D3.js'],
    image: '/project2.jpg',
    github: '#',
    demo: '#'
  },
  {
    title: 'Product Roadmap Tool',
    description: 'Strategic planning tool for product development lifecycle',
    technologies: ['Vue.js', 'Firebase', 'Tailwind'],
    image: '/project3.jpg',
    github: '#',
    demo: '#'
  }
]

export default function Projects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.demo}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 