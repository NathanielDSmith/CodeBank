import React, { useState, useEffect } from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { flutterSections, loadFlutterContent, preloadFlutterSection } from '../data/flutterContent';
import PageLayout from '../components/PageLayout';

interface FlutterContentSection {
  title: string;
  examples: { title: string; code: string; explanation?: string; keyIdeas?: string[]; pitfalls?: string[] }[];
}

const FlutterPage: React.FC = () => {
  const { activeSection, searchTerm, handleSectionChange, handleSearchChange } = usePageNavigation('overview', flutterSections);
  const [content, setContent] = useState<FlutterContentSection[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      setError(null);

      try {
        const sectionContent = await loadFlutterContent(activeSection);
        setContent(sectionContent);
      } catch (err) {
        setError('Failed to load content');
        console.error('Error loading content:', err);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [activeSection]);

  useEffect(() => {
    const currentIndex = flutterSections.findIndex(s => s.id === activeSection);
    if (currentIndex < flutterSections.length - 1) {
      const nextSection = flutterSections[currentIndex + 1];
      preloadFlutterSection(nextSection.id);
    }
  }, [activeSection]);

  const fallbackContent = {
    description: "Flutter is Google's UI toolkit for building natively compiled applications from a single codebase — mobile, web, and desktop. Written in Dart, it gives you fast development with hot reload, expressive UIs, and native performance.",
    benefits: "One codebase targets iOS, Android, web and desktop. Dart is strongly typed and easy to pick up if you know JavaScript or Java. The widget-based model makes UI composition intuitive, and hot reload makes iteration fast. The ecosystem is mature and backed by Google.",
    difficulty: "Intermediate",
    topics: [
      { icon: "🧩", text: "StatelessWidget and StatefulWidget — the two building blocks of every Flutter UI" },
      { icon: "📐", text: "Layout with Row, Column, Stack, Container and Expanded" },
      { icon: "🔄", text: "State management from setState to ValueNotifier and InheritedWidget" },
      { icon: "🗺️", text: "Navigation with Navigator and go_router for deep linking" },
      { icon: "⏳", text: "Futures, Streams, FutureBuilder and StreamBuilder for async UI" },
      { icon: "🌐", text: "HTTP requests, JSON parsing and error handling" },
      { icon: "📝", text: "Forms, validation and text input patterns" },
    ],
    usefulLinks: [
      { name: "Flutter Docs", url: "https://docs.flutter.dev/" },
      { name: "Dart Language Tour", url: "https://dart.dev/language" },
      { name: "pub.dev — Package Registry", url: "https://pub.dev/" },
      { name: "Flutter Widget Catalog", url: "https://docs.flutter.dev/ui/widgets" },
      { name: "go_router", url: "https://pub.dev/packages/go_router" },
    ]
  };

  return (
    <PageLayout
      language="dart"
      title="Flutter & Dart"
      icon="🐦"
      sections={flutterSections}
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

export default FlutterPage;
