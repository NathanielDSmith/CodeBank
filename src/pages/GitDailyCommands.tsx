import React from 'react';
import PageHeader from '../components/PageHeader';
import SidePanel from '../components/SidePanel';
import CodeBlock from '../components/CodeBlock';
import ContentSection from '../components/ContentSection';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { gitSections, gitContent } from '../data/gitContent';

const GitDailyCommands: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('basics');

  const renderContent = () => {
    const content = gitContent[activeSection];
    
    if (!content) {
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {gitSections.find(s => s.id === activeSection)?.title}
          </h2>
          <p className="text-gray-600">
            Content for {gitSections.find(s => s.id === activeSection)?.title} will be added here...
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {gitSections.find(s => s.id === activeSection)?.title}
        </h2>
        
        {content.map((section, index) => (
          <ContentSection key={index} title={section.title}>
            <div className="space-y-4">
              {section.examples.map((example, exampleIndex) => (
                <div key={exampleIndex}>
                  <h4 className="font-medium text-gray-800 mb-2">{example.title}</h4>
                  <CodeBlock code={example.code} language="bash" />
                </div>
              ))}
            </div>
          </ContentSection>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Matrix digital rain background */}
      <div className="absolute inset-0 opacity-10">
        <div className="matrix-rain"></div>
      </div>
      
      {/* Scan lines effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="scanlines"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-green-900/10"></div>
      
      <PageHeader title="Git Daily Commands" icon="📚" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="flex gap-8">
          <SidePanel
            sections={gitSections}
            activeSection={activeSection}
            searchTerm={searchTerm}
            onSectionChange={handleSectionChange}
            onSearchChange={handleSearchChange}
          />
          
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitDailyCommands; 