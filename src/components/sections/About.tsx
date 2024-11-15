import Section from '../ui/Section'

export default function About() {
  return (
    <section id="about" className="pt-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-8 text-center">About Me</h2>
        
        <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
          Leading a team of 30+ engineers (electrical/electronics, RF, software engineering, 
          computer engineering, and mechanical & industrial engineering) on multiple portfolios, 
          specializing in:
        </p>

        <ul className="space-y-4 text-gray-700 dark:text-gray-300 mb-12">
          {[
            "Applying ISO 9001 to Product Development. Motivate and organize the team – to deliver on time and to budget.",
            "Defense Communications Solutions - Structure and challenge the team in building competitive technical proposals for prospective local and worldwide customers.",
            "Software Development Projects (embedded and applications - Windows & Android).",
            "Platform Integration Programs with aggressive delivery schedules (armored vehicles, naval ships).",
            "IVVQ. Lead the integration, verification, validation, and qualifications, in partnership with the main contractors, STRIDE and local universities.",
            "Product Qualification: capability & knowledge to perform Qualification of Products based on MIL-STD-810 and MIL-STD-461, in collaboration with SIRIM, MIMOS and Angkasa as well as international certification bodies (e.g Singapore and France)",
            "Product Industrialization: from Design to Manufacturing",
            "Military System Integration: Secure IP-Based radio network, Network Centric Operations (NCO), Internal and External Communications for armored vehicles and motherships, Strategic Communication Architecture for submarine.",
            "Conducting successful new product Field Trials, FAT, SAT & HAT with end-customers.",
            "End User Training: Get it right from start to finish and able to customize to meet requirements.",
            "Life Extension Program: technical and commercial assessment",
            "Proof of Concept (POC), develop and demonstrate the functionality to customer for better decision making.",
            "Participation in Defense Exhibitions (LIMA, DSA, MDIC, GPEC, IndoDefense, MILIPOL Paris, Eurosatuory)",
            "Product launching",
            "Skills and competencies enhancement for technical team",
            "Participation in student internship program (from local and overseas students)",
            "Knowledge sharing session with local universities",
            "Technology update session with existing customers"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-purple-600 dark:text-purple-400 mr-4 font-bold">{index + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="bg-gray-100 dark:bg-gray-800/50 p-8 rounded-lg border border-purple-200 dark:border-purple-400/20">
          <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4">Motivation</h3>
          <blockquote className="text-gray-700 dark:text-gray-300 text-lg italic">
            "Use our strengths, realize our weaknesses and formulate winning strategies - TunM"
          </blockquote>
        </div>
      </div>
    </section>
  )
} 