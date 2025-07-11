import React, { useState, useEffect } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { dockerSections, loadDockerContent, preloadDockerSection } from '../data/dockerContent';
import PageLayout from '../components/PageLayout';

interface DockerContentSection {
  title: string;
  examples: { title: string; code: string }[];
}

const DockerPage: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('overview', dockerSections);
  const [content, setContent] = useState<DockerContentSection[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const sectionContent = await loadDockerContent(activeSection);
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
    const currentIndex = dockerSections.findIndex(s => s.id === activeSection);
    if (currentIndex < dockerSections.length - 1) {
      const nextSection = dockerSections[currentIndex + 1];
      preloadDockerSection(nextSection.id);
    }
  }, [activeSection]);

  const fallbackContent = {
    description: "Docker is a platform for developing, shipping, and running applications in containers. It enables consistent environments across development, testing, and production.",
    benefits: "Docker simplifies deployment, ensures consistency across environments, and enables microservices architecture. These skills are essential for DevOps, cloud deployment, and modern application development.",
    difficulty: "Intermediate to Advanced",
    topics: [
      { icon: "🐳", text: "Container concepts and Docker basics" },
      { icon: "🐳", text: "Building and managing Docker images" },
      { icon: "🐳", text: "Running containers and volume management" },
      { icon: "🐳", text: "Docker Compose for multi-container apps" },
      { icon: "🐳", text: "Networking and deployment strategies" }
    ],
    usefulLinks: [
      { name: "Docker Official Docs", url: "https://docs.docker.com/" },
      { name: "Docker Hub", url: "https://hub.docker.com/" },
      { name: "Docker Tutorial", url: "https://docs.docker.com/get-started/" },
      { name: "Docker Compose", url: "https://docs.docker.com/compose/" }
    ]
  };

  return (
    <PageLayout
      title="Docker Basics"
      icon="🐳"
      sections={dockerSections}
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

export default DockerPage; 