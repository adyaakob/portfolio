// This file is no longer needed and can be deleted

'use client'

import { useState } from 'react'
import { useTheme } from 'next-themes'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default function PrintButton() {
  const [loading, setLoading] = useState(false)
  const { theme, setTheme } = useTheme()

  const handleSaveAsPDF = async () => {
    try {
      setLoading(true)
      const currentTheme = theme
      setTheme('light')
      
      // Wait for theme change to take effect
      await new Promise(resolve => setTimeout(resolve, 100))

      const element = document.getElementById('content-to-capture')
      if (!element) {
        throw new Error('Content element not found')
      }

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: '#ffffff'
      })

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight)
      const imgX = (pageWidth - imgWidth * ratio) / 2
      const imgY = 0

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
      
      // Instead of saving directly, open in new window
      const pdfOutput = pdf.output('bloburl')
      window.open(pdfOutput, '_blank')

      // Restore theme
      setTheme(currentTheme)
    } catch (error) {
      console.error('Error generating PDF:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleSaveAsPDF}
      disabled={loading}
      className="fixed bottom-8 right-8 z-40 px-4 py-2 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition-colors print:hidden disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Save as PDF"
    >
      <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
        </svg>
        {loading ? 'Generating PDF...' : 'Save as PDF'}
      </div>
    </button>
  )
}