import React from 'react';
import PageHeader from '../components/PageHeader';
import SidePanel from '../components/SidePanel';
import CodeBlock from '../components/CodeBlock';
import ContentSection from '../components/ContentSection';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { reactSections, reactContent } from '../data/reactContent';

const ReactCommonTasks: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('components');

  const renderContent = () => {
    const content = reactContent[activeSection];
    
    if (!content) {
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {reactSections.find(s => s.id === activeSection)?.title}
          </h2>
          <p className="text-gray-600">
            Content for {reactSections.find(s => s.id === activeSection)?.title} will be added here...
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {reactSections.find(s => s.id === activeSection)?.title}
        </h2>
        
        {content.map((section, index) => (
          <ContentSection key={index} title={section.title}>
            <div className="space-y-4">
              {section.examples.map((example, exampleIndex) => (
                <div key={exampleIndex}>
                  <h4 className="font-medium text-gray-800 mb-2">{example.title}</h4>
                  <CodeBlock code={example.code} />
                </div>
              ))}
            </div>
          </ContentSection>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <PageHeader title="React Common Tasks" icon="⚛️" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <SidePanel
            sections={reactSections}
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

export default ReactCommonTasks; 