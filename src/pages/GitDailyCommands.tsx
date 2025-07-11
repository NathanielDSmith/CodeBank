import React, { useState } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { gitSections, gitContent } from '../data/gitContent';
import PageLayout from '../components/PageLayout';

interface Section {
  title: string;
  examples: { title: string; code: string }[];
}

const GitDailyCommands: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('overview', gitSections);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const content = gitContent[activeSection] || null;
  const loading = false;
  const error = null;

  const fallbackContent = {
    description: "Git is the most popular version control system used by developers worldwide. Learn essential commands for managing your code and collaborating with teams.",
    benefits: "Git skills are essential for any developer. Version control enables collaboration, code backup, and project history tracking. These skills are required for most software development jobs.",
    difficulty: "Beginner to Intermediate",
    topics: [
      { icon: "📚", text: "Basic repository operations" },
      { icon: "📚", text: "Committing and branching" },
      { icon: "📚", text: "Remote repository management" },
      { icon: "📚", text: "History and log viewing" },
      { icon: "📚", text: "Merging and conflict resolution" }
    ],
    usefulLinks: [
      { name: "Git Official Docs", url: "https://git-scm.com/doc" },
      { name: "GitHub Guides", url: "https://guides.github.com/" },
      { name: "Git Cheat Sheet", url: "https://education.github.com/git-cheat-sheet-education.pdf" },
      { name: "Git Tutorial", url: "https://git-scm.com/docs/gittutorial" }
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