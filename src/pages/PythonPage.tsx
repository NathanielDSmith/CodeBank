import React, { useState, useEffect } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { pythonSections, pythonContent } from '../data/pythonContent';
import PageLayout from '../components/PageLayout';

interface Section {
  title: string;
  examples: { title: string; code: string }[];
}

const PythonPage: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('overview', pythonSections);
  const [content, setContent] = useState<Section[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    try {
      // Simulate async loading for consistency
      setTimeout(() => {
        setContent(pythonContent[activeSection] || null);
        setLoading(false);
      }, 100);
    } catch (err) {
      setError('Failed to load content');
      setLoading(false);
    }
  }, [activeSection]);

  const fallbackContent = {
    description: "Python rewards developers who write it as it was intended — idiomatic, expressive, and direct. This reference goes beyond syntax to cover the patterns that separate beginner Python from professional Python: closures, generators, the data model, context managers, and the standard library you didn't know you had.",
    benefits: "Python is the dominant language in data science, ML, scripting, and backend APIs (Django/FastAPI). Writing it well means understanding things like mutable defaults, reference semantics, the iterator protocol, and when to reach for dataclasses vs plain dicts vs namedtuples.",
    difficulty: "Intermediate",
    topics: [
      { icon: "🐍", text: "Type system, truthiness, and reference semantics" },
      { icon: "🐍", text: "Functions — *args/**kwargs, decorators, closures" },
      { icon: "🐍", text: "Lists, dicts, sets — comprehensions and idioms" },
      { icon: "🐍", text: "Generators and lazy iteration with itertools" },
      { icon: "🐍", text: "Classes, dunder methods, and dataclasses" },
      { icon: "🐍", text: "Exceptions, context managers, and the stdlib" }
    ],
    usefulLinks: [
      { name: "Python Docs", url: "https://docs.python.org/3/" },
      { name: "Real Python", url: "https://realpython.com/" },
      { name: "Fluent Python (book)", url: "https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/" },
      { name: "Python Cookbook", url: "https://www.dabeaz.com/cookbook.html" }
    ]
  };

  return (
    <PageLayout
      language="python"
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