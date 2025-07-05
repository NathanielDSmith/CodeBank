import React from 'react';

export interface Section {
  id: string;
  title: string;
  icon: string;
}

export interface CodeExample {
  title: string;
  code: string;
}

export interface ContentSection {
  title: string;
  examples: CodeExample[];
}

export interface PageContent {
  [key: string]: ContentSection[];
}

export interface LanguageTopic {
  id: number;
  title: string;
  description: string;
  category: string;
  topics: string[];
  icon: string;
  color: string;
}

export interface SidePanelProps {
  sections: Section[];
  activeSection: string;
  searchTerm: string;
  onSectionChange: (sectionId: string) => void;
  onSearchChange: (searchTerm: string) => void;
}

export interface CodeBlockProps {
  code: string;
  language?: string;
}

export interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

export interface PageHeaderProps {
  title: string;
  icon: string;
} 