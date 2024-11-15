import Image from 'next/image'
import { Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 min-h-[90vh] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
            John Doe
            <span className="block text-3xl md:text-4xl text-blue-600 dark:text-blue-400 mt-2">
              R&D and Product Management Leader
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Driving innovation through strategic product development and research leadership
          </p>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
            <Mail className="w-5 h-5" />
            Contact Me
          </button>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80">
            <Image
              src="/profile-placeholder.jpg"
              alt="Profile"
              fill
              className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 