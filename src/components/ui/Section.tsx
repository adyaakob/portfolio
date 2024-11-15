export default function Section({ 
  id, 
  title, 
  className = "", 
  children 
}: { 
  id: string
  title: string
  className?: string
  children: React.ReactNode 
}) {
  return (
    <section id={id} className={`py-4 ${className}`}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4 text-center">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
} 