import React, { useState, useEffect } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { typescriptSections, loadTypeScriptContent, preloadTypeScriptSection } from '../data/typescriptContent';
import PageHeader from '../components/PageHeader';
import SidePanel from '../components/SidePanel';
import ContentSection from '../components/ContentSection';
import CodeBlock from '../components/CodeBlock';

interface TypeScriptExample {
  title: string;
  code: string;
}

interface TypeScriptContentSection {
  title: string;
  examples: TypeScriptExample[];
}

const TypeScriptPage: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('basics');
  const [content, setContent] = useState<TypeScriptContentSection[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const sectionContent = await loadTypeScriptContent(activeSection);
        if (sectionContent) {
          setContent(sectionContent);
        } else {
          setError(`Content not found for section: ${activeSection}`);
        }
      } catch (err) {
        setError(`Failed to load content: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [activeSection]);

  // Preload next section for better UX
  useEffect(() => {
    const currentIndex = typescriptSections.findIndex(s => s.id === activeSection);
    if (currentIndex < typescriptSections.length - 1) {
      const nextSection = typescriptSections[currentIndex + 1];
      preloadTypeScriptSection(nextSection.id);
    }
  }, [activeSection]);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-green-400 font-mono">INITIALIZING TYPESCRIPT...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-12">
          <div className="text-red-400 mb-4">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-red-400 mb-2 font-mono">ERROR: Content Load Failed</h2>
          <p className="text-red-300 font-mono">{error}</p>
        </div>
      );
    }

    if (!content) {
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-green-400 mb-4 font-mono">
            {typescriptSections.find(s => s.id === activeSection)?.title}
          </h2>
          <p className="text-green-300 font-mono">
            Content for {typescriptSections.find(s => s.id === activeSection)?.title} will be added here...
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-green-400 mb-4 font-mono matrix-glow">
          {typescriptSections.find(s => s.id === activeSection)?.title}
        </h2>
        
        {content.map((section: TypeScriptContentSection, index: number) => (
          <ContentSection key={index} title={section.title}>
            <div className="space-y-4">
              {section.examples.map((example: TypeScriptExample, exampleIndex: number) => (
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
      
      <PageHeader title="TypeScript" icon="📘" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="flex gap-8">
          <SidePanel
            sections={typescriptSections}
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

export default TypeScriptPage; 