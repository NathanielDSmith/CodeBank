import { Section } from '../types/index';

export const htmlSections: Section[] = [
  { id: 'semantic', title: 'Semantic Elements', icon: '🏗️' },
  { id: 'forms', title: 'Forms & Inputs', icon: '📝' },
  { id: 'media', title: 'Images & Media', icon: '🖼️' },
  { id: 'navigation', title: 'Links & Navigation', icon: '🔗' },
  { id: 'tables', title: 'Tables & Lists', icon: '📊' },
  { id: 'meta', title: 'Meta Tags', icon: '🏷️' },
  { id: 'accessibility', title: 'Accessibility', icon: '♿' },
  { id: 'seo', title: 'SEO Basics', icon: '🔍' },
  { id: 'structure', title: 'Document Structure', icon: '📄' },
  { id: 'validation', title: 'HTML Validation', icon: '✅' },
  { id: 'best-practices', title: 'Best Practices', icon: '⭐' },
  { id: 'templates', title: 'Common Templates', icon: '📋' }
];

// Lazy loading function for content
export const loadHtmlContent = async (sectionId: string) => {
  try {
    const module = await import(`./html/${sectionId}.ts`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load content for section: ${sectionId}`, error);
    return null;
  }
};

// Preload function for better UX
export const preloadHtmlSection = (sectionId: string) => {
  import(`./html/${sectionId}.ts`);
}; 