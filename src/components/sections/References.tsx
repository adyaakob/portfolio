export default function References() {
  return (
    <section id="references" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 print:py-4 print:bg-white">
      <div className="container mx-auto px-4 print:px-0">
        <h2 className="text-3xl font-bold text-center mb-8 print:mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400 print:text-gray-900">References</h2>
        
        <div className="grid-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-700 print:shadow-none print:border print:border-gray-200">
              <div className="space-y-2">
                <p className="text-gray-900 dark:text-white font-semibold print:text-sm">Dr. Abdul Rahman Zainal</p>
                <p className="text-gray-700 dark:text-[#94A3B8] print:text-sm">CEO, Sapura Thales Electronics</p>
                <div className="pt-2 border-t border-gray-100 dark:border-gray-700 mt-2">
                  <p className="text-gray-500 dark:text-[#64748B] print:text-xs flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +60 123087046
                  </p>
                  <p className="text-gray-500 dark:text-[#64748B] print:text-xs flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    abdrahman.zainal@sapura.com.my
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-700 print:shadow-none print:border print:border-gray-200">
              <div className="space-y-2">
                <p className="text-gray-900 dark:text-white font-semibold print:text-sm">Mathieu Gil</p>
                <p className="text-gray-700 dark:text-[#94A3B8] print:text-sm">COO, Sapura Thales Electronics</p>
                <div className="pt-2 border-t border-gray-100 dark:border-gray-700 mt-2">
                  <p className="text-gray-500 dark:text-[#64748B] print:text-xs flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +33 6 31 29 91 00
                  </p>
                  <p className="text-gray-500 dark:text-[#64748B] print:text-xs flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    mathieu.gil@thalesgroup.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}