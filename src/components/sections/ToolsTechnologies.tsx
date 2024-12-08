import Image from 'next/image'
import SectionTitle from '../SectionTitle'
import { getBasePath } from '@/lib/utils'

interface ToolCategory {
  title: string;
  tools: {
    name: string;
    logo: string;
  }[];
}

const toolsData: ToolCategory[] = [
  {
    title: "Productivity Suites",
    tools: [
      { name: "Office 365", logo: "/images/tools/office365.png" },
      { name: "Canva", logo: "/images/tools/canva.png" },
      { name: "Gamma", logo: "/images/tools/gamma.png" },
    ]
  },
  {
    title: "Code Editors & Development Tools",
    tools: [
      { name: "Visual Studio Code", logo: "/images/tools/vscode.png" },
      { name: "Cline", logo: "/images/tools/cline.png" },
      { name: "Cursor", logo: "/images/tools/cursor.png" },
      { name: "Bolt.new", logo: "/images/tools/bolt.png" },
      { name: "GitHub Copilot", logo: "/images/tools/github-copilot.png" },
      { name: "GitHub", logo: "/images/tools/github.png" },
      { name: "V0 by Vercel", logo: "/images/tools/v0.png" },
      { name: "Windsurf", logo: "/images/tools/windsurf.png" },
    ]
  },
  {
    title: "Content Management Systems (CMS)",
    tools: [
      { name: "WordPress", logo: "/images/tools/wordpress.png" },
      { name: "Joomla", logo: "/images/tools/joomla.png" },
    ]
  },
  {
    title: "Financial Trading Platforms",
    tools: [
      { name: "MT4", logo: "/images/tools/mt4.png" },
      { name: "MT5", logo: "/images/tools/mt5.png" },
      { name: "TradingView", logo: "/images/tools/tradingview.png" },
      { name: "Forex Tester", logo: "/images/tools/forex-tester.png" },
    ]
  },
  {
    title: "Design & Creative Tools",
    tools: [
      { name: "Photoshop", logo: "/images/tools/photoshop.png" },
      { name: "Lightroom", logo: "/images/tools/lightroom.png" },
      { name: "DALL·E 3", logo: "/images/tools/dalle.png" },
      { name: "Midjourney", logo: "/images/tools/midjourney.png" },
    ]
  },
  {
    title: "Large Language Models (LLMs) & AI Tools",
    tools: [
      { name: "OpenAI ChatGPT", logo: "/images/tools/chatgpt.png" },
      { name: "Anthropic Claude", logo: "/images/tools/claude.png" },
      { name: "Perplexity", logo: "/images/tools/perplexity.png" },
      { name: "Notebook LLM", logo: "/images/tools/notebook-llm.png" },
      { name: "Scite", logo: "/images/tools/scite.png" },
      { name: "Microsoft Copilot", logo: "/images/tools/copilot.png" },
    ]
  },
  {
    title: "Specific LLM Versions",
    tools: [
      { name: "GPT-4", logo: "/images/tools/gpt4.png" },
      { name: "o1-preview", logo: "/images/tools/o1-preview.png" },
      { name: "Claude 3.5 Sonnet", logo: "/images/tools/claude-sonnet.png" },
      { name: "Claude 3.5 Haiku", logo: "/images/tools/claude-haiku.png" },
      { name: "Ollama", logo: "/images/tools/ollama.png" },
      { name: "Gemini", logo: "/images/tools/gemini.png" },
    ]
  },
];

export default function ToolsTechnologies() {
  const basePath = getBasePath()

  return (
    <section id="tools" className="pt-20 -mt-20">
      <SectionTitle>Tools & Technologies</SectionTitle>
      
      <div className="max-w-6xl mx-auto space-y-12">
        {toolsData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap justify-center gap-6">
              {category.tools.map((tool, toolIndex) => (
                <div 
                  key={toolIndex}
                  className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:shadow-md transition-all duration-300 w-[150px]"
                >
                  <div className="relative w-16 h-16 mb-3">
                    <Image
                      src={`${basePath}${tool.logo}`}
                      alt={`${tool.name} logo`}
                      fill
                      className="object-contain tool-logo"
                      sizes="64px"
                      priority={categoryIndex === 0 && toolIndex < 3}
                    />
                  </div>
                  <span className="text-sm text-center text-gray-700 dark:text-gray-300 font-medium">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 