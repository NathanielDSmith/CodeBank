import React, { useState } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { gitSections, gitContent } from '../data/gitContent';
import PageLayout from '../components/PageLayout';

interface Section {
  title: string;
  examples: { title: string; code: string }[];
}

const GitDailyCommands: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('basics', gitSections);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const content = gitContent[activeSection] || null;
  const loading = false;
  const error = null;

  const fallbackContent = {
    description: "Welcome to Git Daily Commands! This section covers essential Git commands for version control.",
    topics: [
      { icon: "📚", text: "Basic repository operations" },
      { icon: "📚", text: "Committing and branching" },
      { icon: "📚", text: "Remote repository management" },
      { icon: "📚", text: "History and log viewing" },
      { icon: "📚", text: "Merging and conflict resolution" }
    ]
  };

  return (
    <PageLayout
      title="Git Daily Commands"
      icon="📚"
      sections={gitSections}
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

export default GitDailyCommands; 