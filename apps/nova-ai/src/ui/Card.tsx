import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  corners?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  corners = true,
}) => {
  return (
    <div
      className={`
      relative bg-nova-panel/80 backdrop-blur-sm border border-nova-border p-6 rounded-none
      ${hoverEffect ? 'hover:border-nova-pink/50 transition-colors duration-300 group' : ''}
      ${className}
    `}
    >
      {/* Corner Accents */}
      {corners && (
        <>
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 group-hover:border-nova-pink transition-colors"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30 group-hover:border-nova-pink transition-colors"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30 group-hover:border-nova-pink transition-colors"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 group-hover:border-nova-pink transition-colors"></div>
        </>
      )}

      {children}
    </div>
  );
};
