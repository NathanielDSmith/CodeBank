import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const usePageNavigation = (defaultSection: string, sections: any[] = []) => {
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