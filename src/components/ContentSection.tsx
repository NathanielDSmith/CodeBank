import React from 'react';
import { ContentSectionProps } from '../types/index';

const ContentSection: React.FC<ContentSectionProps> = ({ title, children }) => {
  return (
    <section className="bg-black/70 backdrop-blur-sm rounded-lg p-6 border border-green-500/30 shadow-lg">
      <h3 className="text-xl font-semibold text-green-400 mb-4 font-mono matrix-glow">{title}</h3>
      {children}
    </section>
  );
};

export default ContentSection; 