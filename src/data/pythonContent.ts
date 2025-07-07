import { Section, PageContent } from '../types/index';

export const pythonSections: Section[] = [
  { id: 'basics', title: 'Basics', icon: '📚' },
  { id: 'variables', title: 'Variables', icon: '📦' },
  { id: 'functions', title: 'Functions', icon: '⚙️' },
  { id: 'lists', title: 'Lists', icon: '📋' },
  { id: 'dicts', title: 'Dictionaries', icon: '📖' },
  { id: 'strings', title: 'Strings', icon: '📝' },
  { id: 'loops', title: 'Loops', icon: '🔄' },
  { id: 'files', title: 'File I/O', icon: '📁' },
  { id: 'errors', title: 'Error Handling', icon: '⚠️' }
];

export const pythonContent: PageContent = {
  basics: [
    {
      title: 'Getting Started',
      examples: [
        { title: 'Hello World', code: 'print("Hello, World!")' },
        { title: 'Comments', code: '# This is a comment\n"""This is a docstring"""' }
      ]
    }
  ],
  variables: [
    {
      title: 'How to declare variables',
      examples: [
        { title: 'Assign a value', code: 'x = 5\nname = "Alice"' },
        { title: 'Multiple assignment', code: 'a, b = 1, 2' }
      ]
    }
  ],
  functions: [
    {
      title: 'How to define a function',
      examples: [
        { title: 'Basic function', code: 'def greet(name):\n    return f"Hello, {name}!"' },
        { title: 'Default argument', code: 'def add(a, b=0):\n    return a + b' }
      ]
    }
  ],
  lists: [
    {
      title: 'Working with lists',
      examples: [
        { title: 'Create a list', code: 'numbers = [1, 2, 3, 4, 5]' },
        { title: 'List methods', code: 'numbers.append(6)\nnumbers.remove(1)' }
      ]
    }
  ],
  dicts: [
    {
      title: 'Working with dictionaries',
      examples: [
        { title: 'Create a dict', code: 'person = {"name": "John", "age": 30}' },
        { title: 'Access values', code: 'name = person["name"]\nage = person.get("age", 0)' }
      ]
    }
  ],
  strings: [
    {
      title: 'String operations',
      examples: [
        { title: 'String methods', code: 'text = "Hello World"\nuppercase = text.upper()' },
        { title: 'String formatting', code: 'name = "Alice"\ngreeting = f"Hello, {name}!"' }
      ]
    }
  ],
  loops: [
    {
      title: 'Looping constructs',
      examples: [
        { title: 'For loop', code: 'for i in range(5):\n    print(i)' },
        { title: 'While loop', code: 'count = 0\nwhile count < 5:\n    print(count)\n    count += 1' }
      ]
    }
  ],
  files: [
    {
      title: 'File operations',
      examples: [
        { title: 'Read a file', code: 'with open("file.txt", "r") as f:\n    content = f.read()' },
        { title: 'Write to file', code: 'with open("output.txt", "w") as f:\n    f.write("Hello World")' }
      ]
    }
  ],
  errors: [
    {
      title: 'Error handling',
      examples: [
        { title: 'Try-except', code: 'try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero")' },
        { title: 'Finally block', code: 'try:\n    file = open("data.txt")\nfinally:\n    file.close()' }
      ]
    }
  ]
}; 