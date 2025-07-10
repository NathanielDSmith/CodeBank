import React, { useState, useEffect } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { cssSections, loadCssContent, preloadCssSection } from '../data/cssContent';
import PageLayout from '../components/PageLayout';

interface Example {
  title: string;
  code: string;
}

interface Section {
  title: string;
  examples: Example[];
}

const CSSLayoutTricks: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('flexbox', cssSections);
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

  const fallbackContent = {
    description: "Welcome to CSS Layout Tricks! This section covers essential CSS layout techniques and modern approaches.",
    topics: [
      { icon: "CSS", text: "Flexbox layouts and alignment" },
      { icon: "CSS", text: "CSS Grid systems and positioning" },
      { icon: "CSS", text: "Responsive design techniques" },
      { icon: "CSS", text: "Centering and positioning tricks" },
      { icon: "CSS", text: "Modern CSS features and utilities" }
    ]
  };

  return (
    <PageLayout
      title="CSS Layout Tricks"
      icon="CSS"
      sections={cssSections}
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

export default CSSLayoutTricks; 