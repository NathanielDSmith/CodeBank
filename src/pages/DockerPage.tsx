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
    description: "Docker containers - basically like lightweight VMs that package your app with everything it needs to run. Handy for keeping dev environments consistent and deploying stuff without the 'works on my machine' headache.",
    benefits: "Skip the environment setup drama. Build once, run anywhere. Great for microservices, CI/CD pipelines, and when you need to ship apps that actually work the same everywhere.",
    difficulty: "Intermediate to Advanced",
    topics: [
      { icon: "🐳", text: "Basic container concepts and Docker commands" },
      { icon: "🐳", text: "Building images and managing containers" },
      { icon: "🐳", text: "Volumes and persistent data" },
      { icon: "🐳", text: "Docker Compose for multi-service apps" },
      { icon: "🐳", text: "Networking and production deployment" }
    ],
    usefulLinks: [
      { name: "Docker Docs", url: "https://docs.docker.com/" },
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