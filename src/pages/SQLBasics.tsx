import React, { useState, useEffect } from 'react';
import { sqlSections, sqlContent } from '../data/sqlContent';
import PageLayout from '../components/PageLayout';
// Removed: import { Section } from '../types/index';

const SQLBasics: React.FC = () => {
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
        setContent(sqlContent[activeSection] || null);
        setLoading(false);
      }, 100);
    } catch (err) {
      setError('Failed to load content');
      setLoading(false);
    }
  }, [activeSection]);

  const fallbackContent = {
    description: 'Welcome to SQL Basics! This section covers essential SQL concepts for beginners.',
    topics: [
      { icon: '🗄️', text: 'What is SQL and how to use it' },
      { icon: '🔎', text: 'SELECT statements and filtering data' },
      { icon: '🔗', text: 'Combining tables with JOIN' },
      { icon: '∑', text: 'Aggregate functions and grouping' },
      { icon: '✏️', text: 'Adding, updating, and deleting data' },
      { icon: '⚡', text: 'Improving performance with indexes' }
    ]
  };

  return (
    <PageLayout
      title="SQL Basics"
      icon="🗄️"
      sections={sqlSections}
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

export default SQLBasics; 