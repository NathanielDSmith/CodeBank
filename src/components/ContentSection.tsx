import React from 'react';
import { ContentSectionProps } from '../types/index';

const ContentSection: React.FC<ContentSectionProps> = ({ title, children }) => {
  return (
    <section className="bg-white rounded-lg p-6 shadow-sm border">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      {children}
    </section>
  );
};

export default ContentSection; 