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
    description: "Python - the Swiss Army knife of programming. Easy to read, quick to write, and does pretty much everything. Web apps, data crunching, automation scripts, you name it.",
    benefits: "Perfect for beginners but powerful enough for pros. Great for web dev (Django/Flask), data science (pandas/numpy), AI stuff, and automating boring tasks. The syntax is so clean you can almost read it like English.",
    difficulty: "Beginner to Advanced",
    topics: [
      { icon: "🐍", text: "Variables, data types, and basic syntax" },
      { icon: "🐍", text: "Functions, modules, and imports" },
      { icon: "🐍", text: "Lists, dicts, and data structures" },
      { icon: "🐍", text: "File handling and error catching" },
      { icon: "🐍", text: "Classes and OOP basics" }
    ],
    usefulLinks: [
      { name: "Python Docs", url: "https://docs.python.org/3/tutorial/" },
      { name: "Real Python", url: "https://realpython.com/" },
      { name: "Python.org", url: "https://www.python.org/" },
      { name: "Python for Beginners", url: "https://wiki.python.org/moin/BeginnersGuide" }
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