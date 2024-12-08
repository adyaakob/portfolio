'use client'

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface PrintButtonProps {
  className?: string;
}

export default function PrintButton({ className }: PrintButtonProps) {
  const handlePrint = async () => {
    console.log('Attempting to capture content for PDF');
    const element = document.getElementById('content-to-capture'); // Ensure this ID matches the container of all content
    if (element) {
      console.log('Element found, capturing content...');
      const canvas = await html2canvas(element);
      console.log('Content captured, generating PDF...');
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('download.pdf');
      console.log('PDF saved successfully.');
    } else {
      console.error('Element not found');
    }
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