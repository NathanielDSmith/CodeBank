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
    description: "React - the go-to library for building interactive UIs. Component-based, declarative, and has a massive ecosystem. Once you get the hang of it, you'll wonder how you built websites without it.",
    benefits: "Reusable components save tons of time. Virtual DOM keeps things fast, and the ecosystem is huge - routing, state management, UI libraries, you name it. Plus, the job market loves React devs.",
    difficulty: "Intermediate",
    topics: [
      { icon: "⚛️", text: "Components, props, and state basics" },
      { icon: "⚛️", text: "Hooks and lifecycle stuff" },
      { icon: "⚛️", text: "Event handling and form management" },
      { icon: "⚛️", text: "API calls and data fetching" },
      { icon: "⚛️", text: "Performance tips and best practices" }
    ],
    usefulLinks: [
      { name: "React Docs", url: "https://react.dev/" },
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