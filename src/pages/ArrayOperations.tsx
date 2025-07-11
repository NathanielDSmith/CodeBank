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
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('overview', arraySections);
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
    description: "Arrays are one of the most fundamental data structures in programming. Master array operations to efficiently manipulate collections of data with modern JavaScript methods.",
    benefits: "Array operations are essential for data processing, API responses, and building user interfaces. These skills are transferable across programming languages and are crucial for modern web development.",
    difficulty: "Beginner to Intermediate",
    topics: [
      { icon: "[]", text: "Basic array methods and manipulation" },
      { icon: "[]", text: "Filtering, mapping, and reducing" },
      { icon: "[]", text: "Adding, removing, and transforming elements" },
      { icon: "[]", text: "Searching and sorting techniques" },
      { icon: "[]", text: "Advanced patterns and performance tips" }
    ],
    usefulLinks: [
      { name: "MDN Array Methods", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" },
      { name: "JavaScript Array Guide", url: "https://javascript.info/array-methods" },
      { name: "Array Methods Examples", url: "https://www.w3schools.com/js/js_array_methods.asp" },
      { name: "Array Performance", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#performance" }
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