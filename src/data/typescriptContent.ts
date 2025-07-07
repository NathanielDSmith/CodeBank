import { Section, PageContent } from '../types/index';

export const typescriptSections: Section[] = [
  { id: 'basics', title: 'Basics', icon: '📚' },
  { id: 'types', title: 'Types', icon: '🏷️' },
  { id: 'interfaces', title: 'Interfaces', icon: '📋' },
  { id: 'functions', title: 'Functions', icon: '⚙️' },
  { id: 'classes', title: 'Classes', icon: '🏗️' },
  { id: 'generics', title: 'Generics', icon: '🔧' },
  { id: 'enums', title: 'Enums', icon: '📊' },
  { id: 'modules', title: 'Modules', icon: '📦' }
];

export const typescriptContent: PageContent = {
  basics: [
    {
      title: 'Getting Started',
      examples: [
        { title: 'Type annotations', code: 'let name: string = "John";\nlet age: number = 30;' },
        { title: 'Type inference', code: 'let message = "Hello"; // TypeScript infers string' }
      ]
    }
  ],
  types: [
    {
      title: 'Basic types',
      examples: [
        { title: 'Primitive types', code: 'let str: string = "hello";\nlet num: number = 42;\nlet bool: boolean = true;' },
        { title: 'Arrays', code: 'let numbers: number[] = [1, 2, 3];\nlet names: Array<string> = ["Alice", "Bob"];' }
      ]
    }
  ],
  interfaces: [
    {
      title: 'Defining interfaces',
      examples: [
        { title: 'Basic interface', code: 'interface Person {\n  name: string;\n  age: number;\n}' },
        { title: 'Optional properties', code: 'interface User {\n  id: number;\n  name: string;\n  email?: string;\n}' }
      ]
    }
  ],
  functions: [
    {
      title: 'Typed functions',
      examples: [
        { title: 'Function with types', code: 'function add(a: number, b: number): number {\n  return a + b;\n}' },
        { title: 'Arrow functions', code: 'const multiply = (x: number, y: number): number => x * y;' }
      ]
    }
  ],
  classes: [
    {
      title: 'Classes with types',
      examples: [
        { title: 'Basic class', code: 'class Animal {\n  private name: string;\n  constructor(name: string) {\n    this.name = name;\n  }\n}' },
        { title: 'Inheritance', code: 'class Dog extends Animal {\n  bark(): void {\n    console.log("Woof!");\n  }\n}' }
      ]
    }
  ],
  generics: [
    {
      title: 'Generic types',
      examples: [
        { title: 'Generic function', code: 'function identity<T>(arg: T): T {\n  return arg;\n}' },
        { title: 'Generic interface', code: 'interface Container<T> {\n  value: T;\n  getValue(): T;\n}' }
      ]
    }
  ],
  enums: [
    {
      title: 'Enumerations',
      examples: [
        { title: 'Basic enum', code: 'enum Color {\n  Red,\n  Green,\n  Blue\n}' },
        { title: 'String enum', code: 'enum Direction {\n  Up = "UP",\n  Down = "DOWN"\n}' }
      ]
    }
  ],
  modules: [
    {
      title: 'Module system',
      examples: [
        { title: 'Export', code: 'export interface User {\n  id: number;\n  name: string;\n}' },
        { title: 'Import', code: 'import { User } from "./types";\nimport * as utils from "./utils";' }
      ]
    }
  ]
}; 