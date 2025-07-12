import React, { useState, useEffect } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { goSections, loadGoContent, preloadGoSection } from '../data/goContent';
import PageLayout from '../components/PageLayout';

interface GoContentSection {
  title: string;
  examples: { title: string; code: string }[];
}

const GoPage: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('overview', goSections);
  const [content, setContent] = useState<GoContentSection[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const sectionContent = await loadGoContent(activeSection);
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
    const currentIndex = goSections.findIndex(s => s.id === activeSection);
    if (currentIndex < goSections.length - 1) {
      const nextSection = goSections[currentIndex + 1];
      preloadGoSection(nextSection.id);
    }
  }, [activeSection]);

  const fallbackContent = {
    description: "Go - Google's language for building fast, reliable software. Simple syntax, built-in concurrency, and compiles to a single binary. Perfect for microservices and cloud apps.",
    benefits: "Super fast compilation, great for concurrent programming with goroutines and channels. Single binary deployment, excellent for microservices, and huge in cloud/DevOps. The syntax is clean and the tooling is amazing.",
    difficulty: "Intermediate",
    topics: [
      { icon: "📦", text: "Variables, functions, and basic syntax" },
      { icon: "⚡", text: "Goroutines for concurrent programming" },
      { icon: "🔗", text: "Channels for communication between goroutines" },
      { icon: "🌐", text: "Web servers and HTTP handling" },
      { icon: "🏗️", text: "Structs and interfaces" }
    ],
    usefulLinks: [
      { name: "Go Docs", url: "https://golang.org/doc/" },
      { name: "Go Tour", url: "https://tour.golang.org/" },
      { name: "Go by Example", url: "https://gobyexample.com/" },
      { name: "Gin Web Framework", url: "https://gin-gonic.com/" }
    ]
  };

  return (
    <PageLayout
      title="Go"
      icon="🚀"
      sections={goSections}
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

export default GoPage; 