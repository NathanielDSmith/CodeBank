import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeaderProps } from '../types/index';

const PageHeader: React.FC<PageHeaderProps> = ({ title, icon }) => {
  const getIconStyle = (icon: string) => {
    // Special styling for text-based icons with consistent sizing and brighter colors
    if (icon === 'TS' || icon === 'V' || icon === 'CSS' || icon === 'S' || icon === '[]' || icon === '{}') {
      return 'font-mono font-bold text-lg sm:text-xl lg:text-2xl bg-cyan-500/30 px-2 py-1 rounded border border-cyan-400/50 text-cyan-300 min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center';
    }
    // Default styling for emoji icons to match the size
    return 'text-lg sm:text-2xl lg:text-3xl min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center';
  };

  return (
    <header className="bg-black/80 backdrop-blur-sm border-b border-green-500/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4 lg:py-6">
          <div className="flex items-center">
            <Link to="/" className="text-green-400 hover:text-green-300 mr-1 sm:mr-2 lg:mr-4 font-mono transition-colors duration-300 text-xs sm:text-sm lg:text-base">
              <span className="text-green-300">$</span> cd /home
            </Link>
            <div className="flex items-center">
              <span className={`text-lg sm:text-2xl lg:text-3xl mr-1 sm:mr-2 lg:mr-3 text-green-400 ${getIconStyle(icon)}`}>{icon}</span>
              <h1 className="text-xs sm:text-lg lg:text-3xl font-bold text-green-400 font-mono matrix-glow break-words">{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader; 