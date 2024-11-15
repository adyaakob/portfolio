'use client';

import { useRef } from 'react';
import PrintButton from '@/components/ui/PrintButton';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={contentRef}>
        {children}
      </div>
      <PrintButton contentRef={contentRef} />
    </>
  );
} 