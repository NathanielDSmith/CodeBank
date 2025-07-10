import React, { useState, useEffect } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { javascriptSections, loadJavaScriptContent, preloadJavaScriptSection } from '../data/javascriptContent';
import PageLayout from '../components/PageLayout';

interface Example {
  title: string;
  code: string;
}

interface Section {
  title: string;
  examples: Example[];
}

const JavaScriptBasics: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('variables', javascriptSections);
  const [content, setContent] = useState<Section[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const sectionContent = await loadJavaScriptContent(activeSection);
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
    const currentIndex = javascriptSections.findIndex(s => s.id === activeSection);
    if (currentIndex < javascriptSections.length - 1) {
      const nextSection = javascriptSections[currentIndex + 1];
      preloadJavaScriptSection(nextSection.id);
    }
  }, [activeSection]);

  const fallbackContent = {
    description: "Welcome to JavaScript Basics! This section covers essential JavaScript concepts for beginners.",
    topics: [
      { icon: "⚡", text: "Variables, data types, and scope" },
      { icon: "⚡", text: "Functions and control flow" },
      { icon: "⚡", text: "Arrays, objects, and data structures" },
      { icon: "⚡", text: "DOM manipulation and events" },
      { icon: "⚡", text: "Async programming and promises" }
    ]
  };

  return (
    <PageLayout
      title="JavaScript Basics"
      icon="⚡"
      sections={javascriptSections}
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

export default JavaScriptBasics; 