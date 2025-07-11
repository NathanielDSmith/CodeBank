import { Section } from '../types/index';

export const stringSections: Section[] = [
  { id: 'overview', title: 'Overview', icon: '📖' },
  { id: 'basics', title: 'Basics', icon: 'S' },
  { id: 'search', title: 'Searching', icon: '?' },
  { id: 'case', title: 'Case Conversion', icon: 'C' },
  { id: 'splitting', title: 'Splitting', icon: 'S' },
  { id: 'formatting', title: 'Formatting', icon: 'F' },
  { id: 'validation', title: 'Validation', icon: 'V' },
  { id: 'regex', title: 'Regular Expressions', icon: 'R' },
  { id: 'encoding', title: 'Encoding', icon: 'E' },
  { id: 'advanced', title: 'Advanced', icon: 'A' },
  { id: 'performance', title: 'Performance', icon: 'P' },
  { id: 'best-practices', title: 'Best Practices', icon: 'B' }
];

// Lazy loading function for content
export const loadStringContent = async (sectionId: string) => {
  // Return null for overview to show fallback content
  if (sectionId === 'overview') {
    return null;
  }
  
  try {
    const module = await import(`./string/${sectionId}.ts`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load content for section: ${sectionId}`, error);
    return null;
  }
};

// Preload function for better UX
export const preloadStringSection = (sectionId: string) => {
  import(`./string/${sectionId}.ts`);
}; 