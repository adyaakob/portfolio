'use client'

import { PDFDownloadLink } from '@react-pdf/renderer'
import PDFDocument from './PDFDocument'

export default function PDFRenderer() {
  return (
    <PDFDownloadLink
      document={<PDFDocument />}
      fileName="Ahmad-Dahalan-Portfolio.pdf"
      className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
    >
      {({ loading }) => (loading ? 'Generating PDF...' : 'Save as PDF')}
    </PDFDownloadLink>
  )
}
