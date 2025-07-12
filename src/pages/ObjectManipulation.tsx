import React, { useState, useEffect } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { objectSections, loadObjectContent, preloadObjectSection } from '../data/objectContent';
import PageLayout from '../components/PageLayout';

interface Example {
  title: string;
  code: string;
}

interface Section {
  title: string;
  examples: Example[];
}

const ObjectManipulation: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('overview', objectSections);
  const [content, setContent] = useState<Section[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const sectionContent = await loadObjectContent(activeSection);
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
    const currentIndex = objectSections.findIndex(s => s.id === activeSection);
    if (currentIndex < objectSections.length - 1) {
      const nextSection = objectSections[currentIndex + 1];
      preloadObjectSection(nextSection.id);
    }
  }, [activeSection]);

  const fallbackContent = {
    description: "Objects are the building blocks of JavaScript applications. Learn how to create, manipulate, and work with objects efficiently using modern JavaScript features.",
    benefits: "Object manipulation is essential for working with APIs, building data structures, and creating maintainable code. These skills are fundamental for JavaScript development and are used in frameworks like React and Node.js.",
    difficulty: "Beginner to Intermediate",
    topics: [
      { icon: "{}", text: "Basic object creation and manipulation" },
      { icon: "{}", text: "Property access and modification" },
      { icon: "{}", text: "Object destructuring and spread" },
      { icon: "{}", text: "Object methods and prototypes" },
      { icon: "{}", text: "Advanced object patterns" }
    ],
    usefulLinks: [
      { name: "MDN Objects", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" },
      { name: "JavaScript Object Guide", url: "https://javascript.info/object" },
      { name: "Object Destructuring", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" },
      { name: "Object Methods", url: "https://www.w3schools.com/js/js_object_methods.asp" }
    ]
  };

  return (
    <PageLayout
      title="Object Manipulation"
      icon="📦"
      sections={objectSections}
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

export default ObjectManipulation; 