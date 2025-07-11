import { Section } from '../types/index';

export const typescriptSections: Section[] = [
  { id: 'overview', title: 'Overview', icon: '📖' },
  { id: 'basics', title: 'Basics', icon: 'TS' },
  { id: 'types', title: 'Types', icon: 'T' },
  { id: 'interfaces', title: 'Interfaces', icon: 'I' },
  { id: 'functions', title: 'Functions', icon: 'F' },
  { id: 'classes', title: 'Classes', icon: 'C' },
  { id: 'generics', title: 'Generics', icon: 'G' },
  { id: 'enums', title: 'Enums', icon: 'E' },
  { id: 'modules', title: 'Modules', icon: 'M' },
  { id: 'advanced', title: 'Advanced Types', icon: 'A' },
  { id: 'utility', title: 'Utility Types', icon: 'U' },
  { id: 'decorators', title: 'Decorators', icon: 'D' },
  { id: 'best-practices', title: 'Best Practices', icon: 'B' }
];

// Lazy loading function for content
export const loadTypeScriptContent = async (sectionId: string) => {
  // Return null for overview to show fallback content
  if (sectionId === 'overview') {
    return null;
  }
  
  try {
    const module = await import(`./typescript/${sectionId}.ts`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load content for section: ${sectionId}`, error);
    return null;
  }
};

// Preload function for better UX
export const preloadTypeScriptSection = (sectionId: string) => {
  import(`./typescript/${sectionId}.ts`);
}; 