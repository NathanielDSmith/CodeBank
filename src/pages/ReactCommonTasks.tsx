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
    description: "An in-depth React reference covering the patterns and thinking that separates maintainable production apps from tutorial code — hooks, state architecture, performance, testing, and more.",
    benefits: "React's mental model — components, state, and effects — is the foundation of modern frontend development. Understanding it deeply means you can reason about any React codebase, not just the one you wrote.",
    difficulty: "Intermediate to Advanced",
    topics: [
      { icon: "🎣", text: "Hooks in depth — useState, useEffect, useRef, useMemo, useCallback, and custom hooks" },
      { icon: "🏗️", text: "State architecture — when to use useState vs useReducer, colocation, lifting state" },
      { icon: "🧩", text: "Component design — composition, compound components, avoiding prop drilling" },
      { icon: "🌍", text: "Context API — when to use it, how to avoid performance pitfalls" },
      { icon: "⚡", text: "Performance — React.memo, code splitting, profiling" },
      { icon: "🌐", text: "Data fetching — manual patterns and React Query" },
      { icon: "🧪", text: "Testing with React Testing Library — testing behaviour, not implementation" }
    ],
    usefulLinks: [
      { name: "React Docs (react.dev)", url: "https://react.dev/" },
      { name: "TanStack Query", url: "https://tanstack.com/query/latest" },
      { name: "React Hook Form", url: "https://react-hook-form.com/" },
      { name: "React Testing Library", url: "https://testing-library.com/docs/react-testing-library/intro/" },
      { name: "React Router v6", url: "https://reactrouter.com/en/main" }
    ]
  };

  return (
    <PageLayout
      language="jsx"
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