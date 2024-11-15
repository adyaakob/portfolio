import Image from 'next/image'
import SectionTitle from '../SectionTitle'

const projectsInMotionData = [
  {
    title: "Technical Consultation",
    projects: [
      {
        name: "MyLAB Grant Application for UniKL",
        description: "Collaborating on a groundbreaking university-industry partnership with UniKL, providing technical expertise for a pre-commercialization initiative under the MyLAB grant. This project, shortlisted among 33 entries, leverages LIDAR and LoRa technologies to develop scalable, real-world solutions for industrial applications.",
        image: "/portfolio/images/projects-in-motion/mylab-grant.jpg"
      },
      {
        name: "Product Marketing Brochure Redesign",
        description: "Assisting a local company with a strategic review, update, and redesign of its product and marketing brochure. The project focuses on enhancing visual appeal, brand clarity, and customer engagement through graphic design, content strategy, and market research to create a brochure that effectively communicates value to the target audience.",
        image: "/portfolio/images/projects-in-motion/brochure-redesign.jpg"
      }
    ]
  },
  {
    title: "Self-Funded Projects",
    projects: [
      {
        name: "Low-Cost Drone Jammer for Military Applications",
        description: "Completed a feasibility study for a cost-effective drone jammer to meet critical military needs, exploring RF signal blocking and low-cost hardware solutions for effective, accessible defense.",
        image: "/portfolio/images/projects-in-motion/drone-jammer.jpg"
      },
      {
        name: "Automated MT5 Trading Platform",
        description: "Created an automated trading system for MT5 with impressive returns (17% annual profit) using MQL5 and algorithmic trading strategies. The next phase focuses on refining risk management and optimizing drawdown, enhancing stability through advanced strategy adjustments.",
        image: "/portfolio/images/projects-in-motion/mt5-trading.jpg"
      },
      {
        name: "LLM Model Evaluation",
        description: "Testing top AI models, including GPT-4o, o1-preview, Claude 3.5 Sonnet, and Gemini, to evaluate their capabilities in technical consultation, problem-solving, and language understanding, aiming to stay updated with the latest advancements in large language model technology.",
        image: "/portfolio/images/projects-in-motion/llm-evaluation.jpg"
      },
      {
        name: "Personal Portfolio Website",
        description: "Building a dynamic, multi-page portfolio website with React Next.js, designed to be fully responsive and showcase expertise in modern web development technologies.",
        image: "/portfolio/images/projects-in-motion/portfolio-website.jpg"
      },
      {
        name: "AI-Based IDE Evaluation",
        description: "Investigating cutting-edge AI-enhanced coding tools like VS Code + Cline, GitHub Copilot, Bolt.new, and Cursor AI to improve development efficiency and integrate AI insights directly into the coding process.",
        image: "/portfolio/images/projects-in-motion/ide-evaluation.jpg"
      },
      {
        name: "AI Agent for Market and Competitor Analysis",
        description: "Planning a smart AI agent to track and analyze market and competitor trends in real-time. This project will use data scraping, NLP, and machine learning technologies to provide actionable insights for competitive advantage.",
        image: "/portfolio/images/projects-in-motion/market-analysis.jpg"
      },
      {
        name: "AI Signal Integration for Automatic Trade Execution",
        description: "Developing an AI-driven tool to autonomously capture and execute signals from providers (e.g., Telegram), implementing NLP and automated order placement for seamless trading without human intervention.",
        image: "/portfolio/images/projects-in-motion/signal-integration.jpg"
      }
    ]
  }
]

import { getBasePath } from '@/lib/utils'

const basePath = getBasePath()

export default function ProjectsInMotion() {
  const technicalConsultationProjects = [
    {
      name: "MyLAB Grant Application for UniKL",
      description: "Collaborating on a groundbreaking university-industry partnership with UniKL, providing technical expertise for a pre-commercialization initiative under the MyLAB grant. This project, shortlisted among 33 entries, leverages LIDAR and LoRa technologies to develop scalable, real-world solutions for industrial applications.",
      image: `${basePath}/images/projects-in-motion/mylab-grant.jpg`
    },
    {
      name: "Product Marketing Brochure Redesign",
      description: "Assisting a local company with a strategic review, update, and redesign of its product and marketing brochure. The project focuses on enhancing visual appeal, brand clarity, and customer engagement through graphic design, content strategy, and market research to create a brochure that effectively communicates value to the target audience.",
      image: `${basePath}/images/projects-in-motion/brochure-redesign.jpg`
    }
  ];

  const selfFundedProjects = [
    {
      name: "Low-Cost Drone Jammer for Military Applications",
      description: "Completed a feasibility study for a cost-effective drone jammer to meet critical military needs, exploring RF signal blocking and low-cost hardware solutions for effective, accessible defense.",
      image: `${basePath}/images/projects-in-motion/drone-jammer.jpg`
    },
    {
      name: "Automated MT5 Trading Platform",
      description: "Created an automated trading system for MT5 with impressive returns (17% annual profit) using MQL5 and algorithmic trading strategies. The next phase focuses on refining risk management and optimizing drawdown, enhancing stability through advanced strategy adjustments.",
      image: `${basePath}/images/projects-in-motion/mt5-trading.jpg`
    },
    {
      name: "LLM Model Evaluation",
      description: "Testing top AI models, including GPT-4o, o1-preview, Claude 3.5 Sonnet, and Gemini, to evaluate their capabilities in technical consultation, problem-solving, and language understanding, aiming to stay updated with the latest advancements in large language model technology.",
      image: `${basePath}/images/projects-in-motion/llm-evaluation.jpg`
    },
    {
      name: "Personal Portfolio Website",
      description: "Building a dynamic, multi-page portfolio website with React Next.js, designed to be fully responsive and showcase expertise in modern web development technologies.",
      image: `${basePath}/images/projects-in-motion/portfolio-website.jpg`
    },
    {
      name: "AI-Based IDE Evaluation",
      description: "Investigating cutting-edge AI-enhanced coding tools like VS Code + Cline, GitHub Copilot, Bolt.new, and Cursor AI to improve development efficiency and integrate AI insights directly into the coding process.",
      image: `${basePath}/images/projects-in-motion/ide-evaluation.jpg`
    },
    {
      name: "AI Agent for Market and Competitor Analysis",
      description: "Planning a smart AI agent to track and analyze market and competitor trends in real-time. This project will use data scraping, NLP, and machine learning technologies to provide actionable insights for competitive advantage.",
      image: `${basePath}/images/projects-in-motion/market-analysis.jpg`
    },
    {
      name: "AI Signal Integration for Automatic Trade Execution",
      description: "Developing an AI-driven tool to autonomously capture and execute signals from providers (e.g., Telegram), implementing NLP and automated order placement for seamless trading without human intervention.",
      image: `${basePath}/images/projects-in-motion/signal-integration.jpg`
    }
  ];

  return (
    <section id="projects-in-motion" className="pt-20 -mt-20">
      <SectionTitle>Projects in Motion</SectionTitle>
      
      <p className="text-gray-700 dark:text-gray-300 mb-8 text-center max-w-3xl mx-auto">
        Explore my latest ventures where cutting-edge technology meets practical application, 
        covering diverse projects from advanced trading solutions to academic collaborations. 
        This section showcases completed, ongoing, and future-focused projects, all demonstrating 
        a commitment to exploring new technologies and staying at the forefront of innovation.
      </p>

      {/* Technical Consultation Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Technical Consultation
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technicalConsultationProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    // Fallback to a default image if the image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = `${basePath}/images/default-project.jpg`;
                  }}
                />
              </div>
              <div className="p-6">
                <h4 className="text-gray-900 dark:text-white font-bold text-xl mb-2">
                  {project.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Self-Funded Projects Section */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Self-Funded Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {selfFundedProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    // Fallback to a default image if the image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = `${basePath}/images/default-project.jpg`;
                  }}
                />
              </div>
              <div className="p-6">
                <h4 className="text-gray-900 dark:text-white font-bold text-xl mb-2">
                  {project.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}