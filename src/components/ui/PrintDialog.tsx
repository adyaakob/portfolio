'use client'

import { useTheme } from 'next-themes'

interface PrintDialogProps {
  isOpen: boolean
  onClose: () => void
}

export default function PrintDialog({ isOpen, onClose }: PrintDialogProps) {
  const { theme, setTheme } = useTheme()

  const handlePrint = () => {
    const currentTheme = theme
    setTheme('light')
    window.print()
    setTheme(currentTheme)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm w-full mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Save Portfolio
        </h2>
        <div className="space-y-4">
          <button
            onClick={handlePrint}
            className="w-full px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 transition"
          >
            Save as PDF
          </button>
          <button
            onClick={onClose}
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
