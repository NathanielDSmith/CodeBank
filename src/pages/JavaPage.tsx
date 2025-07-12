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
    description: 'Java - the enterprise workhorse. Write once, run anywhere (mostly). Big in Android apps, enterprise software, and anywhere you need rock-solid reliability.',
    benefits: 'Strong typing keeps your code predictable. Great for learning OOP fundamentals, and it\'s everywhere - Android apps, enterprise systems, big data processing. Plus, the job market is huge.',
    difficulty: 'Intermediate to Advanced',
    topics: [
      { icon: '☕', text: 'Basic syntax, variables, and data types' },
      { icon: '🏗️', text: 'Classes, objects, and inheritance' },
      { icon: '📦', text: 'Collections: lists, maps, sets' },
      { icon: '🌊', text: 'Streams and lambda expressions' },
      { icon: '🌱', text: 'Spring Boot for web apps' },
      { icon: '📱', text: 'Android development basics' }
    ],
    usefulLinks: [
      { name: "Java Docs", url: "https://docs.oracle.com/javase/tutorial/" },
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