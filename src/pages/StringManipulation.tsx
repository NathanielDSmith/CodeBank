import React, { useState, useEffect } from 'react';
import { stringSections, loadStringContent, preloadStringSection } from '../data/stringContent';
import PageHeader from '../components/PageHeader';
import SidePanel from '../components/SidePanel';
import ContentSection from '../components/ContentSection';
import { usePageNavigation } from '../hooks/usePageNavigation';

interface StringContent {
  title: string;
  examples: {
    title: string;
    code: string;
  }[];
}

const StringManipulation: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('basics');
  const [content, setContent] = useState<StringContent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const sectionContent = await loadStringContent(activeSection);
        if (sectionContent) {
          setContent(sectionContent);
        } else {
          setError('Failed to load content');
        }
      } catch (err) {
        setError('Error loading content');
        console.error('Error loading string content:', err);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [activeSection]);

  if (error) {
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
        
        <PageHeader 
          title="String Manipulation" 
          icon="📝"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="bg-red-900/50 border border-red-500/30 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-lg font-medium text-red-400 mb-2 font-mono">ERROR: Content Load Failed</h3>
            <p className="text-red-300 font-mono">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 font-mono transition-colors duration-300"
            >
              RETRY
            </button>
          </div>
        </div>
      </div>
    );
  }

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
      
      <PageHeader 
        title="String Manipulation" 
        icon="📝"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 relative z-10">
        <div className="flex gap-4 sm:gap-8">
          {/* Side Panel */}
          <div className="w-64 flex-shrink-0">
            <SidePanel
              sections={stringSections}
              activeSection={activeSection}
              searchTerm={searchTerm}
              onSectionChange={handleSectionChange}
              onSearchChange={handleSearchChange}
              isOpen={isSidePanelOpen}
              onToggle={() => setIsSidePanelOpen(!isSidePanelOpen)}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {loading ? (
              <div className="space-y-6">
                <div className="animate-pulse">
                  <div className="h-8 bg-green-500/20 rounded w-1/3 mb-4"></div>
                  <div className="space-y-4">
                    <div className="h-4 bg-green-500/20 rounded w-full"></div>
                    <div className="h-4 bg-green-500/20 rounded w-5/6"></div>
                    <div className="h-4 bg-green-500/20 rounded w-4/6"></div>
                  </div>
                </div>
                <div className="animate-pulse">
                  <div className="h-6 bg-green-500/20 rounded w-1/4 mb-3"></div>
                  <div className="bg-black/50 border border-green-500/30 rounded-lg p-4">
                    <div className="h-4 bg-green-500/20 rounded w-full mb-2"></div>
                    <div className="h-4 bg-green-500/20 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-green-400 font-mono matrix-glow">
                  {stringSections.find(section => section.id === activeSection)?.title}
                </h2>

                {content.map((section, index) => (
                  <ContentSection key={index} title={section.title}>
                    <div className="space-y-4">
                      {section.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="bg-black/50 border border-green-500/30 rounded-lg p-6">
                          <h4 className="text-lg font-medium text-green-300 mb-3 font-mono">
                            {example.title}
                          </h4>
                          <pre className="bg-gray-900 border border-green-500/30 rounded-lg p-4 overflow-x-auto">
                            <code className="text-sm text-green-400 font-mono">
                              {example.code}
                            </code>
                          </pre>
                        </div>
                      ))}
                    </div>
                  </ContentSection>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StringManipulation; 