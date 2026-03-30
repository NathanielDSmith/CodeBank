import { Section } from '../types/index';

export const flutterSections: Section[] = [
  { id: 'overview',    title: 'Overview',         icon: '📖' },
  { id: 'widgets',     title: 'Widgets',           icon: '🧩' },
  { id: 'layout',      title: 'Layout',            icon: '📐' },
  { id: 'state',       title: 'State Management',  icon: '🔄' },
  { id: 'navigation',  title: 'Navigation',        icon: '🗺️' },
  { id: 'async',       title: 'Async & Futures',   icon: '⏳' },
  { id: 'http',        title: 'HTTP & APIs',        icon: '🌐' },
  { id: 'forms',       title: 'Forms & Input',     icon: '📝' },
];

export const loadFlutterContent = async (sectionId: string) => {
  if (sectionId === 'overview') return null;

  try {
    const module = await import(`./flutter/${sectionId}.ts`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load content for section: ${sectionId}`, error);
    return null;
  }
};

export const preloadFlutterSection = (sectionId: string) => {
  import(`./flutter/${sectionId}.ts`);
};
