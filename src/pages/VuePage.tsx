import React, { useState } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { vueSections, vueContent } from '../data/vueContent';
import PageLayout from '../components/PageLayout';

interface Section {
  title: string;
  examples: { title: string; code: string }[];
}

const VuePage: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('basics', vueSections);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const content = vueContent[activeSection] || null;
  const loading = false;
  const error = null;

  const fallbackContent = {
    description: "Welcome to Vue.js! This section covers essential Vue concepts for building reactive user interfaces.",
    topics: [
      { icon: "🟩", text: "Vue instances and components" },
      { icon: "🟩", text: "Template syntax and directives" },
      { icon: "🟩", text: "Reactivity and data binding" },
      { icon: "🟩", text: "Lifecycle hooks and events" },
      { icon: "🟩", text: "Routing and state management" }
    ]
  };

  return (
    <PageLayout
      title="Vue.js"
      icon="V"
      sections={vueSections}
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

export default VuePage; 