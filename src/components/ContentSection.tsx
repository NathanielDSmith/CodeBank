import React from 'react';
import { ContentSectionProps } from '../types/index';

const ContentSection: React.FC<ContentSectionProps> = ({ title, children }) => {
  return (
    <section className="bg-black/70 backdrop-blur-sm rounded-lg p-3 sm:p-4 lg:p-6 border border-green-500/30 shadow-lg overflow-hidden">
      <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-green-400 mb-3 sm:mb-4 font-mono matrix-glow break-words">{title}</h3>
      <div className="overflow-x-auto">
        {children}
      </div>
    </section>
  );
};

export default ContentSection; 