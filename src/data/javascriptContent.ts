import { Section, PageContent } from '../types/index';

export const javascriptSections: Section[] = [
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

export const javascriptContent: PageContent = {
  variables: [
    {
      title: 'How to declare variables',
      examples: [
        {
          title: 'Using let',
          code: 'let name = "John";\nlet age = 25;'
        },
        {
          title: 'Using const',
          code: 'const PI = 3.14159;\nconst API_URL = "https://api.example.com";'
        },
        {
          title: 'Using var (legacy)',
          code: 'var oldWay = "not recommended";'
        }
      ]
    },
    {
      title: 'How to use template literals',
      examples: [
        {
          title: 'Basic template literal',
          code: 'const name = "John";\nconst greeting = "Hello, " + name + "!";'
        },
        {
          title: 'Multi-line template literal',
          code: 'const message = "\\n  Line 1\\n  Line 2\\n  Line 3\\n";'
        }
      ]
    }
  ],
  functions: [
    {
      title: 'How to create functions',
      examples: [
        {
          title: 'Function declaration',
          code: 'function greet(name) {\n  return "Hello, " + name + "!";\n}'
        },
        {
          title: 'Arrow function',
          code: 'const greet = (name) => {\n  return "Hello, " + name + "!";\n};'
        },
        {
          title: 'Arrow function (shorthand)',
          code: 'const add = (a, b) => a + b;'
        }
      ]
    },
    {
      title: 'How to use default parameters',
      examples: [
        {
          title: 'Default parameter',
          code: 'function greet(name = "Guest") {\n  return "Hello, " + name + "!";\n}'
        },
        {
          title: 'Multiple default parameters',
          code: 'function createUser(name = "Anonymous", age = 18, email = "") {\n  return { name, age, email };\n}'
        }
      ]
    }
  ]
}; 