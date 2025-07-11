import React, { useState, useEffect } from 'react';
import { javaSections, javaContent } from '../data/javaContent';
import PageLayout from '../components/PageLayout';

const JavaPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('overview');
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
    description: 'Java is a powerful, object-oriented programming language known for its "Write Once, Run Anywhere" capability. It\'s widely used in enterprise development, Android apps, and large-scale systems.',
    benefits: 'Java\'s strong typing and object-oriented design make it excellent for building robust, scalable applications. It\'s the foundation for Android development and enterprise software. Great for learning programming fundamentals.',
    difficulty: 'Intermediate to Advanced',
    topics: [
      { icon: '☕', text: 'Java basics: variables, data types, and syntax' },
      { icon: '🏗️', text: 'Object-oriented programming with classes and inheritance' },
      { icon: '📦', text: 'Collections framework: lists, maps, and sets' },
      { icon: '🌊', text: 'Modern Java with streams and lambda expressions' },
      { icon: '🌱', text: 'Spring Boot for web development and APIs' },
      { icon: '📱', text: 'Android development with Java' }
    ],
    usefulLinks: [
      { name: "Oracle Java Docs", url: "https://docs.oracle.com/javase/tutorial/" },
      { name: "Java Tutorial", url: "https://docs.oracle.com/javase/tutorial/" },
      { name: "Spring Boot", url: "https://spring.io/projects/spring-boot" },
      { name: "Android Developer", url: "https://developer.android.com/" }
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