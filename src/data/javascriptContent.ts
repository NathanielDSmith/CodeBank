import { Section } from '../types/index';

export const javascriptSections: Section[] = [
  { id: 'overview', title: 'Overview', icon: '📖' },
  { id: 'variables', title: 'Variables', icon: '📦' },
  { id: 'functions', title: 'Functions', icon: '⚙️' },
  { id: 'arrays', title: 'Arrays', icon: '📋' },
  { id: 'objects', title: 'Objects', icon: '📦' },
  { id: 'strings', title: 'Strings', icon: '📝' },
  { id: 'conditionals', title: 'Conditionals', icon: '🔀' },
  { id: 'loops', title: 'Loops', icon: '🔄' },
  { id: 'events', title: 'Events', icon: '🎯' },
  { id: 'async', title: 'Async/Await', icon: '⏱️' },
  { id: 'dom', title: 'DOM Manipulation', icon: '🌳' },
  { id: 'errors', title: 'Error Handling', icon: '⚠️' },
  { id: 'modules', title: 'Modules', icon: '📦' }
];

// Lazy loading function for content
export const loadJavaScriptContent = async (sectionId: string) => {
  // Return null for overview to show fallback content
  if (sectionId === 'overview') {
    return null;
  }
  
  try {
    const module = await import(`./javascript/${sectionId}.ts`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load content for section: ${sectionId}`, error);
    return null;
  }
};

// Preload function for better UX
export const preloadJavaScriptSection = (sectionId: string) => {
  import(`./javascript/${sectionId}.ts`);
}; 