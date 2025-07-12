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
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('overview', typescriptSections);
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
        // Don't treat null as an error for overview section
        if (sectionContent === null && activeSection === 'overview') {
          setContent(null);
        } else if (sectionContent) {
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
    description: "TypeScript - JavaScript with superpowers. Adds static typing so you catch bugs before they hit production. Makes your code more predictable and your IDE way smarter.",
    benefits: "Catch errors while you code, not when users complain. Better autocomplete, safer refactoring, and it's basically required for serious React/Angular projects these days.",
    difficulty: "Intermediate",
    topics: [
      { icon: "📘", text: "Basic types and interfaces" },
      { icon: "📘", text: "Classes, generics, and enums" },
      { icon: "📘", text: "Advanced types and utilities" },
      { icon: "📘", text: "Modules and decorators" },
      { icon: "📘", text: "Best practices and patterns" }
    ],
    usefulLinks: [
      { name: "TypeScript Docs", url: "https://www.typescriptlang.org/docs/" },
      { name: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/intro.html" },
      { name: "TypeScript Playground", url: "https://www.typescriptlang.org/play" },
      { name: "TypeScript Deep Dive", url: "https://basarat.gitbook.io/typescript/" }
    ]
  };

  return (
    <PageLayout
      title="TypeScript"
      icon="TS"
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