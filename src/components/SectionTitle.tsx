import { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="flex justify-center mb-8">
      <h2 className="text-[#C084FC] text-3xl font-bold">
        {children}
      </h2>
    </div>
  );
}