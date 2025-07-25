const basicsContent = [
  {
    title: 'Getting Started with TypeScript',
    examples: [
      {
        title: 'Type annotations vs JavaScript',
        code: '// JavaScript (no types)\nlet name = "John";\nlet age = 30;\n\n// TypeScript (with type annotations)\nlet name: string = "John";\nlet age: number = 30;\n\n// TypeScript can also infer types\nlet message = "Hello"; // TypeScript knows this is a string\nlet count = 42; // TypeScript knows this is a number'
      },
      {
        title: 'Basic type annotations',
        code: '// String type\nlet firstName: string = "Alice";\nlet lastName: string = "Smith";\n\n// Number type\nlet age: number = 25;\nlet temperature: number = 98.6;\n\n// Boolean type\nlet isActive: boolean = true;\nlet isLoggedIn: boolean = false;\n\n// Any type (use sparingly)\nlet dynamicValue: any = "This can be anything";\ndynamicValue = 42; // OK\ndynamicValue = true; // Also OK'
      }
    ]
  },
  {
    title: 'Type inference and best practices',
    examples: [
      {
        title: 'Let TypeScript infer types when possible',
        code: '// Good - let TypeScript infer the type\nlet message = "Hello World"; // TypeScript infers string\nlet numbers = [1, 2, 3, 4, 5]; // TypeScript infers number[]\nlet isEnabled = true; // TypeScript infers boolean\n\n// Only add type annotations when needed\nlet userInput: string; // We don\'t know the value yet\nuserInput = "User entered this";\n\n// Or when you want to be explicit\nlet apiResponse: string = "JSON response from API";'
      },
      {
        title: 'Type annotations for function parameters',
        code: '// Function with type annotations\nfunction greet(name: string, age: number): string {\n  return "Hello " + name + ", you are " + age + " years old!";\n}\n\n// Arrow function with types\nconst calculateArea = (width: number, height: number): number => {\n  return width * height;\n};\n\n// Function with optional parameter\nfunction createUser(name: string, email?: string): object {\n  return {\n    name,\n    email: email || "no-email@example.com"\n  };\n}'
      }
    ]
  }
];

export default basicsContent; 