import React, { useState, useEffect } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { arraySections, loadArrayContent, preloadArraySection } from '../data/arrayContent';
import PageLayout from '../components/PageLayout';

interface Example {
  title: string;
  code: string;
}

interface Section {
  title: string;
  examples: Example[];
}

const ArrayOperations: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('basics', arraySections);
  const [content, setContent] = useState<Section[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const sectionContent = await loadArrayContent(activeSection);
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
    const currentIndex = arraySections.findIndex(s => s.id === activeSection);
    if (currentIndex < arraySections.length - 1) {
      const nextSection = arraySections[currentIndex + 1];
      preloadArraySection(nextSection.id);
    }
  }, [activeSection]);

  const fallbackContent = {
    description: "Welcome to Array Operations! This section covers essential JavaScript array methods and techniques.",
    topics: [
      { icon: "[]", text: "Basic array methods and manipulation" },
      { icon: "[]", text: "Filtering, mapping, and reducing" },
      { icon: "[]", text: "Adding, removing, and transforming elements" },
      { icon: "[]", text: "Searching and sorting techniques" },
      { icon: "[]", text: "Advanced patterns and performance tips" }
    ]
  };

  return (
    <PageLayout
      title="Array Operations"
      icon="[]"
      sections={arraySections}
      activeSection={activeSection}
      searchTerm={searchTerm}
      content={content}
      loading={loading}
      error={error}
      isSidePanelOpen={isSidePanelOpen}
      onSectionChange={handleSectionChange}
      onSearchChange={handleSearchChange}
      onToggleSidePanel={() => setIsSidePanelOpen(!isSidePanelOpen)}
      fallbackContent={fallbackContent}
    />
  );
};

export default ArrayOperations; 