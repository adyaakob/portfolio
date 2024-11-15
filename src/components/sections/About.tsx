import Section from '../ui/Section'

export default function About() {
  return (
    <section id="about" className="pt-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-8 text-center">About Me</h2>
        
        <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
          As a seasoned engineering leader, I bring over two decades of expertise in managing diverse teams 
          of 30+ engineers across multiple disciplines. My comprehensive experience spans electrical systems, 
          RF technology, software development, and mechanical engineering, driving innovation in defense 
          communications and military technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            {
              title: "Product Development Excellence",
              description: "Spearheading ISO 9001-compliant product development initiatives, ensuring on-time delivery and budget optimization while maintaining the highest quality standards."
            },
            {
              title: "Defense Communications Solutions",
              description: "Architecting competitive technical proposals for global defense clients, combining innovative solutions with strategic thinking to meet complex military requirements."
            },
            {
              title: "Software Innovation",
              description: "Leading full-cycle development of embedded systems and applications across Windows & Android platforms, focusing on performance, security, and reliability."
            },
            {
              title: "Military Integration Expertise",
              description: "Managing sophisticated platform integration programs for armored vehicles and naval ships, delivering mission-critical solutions under aggressive timelines."
            },
            {
              title: "Defense Exhibitions & Marketing",
              description: "Actively participated in defense exhibitions, showcasing cutting-edge solutions and building relationships with potential customers and industry partners."
            },
            {
              title: "Customer Engagement",
              description: "Worked directly with customers to understand their needs and problem statements, offering tailored solutions to meet specific requirements."
            },
            {
              title: "Proposal & Tendering",
              description: "Contributed as a core team member in preparing proposals and participating in the tendering process for defense projects, collaborating closely with senior leadership and technical teams to ensure successful submissions."
            },
            {
              title: "Team Development & Knowledge Sharing",
              description: "Led skills and competencies enhancement for the technical team, participated in student internship programs (both local and overseas), conducted knowledge sharing sessions with local universities, and organized technology update sessions for existing customers."
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800/50 dark:to-gray-800/30 p-8 rounded-lg border border-purple-200 dark:border-purple-400/20">
          <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4 text-center">Leadership Philosophy</h3>
          <blockquote className="text-gray-700 dark:text-gray-300 text-lg italic text-center">
            &ldquo;Use our strengths, realize our weaknesses and formulate winning strategies - TunM&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}