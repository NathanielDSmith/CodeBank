import { Section } from '../types/index';

export const cssSections: Section[] = [
  { id: 'centering', title: 'Centering', icon: '🎯' },
  { id: 'flexbox', title: 'Flexbox', icon: '📐' },
  { id: 'grid', title: 'CSS Grid', icon: '🔲' },
  { id: 'positioning', title: 'Positioning', icon: '📍' },
  { id: 'responsive', title: 'Responsive Design', icon: '📱' },
  { id: 'animations', title: 'Animations', icon: '✨' },
  { id: 'spacing', title: 'Spacing & Layout', icon: '📏' },
  { id: 'typography', title: 'Typography', icon: '📝' },
  { id: 'colors', title: 'Colors & Themes', icon: '🎨' },
  { id: 'borders', title: 'Borders & Shadows', icon: '🖼️' },
  { id: 'media', title: 'Media Queries', icon: '📺' },
  { id: 'utilities', title: 'Utility Classes', icon: '🛠️' }
];

// Lazy loading function for content
export const loadCssContent = async (sectionId: string) => {
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