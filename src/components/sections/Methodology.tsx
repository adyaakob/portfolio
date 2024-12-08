import Image from 'next/image';
import { getBasePath } from '@/lib/utils';

export default function Methodology() {
  const basePath = getBasePath();

  return (
    <section id="methodology" className="py-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 print:bg-white print:py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-600 dark:text-purple-400 print:text-black print:mb-8">
          Design & Development Methodology
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800/50 rounded-lg p-8 shadow-lg print:shadow-none print:border print:border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-6">
              Vee Model Systems Engineering
            </h3>

            <div className="mb-8">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                In my design and development processes, I employ the Vee Model Systems Engineering methodology, 
                a structured framework that emphasizes thorough planning, integration, and validation throughout 
                a project&apos;s lifecycle. This approach ensures that each phase of development is systematically 
                aligned with corresponding testing activities, promoting early detection and resolution of 
                potential issues.
              </p>

              {/* V-Model Image */}
              <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden">
                <Image
                  src={`${basePath}/images/methodology/v-model.jpg`}
                  alt="V-Model Systems Engineering Methodology"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                />
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white print:text-black mb-4">
                Key Phases of the Vee Model:
              </h4>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-purple-500 dark:bg-purple-400 print:bg-gray-600 shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white print:text-black">Requirements Definition</h5>
                    <p className="text-gray-600 dark:text-gray-300">Establishing clear system objectives and functional requirements to align with stakeholder needs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-purple-500 dark:bg-purple-400 print:bg-gray-600 shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white print:text-black">System Design</h5>
                    <p className="text-gray-600 dark:text-gray-300">Developing detailed architectures and specifications, breaking down the system into manageable components.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-purple-500 dark:bg-purple-400 print:bg-gray-600 shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white print:text-black">Subsystem Design</h5>
                    <p className="text-gray-600 dark:text-gray-300">Focusing on the design of individual subsystems, ensuring they meet the overall system requirements.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-purple-500 dark:bg-purple-400 print:bg-gray-600 shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white print:text-black">Implementation</h5>
                    <p className="text-gray-600 dark:text-gray-300">Developing and assembling system components and subsystems.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-purple-500 dark:bg-purple-400 print:bg-gray-600 shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white print:text-black">Integration and Verification</h5>
                    <p className="text-gray-600 dark:text-gray-300">Combining subsystems and verifying their performance against design specifications.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-purple-500 dark:bg-purple-400 print:bg-gray-600 shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white print:text-black">System Validation and Testing</h5>
                    <p className="text-gray-600 dark:text-gray-300">Conducting comprehensive testing to ensure the system meets all requirements and performs as intended in real-world scenarios.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-purple-500 dark:bg-purple-400 print:bg-gray-600 shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white print:text-black">Deployment and Maintenance</h5>
                    <p className="text-gray-600 dark:text-gray-300">Releasing the system for operational use and providing ongoing support and updates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
