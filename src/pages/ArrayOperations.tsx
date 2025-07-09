import React, { useState, useEffect } from 'react';
import { arraySections, loadArrayContent, preloadArraySection } from '../data/arrayContent';
import PageHeader from '../components/PageHeader';
import SidePanel from '../components/SidePanel';
import ContentSection from '../components/ContentSection';

interface ArrayContent {
  title: string;
  examples: {
    title: string;
    code: string;
  }[];
}

const ArrayOperations: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>('basics');
  const [content, setContent] = useState<ArrayContent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      setError(null);
      try {
        const sectionContent = await loadArrayContent(selectedSection);
        if (sectionContent) {
          setContent(sectionContent);
        } else {
          setError('Failed to load content');
        }
      } catch (err) {
        setError('Error loading content');
        console.error('Error loading array content:', err);
      } finally {
        setLoading(false);
      }
    };
    loadContent();
  }, [selectedSection]);

  const handleSectionChange = (sectionId: string) => {
    setSelectedSection(sectionId);
    // Preload next section for better UX
    const currentIndex = arraySections.findIndex(section => section.id === sectionId);
    if (currentIndex < arraySections.length - 1) {
      preloadArraySection(arraySections[currentIndex + 1].id);
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PageHeader title="Array Operations" icon="📋" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-red-800 mb-2">Error Loading Content</h3>
            <p className="text-red-700">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="Array Operations" icon="📋" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Side Panel */}
          <div className="w-64 flex-shrink-0">
            <SidePanel
              sections={arraySections}
              activeSection={selectedSection}
              searchTerm={searchTerm}
              onSectionChange={handleSectionChange}
              onSearchChange={setSearchTerm}
            />
          </div>
          {/* Main Content */}
          <div className="flex-1">
            {loading ? (
              <div className="space-y-6">
                <div className="animate-pulse">
                  <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                  </div>
                </div>
                <div className="animate-pulse">
                  <div className="h-6 bg-gray-200 rounded w-1/4 mb-3"></div>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {arraySections.find(section => section.id === selectedSection)?.title}
                </h2>
                {content.map((section, index) => (
                  <ContentSection key={index} title={section.title}>
                    <div className="space-y-4">
                      {section.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="bg-white rounded-lg border border-gray-200 p-6">
                          <h4 className="text-lg font-medium text-gray-900 mb-3">
                            {example.title}
                          </h4>
                          <pre className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
                            <code className="text-sm text-gray-800">
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

export default ArrayOperations; 