import React, { useState } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { bestPracticesSections, bestPracticesContent } from '../data/bestPracticesContent';
import PageLayout from '../components/PageLayout';

const BestPractices: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('overview', bestPracticesSections);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const content = bestPracticesContent[activeSection] || null;
  const loading = false;
  const error = null;

  const fallbackContent = {
    description: "A collection of practical thinking patterns and habits for everyday development. Less about syntax, more about how to approach problems — the mindset behind good debugging and clean work.",
    benefits: "Strong debugging instincts and good habits save more time than any individual tool or shortcut. These are the mental patterns that experienced developers apply automatically.",
    difficulty: "All Levels",
    topics: [
      { icon: '🧠', text: 'How to approach a bug methodically' },
      { icon: '🖥️', text: 'Diagnosing UI and frontend issues' },
      { icon: '🔢', text: 'Tracing logic and data problems' },
      { icon: '🔴', text: 'Reading error messages effectively' },
      { icon: '🔍', text: 'Using browser DevTools' },
      { icon: '💡', text: 'What to do when you\'re stuck' },
      { icon: '✅', text: 'Habits that prevent bugs in the first place' },
    ],
  };

  return (
    <PageLayout
      title="Best Practices"
      icon="🧠"
      sections={bestPracticesSections}
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

export default BestPractices;
