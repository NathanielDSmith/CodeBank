import { Section } from '../types/index';

export const csharpSections: Section[] = [
  { id: 'overview', title: 'Overview', icon: '📖' },
  { id: 'basics', title: 'Basics', icon: '📦' },
  { id: 'linq', title: 'LINQ', icon: '🔍' },
  { id: 'async', title: 'Async/Await', icon: '⏱️' },
  { id: 'web', title: 'ASP.NET Core', icon: '🌐' },
  { id: 'unity', title: 'Unity', icon: '🎮' },
  { id: 'patterns', title: 'Design Patterns', icon: '🏗️' },
  { id: 'advanced', title: 'Advanced', icon: '⚡' }
];

// Lazy loading function for content
export const loadCSharpContent = async (sectionId: string) => {
  // Return null for overview to show fallback content
  if (sectionId === 'overview') {
    return null;
  }
  
  try {
    const module = await import(`./csharp/${sectionId}.ts`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load content for section: ${sectionId}`, error);
    return null;
  }
};

// Preload function for better UX
export const preloadCSharpSection = (sectionId: string) => {
  import(`./csharp/${sectionId}.ts`);
}; 