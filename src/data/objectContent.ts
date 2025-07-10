import { Section } from '../types/index';

export const objectSections: Section[] = [
  { id: 'basics', title: 'Basics', icon: '{}' },
  { id: 'properties', title: 'Properties', icon: 'P' },
  { id: 'methods', title: 'Methods', icon: 'M' },
  { id: 'destructuring', title: 'Destructuring', icon: 'D' },
  { id: 'spread', title: 'Spread', icon: 'S' }
];

// Lazy loading function for object content
export const loadObjectContent = async (sectionId: string): Promise<any[]> => {
  try {
    const module = await import(`./object/${sectionId}.ts`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load object content for section: ${sectionId}`, error);
    return [];
  }
};

// Preload function for better UX
export const preloadObjectSection = (sectionId: string): void => {
  import(`./object/${sectionId}.ts`).catch(() => {
    // Silently fail for preloading
  });
}; 