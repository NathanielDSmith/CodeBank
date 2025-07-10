import React from 'react';
import PageHeader from './PageHeader';
import SidePanel from './SidePanel';
import ContentSection from './ContentSection';
import CodeBlock from './CodeBlock';

interface Example {
  title: string;
  code: string;
}

interface Section {
  title: string;
  examples: Example[];
}

interface PageLayoutProps {
  title: string;
  icon: string;
  sections: any[];
  activeSection: string;
  searchTerm: string;
  content: Section[] | null;
  loading: boolean;
  error: string | null;
  isSidePanelOpen: boolean;
  onSectionChange: (sectionId: string) => void;
  onSearchChange: (term: string) => void;
  onToggleSidePanel: () => void;
  fallbackContent?: {
    description: string;
    topics: Array<{ icon: string; text: string }>;
  };
}

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  icon,
  sections,
  activeSection,
  searchTerm,
  content,
  loading,
  error,
  isSidePanelOpen,
  onSectionChange,
  onSearchChange,
  onToggleSidePanel,
  fallbackContent
}) => {
  const renderContent = () => {
    if (loading) {
      return (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-green-400 font-mono">INITIALIZING...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-green-400 mb-4 font-mono">
            {sections.find(s => s.id === activeSection)?.title}
          </h2>
          <p className="text-red-400 mb-4 font-mono">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 font-mono transition-colors duration-300"
          >
            RETRY
          </button>
        </div>
      );
    }

    if (!content) {
      const currentSection = sections.find(s => s.id === activeSection);
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-green-400 mb-4 font-mono">
            {currentSection?.title || title}
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-green-300 font-mono mb-6">
              {fallbackContent?.description || `Welcome to ${title}! This section covers essential concepts.`}
            </p>
            {fallbackContent?.topics && (
              <div className="bg-black/50 border border-green-500/30 rounded-lg p-6 text-left">
                <h3 className="text-lg font-bold text-green-400 mb-4 font-mono">What you'll learn:</h3>
                <ul className="space-y-2 text-green-300 font-mono">
                  {fallbackContent.topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-400 mr-2">{topic.icon}</span>
                      <span>{topic.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <p className="text-green-400 font-mono mt-6 text-sm">
              Select a topic from the sidebar to get started!
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400 mb-4 font-mono matrix-glow">
          {sections.find(s => s.id === activeSection)?.title}
        </h2>
        
        {content.map((section, index) => (
          <ContentSection key={index} title={section.title}>
            <div className="space-y-4">
              {section.examples.map((example: Example, exampleIndex: number) => (
                <div key={exampleIndex} className="bg-black/50 border border-green-500/30 rounded-lg p-4">
                  <h4 className="font-medium text-green-300 mb-2 font-mono">{example.title}</h4>
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
      
      <PageHeader title={title} icon={icon} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 relative z-10">
        <div className="flex gap-4 sm:gap-8">
          <SidePanel
            sections={sections}
            activeSection={activeSection}
            searchTerm={searchTerm}
            onSectionChange={onSectionChange}
            onSearchChange={onSearchChange}
            isOpen={isSidePanelOpen}
            onToggle={onToggleSidePanel}
          />
          
          <div className="flex-1 min-w-0">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout; 