import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Section } from '../types/index';

export const usePageNavigation = (defaultSection: string, sections: Section[] = []) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Extract section from URL or use default
  const getSectionFromUrl = () => {
    const pathParts = location.pathname.split('/');
    const lastPart = pathParts[pathParts.length - 1];
    
    // If the last part is empty or if we're on a main route (like /typescript), use default
    if (!lastPart || pathParts.length === 2) {
      return defaultSection;
    }
    
    // Check if the last part is actually a valid section ID
    const isValidSection = sections.some(section => section.id === lastPart);
    return isValidSection ? lastPart : defaultSection;
  };

  const [activeSection, setActiveSection] = useState(getSectionFromUrl());

  // Auto-redirect to first section if no section is specified
  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const isOnMainRoute = pathParts.length === 2;
    
    if (isOnMainRoute && sections.length > 0) {
      const firstSection = sections[0];
      if (firstSection) {
        navigate(`${location.pathname}/${firstSection.id}`, { replace: true });
      }
    }
  }, [location.pathname, sections, navigate]);

  // Update active section when URL changes
  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const lastPart = pathParts[pathParts.length - 1];
    const sectionFromUrl =
      lastPart && pathParts.length > 2 && sections.some(s => s.id === lastPart)
        ? lastPart
        : defaultSection;
    if (sectionFromUrl !== activeSection) {
      setActiveSection(sectionFromUrl);
    }
  }, [location.pathname, sections, defaultSection, activeSection]);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    // Always derive basePath from the first path segment so it stays stable
    // regardless of how many sub-segments the current URL has.
    const basePath = '/' + location.pathname.split('/').filter(Boolean)[0];
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