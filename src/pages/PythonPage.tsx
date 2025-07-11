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
    description: "Python is a versatile, high-level programming language known for its simplicity and readability. It's perfect for beginners and widely used in web development, data science, AI, automation, and more.",
    benefits: "Python's clean syntax makes it ideal for learning programming. It's used in web development (Django, Flask), data science (pandas, numpy), AI/ML (TensorFlow, PyTorch), and automation. Great for both beginners and professionals.",
    difficulty: "Beginner to Advanced",
    topics: [
      { icon: "🐍", text: "Variables, data types, and control flow" },
      { icon: "🐍", text: "Functions and modules" },
      { icon: "🐍", text: "Lists, dictionaries, and data structures" },
      { icon: "🐍", text: "File I/O and error handling" },
      { icon: "🐍", text: "Object-oriented programming" }
    ],
    usefulLinks: [
      { name: "Python Official Docs", url: "https://docs.python.org/3/tutorial/" },
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