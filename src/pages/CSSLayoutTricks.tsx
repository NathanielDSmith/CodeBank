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
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('overview', cssSections);
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
    description: "CSS is the language that brings web designs to life. Modern CSS with Flexbox, Grid, and advanced features makes creating beautiful, responsive layouts easier than ever.",
    benefits: "Mastering CSS layout techniques is essential for creating modern, responsive websites. These skills are fundamental for frontend development and web design careers.",
    difficulty: "Beginner to Intermediate",
    topics: [
      { icon: "CSS", text: "Flexbox layouts and alignment" },
      { icon: "CSS", text: "CSS Grid systems and positioning" },
      { icon: "CSS", text: "Responsive design techniques" },
      { icon: "CSS", text: "Centering and positioning tricks" },
      { icon: "CSS", text: "Modern CSS features and utilities" }
    ],
    usefulLinks: [
      { name: "CSS-Tricks", url: "https://css-tricks.com/" },
      { name: "MDN CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "Flexbox Froggy", url: "https://flexboxfroggy.com/" },
      { name: "Grid Garden", url: "https://cssgridgarden.com/" }
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