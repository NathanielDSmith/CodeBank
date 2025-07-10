import { Section } from '../types/index';

export const reactSections: Section[] = [
  { id: 'components', title: 'Components', icon: '🧩' },
  { id: 'state', title: 'State Management', icon: '⚡' },
  { id: 'props', title: 'Props & Data Flow', icon: '📤' },
  { id: 'hooks', title: 'Hooks', icon: '🎣' },
  { id: 'forms', title: 'Forms & Inputs', icon: '📝' },
  { id: 'api', title: 'API Calls', icon: '🌐' },
  { id: 'routing', title: 'Routing', icon: '🛣️' },
  { id: 'context', title: 'Context API', icon: '🌍' },
  { id: 'effects', title: 'Effects & Lifecycle', icon: '⏱️' },
  { id: 'events', title: 'Event Handling', icon: '🎯' },
  { id: 'performance', title: 'Performance', icon: '⚡' },
  { id: 'testing', title: 'Testing', icon: '🧪' }
];

// Lazy loading function for content
export const loadReactContent = async (sectionId: string) => {
  try {
    const module = await import(`./react/${sectionId}.ts`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load content for section: ${sectionId}`, error);
    return null;
  }
};

// Preload function for better UX
export const preloadReactSection = (sectionId: string) => {
  import(`./react/${sectionId}.ts`);
}; 