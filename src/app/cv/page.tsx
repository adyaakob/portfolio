'use client'

import Link from 'next/link'
import Image from 'next/image'
import { getBasePath } from '@/lib/utils'
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCertificate, FaPhone, FaGithub, FaGlobe, 
         FaPython, FaReact, FaAws, FaDocker, FaDownload } from 'react-icons/fa'
import { SiTensorflow, SiKubernetes, SiAzuredevops, SiJira } from 'react-icons/si'
import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'

const CVCareerTimeline = dynamic(() => import('@/components/sections/CVCareerTimeline'), { ssr: false })

export default function CV() {
  const basePath = getBasePath()
  const cvRef = useRef<HTMLDivElement>(null)

  const downloadCV = async () => {
    if (typeof window === 'undefined') return;
    
    const html2pdf = (await import('html2pdf.js')).default;
    
    if (!cvRef.current) return;

    const element = cvRef.current;
    const opt = {
      margin: 0,
      filename: 'Ahmad_Dahalan_CV.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        letterRendering: true,
        logging: true,  // Enable logging for debugging
        width: cvRef.current.offsetWidth,  // Ensure width matches the element
        height: cvRef.current.offsetHeight,  // Ensure height matches the element
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4',
        orientation: 'portrait' 
      }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="fixed top-4 left-4 z-50 flex gap-4">
        <Link 
          href="/"
          className="px-4 py-2 bg-white text-black border border-gray-200 rounded-sm hover:bg-gray-50 transition-colors"
        >
          ← Back
        </Link>
        <a
          href="/cv/cv-ahmad-dahalan-yaakob.pdf"
          className="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors flex items-center gap-2"
          download
        >
          <FaDownload className="text-sm" />
          Download CV
        </a>
      </div>

      {/* Main container */}
      <div ref={cvRef} className="relative mx-auto mt-16 bg-white shadow-lg" style={{ width: '210mm', height: '297mm' }}>
        {/* Content area */}
        <div className="absolute inset-0 flex">
          {/* Left column */}
          <div className="w-[60%] p-[5mm] pr-[5mm]">
            {/* Header with profile */}
            <div className="flex items-start gap-4 mb-12">
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Ahmad Dahalan"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-[20px] font-medium text-[#2E5077] mb-2">Ahmad Dahalan Bin Yaakob</h1>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 text-[10px] bg-[#4A89DC] text-white rounded">Military Communications</span>
                  <span className="px-2 py-0.5 text-[10px] bg-[#37BC9B] text-white rounded">Systems Integration</span>
                  <span className="px-2 py-0.5 text-[10px] bg-[#967ADC] text-white rounded">R&D Strategic Leader</span>
                  <span className="px-2 py-0.5 text-[10px] bg-[#F6BB42] text-white rounded">Product Design</span>
                  <span className="px-2 py-0.5 text-[10px] bg-[#4B89DC] text-white rounded">AI Technology</span>
                  <span className="px-2 py-0.5 text-[10px] bg-[#D770AD] text-white rounded">Platform Integration</span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-8">
              <h2 className="text-[14px] font-medium text-[#2E5077] uppercase mb-2">Professional Summary</h2>
              <p className="text-[11px] leading-relaxed text-gray-700 dark:text-gray-700">
                An experienced defense technology leader with 20+ years of expertise in military communications and systems integration. Proven track record in driving complete product lifecycles from concept to deployment, specializing in tactical radio systems and military-grade communications infrastructure. Demonstrates mastery in Integration, Verification, Validation & Qualification (IVVQ) processes, while leading strategic R&D initiatives. Currently expanding capabilities in software development and artificial intelligence applications.
              </p>
            </div>

            {/* Career Timeline */}
            <div className="mb-2">
              <CVCareerTimeline />
            </div>

            {/* Experience Section */}
            <div className="mb-2">
              <h2 className="text-[14px] font-medium text-[#2E5077] uppercase mb-2">Experience</h2>
              <div className="space-y-2">
                <div>
                  <h3 className="text-[12px] font-medium text-[#2E5077] mb-0.5">Technical Project Manager</h3>
                  <p className="text-[11px] text-gray-700 dark:text-gray-700 mb-0.5">R&D and Business Development</p>
                  <ul className="text-[11px] space-y-0.5 text-black dark:text-black list-disc pl-4">
                    <li className="text-black dark:text-black">Spearheaded R&D initiatives as R&D Manager, driving technological innovation and product development</li>
                    <li className="text-black dark:text-black">Led integration of military communication systems</li>
                    <li className="text-black dark:text-black">Managed complex technical projects and IVVQ processes</li>
                    <li className="text-black dark:text-black">Developed strategic business solutions</li>
                    <li className="text-black dark:text-black">Supervised cross-functional engineering teams</li>
                    <li className="text-black dark:text-black">Successfully managed multiple concurrent projects with budgets exceeding $5M</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[12px] font-medium text-[#2E5077] mb-0.5">Systems Engineering Lead</h3>
                  <p className="text-[11px] text-gray-700 dark:text-gray-700 mb-0.5">Defense Systems Integration</p>
                  <ul className="text-[11px] space-y-0.5 text-black dark:text-black list-disc pl-4">
                    <li className="text-black dark:text-black">Directed R&D initiatives and coordinated cross-functional teams</li>
                    <li className="text-black dark:text-black">Managed tender submissions and led proposal development</li>
                    <li className="text-black dark:text-black">Developed technical solutions for defense projects</li>
                    <li className="text-black dark:text-black">Led system integration and validation processes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Projects Section */}
            <div>
              <h2 className="text-[14px] font-medium text-[#2E5077] uppercase mb-2">KEY PROJECTS</h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 relative">
                      <Image
                        src="/images/cv/walkie-talkies.png"
                        alt="Walkie Talkie icon"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="text-blue-700 font-medium text-xs">TRC5200 Development</h4>
                  </div>
                  <p className="text-xs text-gray-600">First locally engineered tactical radio, reducing dependency on foreign technology by 60%</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 relative">
                      <Image
                        src="/images/cv/soldier.png"
                        alt="Soldier icon"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="text-green-700 font-medium text-xs">Future Soldier System</h4>
                  </div>
                  <p className="text-xs text-gray-600">Led development of FSS for Malaysian Army's Network Centric Operations, enhancing battlefield coordination through soldier-as-sensor capability</p>
                </div>
              </div>
            </div>

            {/* Professional Development */}
            <div className="mt-2">
              <h2 className="text-[14px] font-medium text-[#2E5077] uppercase mb-2">Professional Development</h2>
              <ul className="text-[11px] space-y-1 text-black dark:text-black list-disc pl-4">
                <li className="text-black dark:text-black">Currently expanding expertise in AI and software development</li>
                <li className="text-black dark:text-black">Actively developing web development skills</li>
                <li className="text-black dark:text-black">Pursuing creative design capabilities</li>
              </ul>
              <p className="text-[11px] leading-tight text-black dark:text-black bg-yellow-100 px-2 py-1 rounded">
                Visit my portfolio page for more details.
              </p>
            </div>

          </div>

          {/* Right column */}
          <div className="w-[40%] bg-gray-50 p-[5mm] pl-[5mm]">
            {/* Contact Information */}
            <div className="text-right mb-6">
              <div className="flex items-center justify-end gap-1 mb-1">
                <span className="text-[11px] text-gray-700 dark:text-gray-700">+60 102369037</span>
                <FaPhone className="text-[#2E5077] text-[12px]" />
              </div>
              <div className="flex items-center justify-end gap-1 mb-1">
                <span className="text-[11px] text-gray-700 dark:text-gray-700">adyaakob@gmail.com</span>
                <FaEnvelope className="text-[#2E5077] text-[12px]" />
              </div>
              <div className="flex items-center justify-end gap-1 mb-1">
                <span className="text-[11px] text-gray-700 dark:text-gray-700">linkedin.com/in/ahmaddahalan</span>
                <FaLinkedin className="text-[#2E5077] text-[12px]" />
              </div>
              <div className="flex items-center justify-end gap-1 mb-1">
                <span className="text-[11px] text-gray-700 dark:text-gray-700">github.com/adyaakob</span>
                <FaGithub className="text-[#2E5077] text-[12px]" />
              </div>
              <div className="flex items-center justify-end gap-1">
                <Link 
                  href="adyaakob.github.io/portfolio"
                  target="_blank"
                  className="text-[11px] text-blue-600 hover:text-blue-800 font-medium bg-blue-50 px-2 py-1 rounded-full flex items-center gap-1 transition-colors"
                >
                  <FaGlobe className="text-[12px]" />
                  adyaakob.github.io/portfolio
                </Link>
              </div>
            </div>

            {/* Education */}
            <div className="mb-4">
              <h2 className="text-[14px] font-medium text-[#2E5077] uppercase mb-2">Education</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-8 h-8 relative flex-shrink-0">
                    <Image
                      src="/images/education/plymouth-logo.jpg"
                      alt="University of Plymouth"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-medium text-[#2E5077]">Bachelor of Engineering (Electronics)</h3>
                    <p className="text-[10px] text-gray-700 dark:text-gray-700">University of Plymouth</p>
                    <p className="text-[10px] text-gray-700 dark:text-gray-700">1995 - 1997</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-8 h-8 relative flex-shrink-0">
                    <Image
                      src="/images/education/utm-logo.jpg"
                      alt="Universiti Teknologi Malaysia"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-medium text-[#2E5077]">Diploma in Electrical Engineering (Communications)</h3>
                    <p className="text-[10px] text-gray-700 dark:text-gray-700">Universiti Teknologi Malaysia</p>
                    <p className="text-[10px] text-gray-700 dark:text-gray-700">1991 - 1994</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Professional Skills */}
            <div className="mb-2">
              <h3 className="text-[14px] font-medium text-[#2E5077] uppercase mb-3">Professional Skills</h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-gray-700 dark:text-gray-700">Technical Leadership</span>
                    <span className="text-[#2E5077]">90%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#4A89DC] rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-gray-700 dark:text-gray-700">Project Management</span>
                    <span className="text-[#2E5077]">90%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#4A89DC] rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-gray-700 dark:text-gray-700">Technical Expertise</span>
                    <span className="text-[#2E5077]">90%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#4A89DC] rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-gray-700 dark:text-gray-700">Business Development</span>
                    <span className="text-[#2E5077]">60%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#4A89DC] rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-4 border-gray-200" />

            {/* Core Competencies */}
            <div>
              <h3 className="text-[14px] font-medium text-[#2E5077] uppercase mb-2">Core Competencies</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-[12px] font-medium text-[#2E5077] mb-2">Management & Leadership</h4>
                  <ul className="text-[11px] space-y-1 text-black dark:text-black">
                    <li className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#4A89DC] rounded-full"></div>
                      <span className="text-black dark:text-black">Project Management</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#4A89DC] rounded-full"></div>
                      <span className="text-black dark:text-black">Strategic Planning</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#4A89DC] rounded-full"></div>
                      <span className="text-black dark:text-black">Business Development</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#4A89DC] rounded-full"></div>
                      <span className="text-black dark:text-black">Tender Management</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#4A89DC] rounded-full"></div>
                      <span className="text-black dark:text-black">Proposal Writing</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[12px] font-medium text-[#2E5077] mb-2">Defense & Military Technology</h4>
                  <ul className="text-[11px] space-y-1 text-black dark:text-black">
                    <li className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#37BC9B] rounded-full"></div>
                      <span className="text-black dark:text-black">Military Communications Systems</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#37BC9B] rounded-full"></div>
                      <span className="text-black dark:text-black">Radio Systems Development</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#37BC9B] rounded-full"></div>
                      <span className="text-black dark:text-black">Tactical Systems Implementation</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#37BC9B] rounded-full"></div>
                      <span className="text-black dark:text-black">Integration, Verification, Validation & Qualification (IVVQ)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[12px] font-medium text-[#2E5077] mb-2">Technical Expertise</h4>
                  <ul className="text-[11px] space-y-1 text-black dark:text-black">
                    <li className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#967ADC] rounded-full"></div>
                      <span className="text-black dark:text-black">Systems Integration</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#967ADC] rounded-full"></div>
                      <span className="text-black dark:text-black">Electronics Engineering</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#967ADC] rounded-full"></div>
                      <span className="text-black dark:text-black">Systems Engineering</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#967ADC] rounded-full"></div>
                      <span className="text-black dark:text-black">Research & Development</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#967ADC] rounded-full"></div>
                      <span className="text-black dark:text-black">Software Development</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#967ADC] rounded-full"></div>
                      <span className="text-black dark:text-black">Web Development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <hr className="my-4 border-gray-200" />

            <div className="grid grid-cols-5 gap-2 mt-2">
              <div className="w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform">
                <Image src="/images/tools/vscode.png" alt="Visual Studio Code" width={24} height={24} className="object-cover" />
              </div>
              <div className="w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform">
                <Image src="/images/tools/github.png" alt="GitHub" width={24} height={24} className="object-cover" />
              </div>
              <div className="w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform">
                <Image src="/images/tools/gpt4.png" alt="GPT-4" width={24} height={24} className="object-cover" />
              </div>
              <div className="w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform">
                <Image src="/images/tools/cursor.png" alt="Cursor" width={24} height={24} className="object-cover" />
              </div>
              <div className="w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform">
                <Image src="/images/tools/gamma.png" alt="Gamma" width={24} height={24} className="object-cover" />
              </div>
              <div className="w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform">
                <Image src="/images/tools/github-copilot.png" alt="GitHub Copilot" width={24} height={24} className="object-cover" />
              </div>
              <div className="w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform">
                <Image src="/images/tools/chatgpt.png" alt="ChatGPT" width={24} height={24} className="object-cover" />
              </div>
              <div className="w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform">
                <Image src="/images/tools/copilot.png" alt="Microsoft Copilot" width={24} height={24} className="object-cover" />
              </div>
              <div className="w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform">
                <Image src="/images/tools/claude.png" alt="Claude" width={24} height={24} className="object-cover" />
              </div>
              <div className="w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform">
                <Image src="/images/tools/perplexity.png" alt="Perplexity" width={24} height={24} className="object-cover" />
              </div>
              <div className="w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform">
                <Image src="/images/tools/gemini.png" alt="Gemini" width={24} height={24} className="object-cover" />
              </div>
              <div className="w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform">
                <Image src="/images/tools/office365.png" alt="Office 365" width={24} height={24} className="object-cover" />
              </div>
              <div className="w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform">
                <Image src="/images/tools/canva.png" alt="Canva" width={24} height={24} className="object-cover" />
              </div>
              <div className="w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform">
                <Image src="/images/tools/wordpress.png" alt="WordPress" width={24} height={24} className="object-cover" />
              </div>
              <div className="w-6 h-6 rounded-full overflow-hidden bg-white shadow-sm hover:scale-110 transition-transform">
                <Image src="/images/tools/ollama.png" alt="Ollama" width={24} height={24} className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @page {
          size: A4;
          margin: 0;
        }
        @media print {
          body {
            margin: 0;
            padding: 0;
          }
          .print-hidden {
            display: none;
          }
        }
      `}</style>
    </main>
  )
}
