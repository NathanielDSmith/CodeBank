import React, { useState } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { railsSections, railsContent } from '../data/railsContent';
import PageLayout from '../components/PageLayout';

interface Section {
  title: string;
  examples: { title: string; code: string }[];
}

const RailsPage: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('basics', railsSections);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const content = railsContent[activeSection] || null;
  const loading = false;
  const error = null;

  const fallbackContent = {
    description: "Welcome to Ruby on Rails! This section covers essential Rails concepts for web development.",
    topics: [
      { icon: "💎", text: "MVC architecture and conventions" },
      { icon: "💎", text: "Routing and RESTful design" },
      { icon: "💎", text: "ActiveRecord and database operations" },
      { icon: "💎", text: "Controllers, views, and helpers" },
      { icon: "💎", text: "Authentication and authorization" }
    ]
  };

  return (
    <PageLayout
      title="Ruby on Rails"
      icon="💎"
      sections={railsSections}
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

export default RailsPage; 