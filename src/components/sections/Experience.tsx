import Image from 'next/image'
import SectionTitle from '../SectionTitle'
import { getBasePath } from '@/lib/utils'

const basePath = getBasePath()

const getCompanyLogo = (company: string) => {
  switch (company) {
    case "Sapura Thales Electronics Sdn Bhd":
      return `${basePath}/images/companies/sapura-thales.jpg`;
    case "Sapura Thomson Radiocommunication Sdn. Bhd":
      return `${basePath}/images/companies/sapura-thomson.jpg`;
    case "Harris Corporation":
      return `${basePath}/images/companies/harris.jpg`;
    default:
      return `${basePath}/images/companies/thales-logo.jpg`;
  }
};

const getCompanyLogoStyle = (company: string) => {
  switch (company) {
    case "Sapura Thales Electronics Sdn Bhd":
      return "bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700";
    case "Sapura Thomson Radiocommunication Sdn. Bhd":
      return "bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700";
    case "Harris Corporation":
      return "bg-gradient-to-br from-red-500 to-red-600 dark:from-red-600 dark:to-red-700";
    default:
      return "bg-gradient-to-br from-gray-500 to-gray-600 dark:from-gray-600 dark:to-gray-700";
  }
};

const positions = [
  {
    title: "R&D General Manager",
    company: "Sapura Thales Electronics Sdn Bhd",
    type: "Full-time",
    period: "2020 - Jun 2024 · 4 yrs",
    location: "Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia",
    responsibilities: [
      "Post-MCO - Ensuring smooth ramp-up of RND activities after company re-open, and executing what was defined in the Business Continuation Plan (BCP)",
      "Adapting to the new normal and familiarize with remote working environments - driving businesses to automate as quickly as possible to ensure business continuity",
      "Motivate the team to maximize the use of 'brain' and focus on the cost-effective solution",
      "Managing supply chain, affected by the pandemic",
      "Maintaining zero '0' NCR for ISO audit"
    ]
  },
  {
    title: "R&D Head Of Department",
    company: "Sapura Thales Electronics Sdn Bhd",
    type: "Full-time",
    period: "2014 - 2019 · 5 yrs",
    responsibilities: [
      "Completed product development lifecycle (from design to manufacturing) for TRC5200, 1st tactical radio developed by 100% local engineers",
      "Managing schedule, budget and risks for sulf-funded projects and customer-funded program",
      "Defining product development roadmap strategic plan for the next 10 years",
      "Cascade down company's KPI to all staffs",
      "Continue exploring new business opportunities from overseas (Indonesia, Vietnam, Morocco, Timor Leste)",
      "Build a win-to-win collaboration with local suppliers with the intention to improve product quality and values",
      "Product marketing to the new local customers (POLIS, RMN)"
    ]
  },
  {
    title: "System Integration Manager",
    company: "Sapura Thales Electronics Sdn Bhd",
    type: "Full-time",
    period: "2010 - 2013 · 3 yrs",
    responsibilities: [
      "Completed the integration of Future Soldier System (FSS) under NCO Phase 1A Program",
      "Delivery, Deployment and User Acceptance of FSS within schedule and budget",
      "Exploring international market (product presentation, proposal, product evaluation and field trial)",
      "Technical solution to enhance Army Communication Program (ACP) capabilities under RMK 10 plan",
      "Technical solution for Navy Strategic Communication (for submarine)",
      "Technical solution to improve Navy legacy radios",
      "MIFV Comm-fit System Integration",
      "Communication solution for DEFTECH ADNAN (ACV 300)",
      "Product development (self-funded, program funded as well as subcontracting)",
      "Communication solution for 6x6 Armored Vehicle Communications Program",
      "Communication solution for SGPV Integrated Communication System (ICS) program",
      "Communication solution for the refurbishment of the SCORPION Armored Vehicle Program",
      "EMC Test for BUMAR Armored Vehicle Program",
      "Communication readiness site survey for PT91 PENDEKAR Main Battle Tank (MBT) Program",
      "Technical proposal for Army Tactical Electronic Warfare (EW) System",
      "Technical proposal for Malaysia Maritime Enforcement Agency (MMEA)"
    ]
  },
  {
    title: "Technical Manager",
    company: "Sapura Thales Electronics Sdn Bhd",
    type: "Full-time",
    period: "2008 - 2009 · 1 yr",
    responsibilities: [
      "Validation and verification of CNR10 main equipment and accessories. Fully complied with user expectations",
      "Communication Solution for AV8 Gempita",
      "Establish marketing materials including product brochures",
      "Establish Product Policy Roadmap",
      "Collaboration with main suppliers to customize critical product (e.g Rugged Laptop) to meet user requirements",
      "Transfer for Technology (TOT) strategic plan"
    ]
  },
  {
    title: "Senior Design Engineer (System Engineer)",
    company: "Sapura Thales Electronics Sdn Bhd",
    type: "Full-time",
    period: "2003 - 2007 · 4 yrs",
    responsibilities: [
      "Validation and verification of CNR9 main equipment and accessories. Fully complied with user expectations",
      "Multi Channel Radio System (MCRS) product evaluation with customers"
    ]
  },
  {
    title: "Design Engineer",
    company: "Sapura Thomson Radiocommunication Sdn. Bhd",
    type: "Full-time",
    period: "Aug 1997 - Dec 2002 · 5 yrs 5 mos",
    responsibilities: [
      "Completed the development of 1st generation of VHF tactical handheld TRC5100"
    ]
  },
  {
    title: "Preventive Maintenance Technician",
    company: "Harris Corporation",
    type: "Full-time",
    period: "1994 - Dec 1995 · 2 yrs",
    responsibilities: [
      "Semiconductor Division"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="pt-20 -mt-20">
      <SectionTitle>Experience</SectionTitle>

      <div className="space-y-12">
        {positions.map((position, index) => (
          <div key={index} className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-start gap-4 mb-6">
              <div className="relative w-16 h-16 flex-shrink-0">
                <div className={`absolute inset-0 rounded-full ${getCompanyLogoStyle(position.company)} p-0.5`}>
                  <div className="rounded-full bg-white dark:bg-gray-800 w-full h-full flex items-center justify-center">
                    <Image
                      src={getCompanyLogo(position.company)}
                      alt={position.company}
                      width={64}
                      height={64}
                      className="object-contain p-2 rounded-full"
                      quality={85}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{position.title}</h3>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-blue-600 dark:text-blue-400">{position.company} · {position.type}</span>
                  <span className="text-gray-500 dark:text-gray-400">{position.period}</span>
                </div>
                {position.location && (
                  <p className="text-gray-600 dark:text-gray-300 mt-1">{position.location}</p>
                )}
              </div>
            </div>

            <div className="space-y-3 pl-20">
              {position.responsibilities.map((responsibility, rIndex) => (
                <div key={rIndex} className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1.5">•</span>
                  <p className="text-gray-600 dark:text-gray-300">{responsibility}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}