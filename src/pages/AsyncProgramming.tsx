import React, { useState, useEffect } from 'react';
import { asyncSections, asyncContent } from '../data/asyncContent';
import PageLayout from '../components/PageLayout';

const AsyncProgramming: React.FC = () => {
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
        setContent(asyncContent[activeSection] || null);
        setLoading(false);
      }, 100);
    } catch (err) {
      setError('Failed to load content');
      setLoading(false);
    }
  }, [activeSection]);

  const fallbackContent = {
    description: 'Welcome to Async Programming! This section covers essential asynchronous programming concepts for beginners.',
    topics: [
      { icon: '⏱️', text: 'Understanding synchronous vs asynchronous code' },
      { icon: '🤝', text: 'Working with Promises and .then() chains' },
      { icon: '⚡', text: 'Modern async/await syntax' },
      { icon: '⚠️', text: 'Error handling in async operations' },
      { icon: '🌐', text: 'Making API calls and handling responses' },
      { icon: '🔄', text: 'Running operations in parallel' }
    ]
  };

  return (
    <PageLayout
      title="Async Programming"
      icon="⏱️"
      sections={asyncSections}
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

export default AsyncProgramming; 