import { Section, PageContent } from '../types/index';

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

export const reactContent: PageContent = {
  components: [
    {
      title: 'How to create a component',
      examples: [
        {
          title: 'Functional Component',
          code: 'function MyComponent() {\n  return <div>Hello World</div>;\n}'
        },
        {
          title: 'Arrow Function Component',
          code: 'const MyComponent = () => {\n  return <div>Hello World</div>;\n};'
        }
      ]
    },
    {
      title: 'How to export/import components',
      examples: [
        {
          title: 'Default Export',
          code: 'export default MyComponent;'
        },
        {
          title: 'Named Export',
          code: 'export { MyComponent };'
        }
      ]
    }
  ],
  state: [
    {
      title: 'How to add state to component',
      examples: [
        {
          title: 'useState Hook',
          code: 'const [count, setCount] = useState(0);'
        },
        {
          title: 'Multiple State Variables',
          code: 'const [name, setName] = useState("");\nconst [age, setAge] = useState(0);'
        }
      ]
    },
    {
      title: 'How to update state',
      examples: [
        {
          title: 'Direct Update',
          code: 'setCount(count + 1);'
        },
        {
          title: 'Functional Update',
          code: 'setCount(prevCount => prevCount + 1);'
        }
      ]
    }
  ]
}; 