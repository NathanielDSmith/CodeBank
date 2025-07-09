import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeaderProps } from '../types/index';

const PageHeader: React.FC<PageHeaderProps> = ({ title, icon }) => {
  return (
    <header className="bg-black/80 backdrop-blur-sm border-b border-green-500/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link to="/" className="text-green-400 hover:text-green-300 mr-4 font-mono transition-colors duration-300">
              <span className="text-green-300">$</span> cd /home
            </Link>
            <div className="flex items-center">
              <span className="text-3xl mr-3 text-green-400">{icon}</span>
              <h1 className="text-3xl font-bold text-green-400 font-mono matrix-glow">{title}</h1>
            </div>
          </div>
          <div className="text-sm text-green-400 bg-black/50 px-4 py-2 rounded border border-green-500/30 font-mono matrix-glow">
            <span className="text-green-300">STATUS:</span> ACTIVE
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader; 