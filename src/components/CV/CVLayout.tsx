import React from 'react';

const CVLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative mx-auto print:hidden" style={{ width: '850px' }}>
      {/* Horizontal ruler */}
      <div className="sticky top-0 left-[30px] right-0 h-[30px] bg-gray-100 border-b border-gray-300 flex z-10">
        {Array.from({ length: 22 }).map((_, i) => (
          <div key={i} className="relative flex-1 border-l border-gray-400">
            <span className="absolute -top-4 -left-2 text-[10px]">{i*10}</span>
          </div>
        ))}
      </div>

      {/* Vertical ruler */}
      <div className="fixed left-0 top-[30px] w-[30px] h-[1122px] bg-gray-100 border-r border-gray-300">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i} 
            className="relative border-t border-gray-400"
            style={{ height: '37.4px' }}
          >
            <span className="absolute -left-4 -top-2 text-[10px]">{i*10}</span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="ml-[30px] mt-[30px]">
        {children}
      </div>
    </div>
  );
};

export default CVLayout;
