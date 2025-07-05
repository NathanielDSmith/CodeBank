import { Section, PageContent } from '../types/index';

export const cssSections: Section[] = [
  { id: 'centering', title: 'Centering', icon: '🎯' },
  { id: 'flexbox', title: 'Flexbox', icon: '📐' },
  { id: 'grid', title: 'CSS Grid', icon: '🔲' },
  { id: 'positioning', title: 'Positioning', icon: '📍' },
  { id: 'responsive', title: 'Responsive Design', icon: '📱' },
  { id: 'animations', title: 'Animations', icon: '✨' },
  { id: 'spacing', title: 'Spacing & Layout', icon: '📏' },
  { id: 'typography', title: 'Typography', icon: '📝' },
  { id: 'colors', title: 'Colors & Themes', icon: '🎨' },
  { id: 'borders', title: 'Borders & Shadows', icon: '🖼️' },
  { id: 'media', title: 'Media Queries', icon: '📺' },
  { id: 'utilities', title: 'Utility Classes', icon: '🛠️' }
];

export const cssContent: PageContent = {
  centering: [
    {
      title: 'How to center things',
      examples: [
        {
          title: 'Flexbox Centering',
          code: '.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}'
        },
        {
          title: 'Grid Centering',
          code: '.container {\n  display: grid;\n  place-items: center;\n}'
        },
        {
          title: 'Text Centering',
          code: '.text-center {\n  text-align: center;\n}'
        }
      ]
    },
    {
      title: 'How to center vertically',
      examples: [
        {
          title: 'Using Flexbox',
          code: '.container {\n  display: flex;\n  align-items: center;\n  min-height: 100vh;\n}'
        },
        {
          title: 'Using Grid',
          code: '.container {\n  display: grid;\n  align-items: center;\n  min-height: 100vh;\n}'
        }
      ]
    }
  ],
  flexbox: [
    {
      title: 'How to make responsive grid',
      examples: [
        {
          title: 'Basic Flexbox Grid',
          code: '.grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}'
        },
        {
          title: 'Responsive Flex Items',
          code: '.item {\n  flex: 1;\n  min-width: 200px;\n}'
        }
      ]
    },
    {
      title: 'How to make sticky header',
      examples: [
        {
          title: 'Sticky Header',
          code: '.header {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}'
        }
      ]
    }
  ]
}; 