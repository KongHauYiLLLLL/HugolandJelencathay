import React from 'react';

interface LoadingSpinnerProps {
  size?: string;
  speed?: string;
  color?: string;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = "40", 
  speed = "2.5", 
  color = "#8b5cf6",
  className = ""
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div 
        className="leapfrog-loader"
        style={{
          '--size': `${size}px`,
          '--speed': `${speed}s`,
          '--color': color,
          width: `${size}px`,
          height: `${size}px`,
          position: 'relative',
          display: 'inline-block'
        } as React.CSSProperties}
      >
        <div className="leapfrog-dot leapfrog-dot-1"></div>
        <div className="leapfrog-dot leapfrog-dot-2"></div>
        <div className="leapfrog-dot leapfrog-dot-3"></div>
      </div>
      

    </div>
  );
};