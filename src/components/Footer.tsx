export default function Footer() {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Made with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
} 