'use client'

interface PrintButtonProps {
  className?: string;
}

export default function PrintButton({ className }: PrintButtonProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className={className}
    >
      Save as PDF
    </button>
  );
}