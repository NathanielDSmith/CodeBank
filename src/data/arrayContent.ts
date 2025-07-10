import { Section } from '../types/index';

export const arraySections: Section[] = [
  { id: 'basics', title: 'Basics', icon: '[]' },
  { id: 'adding', title: 'Adding Elements', icon: '+' },
  { id: 'removing', title: 'Removing Elements', icon: '-' },
  { id: 'searching', title: 'Searching', icon: '?' },
  { id: 'filtering', title: 'Filtering', icon: 'F' },
  { id: 'mapping', title: 'Mapping', icon: 'M' },
  { id: 'reducing', title: 'Reducing', icon: 'R' },
  { id: 'sorting', title: 'Sorting', icon: 'S' },
  { id: 'chunking', title: 'Chunking', icon: 'C' },
  { id: 'flattening', title: 'Flattening', icon: 'F' },
  { id: 'transforming', title: 'Transforming', icon: 'T' },
  { id: 'performance', title: 'Performance', icon: 'P' },
  { id: 'best-practices', title: 'Best Practices', icon: 'B' },
  { id: 'advanced', title: 'Advanced', icon: 'A' }
];

// Lazy loading function for content
export const loadArrayContent = async (sectionId: string) => {
  try {
    const module = await import(`./array/${sectionId}.ts`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load content for section: ${sectionId}`, error);
    return null;
  }
};

// Preload function for better UX
export const preloadArraySection = (sectionId: string) => {
  import(`./array/${sectionId}.ts`);
}; 