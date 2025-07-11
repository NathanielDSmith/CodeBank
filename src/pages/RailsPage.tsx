import React, { useState } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { railsSections, railsContent } from '../data/railsContent';
import PageLayout from '../components/PageLayout';

interface Section {
  title: string;
  examples: { title: string; code: string }[];
}

const RailsPage: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('overview', railsSections);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const content = railsContent[activeSection] || null;
  const loading = false;
  const error = null;

  const fallbackContent = {
    description: "Ruby on Rails is a powerful web framework that emphasizes convention over configuration. It's perfect for rapid web application development with built-in best practices.",
    benefits: "Rails enables rapid prototyping and development with its 'Convention over Configuration' philosophy. It's widely used in startups and enterprise applications, offering excellent developer productivity.",
    difficulty: "Intermediate to Advanced",
    topics: [
      { icon: "💎", text: "MVC architecture and conventions" },
      { icon: "💎", text: "Routing and RESTful design" },
      { icon: "💎", text: "ActiveRecord and database operations" },
      { icon: "💎", text: "Controllers, views, and helpers" },
      { icon: "💎", text: "Authentication and authorization" }
    ],
    usefulLinks: [
      { name: "Rails Official Guide", url: "https://guides.rubyonrails.org/" },
      { name: "Rails API Docs", url: "https://api.rubyonrails.org/" },
      { name: "Rails Tutorial", url: "https://www.railstutorial.org/" },
      { name: "Rails Community", url: "https://rubyonrails.org/community/" }
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