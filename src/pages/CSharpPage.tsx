import React, { useState, useEffect } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { csharpSections, loadCSharpContent, preloadCSharpSection } from '../data/csharpContent';
import PageLayout from '../components/PageLayout';

interface CSharpContentSection {
  title: string;
  examples: { title: string; code: string }[];
}

const CSharpPage: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('overview', csharpSections);
  const [content, setContent] = useState<CSharpContentSection[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const sectionContent = await loadCSharpContent(activeSection);
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
    const currentIndex = csharpSections.findIndex(s => s.id === activeSection);
    if (currentIndex < csharpSections.length - 1) {
      const nextSection = csharpSections[currentIndex + 1];
      preloadCSharpSection(nextSection.id);
    }
  }, [activeSection]);

  const fallbackContent = {
    description: "C# - Microsoft's flagship language. Strong typing, great tooling, and does everything from web apps to game development. Basically Java but with better syntax and cooler features.",
    benefits: "Enterprise standard with amazing tooling (Visual Studio). Great for Windows apps, Unity game dev, and .NET web services. The job market is huge, especially in enterprise and gaming.",
    difficulty: "Intermediate",
    topics: [
      { icon: "📦", text: "Variables, classes, and OOP basics" },
      { icon: "🔍", text: "LINQ for data querying and manipulation" },
      { icon: "⏱️", text: "Async/await for non-blocking operations" },
      { icon: "🌐", text: "ASP.NET Core for web development" },
      { icon: "🎮", text: "Unity game development" }
    ],
    usefulLinks: [
      { name: "C# Docs", url: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
      { name: ".NET", url: "https://dotnet.microsoft.com/" },
      { name: "Unity", url: "https://unity.com/" },
      { name: "ASP.NET Core", url: "https://docs.microsoft.com/en-us/aspnet/core/" }
    ]
  };

  return (
    <PageLayout
      title="C#"
      icon="C#"
      sections={csharpSections}
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

export default CSharpPage; 