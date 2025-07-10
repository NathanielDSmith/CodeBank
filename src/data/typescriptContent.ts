import { Section } from '../types/index';

export const typescriptSections: Section[] = [
  { id: 'basics', title: 'Basics', icon: '📚' },
  { id: 'types', title: 'Types', icon: '🏷️' },
  { id: 'interfaces', title: 'Interfaces', icon: '📋' },
  { id: 'functions', title: 'Functions', icon: '⚙️' },
  { id: 'classes', title: 'Classes', icon: '🏗️' },
  { id: 'generics', title: 'Generics', icon: '🔧' },
  { id: 'enums', title: 'Enums', icon: '📊' },
  { id: 'modules', title: 'Modules', icon: '📦' },
  { id: 'advanced', title: 'Advanced Types', icon: '🎯' },
  { id: 'utility', title: 'Utility Types', icon: '🛠️' },
  { id: 'decorators', title: 'Decorators', icon: '🎨' },
  { id: 'best-practices', title: 'Best Practices', icon: '⭐' }
];

// Lazy loading function for content
export const loadTypeScriptContent = async (sectionId: string) => {
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