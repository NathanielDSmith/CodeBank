import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import SidePanel from '../components/SidePanel';
import CodeBlock from '../components/CodeBlock';
import ContentSection from '../components/ContentSection';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { cssSections, loadCssContent, preloadCssSection } from '../data/cssContent';

interface Example {
  title: string;
  code: string;
}

interface Section {
  title: string;
  examples: Example[];
}

const CSSLayoutTricks: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('flexbox');
  const [content, setContent] = useState<Section[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  // Load content when section changes
  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const sectionContent = await loadCssContent(activeSection);
        setContent(sectionContent);
      } catch (err) {
        setError('Failed to load content');
        console.error('Error loading content:', err);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [activeSection]);

  // Preload next sections for better UX
  useEffect(() => {
    const currentIndex = cssSections.findIndex(s => s.id === activeSection);
    const nextSection = cssSections[currentIndex + 1];
    const prevSection = cssSections[currentIndex - 1];
    
    if (nextSection) {
      preloadCssSection(nextSection.id);
    }
    if (prevSection) {
      preloadCssSection(prevSection.id);
    }
  }, [activeSection]);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading content...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Content</h2>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      );
    }

    if (!content) {
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {cssSections.find(s => s.id === activeSection)?.title}
          </h2>
          <p className="text-gray-600">
            Content for {cssSections.find(s => s.id === activeSection)?.title} will be added here...
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {cssSections.find(s => s.id === activeSection)?.title}
        </h2>
        
        {content.map((section, index) => (
          <ContentSection key={index} title={section.title}>
            <div className="space-y-4">
              {section.examples.map((example: Example, exampleIndex: number) => (
                <div key={exampleIndex}>
                  <h4 className="font-medium text-gray-800 mb-2">{example.title}</h4>
                  <CodeBlock code={example.code} language="css" />
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
      
      <PageHeader title="CSS Layout Tricks" icon="🎨" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="flex gap-8">
          <SidePanel
            sections={cssSections}
            activeSection={activeSection}
            searchTerm={searchTerm}
            onSectionChange={handleSectionChange}
            onSearchChange={handleSearchChange}
            isOpen={isSidePanelOpen}
            onToggle={() => setIsSidePanelOpen(!isSidePanelOpen)}
          />
          
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSLayoutTricks; 