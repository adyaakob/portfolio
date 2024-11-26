'use client'

import SectionTitle from '../SectionTitle'

const timelineEvents = [
  {
    year: '1997',
    description: 'TRC5100 Research and Development - Joint venture between Sapura (Malaysia) and Thales (France) for the development of VHF Tactical Radio'
  },
  {
    year: '2005',
    description: 'Production of TRC5100'
  },
  {
    year: '2007',
    description: 'Field Evaluation of Thales TRC9210 and TC3600 Combat Net Radio'
  },
  {
    year: '2008',
    description: 'Initial Technical Proposal for Communication System onboard Malaysian AV8 Armoured vehicle'
  },
  {
    year: '2009',
    description: [
      'Explore opportunities in worldwide market including Benin, Indonesia, Egypt, Brunei within the scope of tactical communication solutions',
      'Explore new customer locally including Briged Sempadan, TUDM, TLDM Submarine, and TLDM PRM4700 replacement, MMEA',
      'Initial Combat Net Radio proposal (CNR10), a critical requirement to equip Malaysian Army with the latest tactical radio communication solution under RMK10 budget'
    ]
  },
  {
    year: '2010',
    description: 'Continue to explore the solution for various armoured vehicle platforms including ADNAN, MIFV, BUMAR, AV8, SCORPION, PT91, 6x6, 4x4'
  },
  {
    year: '2011',
    description: [
      'Close partnership with Vietnam customer on the complete set of tactical communication solution',
      'Proposal for Naval communication for SGPV program',
      'Research and Development of Tactical Radio repeater',
      'TLDM Submarine Strategic Communication - Technical solution'
    ]
  },
  {
    year: '2012',
    description: 'Initial Stage of designing communication network for Malaysian Armed Forces (MAF) Network Centric Operation (NCO)'
  },
  {
    year: '2013',
    description: 'Prototyping the Future Soldier System'
  },
  {
    year: '2014',
    description: 'Development of Future Soldier System (FSS) under NCO scope'
  },
  {
    year: '2016',
    description: 'Delivery and Commissioning of tactical communication solution for Vietnam Army'
  },
  {
    year: '2017',
    description: 'Delivery and Commissioning of tactical communication solution for Timor Leste Army'
  },
  {
    year: '2018',
    description: 'Establish product development roadmap for 10 years'
  }
]

export default function STETimeline() {
  return (
    <section id="ste-timeline" className="py-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle>Strategic Portfolio Timeline (1997-2018)</SectionTitle>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-3xl mx-auto">
          A comprehensive overview of major milestones and achievements in tactical communication solutions, system development, and market expansion. This timeline complements the detailed project portfolio section.
        </p>

        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => (
            <div key={index} className="flex gap-4 mb-6">
              <div className="flex-none w-20 text-right font-semibold text-purple-600 dark:text-purple-400">
                {event.year}
              </div>
              <div className="flex-1">
                {Array.isArray(event.description) ? (
                  <ul className="list-disc pl-4 space-y-2">
                    {event.description.map((item, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300">{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 dark:text-gray-300">{event.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
