import { useState } from 'react';

export const usePageNavigation = (defaultSection: string) => {
  const [activeSection, setActiveSection] = useState(defaultSection);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  return {
    activeSection,
    searchTerm,
    handleSectionChange,
    handleSearchChange
  };
}; 