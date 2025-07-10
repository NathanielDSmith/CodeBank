import { Section } from '../types/index';

export const arraySections: Section[] = [
  { id: 'basics', title: 'Basic Methods', icon: '📋' },
  { id: 'filtering', title: 'Filtering & Sorting', icon: '🔍' },
  { id: 'mapping', title: 'Mapping & Reducing', icon: '🔄' },
  { id: 'adding', title: 'Adding & Removing', icon: '➕' },
  { id: 'searching', title: 'Searching', icon: '🔎' },
  { id: 'transforming', title: 'Transforming', icon: '✨' },
  { id: 'flattening', title: 'Flattening & Grouping', icon: '📦' },
  { id: 'chunking', title: 'Chunking & Partitioning', icon: '📊' },
  { id: 'advanced', title: 'Advanced Patterns', icon: '🚀' },
  { id: 'performance', title: 'Performance Tips', icon: '⚡' },
  { id: 'best-practices', title: 'Best Practices', icon: '⭐' }
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