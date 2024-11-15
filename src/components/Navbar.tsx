'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold">
            Ahmad Dahalan Yaakob
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#about" className="hover:text-gray-600 dark:hover:text-gray-300">About</a>
            <a href="#experience" className="hover:text-gray-600 dark:hover:text-gray-300">Experience</a>
            <a href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300">Projects</a>
            <a href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300">Contact</a>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#about" className="block py-2 hover:text-gray-600 dark:hover:text-gray-300">About</a>
            <a href="#experience" className="block py-2 hover:text-gray-600 dark:hover:text-gray-300">Experience</a>
            <a href="#projects" className="block py-2 hover:text-gray-600 dark:hover:text-gray-300">Projects</a>
            <a href="#contact" className="block py-2 hover:text-gray-600 dark:hover:text-gray-300">Contact</a>
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}