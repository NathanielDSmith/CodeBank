const functionsContent = [
  {
    title: 'How to create functions',
    examples: [
      {
        title: 'Function declaration (traditional way)',
        code: 'function greet(name) {\n  return `Hello, ${name}!`;\n}\n\n// Call the function\nconst message = greet("Alice");\nconsole.log(message); // "Hello, Alice!"'
      },
      {
        title: 'Arrow function (modern way)',
        code: 'const greet = (name) => {\n  return `Hello, ${name}!`;\n};\n\n// Or shorter version\nconst greetShort = name => `Hello, ${name}!`;'
      },
      {
        title: 'Arrow function with multiple parameters',
        code: 'const add = (a, b) => a + b;\nconst multiply = (x, y) => x * y;\n\nconsole.log(add(5, 3)); // 8\nconsole.log(multiply(4, 7)); // 28'
      }
    ]
  },
  {
    title: 'Default parameters',
    examples: [
      {
        title: 'Single default parameter',
        code: 'function greet(name = "Guest") {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet("Alice")); // "Hello, Alice!"\nconsole.log(greet()); // "Hello, Guest!"'
      },
      {
        title: 'Multiple default parameters',
        code: 'function createUser(name = "Anonymous", age = 18, email = "") {\n  return { name, age, email };\n}\n\nconsole.log(createUser("John", 25, "john@email.com"));\nconsole.log(createUser()); // Uses all defaults'
      }
    ]
  }
];

export default functionsContent; 