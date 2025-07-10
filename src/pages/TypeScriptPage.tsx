import React, { useState, useEffect } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { typescriptSections, loadTypeScriptContent, preloadTypeScriptSection } from '../data/typescriptContent';
import PageLayout from '../components/PageLayout';

interface TypeScriptExample {
  title: string;
  code: string;
}

interface TypeScriptContentSection {
  title: string;
  examples: TypeScriptExample[];
}

const TypeScriptPage: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('basics', typescriptSections);
  const [content, setContent] = useState<TypeScriptContentSection[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const sectionContent = await loadTypeScriptContent(activeSection);
        if (sectionContent) {
          setContent(sectionContent);
        } else {
          setError(`Content not found for section: ${activeSection}`);
        }
      } catch (err) {
        setError(`Failed to load content: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [activeSection]);

  // Preload next section for better UX
  useEffect(() => {
    const currentIndex = typescriptSections.findIndex(s => s.id === activeSection);
    if (currentIndex < typescriptSections.length - 1) {
      const nextSection = typescriptSections[currentIndex + 1];
      preloadTypeScriptSection(nextSection.id);
    }
  }, [activeSection]);

  const fallbackContent = {
    description: "Welcome to TypeScript! This section covers essential TypeScript concepts for type-safe JavaScript development.",
    topics: [
      { icon: "📘", text: "Type annotations and interfaces" },
      { icon: "📘", text: "Classes, generics, and enums" },
      { icon: "📘", text: "Advanced types and utility types" },
      { icon: "📘", text: "Modules and decorators" },
      { icon: "📘", text: "Best practices and patterns" }
    ]
  };

  return (
    <PageLayout
      title="TypeScript"
      icon="📘"
      sections={typescriptSections}
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

export default TypeScriptPage; 