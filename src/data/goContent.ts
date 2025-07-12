import { Section } from '../types/index';

export const goSections: Section[] = [
  { id: 'overview', title: 'Overview', icon: '📖' },
  { id: 'basics', title: 'Basics', icon: '📦' },
  { id: 'goroutines', title: 'Goroutines', icon: '⚡' },
  { id: 'channels', title: 'Channels', icon: '🔗' },
  { id: 'web', title: 'Web Servers', icon: '🌐' },
  { id: 'structs', title: 'Structs & Interfaces', icon: '🏗️' },
  { id: 'packages', title: 'Packages', icon: '📦' },
  { id: 'advanced', title: 'Advanced', icon: '⚡' }
];

// Lazy loading function for content
export const loadGoContent = async (sectionId: string) => {
  // Return null for overview to show fallback content
  if (sectionId === 'overview') {
    return null;
  }
  
  try {
    const module = await import(`./go/${sectionId}.ts`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load content for section: ${sectionId}`, error);
    return null;
  }
};

// Preload function for better UX
export const preloadGoSection = (sectionId: string) => {
  import(`./go/${sectionId}.ts`);
}; 