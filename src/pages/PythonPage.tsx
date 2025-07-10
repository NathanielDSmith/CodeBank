import React, { useState } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { pythonSections, pythonContent } from '../data/pythonContent';
import PageLayout from '../components/PageLayout';

interface Section {
  title: string;
  examples: { title: string; code: string }[];
}

const PythonPage: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('basics', pythonSections);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const content = pythonContent[activeSection] || null;
  const loading = false;
  const error = null;

  const fallbackContent = {
    description: "Welcome to Python! This section covers essential Python concepts for programming.",
    topics: [
      { icon: "🐍", text: "Variables, data types, and control flow" },
      { icon: "🐍", text: "Functions and modules" },
      { icon: "🐍", text: "Lists, dictionaries, and data structures" },
      { icon: "🐍", text: "File I/O and error handling" },
      { icon: "🐍", text: "Object-oriented programming" }
    ]
  };

  return (
    <PageLayout
      title="Python"
      icon="🐍"
      sections={pythonSections}
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

export default PythonPage; 