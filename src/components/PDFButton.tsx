'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const PDFRenderer = dynamic(() => import('./pdf/PDFRenderer'), {
  ssr: false,
  loading: () => (
    <button
      disabled
      className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
    >
      Loading PDF...
    </button>
  ),
})

export default function PDFButton() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <button
        disabled
        className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
      >
        Loading PDF...
      </button>
    )
  }

  return <PDFRenderer />
}
