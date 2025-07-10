import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const usePageNavigation = (defaultSection: string) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Extract section from URL or use default
  const getSectionFromUrl = () => {
    const pathParts = location.pathname.split('/');
    return pathParts[pathParts.length - 1] || defaultSection;
  };

  const [activeSection, setActiveSection] = useState(getSectionFromUrl());

  // Update active section when URL changes
  useEffect(() => {
    const sectionFromUrl = getSectionFromUrl();
    if (sectionFromUrl !== activeSection) {
      setActiveSection(sectionFromUrl);
    }
  }, [location.pathname]);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    // Update URL to reflect the current section
    const currentPath = location.pathname;
    const basePath = currentPath.split('/').slice(0, -1).join('/') || currentPath;
    navigate(`${basePath}/${sectionId}`, { replace: true });
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