import { Section } from '../types/index';

export const stringSections: Section[] = [
  { id: 'basics', title: 'Basic Methods', icon: '📝' },
  { id: 'search', title: 'Search & Replace', icon: '🔍' },
  { id: 'formatting', title: 'Text Formatting', icon: '✨' },
  { id: 'splitting', title: 'Splitting & Joining', icon: '✂️' },
  { id: 'case', title: 'Case Conversion', icon: '🔄' },
  { id: 'validation', title: 'Validation', icon: '✅' },
  { id: 'encoding', title: 'Encoding & Decoding', icon: '🔐' },
  { id: 'regex', title: 'Regular Expressions', icon: '🎯' },
  { id: 'advanced', title: 'Advanced Patterns', icon: '🚀' },
  { id: 'performance', title: 'Performance Tips', icon: '⚡' },
  { id: 'best-practices', title: 'Best Practices', icon: '⭐' }
];

// Lazy loading function for content
export const loadStringContent = async (sectionId: string) => {
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