import SectionTitle from '../SectionTitle'

const skillsData = {
  "Technical Leadership": [
    "Research & Development Program Management",
    "Systems Engineering & Platform Integration",
    "Military Standard (MIL-STD) Compliance & Qualification",
    "Product Development Lifecycle Management",
    "Software Development & Architecture Design"
  ],
  "Project Management": [
    "Strategic Project Planning & Execution",
    "Budget Planning & Resource Allocation",
    "Risk Assessment & Mitigation Strategies",
    "ISO 9001:2015 Quality Management",
    "Industrial Process Optimization"
  ],
  "Technical Expertise": [
    "Radio Communication Systems Design",
    "Tactical Network Architecture",
    "Military Platform Integration",
    "System Performance Analysis",
    "Technical Documentation & Specifications",
    "Integration, Verification, Validation & Qualification (IVVQ)"
  ],
  "Business Development": [
    "Technical Proposal Development",
    "Competitive Market Analysis",
    "Product Strategy & Positioning",
    "Technical Marketing Content Creation",
    "Client Requirements Analysis"
  ]
}

export default function Skills() {
  const skillCategories = [
    {
      title: "Technical Leadership",
      skills: [
        "Research & Development Program Management",
        "Systems Engineering & Platform Integration",
        "Military Standard (MIL-STD) Compliance & Qualification",
        "Product Development Lifecycle Management",
        "Software Development & Architecture Design"
      ]
    },
    {
      title: "Project Management",
      skills: [
        "Strategic Project Planning & Execution",
        "Budget Planning & Resource Allocation",
        "Risk Assessment & Mitigation Strategies",
        "ISO 9001:2015 Quality Management",
        "Industrial Process Optimization"
      ]
    },
    {
      title: "Technical Expertise",
      skills: [
        "Radio Communication Systems Design",
        "Tactical Network Architecture",
        "Military Platform Integration",
        "System Performance Analysis",
        "Technical Documentation & Specifications",
        "Integration, Verification, Validation & Qualification (IVVQ)"
      ]
    },
    {
      title: "Business Development",
      skills: [
        "Technical Proposal Development",
        "Competitive Market Analysis",
        "Product Strategy & Positioning",
        "Technical Marketing Content Creation",
        "Client Requirements Analysis"
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900 print:py-2 print:bg-transparent print:break-after-page">
      <div className="container mx-auto px-4">
        <SectionTitle>Professional Skills</SectionTitle>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 print:gap-3 print:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm print:p-2 print:shadow-none print:bg-transparent"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white print:text-sm print:mb-1">
                {category.title}
              </h3>
              <ul className="space-y-2 print:space-y-0.5">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-center text-gray-600 dark:text-gray-400 print:text-xs print:leading-tight"
                  >
                    <span className="mr-2 print:mr-1">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 