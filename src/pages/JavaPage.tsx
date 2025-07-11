import React, { useState, useEffect } from 'react';
import { javaSections, javaContent } from '../data/javaContent';
import PageLayout from '../components/PageLayout';

const JavaPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('basics');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [content, setContent] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    try {
      // Simulate async loading for consistency
      setTimeout(() => {
        setContent(javaContent[activeSection] || null);
        setLoading(false);
      }, 100);
    } catch (err) {
      setError('Failed to load content');
      setLoading(false);
    }
  }, [activeSection]);

  const fallbackContent = {
    description: 'Welcome to Java! This section covers essential Java concepts for beginners, from basic syntax to enterprise development.',
    topics: [
      { icon: '☕', text: 'Java basics: variables, data types, and syntax' },
      { icon: '🏗️', text: 'Object-oriented programming with classes and inheritance' },
      { icon: '📦', text: 'Collections framework: lists, maps, and sets' },
      { icon: '🌊', text: 'Modern Java with streams and lambda expressions' },
      { icon: '🌱', text: 'Spring Boot for web development and APIs' },
      { icon: '📱', text: 'Android development with Java' }
    ]
  };

  return (
    <PageLayout
      title="Java"
      icon="☕"
      sections={javaSections}
      activeSection={activeSection}
      searchTerm={searchTerm}
      content={content}
      loading={loading}
      error={error}
      isSidePanelOpen={isSidePanelOpen}
      onSectionChange={setActiveSection}
      onSearchChange={setSearchTerm}
      onToggleSidePanel={() => setIsSidePanelOpen(!isSidePanelOpen)}
      fallbackContent={fallbackContent}
    />
  );
};

export default JavaPage; 