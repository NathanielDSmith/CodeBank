import React, { useState, useEffect } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { reactSections, loadReactContent, preloadReactSection } from '../data/reactContent';
import PageLayout from '../components/PageLayout';

interface Example {
  title: string;
  code: string;
}

interface Section {
  title: string;
  examples: Example[];
}

const ReactCommonTasks: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('overview', reactSections);
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
        const sectionContent = await loadReactContent(activeSection);
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
    const currentIndex = reactSections.findIndex(s => s.id === activeSection);
    const nextSection = reactSections[currentIndex + 1];
    const prevSection = reactSections[currentIndex - 1];
    
    if (nextSection) {
      preloadReactSection(nextSection.id);
    }
    if (prevSection) {
      preloadReactSection(prevSection.id);
    }
  }, [activeSection]);

  const fallbackContent = {
    description: "React is a powerful JavaScript library for building user interfaces. It's component-based, declarative, and efficient, making it perfect for creating interactive web applications.",
    benefits: "React's component-based architecture promotes reusability and maintainability. Virtual DOM ensures optimal performance, while the large ecosystem provides tools for routing, state management, and more.",
    difficulty: "Intermediate",
    topics: [
      { icon: "⚛️", text: "Components, props, and state management" },
      { icon: "⚛️", text: "Hooks and lifecycle methods" },
      { icon: "⚛️", text: "Event handling and forms" },
      { icon: "⚛️", text: "API integration and data fetching" },
      { icon: "⚛️", text: "Performance optimization and best practices" }
    ],
    usefulLinks: [
      { name: "React Official Docs", url: "https://react.dev/" },
      { name: "React Tutorial", url: "https://react.dev/learn" },
      { name: "React Hooks", url: "https://react.dev/reference/react" },
      { name: "Create React App", url: "https://create-react-app.dev/" }
    ]
  };

  return (
    <PageLayout
      title="React Common Tasks"
      icon="⚛️"
      sections={reactSections}
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

export default ReactCommonTasks; 