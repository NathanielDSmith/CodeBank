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
    description: "TypeScript is JavaScript with a static type system. It catches entire categories of bugs at compile time — null dereferences, wrong argument types, missing properties — that would otherwise surface at runtime in production. Once you're used to it, untyped JS feels like coding in the dark.",
    benefits: "Real-world TypeScript means confident refactoring, IDE completions that actually work, and errors caught before users see them. It's the difference between guessing what a function returns and knowing. Essential for any serious team codebase.",
    difficulty: "Intermediate",
    topics: [
      { icon: "🔷", text: "Type annotations, inference, and the type system fundamentals" },
      { icon: "🔷", text: "Unions, intersections, literal types, and narrowing" },
      { icon: "🔷", text: "Generics — writing reusable, type-safe abstractions" },
      { icon: "🔷", text: "Utility types: Partial, Pick, Omit, ReturnType, and more" },
      { icon: "🔷", text: "Advanced types: conditional types, mapped types, template literals" },
      { icon: "🔷", text: "Strict mode, real-world patterns, and what to avoid" }
    ],
    usefulLinks: [
      { name: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/intro.html" },
      { name: "TypeScript Playground", url: "https://www.typescriptlang.org/play" },
      { name: "TypeScript Deep Dive", url: "https://basarat.gitbook.io/typescript/" },
      { name: "Total TypeScript", url: "https://www.totaltypescript.com/" }
    ]
  };

  return (
    <PageLayout
      language="typescript"
      title="TypeScript"
      icon="🔷"
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