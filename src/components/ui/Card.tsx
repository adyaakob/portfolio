export default function Card({ 
  title, 
  subtitle, 
  children 
}: { 
  title: string
  subtitle?: string
  children: React.ReactNode 
}) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl">
      <h3 className="text-xl font-semibold text-purple-400 mb-4">{title}</h3>
      {subtitle && <p className="text-gray-400 mt-1">{subtitle}</p>}
      {children}
    </div>
  )
} 