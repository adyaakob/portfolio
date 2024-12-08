import Image from 'next/image'
import SectionTitle from '../SectionTitle'
import { getBasePath } from '@/lib/utils'
import DefaultProjectImage from '../DefaultProjectImage'

const basePath = getBasePath()

const selfFundedProjects = [
  {
    name: "AI-Integrated Project Management Dashboard",
    description: "Developing a prototype web-based dashboard that integrates various AI tools and LLM models to streamline project management tasks. The system leverages artificial intelligence for task automation, resource optimization, and intelligent project insights, demonstrating the potential of AI in project management workflows.",
    image: `${basePath}/images/projects-in-motion/ai-dashboard.jpg`
  },
  {
    name: "Mistral Canvas Dashboard Evaluation",
    description: "Evaluating Mistral's Canvas capabilities in code visualization, document editing, and collaborative features, comparing it directly with ChatGPT Canvas and Claude Artifacts. This assessment focuses on practical development workflows and document manipulation capabilities.",
    image: `${basePath}/images/projects-in-motion/mistral-canvas.jpg`
  },
  {
    name: "AI Signal Integration for Automatic Trade Execution",
    description: "Developing an AI-driven tool to autonomously capture and execute signals from providers (e.g., Telegram), implementing NLP and automated order placement for seamless trading without human intervention.",
    image: `${basePath}/images/projects-in-motion/signal-integration.jpg`
  },
  {
    name: "AI Agent for Market and Competitor Analysis",
    description: "Planning a smart AI agent to track and analyze market and competitor trends in real-time. This project will use data scraping, NLP, and machine learning technologies to provide actionable insights for competitive advantage.",
    image: `${basePath}/images/projects-in-motion/market-analysis.jpg`
  },
  {
    name: "Windsurf vs Cursor AI IDE Comparison",
    description: "Conducting a dedicated comparison study between Windsurf and Cursor AI development environments, evaluating their unique approaches to AI-assisted coding, real-time suggestions, and developer workflow optimization. This analysis helps determine the most effective tool for modern development needs.",
    image: `${basePath}/images/projects-in-motion/windsurf-vs-cursor.jpg`
  },
  {
    name: "AI-Based IDE Evaluation",
    description: "Investigating cutting-edge AI-enhanced coding tools like VS Code + Cline, GitHub Copilot, Bolt.new, and Cursor AI to improve development efficiency and integrate AI insights directly into the coding process.",
    image: `${basePath}/images/projects-in-motion/ide-evaluation.jpg`
  },
  {
    name: "Personal Portfolio Website",
    description: "Building a dynamic, multi-page portfolio website with React Next.js, designed to be fully responsive and showcase expertise in modern web development technologies.",
    image: `${basePath}/images/projects-in-motion/portfolio-website.jpg`
  },
  {
    name: "LLM Model Evaluation",
    description: "Testing top AI models, including GPT-4o, o1-preview, Claude 3.5 Sonnet, and Gemini, to evaluate their capabilities in technical consultation, problem-solving, and language understanding, aiming to stay updated with the latest advancements in large language model technology.",
    image: `${basePath}/images/projects-in-motion/llm-evaluation.jpg`
  },
  {
    name: "Automated MT5 Trading Platform",
    description: "Created an automated trading system for MT5 with impressive returns (17% annual profit) using MQL5 and algorithmic trading strategies. The next phase focuses on refining risk management and optimizing drawdown, enhancing stability through advanced strategy adjustments.",
    image: `${basePath}/images/projects-in-motion/mt5-trading.jpg`
  },
  {
    name: "Low-Cost Drone Jammer for Military Applications",
    description: "Completed a feasibility study for a cost-effective drone jammer to meet critical military needs, exploring RF signal blocking and low-cost hardware solutions for effective, accessible defense.",
    image: `${basePath}/images/projects-in-motion/drone-jammer.jpg`
  }
];

const technicalConsultationProjects = [
  {
    name: "IoT Network Infrastructure Technical Consultation",
    description: "Provided technical consultation for IoT network infrastructure deployment, focusing on LoRaWAN technology. Conducted comprehensive technical proposal evaluations, including network architecture assessment, coverage planning, and hardware specifications. Analyzed commercial proposals for cost-effectiveness and technical feasibility, ensuring alignment with industry standards and client requirements.",
    image: `${basePath}/images/projects-in-motion/lorawan.jpg`
  },
  {
    name: "Web-based Marketing Platform for Indo Defence 2025",
    description: "Developing an innovative web-based marketing platform featuring AI-powered assistance, 4K-optimized product displays, and offline capabilities. The solution integrates local and cloud-based LLM models for intelligent product information retrieval, utilizing Next.js, Radix UI, and TypeScript for a robust exhibition-ready experience.",
    image: `${basePath}/images/projects-in-motion/indo-defence-2025.jpg`
  },
  {
    name: "Defence Product Marketing Material Design",
    description: "Creating comprehensive marketing materials for a new defence product launch at Indo Defence 2025. The project encompasses strategic branding, technical documentation, and visual storytelling through high-impact presentations and interactive product demonstrations, tailored for the defence industry audience.",
    image: `${basePath}/images/projects-in-motion/defence-marketing.jpg`
  },
  {
    name: "MyLAB Grant Application for UniKL",
    description: "Collaborating on a groundbreaking university-industry partnership with UniKL, providing technical expertise for a pre-commercialization initiative under the MyLAB grant. This project, shortlisted among 33 entries, leverages LIDAR and LoRa technologies to develop scalable, real-world solutions for industrial applications.",
    image: `${basePath}/images/projects-in-motion/mylab-grant.jpg`
  },
  {
    name: "Product Marketing Brochure Redesign",
    description: "Assisting a local company with a strategic review, update, and redesign of its product and marketing brochure. The project focuses on enhancing visual appeal, brand clarity, and customer engagement through graphic design, content strategy, and market research to create a brochure that effectively communicates value to the target audience.",
    image: `${basePath}/images/projects-in-motion/brochure-redesign.jpg`
  },
  {
    name: "PDRM Wearable Video Streaming Solution Analysis",
    description: "Conducting comprehensive market analysis for wearable video streaming solutions tailored to PDRM (POLIS) operational requirements. The study evaluates real-time streaming capabilities, secure data transmission, and integration with existing systems to propose optimal solutions for law enforcement applications.",
    image: `${basePath}/images/projects-in-motion/pdrm-analysis.jpg`
  },
  {
    name: "Quality Assurance for Rural Power Generation Solutions",
    description: "Developing a comprehensive quality assurance and improvement plan for a local company's remote power generation systems. The initiative focuses on elevating product standards, documentation, and processes to meet international market requirements for rural and off-grid electrification solutions.",
    image: `${basePath}/images/projects-in-motion/quality-assurance.jpg`
  }
];

export default function ProjectsInMotion() {
  return (
    <section id="projects-in-motion" className="pt-20 -mt-20">
      <div className="container mx-auto px-[25px]">
        <SectionTitle>Projects in Motion (2024)</SectionTitle>
        
        <p className="text-gray-700 dark:text-gray-300 mb-8 text-center max-w-3xl mx-auto">
          Discover my dynamic portfolio of innovative projects, where AI integration meets practical solutions. 
          From advanced LLM evaluations and AI-powered development tools to defense technology consulting 
          and automated trading systems, these initiatives reflect my commitment to pushing technological 
          boundaries while delivering tangible results. Each project showcases the intersection of emerging 
          technologies with real-world applications, demonstrating expertise in AI, software development, 
          and technical consultation.
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
                className="bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 print:shadow-none print:border print:border-gray-200"
              >
                <div className="relative h-48 mb-6 print:h-40 print:mb-4">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={40}
                      loading={index < 2 ? "eager" : "lazy"}
                      priority={index < 2}
                    />
                  ) : (
                    <DefaultProjectImage />
                  )}
                </div>
                <div className="px-6 pb-6 print:px-4 print:pb-4">
                  <h4 className="text-gray-900 dark:text-white font-bold text-xl mb-2 print:text-base">
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

        {/* Technology Exploration & Innovation Lab Section */}
        <div className="print:break-before-page">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Technology Exploration & Innovation Lab
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-3xl">
            Welcome to my personal innovation space where I actively explore emerging technologies through hands-on experimentation. 
            This lab serves as a testbed for evaluating cutting-edge tools, frameworks, and AI capabilities, 
            transforming theoretical concepts into practical applications. Each project represents a focused investigation 
            into specific technologies, helping me stay at the forefront of technological advancement while developing 
            real-world solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selfFundedProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 print:shadow-none print:border print:border-gray-200"
              >
                <div className="relative h-48 mb-6 print:h-40 print:mb-4">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={40}
                      loading={index < 2 ? "eager" : "lazy"}
                      priority={index < 2}
                    />
                  ) : (
                    <DefaultProjectImage />
                  )}
                </div>
                <div className="px-6 pb-6 print:px-4 print:pb-4">
                  <h4 className="text-gray-900 dark:text-white font-bold text-xl mb-2 print:text-base">
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
      </div>
    </section>
  )
}