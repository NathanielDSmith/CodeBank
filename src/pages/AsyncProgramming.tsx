import React, { useState, useEffect } from 'react';
import { asyncSections, asyncContent } from '../data/asyncContent';
import PageLayout from '../components/PageLayout';

const AsyncProgramming: React.FC = () => {
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
        setContent(asyncContent[activeSection] || null);
        setLoading(false);
      }, 100);
    } catch (err) {
      setError('Failed to load content');
      setLoading(false);
    }
  }, [activeSection]);

  const fallbackContent = {
    description: 'Asynchronous programming is essential for modern web development. Learn how to handle operations that take time without blocking your application.',
    benefits: 'Async programming enables responsive user interfaces, efficient API calls, and better user experience. These skills are crucial for web development, mobile apps, and server-side programming.',
    difficulty: 'Intermediate',
    topics: [
      { icon: '⏱️', text: 'Understanding synchronous vs asynchronous code' },
      { icon: '🤝', text: 'Working with Promises and .then() chains' },
      { icon: '⚡', text: 'Modern async/await syntax' },
      { icon: '⚠️', text: 'Error handling in async operations' },
      { icon: '🌐', text: 'Making API calls and handling responses' },
      { icon: '🔄', text: 'Running operations in parallel' }
    ],
    usefulLinks: [
      { name: "MDN Async/Await", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function" },
      { name: "JavaScript Promises", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" },
      { name: "Async JavaScript", url: "https://javascript.info/async" },
      { name: "Fetch API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" }
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