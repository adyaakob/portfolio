'use client'

import Link from 'next/link'

export default function A4Test() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="fixed top-4 left-4 z-50">
        <Link 
          href="/"
          className="px-4 py-2 bg-white text-black border border-gray-200 rounded-sm hover:bg-gray-50 transition-colors"
        >
          ← Back
        </Link>
      </div>

      {/* Main container */}
      <div className="relative mx-auto mt-16 bg-white shadow-lg" style={{ width: '210mm', height: '297mm' }}>
        {/* Horizontal ruler */}
        <div className="absolute -top-6 left-0 w-full flex" style={{ height: '24px' }}>
          {Array.from({ length: 22 }).map((_, i) => (
            <div key={i} className="relative flex-grow border-l border-gray-400">
              <span className="absolute -top-4 -left-2 text-[10px] text-gray-600">{i*10}mm</span>
            </div>
          ))}
        </div>

        {/* Vertical ruler */}
        <div className="absolute -left-6 top-0 h-full" style={{ width: '24px' }}>
          {Array.from({ length: 30 }).map((_, i) => (
            <div 
              key={i} 
              className="relative border-t border-gray-400"
              style={{ height: `${297/30}mm` }}
            >
              <span className="absolute -left-8 -top-1 text-[10px] text-gray-600">{i*10}mm</span>
            </div>
          ))}
        </div>

        {/* Content area */}
        <div className="absolute inset-0 flex">
          {/* Left column */}
          <div className="w-[70%] p-4 border-r border-dashed border-blue-200">
            <div className="border-2 border-dashed border-blue-200 rounded h-full p-4">
              <h2 className="text-lg font-bold text-blue-500">Left Column</h2>
              <p className="text-sm text-gray-600">Width: 70%</p>
            </div>
          </div>
          
          {/* Right column */}
          <div className="w-[30%] p-4">
            <div className="border-2 border-dashed border-green-200 rounded h-full p-4">
              <h2 className="text-lg font-bold text-green-500">Right Column</h2>
              <p className="text-sm text-gray-600">Width: 30%</p>
            </div>
          </div>
        </div>

        {/* Dimensions label */}
        <div className="absolute bottom-2 right-2 bg-gray-800 text-white px-2 py-1 rounded text-xs">
          210mm × 297mm (A4)
        </div>
      </div>
    </main>
  )
}
