import Section from '../ui/Section'

export default function About() {
  return (
    <section id="about" className="py-8 mt-16 print:pt-4 print:pb-2">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-purple-600 dark:text-purple-400 print:text-xl print:mb-2">
          About Me
        </h2>
        
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed print:text-sm print:leading-tight">
          With more than two decades of experience as an engineering leader, I have managed diverse teams 
          of over 30 engineers across various disciplines. My expertise spans electrical systems, RF technology, 
          software development, and mechanical engineering. Additionally, my interest in Artificial Intelligence (AI) 
          allows me to apply my past knowledge to explore new opportunities, leveraging innovation not only in 
          defense communications but also in other industries.
        </p>
      </div>
    </section>
  )
}