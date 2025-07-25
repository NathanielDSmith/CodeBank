import React, { useState, useEffect } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { htmlSections, loadHtmlContent, preloadHtmlSection } from '../data/htmlContent';
import PageLayout from '../components/PageLayout';

interface Example {
  title: string;
  code: string;
}

interface Section {
  title: string;
  examples: Example[];
}

const HTMLStructure: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('overview', htmlSections);
  const [content, setContent] = useState<Section[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const sectionContent = await loadHtmlContent(activeSection);
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
    const currentIndex = htmlSections.findIndex(s => s.id === activeSection);
    if (currentIndex < htmlSections.length - 1) {
      const nextSection = htmlSections[currentIndex + 1];
      preloadHtmlSection(nextSection.id);
    }
  }, [activeSection]);

  const fallbackContent = {
    description: "HTML is the foundation of every website. It provides the structure and content that makes web pages accessible, semantic, and SEO-friendly.",
    benefits: "Understanding HTML is essential for web development. It's the first step in creating websites and is fundamental for accessibility, SEO, and modern web standards.",
    difficulty: "Beginner",
    topics: [
      { icon: "🌐", text: "HTML document structure and semantic elements" },
      { icon: "🌐", text: "Forms, tables, and multimedia elements" },
      { icon: "🌐", text: "Accessibility and SEO best practices" },
      { icon: "🌐", text: "HTML5 features and modern standards" },
      { icon: "🌐", text: "Validation and debugging techniques" }
    ],
    usefulLinks: [
      { name: "MDN HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "HTML Living Standard", url: "https://html.spec.whatwg.org/" },
      { name: "W3Schools HTML", url: "https://www.w3schools.com/html/" },
      { name: "HTML Validator", url: "https://validator.w3.org/" }
    ]
  };

  return (
    <PageLayout
      title="HTML Structure"
      icon="🌐"
      sections={htmlSections}
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

export default HTMLStructure; 