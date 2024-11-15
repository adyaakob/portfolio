import Image from 'next/image';
const experienceData = require('../../data/experience');

export default function Experience() {
  if (!Array.isArray(experienceData)) {
    console.error('Experience data is not an array:', experienceData);
    return null;
  }

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#C084FC]">
          Experience
        </h2>
        
        {/* Experience items - increased max width */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experienceData.map((job, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                {job.logo && (
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full p-2 flex items-center justify-center">
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={44}
                      height={44}
                      className="rounded-full object-contain"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{job.company} · {job.type}</p>
                  <p className="text-gray-500 dark:text-gray-500">{job.period} · {job.duration}</p>
                  {job.location && <p className="text-gray-500 dark:text-gray-500">{job.location}</p>}
                </div>
              </div>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
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