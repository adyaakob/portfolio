export default function References() {
  return (
    <section id="references" className="py-16 bg-gray-50 dark:bg-gray-900 print:py-4">
      <div className="container mx-auto px-4 print:px-0">
        <h2 className="text-3xl font-bold text-center mb-8 print:mb-4">References</h2>
        
        <div className="grid-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-md print:shadow-none print:border print:border-gray-200">
              <p className="text-gray-900 dark:text-white font-semibold print:text-sm">Dr. Abdul Rahman Zainal</p>
              <p className="text-gray-700 dark:text-[#94A3B8] print:text-sm">CEO, Sapura Thales Electronics</p>
              <p className="text-gray-500 dark:text-[#64748B] print:text-xs">+60 123087046</p>
              <p className="text-gray-500 dark:text-[#64748B] print:text-xs">abdrahman.zainal@sapura.com.my</p>
            </div>
            <div className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-md print:shadow-none print:border print:border-gray-200">
              <p className="text-gray-900 dark:text-white font-semibold print:text-sm">Mathieu Gil</p>
              <p className="text-gray-700 dark:text-[#94A3B8] print:text-sm">COO, Sapura Thales Electronics</p>
              <p className="text-gray-500 dark:text-[#64748B] print:text-xs">+33 6 31 29 91 00</p>
              <p className="text-gray-500 dark:text-[#64748B] print:text-xs">mathieu.gil@thalesgroup.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}