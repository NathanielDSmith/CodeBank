import React, { useState, useEffect } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { stringSections, loadStringContent, preloadStringSection } from '../data/stringContent';
import PageLayout from '../components/PageLayout';

interface StringContent {
  title: string;
  examples: {
    title: string;
    code: string;
  }[];
}

const StringManipulation: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('overview', stringSections);
  const [content, setContent] = useState<StringContent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const sectionContent = await loadStringContent(activeSection);
        if (sectionContent) {
          setContent(sectionContent);
        } else {
          setError('Failed to load content');
        }
      } catch (err) {
        setError('Error loading content');
        console.error('Error loading string content:', err);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [activeSection]);

  // Preload next section for better UX
  useEffect(() => {
    const currentIndex = stringSections.findIndex(s => s.id === activeSection);
    if (currentIndex < stringSections.length - 1) {
      const nextSection = stringSections[currentIndex + 1];
      preloadStringSection(nextSection.id);
    }
  }, [activeSection]);

  const fallbackContent = {
    description: "String manipulation is a fundamental skill in programming. Learn how to efficiently work with text data, from basic operations to advanced techniques with regular expressions.",
    benefits: "String manipulation is used in data processing, text analysis, form validation, and API development. These skills are essential for any programming language and are widely used in web development.",
    difficulty: "Beginner to Intermediate",
    topics: [
      { icon: "S", text: "Basic string methods and manipulation" },
      { icon: "S", text: "Searching and replacing text" },
      { icon: "S", text: "Case conversion and formatting" },
      { icon: "S", text: "Regular expressions with strings" },
      { icon: "S", text: "Performance optimization tips" }
    ],
    usefulLinks: [
      { name: "MDN String Methods", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" },
      { name: "JavaScript String Guide", url: "https://javascript.info/string" },
      { name: "Regex101", url: "https://regex101.com/" },
      { name: "String Manipulation Examples", url: "https://www.w3schools.com/js/js_string_methods.asp" }
    ]
  };

  return (
    <PageLayout
      title="String Manipulation"
      icon="📝"
      sections={stringSections}
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

export default StringManipulation; 