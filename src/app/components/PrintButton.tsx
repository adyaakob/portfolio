import { RefObject } from 'react'

interface PrintButtonProps {
  contentRef: RefObject<HTMLDivElement>;
}

export default function PrintButton({ contentRef }: PrintButtonProps) {
  // Your print button implementation
  return (
    <button onClick={() => {/* your print logic */}}>
      Print
    </button>
  );
} 