import React, { useState } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { vueSections, vueContent } from '../data/vueContent';
import PageLayout from '../components/PageLayout';

interface Section {
  title: string;
  examples: { title: string; code: string }[];
}

const VuePage: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('overview', vueSections);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const content = vueContent[activeSection] || null;
  const loading = false;
  const error = null;

  const fallbackContent = {
    description: "Vue.js is a progressive JavaScript framework for building user interfaces. It's designed to be incrementally adoptable and focuses on the view layer.",
    benefits: "Vue.js offers gentle learning curve, excellent documentation, and powerful features. It's great for both small projects and large applications, with strong community support and ecosystem.",
    difficulty: "Beginner to Intermediate",
    topics: [
      { icon: "🟩", text: "Vue instances and components" },
      { icon: "🟩", text: "Template syntax and directives" },
      { icon: "🟩", text: "Reactivity and data binding" },
      { icon: "🟩", text: "Lifecycle hooks and events" },
      { icon: "🟩", text: "Routing and state management" }
    ],
    usefulLinks: [
      { name: "Vue.js Official Docs", url: "https://vuejs.org/guide/" },
      { name: "Vue Tutorial", url: "https://vuejs.org/tutorial/" },
      { name: "Vue Router", url: "https://router.vuejs.org/" },
      { name: "Vuex", url: "https://vuex.vuejs.org/" }
    ]
  };

  return (
    <PageLayout
      title="Vue.js"
      icon="💚"
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