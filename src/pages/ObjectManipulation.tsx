import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import SidePanel from '../components/SidePanel';
import CodeBlock from '../components/CodeBlock';
import ContentSection from '../components/ContentSection';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { objectSections, loadObjectContent, preloadObjectSection } from '../data/objectContent';

interface Example {
  title: string;
  code: string;
}

interface Section {
  title: string;
  examples: Example[];
}

const ObjectManipulation: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('basics');
  const [content, setContent] = useState<Section[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const sectionContent = await loadObjectContent(activeSection);
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

  // Preload next section for better UX
  useEffect(() => {
    const currentIndex = objectSections.findIndex(s => s.id === activeSection);
    if (currentIndex < objectSections.length - 1) {
      const nextSection = objectSections[currentIndex + 1];
      preloadObjectSection(nextSection.id);
    }
  }, [activeSection]);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-green-400 font-mono">INITIALIZING OBJECT SYSTEM...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-green-400 mb-4 font-mono">
            {objectSections.find(s => s.id === activeSection)?.title}
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
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-green-400 mb-4 font-mono">
            {objectSections.find(s => s.id === activeSection)?.title}
          </h2>
          <p className="text-green-300 font-mono">
            Object manipulation content for {objectSections.find(s => s.id === activeSection)?.title} will be loaded...
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {/* Language Indicator */}
        <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-3">
            <span className="text-green-400 font-mono text-lg">⚡</span>
            <div>
              <h3 className="text-green-300 font-mono font-bold">JavaScript Object Manipulation</h3>
              <p className="text-green-400 font-mono text-sm">All examples in this section use JavaScript (ES6+)</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-green-400 mb-4 font-mono matrix-glow">
          {objectSections.find(s => s.id === activeSection)?.title}
        </h2>
        
        {content.map((section, index) => (
          <ContentSection key={index} title={section.title}>
            <div className="space-y-4">
              {section.examples.map((example: Example, exampleIndex: number) => (
                <div key={exampleIndex} className="bg-black/50 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-green-300 font-mono">{example.title}</h4>
                    <span className="text-xs text-green-500 font-mono bg-green-900/50 px-2 py-1 rounded">JS</span>
                  </div>
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
      
      <PageHeader title="JavaScript Object Manipulation" icon="📦" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="flex gap-8">
          <SidePanel
            sections={objectSections}
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

export default ObjectManipulation; 