import { Section } from '../types/index';

export const cssSections: Section[] = [
  { id: 'overview', title: 'Overview', icon: '📖' },
  { id: 'flexbox', title: 'Flexbox', icon: 'F' },
  { id: 'grid', title: 'CSS Grid', icon: 'G' },
  { id: 'positioning', title: 'Positioning', icon: 'P' },
  { id: 'centering', title: 'Centering', icon: 'C' },
  { id: 'responsive', title: 'Responsive', icon: 'R' },
  { id: 'spacing', title: 'Spacing', icon: 'S' },
  { id: 'typography', title: 'Typography', icon: 'T' },
  { id: 'colors', title: 'Colors', icon: 'C' },
  { id: 'borders', title: 'Borders', icon: 'B' },
  { id: 'animations', title: 'Animations', icon: 'A' },
  { id: 'media', title: 'Media Queries', icon: 'M' },
  { id: 'utilities', title: 'Utilities', icon: 'U' }
];

// Lazy loading function for content
export const loadCssContent = async (sectionId: string) => {
  // Return null for overview to show fallback content
  if (sectionId === 'overview') {
    return null;
  }
  
  try {
    const module = await import(`./css/${sectionId}.ts`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load content for section: ${sectionId}`, error);
    return null;
  }
};

// Preload function for better UX
export const preloadCssSection = (sectionId: string) => {
  import(`./css/${sectionId}.ts`);
}; 